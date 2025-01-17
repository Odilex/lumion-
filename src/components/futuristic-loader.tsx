"use client";

import { motion } from "framer-motion";

interface FuturisticLoaderProps {
  size?: number;
  color?: string;
}

export function FuturisticLoader({ size = 48, color = "#00ff80" }: FuturisticLoaderProps) {
  const circleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: [0, 1, 0],
      scale: [0.8, 1, 0.8],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const pulseVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: [0, 0.5, 0],
      scale: [0.8, 1.2, 0.8],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const particleCount = 6;
  const particles = Array.from({ length: particleCount });

  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Center circle */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: color }}
        variants={circleVariants}
        initial="hidden"
        animate="visible"
      />

      {/* Pulse effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ border: `2px solid ${color}` }}
        variants={pulseVariants}
        initial="hidden"
        animate="visible"
      />

      {/* Rotating particles */}
      {particles.map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-2 h-2 rounded-full"
          style={{ backgroundColor: color }}
          animate={{
            rotate: 360,
            x: Math.cos((index * 2 * Math.PI) / particleCount) * (size / 2),
            y: Math.sin((index * 2 * Math.PI) / particleCount) * (size / 2),
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
            delay: (index * 3) / particleCount,
          }}
        />
      ))}

      {/* Scanning line */}
      <motion.div
        className="absolute w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent"
        style={{ color }}
        animate={{
          y: [-size / 2, size / 2],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
} 