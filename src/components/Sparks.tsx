"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SparksProps {
  count?: number;
  className?: string;
}

export function Sparks({ count = 20, className = "" }: SparksProps) {
  const [windowHeight, setWindowHeight] = useState(800);

  useEffect(() => {
    // Set window height only on client side
    setWindowHeight(window.innerHeight);
  }, []);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-fervo-yellow rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: "0%",
          }}
          animate={{
            y: [-20, -windowHeight],
            opacity: [0, 1, 0.8, 0],
            scale: [0, 1, 0.5, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
