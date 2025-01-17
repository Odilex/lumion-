'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Mail } from 'lucide-react';
import { GlitchText } from './glitch-text';
import { HologramCard } from './hologram-card';
import { NeonGlow } from './neon-glow';

const teamMembers = [
  {
    name: 'Jean-Paul Mugisha',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200',
    bio: 'Tech visionary with extensive experience in Rwanda\'s digital transformation.',
    social: {
      twitter: 'https://twitter.com/jpmugisha',
      linkedin: 'https://linkedin.com/in/jpmugisha',
      email: 'jp.mugisha@lumion.rw'
    }
  },
  {
    name: 'Alice Uwase',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200',
    bio: 'Leading innovation in East African tech solutions and cloud architecture.',
    social: {
      twitter: 'https://twitter.com/aliceuwase',
      linkedin: 'https://linkedin.com/in/aliceuwase',
      email: 'alice.uwase@lumion.rw'
    }
  },
  {
    name: 'David Karenzi',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200',
    bio: 'Award-winning designer shaping digital experiences across Rwanda.',
    social: {
      twitter: 'https://twitter.com/dkarenzi',
      linkedin: 'https://linkedin.com/in/dkarenzi',
      email: 'david.karenzi@lumion.rw'
    }
  },
  {
    name: 'Sarah Mutoni',
    role: 'Head of Marketing',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200',
    bio: 'Digital marketing expert specializing in East African markets.',
    social: {
      twitter: 'https://twitter.com/smutoni',
      linkedin: 'https://linkedin.com/in/smutoni',
      email: 'sarah.mutoni@lumion.rw'
    }
  }
];

export function TeamSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <GlitchText className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our Team
          </GlitchText>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate experts driving innovation and excellence in Rwanda's tech landscape
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <HologramCard className="group relative overflow-hidden">
                {/* Image */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white/80 mb-4">{member.bio}</p>
                      <div className="flex gap-4">
                        <NeonGlow>
                          <a
                            href={member.social.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40 transition-colors"
                          >
                            <Twitter className="w-5 h-5 text-white" />
                          </a>
                        </NeonGlow>
                        <NeonGlow>
                          <a
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40 transition-colors"
                          >
                            <Linkedin className="w-5 h-5 text-white" />
                          </a>
                        </NeonGlow>
                        <NeonGlow>
                          <a
                            href={`mailto:${member.social.email}`}
                            className="p-2 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40 transition-colors"
                          >
                            <Mail className="w-5 h-5 text-white" />
                          </a>
                        </NeonGlow>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary">{member.role}</p>
                </div>
              </HologramCard>
            </motion.div>
          ))}
        </div>

        {/* Join the Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
          <p className="text-muted-foreground mb-6">
            We're always looking for talented individuals to join our growing team
          </p>
          <NeonGlow>
            <a
              href="/careers"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-background hover:scale-105 transition-transform"
            >
              View Open Positions
            </a>
          </NeonGlow>
        </motion.div>
      </div>
    </section>
  );
} 