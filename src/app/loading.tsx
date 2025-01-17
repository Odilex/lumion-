'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="relative">
        {/* Outer ring */}
        <motion.div
          className="absolute inset-0 border-2 border-cyan-500/30 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Inner ring */}
        <motion.div
          className="w-16 h-16 border-2 border-t-cyan-400 border-r-cyan-400 border-b-transparent border-l-transparent rounded-full"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Loading text */}
        <motion.div
          className="absolute top-full left-1/2 -translate-x-1/2 mt-4 text-cyan-400 font-mono text-sm"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          LOADING...
        </motion.div>

        {/* Decorative dots */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              top: '50%',
              left: '50%',
              transform: `rotate(${i * 90}deg) translateX(32px)`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.25,
              ease: 'linear',
            }}
          />
        ))}
      </div>
    </div>
  );
} 