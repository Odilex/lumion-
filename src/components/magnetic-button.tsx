'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const MagneticButton = ({ children, className = '', onClick }: MagneticButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current?.getBoundingClientRect() || { left: 0, top: 0, width: 0, height: 0 };
    
    const center = {
      x: left + width / 2,
      y: top + height / 2
    };

    const distance = {
      x: clientX - center.x,
      y: clientY - center.y
    };

    const magneticPull = 0.4; // Adjust this value to change the magnetic effect strength

    setPosition({
      x: distance.x * magneticPull,
      y: distance.y * magneticPull
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={buttonRef}
      className={`relative ${className}`}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0 -z-10 opacity-0 transition-opacity group-hover:opacity-100"
        animate={{
          background: [
            "radial-gradient(circle at center, rgba(147, 51, 234, 0.1) 0%, transparent 70%)",
            "radial-gradient(circle at center, rgba(147, 51, 234, 0.15) 0%, transparent 70%)"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />
      {children}
    </motion.button>
  );
}; 