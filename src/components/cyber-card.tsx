"use client";

import { motion, useAnimation } from "framer-motion";
import { ReactNode, useState } from "react";

interface CyberCardProps {
  children: ReactNode;
  className?: string;
  glitchOnHover?: boolean;
}

export function CyberCard({
  children,
  className = "",
  glitchOnHover = true,
}: CyberCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  const glitchAnimation = async () => {
    if (glitchOnHover && isHovered) {
      await controls.start({
        x: [0, -2, 2, -2, 0],
        y: [0, 1, -1, 1, 0],
        transition: { duration: 0.2 },
      });
      controls.start({
        x: 0,
        y: 0,
        transition: { duration: 0.1 },
      });
    }
  };

  const borderVariants = {
    initial: {
      background: "linear-gradient(45deg, #00ff80, #00bfff)",
    },
    hover: {
      background: "linear-gradient(45deg, #ff0080, #00ff80, #00bfff)",
      backgroundSize: "200% 200%",
    },
  };

  return (
    <motion.div
      className={`relative ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={controls}
      onAnimationComplete={glitchAnimation}
    >
      {/* Background with animated gradient */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        variants={borderVariants}
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
        transition={{
          background: {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
      />

      {/* Glitch effect layers */}
      {isHovered && (
        <>
          <motion.div
            className="absolute inset-0 bg-red-500 rounded-lg opacity-30"
            animate={{
              x: [0, -2, 2, -2, 0],
              y: [0, 1, -1, 1, 0],
            }}
            transition={{ duration: 0.5, repeat: Infinity }}
          />
          <motion.div
            className="absolute inset-0 bg-blue-500 rounded-lg opacity-30"
            animate={{
              x: [0, 2, -2, 2, 0],
              y: [0, -1, 1, -1, 0],
            }}
            transition={{ duration: 0.5, repeat: Infinity }}
          />
        </>
      )}

      {/* Content */}
      <motion.div
        className="relative bg-background/80 backdrop-blur-sm rounded-lg p-6 border border-primary/20"
        animate={{
          borderColor: isHovered ? ["rgba(0, 255, 128, 0.2)", "rgba(255, 0, 128, 0.2)", "rgba(0, 255, 128, 0.2)"] : "rgba(0, 255, 128, 0.2)",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Scanline effect */}
        <motion.div
          className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none"
          initial={false}
          animate={isHovered ? { opacity: 0.1 } : { opacity: 0 }}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-full h-px bg-primary"
              style={{ top: `${i * 10}%` }}
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.1,
              }}
            />
          ))}
        </motion.div>

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary rounded-tl-lg" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary rounded-tr-lg" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary rounded-bl-lg" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary rounded-br-lg" />

        {children}
      </motion.div>
    </motion.div>
  );
} 