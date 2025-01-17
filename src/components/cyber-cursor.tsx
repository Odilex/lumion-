"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

interface CyberCursorProps {
  color?: string;
  size?: number;
  blur?: number;
  trail?: boolean;
  trailLength?: number;
}

export function CyberCursor({
  color = "#00ff80",
  size = 20,
  blur = 10,
  trail = true,
  trailLength = 8,
}: CyberCursorProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring physics for smooth cursor movement
  const springConfig = { damping: 25, stiffness: 400 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  // Trail positions
  const [trailPositions, setTrailPositions] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX - size / 2);
      cursorY.set(e.clientY - size / 2);

      if (trail) {
        setTrailPositions(prev => {
          const newPositions = [{ x: e.clientX - size / 2, y: e.clientY - size / 2 }, ...prev];
          return newPositions.slice(0, trailLength);
        });
      }
    };

    const updateTouchPosition = (e: TouchEvent) => {
      cursorX.set(e.touches[0].clientX - size / 2);
      cursorY.set(e.touches[0].clientY - size / 2);

      if (trail) {
        setTrailPositions(prev => {
          const newPositions = [
            { x: e.touches[0].clientX - size / 2, y: e.touches[0].clientY - size / 2 },
            ...prev,
          ];
          return newPositions.slice(0, trailLength);
        });
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("touchmove", updateTouchPosition);
    window.addEventListener("mouseenter", () => setIsVisible(true));
    window.addEventListener("mouseleave", () => setIsVisible(false));

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("touchmove", updateTouchPosition);
      window.removeEventListener("mouseenter", () => setIsVisible(true));
      window.removeEventListener("mouseleave", () => setIsVisible(false));
    };
  }, [cursorX, cursorY, size, trail, trailLength]);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-screen"
        style={{
          x: springX,
          y: springY,
          opacity: isVisible ? 1 : 0,
        }}
      >
        {/* Outer ring */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: size,
            height: size,
            border: `2px solid ${color}`,
            filter: `blur(${blur/2}px)`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Inner dot */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: size / 3,
            height: size / 3,
            backgroundColor: color,
            filter: `blur(${blur/4}px)`,
            top: size / 3,
            left: size / 3,
          }}
          animate={{
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Glow effect */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: size * 1.5,
            height: size * 1.5,
            backgroundColor: color,
            filter: `blur(${blur}px)`,
            top: -size / 4,
            left: -size / 4,
            opacity: 0.2,
          }}
        />
      </motion.div>

      {/* Trail effect */}
      {trail && trailPositions.map((pos, i) => (
        <motion.div
          key={i}
          className="fixed pointer-events-none z-40 mix-blend-screen"
          style={{
            width: size / 2,
            height: size / 2,
            x: pos.x + size / 4,
            y: pos.y + size / 4,
            opacity: (trailLength - i) / trailLength * 0.3,
          }}
        >
          <motion.div
            className="absolute rounded-full"
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: color,
              filter: `blur(${blur * (i + 1) / trailLength}px)`,
            }}
          />
        </motion.div>
      ))}
    </>
  );
} 