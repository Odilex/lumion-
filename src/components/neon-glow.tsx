"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface NeonGlowProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
}

export function NeonGlow({ children, className, color = 'text-primary' }: NeonGlowProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={cn(
        'relative rounded-lg bg-card border border-primary/20',
        'before:absolute before:inset-0 before:-z-10',
        'before:rounded-lg before:bg-primary/5',
        'before:backdrop-blur-xl before:transition-all',
        'hover:border-primary/40',
        'hover:before:bg-primary/10',
        'hover:before:shadow-[0_0_2rem_-0.5rem] hover:before:shadow-primary/30',
        color,
        className
      )}
    >
      {children}
    </motion.div>
  );
} 