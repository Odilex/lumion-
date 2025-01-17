"use client";

import React from 'react';
import { motion } from 'framer-motion';

const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We analyze your needs and objectives to create a tailored strategy.'
  },
  {
    step: '02',
    title: 'Planning',
    description: 'Detailed project planning and resource allocation for optimal execution.'
  },
  {
    step: '03',
    title: 'Development',
    description: 'Agile development with regular updates and feedback integration.'
  },
  {
    step: '04',
    title: 'Launch & Support',
    description: 'Smooth deployment and ongoing support to ensure success.'
  }
];

export function ProcessSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We follow a proven methodology to deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {processSteps.map((phase, index) => (
            <motion.div
              key={phase.step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative p-6 rounded-lg bg-muted"
            >
              <div className="text-4xl font-bold text-primary/20 mb-4">
                {phase.step}
              </div>
              <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
              <p className="text-muted-foreground">{phase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 