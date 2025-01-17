"use client";

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  variant?: 'shapes' | 'gradient';
}

export function AnimatedBackground({
  children,
  className,
  variant = 'gradient'
}: AnimatedBackgroundProps) {
  if (variant === 'shapes') {
    return (
      <div className={cn('relative overflow-hidden', className)}>
        <div className="absolute inset-0 z-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-primary/5 rounded-full"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1, 1.2, 1],
                opacity: [0, 0.5, 0.2, 0],
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          ))}
        </div>
        <div className="relative z-10">{children}</div>
      </div>
    );
  }

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
} 