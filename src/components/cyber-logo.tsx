'use client';

import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface CyberLogoProps {
  text?: string;
  className?: string;
}

export const CyberLogo = ({ text = 'LUMION', className = '' }: CyberLogoProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]), {
    stiffness: 200,
    damping: 30
  });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]), {
    stiffness: 200,
    damping: 30
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      mouseX.set(x);
      mouseY.set(y);
    };

    containerRef.current?.addEventListener('mousemove', handleMouseMove);
    return () => containerRef.current?.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={containerRef}
      className={`relative perspective-1000 cursor-pointer ${className}`}
      whileHover="hover"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d'
        }}
        className="relative flex items-center justify-center p-4"
      >
        <div className="text-3xl font-bold tracking-wider relative">
          {text.split('').map((char, i) => (
            <motion.span
              key={i}
              className="inline-block relative text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
              variants={{
                hover: {
                  y: [0, -5, 0],
                  transition: {
                    duration: 0.5,
                    delay: i * 0.1,
                    repeat: Infinity,
                    repeatType: 'reverse'
                  }
                }
              }}
            >
              {char}
            </motion.span>
          ))}
        </div>
        <motion.div
          className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20"
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
            transform: 'translateZ(-20px)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 blur-xl" />
      </motion.div>
    </motion.div>
  );
}; 