'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxSectionProps {
  image: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  reverse?: boolean;
}

export function ParallaxSection({
  image,
  title,
  subtitle,
  children,
  reverse = false
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen py-24 overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 container"
      >
        <div className={`flex flex-col md:flex-row items-center gap-12 ${
          reverse ? 'md:flex-row-reverse' : ''
        }`}>
          {/* Text Content */}
          <div className="flex-1 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              {title}
            </h2>
            <p className="text-xl text-white/80 mb-8">
              {subtitle}
            </p>
            {children}
          </div>

          {/* Stats or Features */}
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center text-white p-8 rounded-lg bg-white/5 backdrop-blur-sm">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
              <div className="text-center text-white p-8 rounded-lg bg-white/5 backdrop-blur-sm">
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-sm text-white/80">Projects Completed</div>
              </div>
              <div className="text-center text-white p-8 rounded-lg bg-white/5 backdrop-blur-sm">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-sm text-white/80">Team Members</div>
              </div>
              <div className="text-center text-white p-8 rounded-lg bg-white/5 backdrop-blur-sm">
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-sm text-white/80">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
} 