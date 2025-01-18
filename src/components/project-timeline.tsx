"use client";

import { motion } from "framer-motion";
import { GlitchText } from "./glitch-text";
import { NeonGlow } from "./neon-glow";

interface ProjectTimelineProps {
  project: {
    timeline: Array<{
      date: string;
      title: string;
      description: string;
    }>;
  };
}

export function ProjectTimeline({ project }: ProjectTimelineProps) {
  return (
    <section className="py-24">
      <div className="container">
        <GlitchText
          className="text-3xl font-bold mb-12 text-center"
        >
          Project Timeline
        </GlitchText>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/20 transform -translate-x-1/2">
            <motion.div
              className="absolute top-0 w-full bg-primary"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true, margin: "-100px" }}
            />
          </div>

          <div className="space-y-16">
            {project.timeline.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {/* Line to center */}
                <motion.div
                  className={`absolute top-1/2 ${
                    index % 2 === 0 ? "right-1/2" : "left-1/2"
                  } h-px bg-primary/20`}
                  style={{
                    width: "calc(50% - 2rem)",
                  }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, margin: "-100px" }}
                />

                {/* Content */}
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-16" : "pl-16"
                  } relative`}
                >
                  <NeonGlow color="#00ff80">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-background/50 backdrop-blur-sm p-6 rounded-lg"
                    >
                      {/* Date */}
                      <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-mono mb-4">
                        {event.date}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>

                      {/* Description */}
                      <p className="text-muted-foreground">
                        {event.description}
                      </p>

                      {/* Decorative elements */}
                      <div className="absolute inset-0 pointer-events-none">
                        <div
                          className={`absolute ${
                            index % 2 === 0 ? "-right-2" : "-left-2"
                          } top-1/2 w-4 h-4 border-2 border-primary rounded-full bg-background transform -translate-y-1/2`}
                        >
                          <motion.div
                            className="absolute inset-0 rounded-full bg-primary"
                            animate={{
                              scale: [0.8, 1.2, 0.8],
                              opacity: [0.2, 0.5, 0.2],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  </NeonGlow>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 