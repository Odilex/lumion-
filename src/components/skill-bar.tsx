'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { HologramCard } from './hologram-card';

interface SkillBarProps {
  name: string;
  level: number; // 0 to 100
  color?: string;
}

export function SkillBar({ name, level, color = 'primary' }: SkillBarProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref}>
      <HologramCard>
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium">{name}</span>
            <span className="text-sm text-muted-foreground">{level}%</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              className={`h-full bg-${color} rounded-full`}
              initial={{ width: 0 }}
              animate={isInView ? { width: `${level}%` } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Animated Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
            </motion.div>
          </div>
        </div>
      </HologramCard>
    </div>
  );
}

interface SkillGroupProps {
  title: string;
  skills: Array<{ name: string; level: number }>;
}

export function SkillGroup({ title, skills }: SkillGroupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <SkillBar name={skill.name} level={skill.level} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
} 