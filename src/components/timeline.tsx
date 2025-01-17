'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HologramCard } from './hologram-card';

interface TimelineItem {
  year: number | string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary/50 via-primary to-primary/50" />

      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex items-center ${
              index % 2 === 0 ? 'justify-end' : ''
            }`}
          >
            {/* Content */}
            <div className={`w-full md:w-[calc(50%-2rem)] ${
              index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-auto'
            }`}>
              <HologramCard>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-primary font-bold text-xl">
                      {item.year}
                    </div>
                    <div className="h-0.5 flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </HologramCard>
            </div>

            {/* Timeline Node */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4">
              <div className="w-full h-full rounded-full bg-primary animate-pulse" />
              <div className="absolute inset-0 w-full h-full rounded-full bg-primary blur-sm animate-pulse" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 