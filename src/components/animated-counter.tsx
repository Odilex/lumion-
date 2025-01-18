'use client';

import { motion } from 'framer-motion';
import { NeonGlow } from './neon-glow';

interface Stat {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

interface AnimatedCounterProps {
  stats: Stat[];
  color?: string;
}

export function AnimatedCounter({ stats, color = 'text-primary' }: AnimatedCounterProps) {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.8 }
      }}
      transition={{ duration: 0.5 }}
    >
      {stats.map((stat, index) => (
        <NeonGlow key={stat.label} color={color}>
          <div className="p-6 text-center">
            <motion.div
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0.5 }
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div 
                className="text-4xl font-bold mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              >
                {stat.prefix}
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                >
                  {stat.value}
                </motion.span>
                {stat.suffix}
              </motion.div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          </div>
        </NeonGlow>
      ))}
    </motion.div>
  );
} 