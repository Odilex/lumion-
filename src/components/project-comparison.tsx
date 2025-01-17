"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { GlitchText } from "./glitch-text";
import { CyberCard } from "./cyber-card";

interface ProjectComparisonProps {
  project: {
    title: string;
  };
  beforeImage: string;
  afterImage: string;
}

export function ProjectComparison({
  project,
  beforeImage,
  afterImage,
}: ProjectComparisonProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const sliderX = useTransform(x, [-150, 150], [0, 100]);

  useEffect(() => {
    const updateSliderPosition = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const position = ((x.get() + 150) / 300) * 100;
        setSliderPosition(Math.min(Math.max(position, 0), 100));
      }
    };

    const unsubscribe = x.onChange(updateSliderPosition);
    return () => unsubscribe();
  }, [x]);

  const handleDrag = (event: MouseEvent | TouchEvent) => {
    if (containerRef.current && isDragging) {
      const rect = containerRef.current.getBoundingClientRect();
      const clientX = "touches" in event ? event.touches[0].clientX : event.clientX;
      const position = ((clientX - rect.left) / rect.width) * 100;
      setSliderPosition(Math.min(Math.max(position, 0), 100));
    }
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleDrag);
      window.addEventListener("touchmove", handleDrag);
      window.addEventListener("mouseup", () => setIsDragging(false));
      window.addEventListener("touchend", () => setIsDragging(false));
    }

    return () => {
      window.removeEventListener("mousemove", handleDrag);
      window.removeEventListener("touchmove", handleDrag);
      window.removeEventListener("mouseup", () => setIsDragging(false));
      window.removeEventListener("touchend", () => setIsDragging(false));
    };
  }, [isDragging]);

  return (
    <section className="py-24">
      <div className="container">
        <GlitchText
          text="Before & After"
          className="text-3xl font-bold mb-12 text-center"
        />

        <CyberCard>
          <div
            ref={containerRef}
            className="relative aspect-video cursor-ew-resize"
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
          >
            {/* Before image */}
            <div className="absolute inset-0">
              <Image
                src={beforeImage}
                alt={`${project.title} - Before`}
                fill
                className="object-cover"
              />
            </div>

            {/* After image */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <Image
                src={afterImage}
                alt={`${project.title} - After`}
                fill
                className="object-cover"
              />

              {/* Scanlines effect */}
              <div className="absolute inset-0 pointer-events-none mix-blend-overlay">
                {Array.from({ length: 50 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-full h-px bg-primary/10"
                    style={{ top: `${(i / 50) * 100}%` }}
                    animate={{
                      opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Slider */}
            <motion.div
              className="absolute top-0 bottom-0"
              style={{ left: `${sliderPosition}%` }}
              drag="x"
              dragConstraints={containerRef}
              dragElastic={0}
              dragMomentum={false}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={() => setIsDragging(false)}
            >
              {/* Slider line */}
              <div className="absolute top-0 bottom-0 w-1 bg-primary transform -translate-x-1/2">
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>

              {/* Slider handle */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-8 h-8 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-primary"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Labels */}
            <div className="absolute bottom-4 left-4 px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-sm">
              Before
            </div>
            <div className="absolute bottom-4 right-4 px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-sm">
              After
            </div>
          </div>
        </CyberCard>
      </div>
    </section>
  );
} 