"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { NeonGlow } from "./neon-glow";

interface Tab {
  id: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  content: React.ReactNode;
}

interface HolographicTabsProps {
  tabs: Tab[];
  defaultTab?: string;
  color?: string;
}

export function HolographicTabs({
  tabs,
  defaultTab = tabs[0]?.id,
  color = "#00ff80",
}: HolographicTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  return (
    <div className="relative">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-[1px] bg-primary/5"
            style={{ top: `${(i + 1) * 10}%` }}
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
      </div>

      {/* Tabs navigation */}
      <div className="relative flex gap-2 mb-8">
        {tabs.map((tab) => (
          <NeonGlow key={tab.id} color={color}>
            <motion.button
              className={`relative px-6 py-3 rounded-lg bg-background/50 backdrop-blur-sm
                ${activeTab === tab.id ? "text-primary" : "text-muted-foreground"}
              `}
              onClick={() => setActiveTab(tab.id)}
              onHoverStart={() => setHoveredTab(tab.id)}
              onHoverEnd={() => setHoveredTab(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-2">
                {tab.icon && <tab.icon className="w-4 h-4" />}
                <span>{tab.label}</span>
              </div>

              {/* Active indicator */}
              {activeTab === tab.id && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  layoutId="activeIndicator"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              )}

              {/* Hover effects */}
              {hoveredTab === tab.id && (
                <>
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

                  {/* Glitch effect */}
                  <motion.div
                    className="absolute inset-0 bg-primary/10"
                    animate={{
                      opacity: [0, 0.2, 0],
                      x: [-2, 2, -2, 0],
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                    }}
                  />
                </>
              )}
            </motion.button>
          </NeonGlow>
        ))}
      </div>

      {/* Tab content */}
      <div className="relative">
        {tabs.map((tab) => (
          <motion.div
            key={tab.id}
            initial={false}
            animate={{
              opacity: activeTab === tab.id ? 1 : 0,
              x: activeTab === tab.id ? 0 : 20,
            }}
            transition={{ duration: 0.2 }}
            className={`absolute inset-0 ${
              activeTab === tab.id ? "pointer-events-auto" : "pointer-events-none"
            }`}
          >
            {tab.content}
          </motion.div>
        ))}
      </div>

      {/* Decorative corner accents */}
      <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-full h-[2px] bg-primary/30"
          animate={{ scaleX: [0, 1] }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="absolute top-0 left-0 w-[2px] h-full bg-primary/30"
          animate={{ scaleY: [0, 1] }}
          transition={{ duration: 1 }}
        />
      </div>
      <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-full h-[2px] bg-primary/30"
          animate={{ scaleX: [0, 1] }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="absolute top-0 right-0 w-[2px] h-full bg-primary/30"
          animate={{ scaleY: [0, 1] }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
} 