"use client";

import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  'React', 'Node.js', 'Python', 'AWS',
  'TypeScript', 'Docker', 'MongoDB', 'Next.js'
];

export function TechnologiesSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technologies We Use
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build robust solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center p-4 rounded-lg bg-background border border-border hover:border-primary transition-colors"
            >
              <span className="text-lg font-semibold">{tech}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 