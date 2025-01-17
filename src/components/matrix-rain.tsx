"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface MatrixRainProps {
  color?: string;
  speed?: number;
  density?: number;
  opacity?: number;
}

export function MatrixRain({
  color = "#00ff80",
  speed = 1,
  density = 0.05,
  opacity = 0.1,
}: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set up the canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Matrix characters
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()";
    const charArray = chars.split("");

    // Columns for rain drops
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    // Drawing animation
    const draw = () => {
      // Set background with fade effect
      ctx.fillStyle = `rgba(0, 0, 0, ${0.05 * speed})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text style
      ctx.fillStyle = color;
      ctx.font = `${fontSize}px monospace`;

      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        
        // Calculate position
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Draw with varying opacity
        ctx.globalAlpha = Math.random() * opacity + 0.1;
        ctx.fillText(char, x, y);

        // Reset drop or move it down
        if (y > canvas.height && Math.random() > density) {
          drops[i] = 0;
        }
        drops[i] += speed;
      }
    };

    // Animation loop
    let animationFrame: number;
    const animate = () => {
      draw();
      animationFrame = requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, [color, speed, density, opacity]);

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
} 