"use client";

import { motion } from "framer-motion";
import { GlitchText } from "./glitch-text";
import { NeonGlow } from "./neon-glow";

interface ProjectTechnologiesProps {
  project: {
    technologies: Array<{
      name: string;
      icon: React.ComponentType<{ className?: string }>;
      description: string;
    }>;
  };
}

export function ProjectTechnologies({ project }: ProjectTechnologiesProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-24 bg-muted/10">
      <div className="container">
        <GlitchText
          className="text-3xl font-bold mb-12 text-center"
        >
          Technologies Used
        </GlitchText>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {project.technologies.map((tech, index) => (
            <motion.div key={index} variants={item}>
              <NeonGlow color="#00ff80">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative p-6 bg-background/50 backdrop-blur-sm rounded-lg"
                >
                  {/* Icon */}
                  <div className="relative w-12 h-12 mx-auto mb-4">
                    {/* Animated background */}
                    <motion.div
                      className="absolute inset-0 bg-primary/20 rounded-lg"
                      animate={{
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    
                    {/* Icon */}
                    <div className="relative flex items-center justify-center w-full h-full">
                      <tech.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="text-lg font-bold text-center mb-2">
                    {tech.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground text-center">
                    {tech.description}
                  </p>

                  {/* Decorative elements */}
                  <div className="absolute inset-0 pointer-events-none">
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/30" />
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary/30" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary/30" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/30" />

                    {/* Scanlines */}
                    {Array.from({ length: 5 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-full h-[1px] bg-primary/10"
                        style={{ top: `${(i + 1) * 20}%` }}
                        animate={{
                          opacity: [0.1, 0.2, 0.1],
                          x: ["-100%", "100%"],
                        }}
                        transition={{
                          opacity: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                          },
                          x: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                          },
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              </NeonGlow>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 