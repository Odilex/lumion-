"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Building2, Clock, LineChart, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { HologramCard } from '@/components/hologram-card';
import { GlitchText } from '@/components/glitch-text';
import { NeonGlow } from '@/components/neon-glow';

interface Props {
  params: {
    slug: string;
  };
}

const caseStudy = {
  title: 'Digital Transformation for Enterprise',
  client: 'Global Corp Inc.',
  industry: 'Manufacturing',
  duration: '8 months',
  challenge: 'The client needed to modernize their legacy systems and improve operational efficiency across multiple departments.',
  solution: 'We implemented a comprehensive digital transformation strategy, including custom software development, process automation, and employee training.',
  results: [
    '45% increase in operational efficiency',
    '60% reduction in manual processes',
    '$2M annual cost savings',
    'Improved employee satisfaction',
    'Enhanced data security'
  ],
  technologies: [
    'React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'
  ],
  testimonial: {
    content: 'The team at Lumion delivered beyond our expectations. Their expertise and dedication transformed our operations.',
    author: 'John Doe',
    role: 'CTO, Global Corp Inc.'
  },
  image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000'
};

export default function CaseStudyContent({ params }: Props) {
  return (
    <main className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link href="/case-studies" className="inline-flex items-center text-muted-foreground hover:text-primary">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Link>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {caseStudy.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Building2 className="w-4 h-4" />
                {caseStudy.client}
              </span>
              <span className="flex items-center gap-1">
                <LineChart className="w-4 h-4" />
                {caseStudy.industry}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {caseStudy.duration}
              </span>
            </div>
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
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  fill
                  className="object-cover"
                />
              </div>
            </HologramCard>

            <div className="space-y-8">
              <section>
                <GlitchText className="text-2xl font-bold mb-4">
                  The Challenge
                </GlitchText>
                <p className="text-muted-foreground">
                  {caseStudy.challenge}
                </p>
              </section>

              <section>
                <GlitchText className="text-2xl font-bold mb-4">
                  Our Solution
                </GlitchText>
                <p className="text-muted-foreground">
                  {caseStudy.solution}
                </p>
              </section>

              <section>
                <GlitchText className="text-2xl font-bold mb-4">
                  Results & Impact
                </GlitchText>
                <div className="space-y-3">
                  {caseStudy.results.map((result, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span>{result}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <GlitchText className="text-2xl font-bold mb-4">
                  Technologies Used
                </GlitchText>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-sm bg-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <HologramCard className="p-6">
              <h2 className="text-xl font-bold mb-4">Project Overview</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-2">Client</h3>
                  <p>{caseStudy.client}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-2">Industry</h3>
                  <p>{caseStudy.industry}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-2">Duration</h3>
                  <p>{caseStudy.duration}</p>
                </div>
              </div>
            </HologramCard>

            <HologramCard className="p-6">
              <h2 className="text-xl font-bold mb-4">Client Testimonial</h2>
              <blockquote className="space-y-4">
                <p className="text-muted-foreground italic">
                  "{caseStudy.testimonial.content}"
                </p>
                <footer>
                  <div className="font-semibold">{caseStudy.testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{caseStudy.testimonial.role}</div>
                </footer>
              </blockquote>
            </HologramCard>

            <HologramCard className="p-6">
              <h2 className="text-xl font-bold mb-4">Start Your Project</h2>
              <p className="text-muted-foreground mb-4">
                Ready to transform your business with innovative solutions?
              </p>
              <NeonGlow>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 w-full py-2 font-semibold"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </NeonGlow>
            </HologramCard>
          </div>
        </div>
      </div>
    </main>
  );
} 