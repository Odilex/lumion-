"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Tag, ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/sample-data';
import { HologramCard } from '@/components/hologram-card';
import { GlitchText } from '@/components/glitch-text';
import { NeonGlow } from '@/components/neon-glow';

interface Props {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find(p => p.link === `/projects/${params.slug}`);

  if (!project) {
    return (
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
          <Link href="/projects" className="text-primary hover:underline">
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link href="/projects" className="inline-flex items-center text-muted-foreground hover:text-primary">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {project.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            <HologramCard>
              <div className="relative aspect-video">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            </HologramCard>

            <div className="space-y-8">
              <section>
                <GlitchText className="text-2xl font-bold mb-4">
                  Project Overview
                </GlitchText>
                <p className="text-muted-foreground">
                  Detailed description of the project, its goals, and the problems it solves.
                  This section would be customized for each project with specific details.
                </p>
              </section>

              <section>
                <GlitchText className="text-2xl font-bold mb-4">
                  Key Features
                </GlitchText>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Feature 1 description</li>
                  <li>Feature 2 description</li>
                  <li>Feature 3 description</li>
                  <li>Feature 4 description</li>
                </ul>
              </section>

              <section>
                <GlitchText className="text-2xl font-bold mb-4">
                  Development Process
                </GlitchText>
                <p className="text-muted-foreground">
                  Description of the development process, challenges faced, and solutions implemented.
                  This would be customized for each project with specific details.
                </p>
              </section>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <HologramCard className="p-6">
              <h2 className="text-xl font-bold mb-4">Project Details</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-2">Category</h3>
                  <p>{project.category}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-2">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-muted"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-4 space-y-4">
                  <NeonGlow>
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center gap-2 w-full py-2 font-semibold"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Link>
                  </NeonGlow>
                  <NeonGlow>
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center gap-2 w-full py-2 font-semibold"
                    >
                      <Github className="w-4 h-4" />
                      View Source
                    </Link>
                  </NeonGlow>
                </div>
              </div>
            </HologramCard>

            <HologramCard className="p-6">
              <h2 className="text-xl font-bold mb-4">Need Something Similar?</h2>
              <p className="text-muted-foreground mb-4">
                We can help you build a similar project tailored to your needs.
              </p>
              <NeonGlow>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 w-full py-2 font-semibold"
                >
                  Start a Project
                </Link>
              </NeonGlow>
            </HologramCard>
          </div>
        </div>
      </div>
    </main>
  );
} 