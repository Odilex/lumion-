'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, CheckCircle, Globe, Rocket, Star } from 'lucide-react';
import { GlitchText } from './glitch-text';
import { HologramCard } from './hologram-card';
import { stats, achievements } from '@/lib/sample-data';

export function AchievementsSection() {
  const statItems = [
    { icon: Award, label: 'Years Experience', value: stats.years },
    { icon: Rocket, label: 'Projects Completed', value: stats.projects },
    { icon: Users, label: 'Happy Clients', value: stats.clients },
    { icon: CheckCircle, label: 'Team Members', value: stats.teamSize },
    { icon: Star, label: 'Client Satisfaction', value: `${stats.satisfaction}%` },
    { icon: Globe, label: 'Countries Served', value: stats.countries }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <GlitchText className="text-3xl md:text-4xl font-bold mb-4">
            Our Impact
          </GlitchText>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering excellence and driving digital transformation across East Africa
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
          {statItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <HologramCard className="p-4 text-center h-full">
                <item.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <div className="text-2xl font-bold mb-1">{item.value}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </HologramCard>
            </motion.div>
          ))}
        </div>

        {/* Achievements Timeline */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <GlitchText className="text-3xl font-bold mb-4">
              Awards & Recognition
            </GlitchText>
            <p className="text-lg text-muted-foreground">
              Our commitment to excellence has been recognized by industry leaders
            </p>
          </motion.div>

          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <HologramCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-primary mb-1">{achievement.year}</div>
                      <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                      <p className="text-muted-foreground">{achievement.organization}</p>
                    </div>
                  </div>
                </HologramCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 