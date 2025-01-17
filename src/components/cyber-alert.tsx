"use client";

import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, CheckCircle2, XCircle, Info, X } from "lucide-react";
import { useState, useEffect } from "react";

type AlertType = "success" | "error" | "warning" | "info";

interface CyberAlertProps {
  type?: AlertType;
  title: string;
  message: string;
  duration?: number;
  onClose?: () => void;
}

const alertConfig = {
  success: {
    icon: CheckCircle2,
    color: "#00ff80",
    bgColor: "rgba(0, 255, 128, 0.1)",
  },
  error: {
    icon: XCircle,
    color: "#ff0040",
    bgColor: "rgba(255, 0, 64, 0.1)",
  },
  warning: {
    icon: AlertCircle,
    color: "#ffbb00",
    bgColor: "rgba(255, 187, 0, 0.1)",
  },
  info: {
    icon: Info,
    color: "#00bfff",
    bgColor: "rgba(0, 191, 255, 0.1)",
  },
};

export function CyberAlert({
  type = "info",
  title,
  message,
  duration,
  onClose,
}: CyberAlertProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isGlitching, setIsGlitching] = useState(false);
  const config = alertConfig[type];
  const Icon = config.icon;

  useEffect(() => {
    // Glitch effect interval
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.1) {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 150);
      }
    }, 2000);

    // Auto-close timer
    let closeTimer: NodeJS.Timeout;
    if (duration) {
      closeTimer = setTimeout(() => {
        setIsVisible(false);
        onClose?.();
      }, duration);
    }

    return () => {
      clearInterval(glitchInterval);
      if (closeTimer) clearTimeout(closeTimer);
    };
  }, [duration, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="relative"
        >
          {/* Main alert */}
          <motion.div
            className="relative p-4 rounded-lg backdrop-blur-sm"
            style={{ backgroundColor: config.bgColor }}
            animate={isGlitching ? {
              x: [-2, 2, -2, 0],
              y: [1, -1, 1, 0],
            } : {}}
          >
            {/* Content */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Icon
                  className="w-5 h-5"
                  style={{ color: config.color }}
                />
              </div>
              <div className="flex-1">
                <div className="font-bold mb-1" style={{ color: config.color }}>
                  {title}
                </div>
                <div className="text-sm text-muted-foreground">
                  {message}
                </div>
              </div>
              {onClose && (
                <button
                  onClick={() => {
                    setIsVisible(false);
                    onClose();
                  }}
                  className="flex-shrink-0"
                >
                  <X
                    className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors"
                  />
                </button>
              )}
            </div>

            {/* Border effect */}
            <motion.div
              className="absolute inset-0 rounded-lg"
              style={{ border: `1px solid ${config.color}` }}
              animate={{
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Progress bar for auto-close */}
            {duration && (
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 rounded-full"
                style={{ backgroundColor: config.color }}
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{
                  duration: duration / 1000,
                  ease: "linear",
                }}
              />
            )}

            {/* Scanlines */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-full h-[1px]"
                  style={{
                    top: `${(i + 1) * 20}%`,
                    backgroundColor: config.color,
                    opacity: 0.1,
                  }}
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.1,
                  }}
                />
              ))}
            </div>

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l rounded-tl"
              style={{ borderColor: config.color }} />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r rounded-tr"
              style={{ borderColor: config.color }} />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l rounded-bl"
              style={{ borderColor: config.color }} />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r rounded-br"
              style={{ borderColor: config.color }} />
          </motion.div>

          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 rounded-lg blur-xl"
            style={{ backgroundColor: config.color }}
            animate={{
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
} 