"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { NeonGlow } from "./neon-glow";

interface Stat {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface HolographicStatsProps {
  stats: Stat[];
  color?: string;
}

export function HolographicStats({
  stats,
  color = "#00ff80",
}: HolographicStatsProps) {
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const [isInView, setIsInView] = useState(false);

  // Create motion values for each stat
  const counts = stats.map(() => useMotionValue(0));
  const roundedCounts = counts.map(count =>
    useTransform(count, latest => Math.round(latest))
  );

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, index) => {
        animate(counts[index], stat.value, {
          duration: 2,
          ease: "easeOut",
        });
      });
    }
  }, [isInView, stats, counts]);

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      onViewportEnter={() => setIsInView(true)}
    >
      {stats.map((stat, index) => (
        <NeonGlow key={stat.label} color={color}>
          <motion.div
            className="relative p-6 bg-background/50 backdrop-blur-sm rounded-lg"
            onHoverStart={() => setIsHovered(index)}
            onHoverEnd={() => setIsHovered(null)}
            whileHover={{ scale: 1.05 }}
          >
            {/* Background effects */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Grid pattern */}
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-full h-[1px] bg-primary/5"
                  style={{ top: `${(i + 1) * 20}%` }}
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.5,
                  }}
                />
              ))}

              {/* Holographic effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>

            {/* Content */}
            <div className="relative">
              {/* Icon */}
              {stat.icon && (
                <div className="mb-4">
                  <motion.div
                    className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center"
                    animate={{
                      rotate: isHovered === index ? [0, 360] : 0,
                    }}
                    transition={{
                      duration: 2,
                      ease: "linear",
                    }}
                  >
                    <stat.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                </div>
              )}

              {/* Value */}
              <div className="text-3xl font-bold mb-2 font-mono">
                {stat.prefix}
                <motion.span>{roundedCounts[index]}</motion.span>
                {stat.suffix}
              </div>

              {/* Label */}
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>

            {/* Hover effects */}
            {isHovered === index && (
              <>
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-primary" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-primary" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary" />

                {/* Scanlines */}
                {Array.from({ length: 3 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-full h-[1px] bg-primary/20"
                    style={{ top: `${(i + 1) * 25}%` }}
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.1,
                    }}
                  />
                ))}
              </>
            )}
          </motion.div>
        </NeonGlow>
      ))}
    </div>
  );
} 