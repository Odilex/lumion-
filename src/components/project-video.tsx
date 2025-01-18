"use client";

import { motion } from "framer-motion";
import { Play, Pause, Maximize2 } from "lucide-react";
import Image from "next/image";
import { useState, useRef } from "react";
import { GlitchText } from "./glitch-text";
import { CyberCard } from "./cyber-card";

interface ProjectVideoProps {
  videoUrl: string;
  thumbnailUrl: string;
  title: string;
}

export function ProjectVideo({
  videoUrl,
  thumbnailUrl,
  title,
}: ProjectVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (!isFullscreen) {
        if (videoRef.current.requestFullscreen) {
          videoRef.current.requestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
      setIsFullscreen(!isFullscreen);
    }
  };

  return (
    <section className="py-24 bg-muted/10">
      <div className="container">
        <GlitchText
          className="text-3xl font-bold mb-12 text-center"
        >
          Project Walkthrough
        </GlitchText>

        <CyberCard>
          <div className="relative aspect-video">
            {/* Video */}
            <video
              ref={videoRef}
              className="w-full h-full object-cover rounded-lg"
              poster={thumbnailUrl}
              onEnded={() => setIsPlaying(false)}
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent flex items-center justify-center"
              animate={{ opacity: isPlaying ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            >
              {/* Thumbnail */}
              {!isPlaying && (
                <Image
                  src={thumbnailUrl}
                  alt={title}
                  fill
                  className="object-cover rounded-lg"
                />
              )}

              {/* Play/Pause button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={togglePlay}
                className="relative z-10 w-16 h-16 flex items-center justify-center rounded-full bg-primary text-background"
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6" />
                ) : (
                  <Play className="w-6 h-6 ml-1" />
                )}
              </motion.button>
            </motion.div>

            {/* Controls */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between"
              initial={false}
              animate={{ opacity: isPlaying ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Progress bar */}
              <div className="flex-1 mx-4 h-1 bg-background/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary"
                  style={{
                    scaleX: videoRef.current
                      ? videoRef.current.currentTime / videoRef.current.duration
                      : 0,
                    transformOrigin: "left",
                  }}
                />
              </div>

              {/* Fullscreen button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleFullscreen}
                className="ml-4 w-8 h-8 flex items-center justify-center rounded-full bg-background/20 text-primary"
              >
                <Maximize2 className="w-4 h-4" />
              </motion.button>
            </motion.div>

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
        </CyberCard>
      </div>
    </section>
  );
} 