'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ParallaxSection } from '@/components/parallax-section';
import { GlitchText } from '@/components/glitch-text';
import { HologramCard } from '@/components/hologram-card';
import { Shield, Lock, Eye, Database, Server, UserCheck } from 'lucide-react';

const sections = [
  {
    icon: Shield,
    title: 'Information Collection',
    content: `We collect information that you provide directly to us, including:
      • Personal information (name, email, phone number)
      • Company information
      • Usage data and analytics
      • Technical information about your device and browser`
  },
  {
    icon: Lock,
    title: 'Data Security',
    content: `We implement appropriate security measures to protect your data:
      • Encryption of sensitive information
      • Regular security audits
      • Secure data storage
      • Access controls and authentication
      • Regular system updates`
  },
  {
    icon: Eye,
    title: 'Information Usage',
    content: `We use your information to:
      • Provide and improve our services
      • Communicate with you
      • Process transactions
      • Analyze usage patterns
      • Enhance user experience`
  },
  {
    icon: Database,
    title: 'Data Storage',
    content: `Your data is stored securely:
      • Industry-standard encryption
      • Regular backups
      • Geographic redundancy
      • Limited access protocols
      • Data retention policies`
  },
  {
    icon: Server,
    title: 'Third-Party Services',
    content: `We may share data with trusted third parties:
      • Payment processors
      • Analytics providers
      • Cloud service providers
      • Email service providers
      • Only as necessary for service delivery`
  },
  {
    icon: UserCheck,
    title: 'Your Rights',
    content: `You have the right to:
      • Access your personal data
      • Request data correction
      • Request data deletion
      • Opt-out of communications
      • File a complaint`
  }
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <ParallaxSection
        title="Privacy Policy"
        subtitle="Your Data Security is Our Priority"
        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000"
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
                How We Protect Your Data
              </GlitchText>
              <p className="text-lg text-muted-foreground">
                We are committed to protecting your privacy and ensuring the security of your personal information.
                This privacy policy explains how we collect, use, and safeguard your data.
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
                If you have any questions about our privacy policy, please{' '}
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