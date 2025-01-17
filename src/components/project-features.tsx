"use client";

import { motion } from "framer-motion";
import { CyberCard } from "./cyber-card";
import { GlitchText } from "./glitch-text";

interface ProjectFeaturesProps {
  project: {
    features: Array<{
      title: string;
      description: string;
      icon: React.ComponentType<{ className?: string }>;
    }>;
  };
}

export function ProjectFeatures({ project }: ProjectFeaturesProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
          text="Key Features"
          className="text-3xl font-bold mb-12 text-center"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {project.features.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <CyberCard>
                <div className="p-6 space-y-4">
                  <div className="relative w-12 h-12 mb-6">
                    {/* Animated background */}
                    <motion.div
                      className="absolute inset-0 bg-primary/20 rounded-lg"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    
                    {/* Icon */}
                    <div className="relative flex items-center justify-center w-full h-full">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  
                  <p className="text-muted-foreground">{feature.description}</p>

                  {/* Decorative elements */}
                  <div className="absolute bottom-0 left-0 w-full h-1 overflow-hidden">
                    <motion.div
                      className="w-full h-full bg-primary/20"
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </div>
                </div>
              </CyberCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 