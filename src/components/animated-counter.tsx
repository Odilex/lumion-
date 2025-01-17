'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useSpring } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { HologramCard } from './hologram-card';

interface AnimatedCounterProps {
  value: number;
  label: string;
  icon: LucideIcon;
  prefix?: string;
  suffix?: string;
  color?: string;
}

export function AnimatedCounter({
  value,
  label,
  icon: Icon,
  prefix = '',
  suffix = '',
  color = 'text-primary'
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  const spring = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: 2
  });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      spring.set(value);
      setHasAnimated(true);
    }
  }, [isInView, value, spring, hasAnimated]);

  const currentValue = useRef<number>(0);
  spring.onChange(latest => {
    currentValue.current = Math.round(latest);
  });

  return (
    <motion.div ref={ref}>
      <HologramCard>
        <div className="p-6 text-center">
          <div className={`${color} w-12 h-12 rounded-lg bg-background/80 flex items-center justify-center mx-auto mb-4`}>
            <Icon className="w-6 h-6" />
          </div>
          <motion.div
            className="text-3xl font-bold mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {prefix}
            <motion.span>{currentValue.current}</motion.span>
            {suffix}
          </motion.div>
          <motion.div
            className="text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {label}
          </motion.div>
        </div>
      </HologramCard>
    </motion.div>
  );
} 