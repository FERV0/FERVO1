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
      setTimeout(() => setStage(1), 300),   // Particles start
      setTimeout(() => setStage(2), 800),   // Logo appears
      setTimeout(() => {
        setStage(3); // Fade out
        if (onComplete) {
          setTimeout(onComplete, 600);
        }
      }, 3000),
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
      {/* Fire particles rising from bottom across entire screen */}
      {stage >= 1 && (
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => {
            // Distribute particles across entire width
            const xPosition = (i % 10) * 10 + Math.random() * 8;
            const delay = Math.random() * 1.5;
            const duration = 2 + Math.random() * 2;
            const size = Math.random() * 4 + 2;
            
            // Color variation
            const colors = [
              'rgb(251, 191, 36)', // yellow
              'rgb(249, 115, 22)', // orange
              'rgb(239, 68, 68)',  // red
            ];
            const color = colors[i % 3];
            
            return (
              <motion.div
                key={`particle-${i}`}
                className="absolute rounded-full"
                style={{
                  left: `${xPosition}%`,
                  bottom: '-10px',
                  width: `${size}px`,
                  height: `${size}px`,
                  background: color,
                  boxShadow: `0 0 ${size * 3}px ${color}`,
                }}
                initial={{ 
                  y: 0,
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  y: -window.innerHeight - 100,
                  opacity: [0, 0.8, 0.6, 0],
                  scale: [0, 1, 1, 0.3],
                  x: [(Math.random() - 0.5) * 50],
                }}
                transition={{
                  duration: duration,
                  delay: delay,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            );
          })}
        </div>
      )}

      {/* Logo with official image */}
      {stage >= 2 && (
        <motion.div
          className="relative z-10 flex items-center justify-center px-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img
            src="/FERVO1/logo/photo_2026-11-20_18-42-51.jpg"
            alt="FERVO"
            className="w-64 md:w-96 h-auto"
            style={{
              filter: "drop-shadow(0 0 30px rgba(251, 191, 36, 0.6)) drop-shadow(0 0 60px rgba(249, 115, 22, 0.4))",
            }}
          />
        </motion.div>
      )}
    </motion.div>
  );
}
