'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const themes = [
  {
    name: 'cyber-neon',
    label: 'Neon',
    colors: {
      primary: '#00ff9f',
      secondary: '#00b8ff',
      accent: '#ff00ff'
    }
  },
  {
    name: 'cyber-punk',
    label: 'Punk',
    colors: {
      primary: '#ff0055',
      secondary: '#f7ff00',
      accent: '#00ffff'
    }
  },
  {
    name: 'cyber-ghost',
    label: 'Ghost',
    colors: {
      primary: '#ffffff',
      secondary: '#c0c0c0',
      accent: '#808080'
    }
  }
];

export const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(themes[0]);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--primary-color', currentTheme.colors.primary);
    root.style.setProperty('--secondary-color', currentTheme.colors.secondary);
    root.style.setProperty('--accent-color', currentTheme.colors.accent);
  }, [currentTheme]);

  return (
    <div className="fixed bottom-8 left-8 z-50">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative bg-black/80 p-3 rounded-full border border-cyan-500/30 backdrop-blur-sm hover:bg-black/90 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div
          className="w-5 h-5 rounded-full"
          style={{
            background: `linear-gradient(45deg, ${currentTheme.colors.primary}, ${currentTheme.colors.secondary})`
          }}
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-full mb-4 bg-black/80 backdrop-blur-sm rounded-lg border border-cyan-500/30 p-2 min-w-[150px]"
          >
            {themes.map((theme) => (
              <motion.button
                key={theme.name}
                onClick={() => {
                  setCurrentTheme(theme);
                  setIsOpen(false);
                }}
                className="flex items-center gap-2 w-full px-3 py-2 rounded-md hover:bg-white/10 transition-colors"
                whileHover={{ x: 5 }}
              >
                <div
                  className="w-4 h-4 rounded-full"
                  style={{
                    background: `linear-gradient(45deg, ${theme.colors.primary}, ${theme.colors.secondary})`
                  }}
                />
                <span className="text-sm font-mono text-white">{theme.label}</span>
                {currentTheme.name === theme.name && (
                  <motion.div
                    layoutId="activeTheme"
                    className="ml-auto w-2 h-2 rounded-full bg-cyan-400"
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}; 