'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { GlitchText } from './glitch-text';
import { NeonGlow } from './neon-glow';

interface AnimatedTextProps {
    text: string;
  className?: string;
  delay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = "", delay = 0 }) => {
  const letters = Array.from(text);
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: 0.05,
        delayChildren: delay * 0.3,
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    })
  };
  
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
        duration: 0.5
      }
    },
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.8,
      filter: "blur(10px)",
    }
  };
  
  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block origin-bottom"
          style={{ 
            display: 'inline-block',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden'
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        url: string;
      };
    }
  }
}

const SplineViewer = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.59/build/spline-viewer.js';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full">
      <div className="relative w-[175%] h-[175%] -right-[15%] -top-1/3">
        <spline-viewer url="https://prod.spline.design/mCVMdi7JYV9dhk80/scene.splinecode" />
      </div>
    </div>
  );
};

export function HeroSlider() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/50" />
      
      <div className="absolute inset-y-0 right-0 w-full lg:w-3/4">
        <SplineViewer />
      </div>
      
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-white"
        >
          <div className="overflow-hidden">
            <GlitchText
              text="Transform"
              className="text-5xl md:text-6xl font-bold"
            />
            <div className="flex gap-3 mb-6">
              <AnimatedText
                text="Your Digital"
                className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text"
                delay={0.5}
              />
              <AnimatedText
                text="Vision"
                className="text-5xl md:text-6xl font-bold text-cyan-400"
                delay={0.8}
              />
            </div>
          </div>
          
          <div className="overflow-hidden mb-8">
            <AnimatedText
              text="Innovative software solutions and cutting-edge technology"
              className="text-xl md:text-2xl text-white/80 block mb-2"
              delay={1}
            />
            <AnimatedText
              text="to help your business thrive in Rwanda and East Africa."
              className="text-xl md:text-2xl text-white/80 block"
              delay={1.2}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-wrap gap-4"
          >
            <NeonGlow>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
              >
                <AnimatedText text="Get Started" delay={1.6} />
                <motion.span
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.8 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </Link>
            </NeonGlow>
            <NeonGlow>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <AnimatedText text="View Our Work" delay={1.7} />
              </Link>
            </NeonGlow>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 