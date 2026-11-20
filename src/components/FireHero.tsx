"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FireHeroProps {
  onComplete?: () => void;
}

export function FireHero({ onComplete }: FireHeroProps) {
  const [stage, setStage] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    // Skip animation if user prefers reduced motion
    if (prefersReducedMotion) {
      setStage(3);
      if (onComplete) onComplete();
      return;
    }

    const timers = [
      setTimeout(() => setStage(1), 200),   // Particles start
      setTimeout(() => setStage(2), 900),   // Logo appears
      setTimeout(() => {
        setStage(3); // Fade out
        if (onComplete) {
          setTimeout(onComplete, 600);
        }
      }, 3200),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete, prefersReducedMotion]);

  if (stage >= 3) {
    return null;
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: stage >= 3 ? 0 : 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Fire particles rising from bottom across entire screen - Like embers rising */}
      {stage >= 1 && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(60)].map((_, i) => {
            // Distribute particles naturally across entire screen width
            const xStart = Math.random() * 100;
            const delay = Math.random() * 0.8;
            const duration = 3 + Math.random() * 2;
            const size = Math.random() * 6 + 2;
            const drift = (Math.random() - 0.5) * 80; // Horizontal drift
            
            // Fire color palette
            const colors = [
              'rgb(251, 191, 36)',  // bright yellow
              'rgb(251, 146, 60)',  // lighter orange
              'rgb(249, 115, 22)',  // orange
              'rgb(234, 88, 12)',   // dark orange
              'rgb(239, 68, 68)',   // red
              'rgb(220, 38, 38)',   // dark red
            ];
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            return (
              <motion.div
                key={`ember-${i}`}
                className="absolute rounded-full blur-[1px]"
                style={{
                  left: `${xStart}%`,
                  bottom: '-20px',
                  width: `${size}px`,
                  height: `${size}px`,
                  background: color,
                  boxShadow: `0 0 ${size * 4}px ${color}, 0 0 ${size * 2}px ${color}`,
                }}
                initial={{ 
                  y: 0,
                  x: 0,
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  y: -(window.innerHeight + 100),
                  x: drift,
                  opacity: [0, 0.9, 0.7, 0.4, 0],
                  scale: [0, 1.2, 1, 0.8, 0.2],
                }}
                transition={{
                  duration: duration,
                  delay: delay,
                  ease: "easeOut",
                }}
              />
            );
          })}
        </div>
      )}

      {/* FERVO Brand: Flame Icon + Golden Text */}
      {stage >= 2 && (
        <motion.div
          className="relative z-10 flex items-center justify-center gap-4 px-8"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Flame Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            <svg
              width="60"
              height="80"
              viewBox="0 0 24 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-[0_0_20px_rgba(251,191,36,0.8)]"
            >
              <path
                d="M12 2C12 2 8 8 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 8 12 2 12 2Z"
                fill="url(#flameGradient1)"
              />
              <path
                d="M12 8C12 8 10 11 10 13C10 14.1046 10.8954 15 12 15C13.1046 15 14 14.1046 14 13C14 11 12 8 12 8Z"
                fill="url(#flameGradient2)"
              />
              <defs>
                <linearGradient id="flameGradient1" x1="12" y1="2" x2="12" y2="16" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FCD34D" />
                  <stop offset="0.5" stopColor="#F59E0B" />
                  <stop offset="1" stopColor="#DC2626" />
                </linearGradient>
                <linearGradient id="flameGradient2" x1="12" y1="8" x2="12" y2="15" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FEF3C7" />
                  <stop offset="1" stopColor="#FBBF24" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* FERVO Text - Golden Typography */}
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider select-none"
            style={{
              fontFamily: '"Playfair Display", "Georgia", serif',
              color: '#FBBF24',
              textShadow: `
                0 2px 4px rgba(0, 0, 0, 0.8),
                0 0 20px rgba(251, 191, 36, 0.6),
                0 0 40px rgba(245, 158, 11, 0.4),
                0 0 60px rgba(234, 88, 12, 0.3)
              `,
              fontWeight: 700,
              letterSpacing: '0.05em',
            }}
          >
            FERVO
          </motion.h1>
        </motion.div>
      )}
    </motion.div>
  );
}
