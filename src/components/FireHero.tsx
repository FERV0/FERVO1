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
      setStage(5);
      if (onComplete) onComplete();
      return;
    }

    const timers = [
      setTimeout(() => setStage(1), 400),   // Sparks start appearing
      setTimeout(() => setStage(2), 1200),  // Logo starts forming
      setTimeout(() => setStage(3), 2000),  // Logo fully visible
      setTimeout(() => {
        setStage(4); // Fade out
        if (onComplete) {
          setTimeout(onComplete, 800);
        }
      }, 3500),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete, prefersReducedMotion]);

  if (stage >= 4) {
    return null;
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: stage >= 4 ? 0 : 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Cinematic fire sparks particles */}
      {stage >= 1 && (
        <div className="absolute inset-0">
          {[...Array(40)].map((_, i) => {
            const angle = (Math.PI * 2 * i) / 40;
            const distance = 200 + Math.random() * 300;
            const startX = Math.cos(angle) * distance;
            const startY = Math.sin(angle) * distance;
            
            return (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  left: "50%",
                  top: "50%",
                  width: Math.random() * 3 + 1 + "px",
                  height: Math.random() * 3 + 1 + "px",
                  background: i % 3 === 0 
                    ? "rgb(251, 191, 36)" 
                    : i % 3 === 1 
                    ? "rgb(249, 115, 22)" 
                    : "rgb(239, 68, 68)",
                  boxShadow: `0 0 ${Math.random() * 10 + 5}px currentColor`,
                }}
                initial={{ 
                  x: 0, 
                  y: 0, 
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  x: [0, startX * 0.3, startX * 0.7, startX],
                  y: [0, startY * 0.3, startY * 0.7, startY],
                  opacity: [0, 0.8, 0.6, 0],
                  scale: [0, 1.2, 1, 0.3],
                }}
                transition={{
                  duration: 1.5 + Math.random() * 1,
                  delay: Math.random() * 0.5,
                  repeat: stage < 3 ? Infinity : 0,
                  repeatDelay: Math.random() * 0.3,
                  ease: "easeOut",
                }}
              />
            );
          })}
        </div>
      )}

      {/* Ambient glow effect */}
      {stage >= 1 && (
        <>
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.15, 0.12, 0.15],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              background: "radial-gradient(circle at center, rgba(251, 191, 36, 0.3) 0%, rgba(249, 115, 22, 0.2) 30%, rgba(239, 68, 68, 0.1) 50%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
        </>
      )}

      {/* Logo with cinematic appearance */}
      {stage >= 2 && (
        <motion.div
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ 
            opacity: stage >= 3 ? 1 : 0.5,
            scale: 1,
            y: 0,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Main Logo Text */}
          <motion.h1
            className="text-8xl md:text-[12rem] font-bebas tracking-[0.15em] select-none"
            style={{
              background: "linear-gradient(180deg, #fbbf24 0%, #f97316 50%, #ef4444 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 30px rgba(251, 191, 36, 0.5))",
            }}
            animate={{
              filter: [
                "drop-shadow(0 0 20px rgba(251, 191, 36, 0.4))",
                "drop-shadow(0 0 35px rgba(249, 115, 22, 0.5))",
                "drop-shadow(0 0 20px rgba(251, 191, 36, 0.4))",
              ],
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            FERVO
          </motion.h1>

          {/* Subtitle */}
          {stage >= 3 && (
            <motion.p
              className="text-lg md:text-xl text-white/90 tracking-[0.3em] font-light mt-4 uppercase"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A FESTA QUE CONTAGIA
            </motion.p>
          )}
        </motion.div>
      )}

      {/* Floating embers around logo */}
      {stage >= 2 && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={`ember-${i}`}
              className="absolute rounded-full"
              style={{
                left: `${40 + Math.random() * 20}%`,
                top: `${35 + Math.random() * 30}%`,
                width: Math.random() * 4 + 2 + "px",
                height: Math.random() * 4 + 2 + "px",
                background: i % 2 === 0 ? "rgb(251, 191, 36)" : "rgb(249, 115, 22)",
                boxShadow: "0 0 10px currentColor",
              }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0],
                x: [(Math.random() - 0.5) * 150],
                y: [-50 - Math.random() * 100],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 1.5,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}
