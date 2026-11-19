"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FireHeroProps {
  onComplete?: () => void;
}

export function FireHero({ onComplete }: FireHeroProps) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 500),   // Sparks appear
      setTimeout(() => setStage(2), 1500),  // Fire starts
      setTimeout(() => setStage(3), 2200),  // Logo appears
      setTimeout(() => setStage(4), 2800),  // Slogan appears
      setTimeout(() => {
        setStage(5); // Fade out
        if (onComplete) {
          setTimeout(onComplete, 800);
        }
      }, 4000),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  if (stage >= 5) {
    return null;
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-fervo-black flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: stage >= 5 ? 0 : 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Sparks */}
      {stage >= 1 && (
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-fervo-yellow rounded-full"
              style={{
                left: `${50 + (Math.random() - 0.5) * 60}%`,
                top: `${50 + (Math.random() - 0.5) * 60}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                y: [0, -50 - Math.random() * 50],
              }}
              transition={{
                duration: 1.5,
                delay: Math.random() * 0.5,
                repeat: stage < 4 ? Infinity : 0,
              }}
            />
          ))}
        </div>
      )}

      {/* Fire Effect - Bottom */}
      {stage >= 2 && (
        <>
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1/3 opacity-30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0.3, 0.5, 0.3], scale: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              background: "radial-gradient(ellipse at center bottom, #fbbf24 0%, #ea580c 30%, #dc2626 60%, transparent 100%)",
              filter: "blur(60px)",
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1/4 opacity-50"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: [0.5, 0.7, 0.5], scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
            style={{
              background: "radial-gradient(ellipse at center bottom, #fbbf24 0%, #ea580c 40%, transparent 80%)",
              filter: "blur(40px)",
            }}
          />
        </>
      )}

      {/* Fire Effect - Sides */}
      {stage >= 2 && (
        <>
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-1/4 opacity-20"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: [0.2, 0.3, 0.2], x: 0 }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              background: "radial-gradient(ellipse at left, #dc2626 0%, #ea580c 30%, transparent 70%)",
              filter: "blur(50px)",
            }}
          />
          <motion.div
            className="absolute right-0 top-0 bottom-0 w-1/4 opacity-20"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: [0.2, 0.3, 0.2], x: 0 }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            style={{
              background: "radial-gradient(ellipse at right, #dc2626 0%, #ea580c 30%, transparent 70%)",
              filter: "blur(50px)",
            }}
          />
        </>
      )}

      {/* Central Glow */}
      {stage >= 2 && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="w-[600px] h-[600px] rounded-full"
            style={{
              background: "radial-gradient(circle, #fbbf24 0%, #ea580c 30%, #dc2626 60%, transparent 100%)",
              filter: "blur(80px)",
            }}
          />
        </motion.div>
      )}

      {/* Logo */}
      {stage >= 3 && (
        <motion.div
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, scale: 0.5, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
        >
          <motion.h1
            className="text-7xl md:text-9xl font-bebas tracking-wider fire-text mb-4"
            animate={{
              textShadow: [
                "0 0 20px rgba(251, 191, 36, 0.5)",
                "0 0 40px rgba(234, 88, 12, 0.5)",
                "0 0 20px rgba(251, 191, 36, 0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            FERVO
          </motion.h1>

          {/* Slogan */}
          {stage >= 4 && (
            <motion.p
              className="text-xl md:text-2xl text-white/90 tracking-wide font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              A FESTA QUE CONTAGIA
            </motion.p>
          )}
        </motion.div>
      )}

      {/* Flickering particles around logo */}
      {stage >= 3 && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-fervo-yellow rounded-full"
              style={{
                left: `${45 + Math.random() * 10}%`,
                top: `${40 + Math.random() * 20}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x: [(Math.random() - 0.5) * 100],
                y: [(Math.random() - 0.5) * 100],
              }}
              transition={{
                duration: 1 + Math.random(),
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}
