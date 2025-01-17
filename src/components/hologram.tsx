"use client";

import { motion, useAnimation } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

interface HologramProps {
  children: ReactNode;
  className?: string;
  active?: boolean;
  color?: string;
}

export function Hologram({
  children,
  className = "",
  active = true,
  color = "#00ff80",
}: HologramProps) {
  const [isGlitching, setIsGlitching] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (active) {
      const glitchInterval = setInterval(() => {
        if (Math.random() < 0.1) {
          setIsGlitching(true);
          setTimeout(() => setIsGlitching(false), 200);
        }
      }, 2000);

      return () => clearInterval(glitchInterval);
    }
  }, [active]);

  const hologramVariants = {
    inactive: {
      opacity: 0,
      scale: 0.9,
      filter: "brightness(0.5) blur(10px)",
    },
    active: {
      opacity: 1,
      scale: 1,
      filter: "brightness(1) blur(0px)",
    },
    glitch: {
      opacity: [1, 0.8, 1],
      x: [0, -5, 5, 0],
      filter: [
        "brightness(1) blur(0px)",
        "brightness(1.2) blur(2px)",
        "brightness(1) blur(0px)",
      ],
    },
  };

  return (
    <div className={`relative ${className}`}>
      {/* Hologram base */}
      <motion.div
        className="relative"
        variants={hologramVariants}
        initial="inactive"
        animate={isGlitching ? "glitch" : active ? "active" : "inactive"}
        transition={{
          duration: isGlitching ? 0.2 : 0.5,
          ease: "easeInOut",
        }}
      >
        {/* Scanlines */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-px opacity-10"
              style={{
                top: `${(i / 50) * 100}%`,
                backgroundColor: color,
              }}
              animate={{
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>

        {/* Flickering effect */}
        <motion.div
          className="absolute inset-0"
          animate={{
            opacity: [0.95, 1, 0.95],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Content with holographic glow */}
        <div
          className="relative"
          style={{
            textShadow: `0 0 10px ${color}`,
            color: color,
          }}
        >
          {children}
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{ backgroundColor: color }}
              animate={{
                y: [0, -20],
                x: [0, Math.sin(i) * 10],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
              }}
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Base reflection */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-4 blur-sm"
        style={{
          background: `linear-gradient(to bottom, ${color}33, transparent)`,
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
} 