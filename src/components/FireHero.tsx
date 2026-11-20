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

      {/* FERVO Official Logo PNG - Full transparency preserved */}
      {stage >= 2 && (
        <motion.div
          className="relative z-10 flex items-center justify-center px-8"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative w-[320px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px]">
            <img
              src="/FERVO1/logo/9358C51D-0434-4405-B0C5-090CA91CEDD8.png"
              alt="FERVO"
              className="w-full h-auto object-contain"
              style={{
                filter: 'drop-shadow(0 0 30px rgba(251, 191, 36, 0.4)) drop-shadow(0 0 50px rgba(249, 115, 22, 0.2))',
              }}
            />
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
