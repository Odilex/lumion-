'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const FloatingSphere = () => {
  return (
    <div className="relative w-full h-full">
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotateZ: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0"
      >
        {/* Main Sphere */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-500/30 to-blue-500/30 backdrop-blur-3xl"></div>
          
          {/* Orbiting Elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            <div className="absolute -top-4 left-1/2 w-8 h-8 rounded-full bg-purple-400/50 blur-sm"></div>
            <div className="absolute top-1/2 -right-4 w-6 h-6 rounded-full bg-blue-400/50 blur-sm"></div>
            <div className="absolute -bottom-4 left-1/2 w-10 h-10 rounded-full bg-indigo-400/50 blur-sm"></div>
          </motion.div>

          {/* Inner Glow */}
          <div className="absolute inset-8 rounded-full bg-white/5 backdrop-blur-xl"></div>
          
          {/* Floating Particles */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0"
          >
            <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-purple-300/80"></div>
            <div className="absolute bottom-1/4 right-1/4 w-2 h-2 rounded-full bg-blue-300/80"></div>
            <div className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-indigo-300/80"></div>
          </motion.div>
        </div>
      </motion.div>

      {/* Background Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96">
        <div className="absolute inset-0 rounded-full bg-purple-500/10 blur-3xl"></div>
        <div className="absolute inset-10 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>
    </div>
  );
}; 