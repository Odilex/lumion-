'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CursorEffect = () => {
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-50"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isVisible ? 1 : 0,
        }}
      >
        {/* Main cursor */}
        <div className="relative -left-3 -top-3">
          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 backdrop-blur-sm border border-white/20" />
        </div>
      </motion.div>
      
      {/* Trailing effect */}
      <motion.div
        className="fixed pointer-events-none z-40"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isVisible ? 0.3 : 0,
          scale: 2,
        }}
        transition={{ delay: 0.1 }}
      >
        <div className="relative -left-3 -top-3">
          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-sm" />
        </div>
      </motion.div>
    </>
  );
}; 