'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ParallaxSection } from '@/components/parallax-section';
import { GlitchText } from '@/components/glitch-text';
import { HologramCard } from '@/components/hologram-card';
import { Scale, FileText, Shield, AlertTriangle, Clock, Zap } from 'lucide-react';

const sections = [
  {
    icon: Scale,
    title: 'Agreement to Terms',
    content: `By accessing our website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.`
  },
  {
    icon: FileText,
    title: 'Use License',
    content: `We grant you a limited, non-exclusive, non-transferable license to:
      • Access and view our content
      • Use our services as intended
      • Download materials for personal use
      
      You must not:
      • Modify or copy materials without permission
      • Use materials for commercial purposes
      • Remove any copyright notices
      • Transfer materials to another person`
  },
  {
    icon: Shield,
    title: 'User Responsibilities',
    content: `You are responsible for:
      • Maintaining account security
      • Providing accurate information
      • Complying with all laws
      • Respecting intellectual property
      • Using services appropriately`
  },
  {
    icon: AlertTriangle,
    title: 'Disclaimer',
    content: `Our services are provided "as is". We make no warranties, expressed or implied, and hereby disclaim all warranties, including:
      • Accuracy of content
      • Uninterrupted service
      • Virus-free software
      • Compatibility with your systems
      • Meeting your specific needs`
  },
  {
    icon: Clock,
    title: 'Service Modifications',
    content: `We reserve the right to:
      • Modify or discontinue services
      • Change pricing at any time
      • Update terms and conditions
      • Restrict access to services
      • Terminate accounts`
  },
  {
    icon: Zap,
    title: 'Limitation of Liability',
    content: `We shall not be liable for:
      • Direct or indirect damages
      • Loss of data or profits
      • Business interruption
      • Technical issues
      • Third-party actions`
  }
];

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <ParallaxSection
        title="Terms of Service"
        subtitle="Understanding Our Agreement"
        image="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=1000"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
      </ParallaxSection>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <GlitchText className="text-3xl md:text-4xl font-bold mb-4">
                Terms & Conditions
              </GlitchText>
              <p className="text-lg text-muted-foreground">
                Please read these terms carefully before using our services.
                By accessing or using our services, you agree to be bound by these terms.
                  </p>
                </div>

            <div className="space-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <HologramCard className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <section.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                        <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                        <div className="text-muted-foreground whitespace-pre-line">
                          {section.content}
                </div>
                </div>
                </div>
                  </HologramCard>
                </motion.div>
              ))}
                </div>

            <div className="mt-12 text-center text-muted-foreground">
              <p className="mb-4">
                Last updated: January 14, 2024
              </p>
              <p>
                If you have any questions about our terms of service, please{' '}
                <a href="/contact" className="text-primary hover:underline">
                  contact us
                </a>
                .
                  </p>
                </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 