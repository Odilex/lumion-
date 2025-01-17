'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface HologramCardProps {
  children: React.ReactNode;
  className?: string;
}

export function HologramCard({ children, className }: HologramCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={cn(
        'relative rounded-lg overflow-hidden',
        'bg-gradient-to-br from-background/80 to-background/60',
        'backdrop-blur-xl border border-primary/20',
        'before:absolute before:inset-0',
        'before:bg-[radial-gradient(400px_circle_at_var(--x,0px)_var(--y,0px),rgba(0,255,255,0.06),transparent_40%)]',
        'hover:border-primary/40',
        'after:absolute after:inset-0 after:z-10',
        'after:bg-[radial-gradient(600px_circle_at_var(--x,0px)_var(--y,0px),rgba(0,255,255,0.4),transparent_40%)]',
        'after:opacity-0 after:transition-opacity',
        'hover:after:opacity-100',
        className
      )}
      onMouseMove={(e) => {
        const bounds = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - bounds.left;
        const y = e.clientY - bounds.top;
        e.currentTarget.style.setProperty('--x', `${x}px`);
        e.currentTarget.style.setProperty('--y', `${y}px`);
      }}
    >
      <div className="relative z-20">{children}</div>
    </motion.div>
  );
} 