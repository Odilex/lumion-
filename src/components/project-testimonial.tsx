"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";
import { GlitchText } from "./glitch-text";
import { CyberCard } from "./cyber-card";

interface ProjectTestimonialProps {
  project: {
    testimonial?: {
      content: string;
      author: {
        name: string;
        role: string;
        company: string;
        image: string;
      };
    };
  };
}

export function ProjectTestimonial({ project }: ProjectTestimonialProps) {
  if (!project.testimonial) return null;

  return (
    <section className="py-24">
      <div className="container">
        <GlitchText
          className="text-3xl font-bold mb-12 text-center"
        >
          Client Testimonial
        </GlitchText>

        <CyberCard>
          <div className="relative p-8 md:p-12">
            {/* Background pattern */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0">
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
            </div>

            <div className="relative">
              {/* Quote icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
                className="absolute -top-6 -left-6 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"
              >
                <Quote className="w-6 h-6 text-primary" />
              </motion.div>

              {/* Testimonial content */}
              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl font-medium text-muted-foreground mb-8"
              >
                "{project.testimonial.content}"
              </motion.blockquote>

              {/* Author */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-4"
              >
                {/* Author image */}
                <div className="relative">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={project.testimonial.author.image}
                      alt={project.testimonial.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Animated border */}
                  <motion.div
                    className="absolute -inset-1 rounded-full border border-primary"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </div>

                {/* Author details */}
                <div>
                  <div className="font-bold">
                    {project.testimonial.author.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {project.testimonial.author.role}
                  </div>
                  <div className="text-sm text-primary">
                    {project.testimonial.author.company}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16">
                <motion.div
                  className="absolute top-0 left-0 w-full h-[2px] bg-primary origin-left"
                  animate={{ scaleX: [0, 1] }}
                  transition={{ duration: 1 }}
                />
                <motion.div
                  className="absolute top-0 left-0 w-[2px] h-full bg-primary origin-top"
                  animate={{ scaleY: [0, 1] }}
                  transition={{ duration: 1 }}
                />
              </div>
              <div className="absolute top-0 right-0 w-16 h-16">
                <motion.div
                  className="absolute top-0 right-0 w-full h-[2px] bg-primary origin-right"
                  animate={{ scaleX: [0, 1] }}
                  transition={{ duration: 1 }}
                />
                <motion.div
                  className="absolute top-0 right-0 w-[2px] h-full bg-primary origin-top"
                  animate={{ scaleY: [0, 1] }}
                  transition={{ duration: 1 }}
                />
              </div>
              <div className="absolute bottom-0 left-0 w-16 h-16">
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-primary origin-left"
                  animate={{ scaleX: [0, 1] }}
                  transition={{ duration: 1 }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 w-[2px] h-full bg-primary origin-bottom"
                  animate={{ scaleY: [0, 1] }}
                  transition={{ duration: 1 }}
                />
              </div>
              <div className="absolute bottom-0 right-0 w-16 h-16">
                <motion.div
                  className="absolute bottom-0 right-0 w-full h-[2px] bg-primary origin-right"
                  animate={{ scaleX: [0, 1] }}
                  transition={{ duration: 1 }}
                />
                <motion.div
                  className="absolute bottom-0 right-0 w-[2px] h-full bg-primary origin-bottom"
                  animate={{ scaleY: [0, 1] }}
                  transition={{ duration: 1 }}
                />
              </div>
            </div>
          </div>
        </CyberCard>
      </div>
    </section>
  );
} 