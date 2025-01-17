"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

interface ProjectProgressProps {
  color?: string;
  height?: number;
}

export function ProjectProgress({
  color = "#00ff80",
  height = 2,
}: ProjectProgressProps) {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 origin-left"
        style={{
          scaleX,
          height,
          backgroundColor: color,
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* Glow effect */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-40 origin-left"
        style={{
          scaleX,
          height: height * 2,
          backgroundColor: color,
          filter: "blur(4px)",
          opacity: isVisible ? 0.5 : 0,
        }}
      />

      {/* Progress percentage */}
      <motion.div
        className="fixed top-4 right-4 z-50 font-mono text-sm"
        style={{
          color,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <motion.span>{Math.round(scrollYProgress.get() * 100)}%</motion.span>
      </motion.div>

      {/* Progress markers */}
      <div className="fixed top-0 left-0 right-0 z-30">
        {[25, 50, 75].map((marker) => (
          <motion.div
            key={marker}
            className="absolute top-0"
            style={{
              left: `${marker}%`,
              width: 1,
              height: height * 3,
              backgroundColor: color,
              opacity: isVisible ? 0.3 : 0,
            }}
          >
            <motion.div
              className="absolute top-full mt-1 text-xs font-mono"
              style={{ color }}
            >
              {marker}%
            </motion.div>
          </motion.div>
        ))}
      </div>
    </>
  );
} 