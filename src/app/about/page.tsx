'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

const team = [
  {
    name: "Ishimwe Kevin",
    role: "Founder & CEO",
    bio: "Visionary leader with expertise in software architecture and AI solutions",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    name: "Didier Junior",
    role: "CTO",
    bio: "Technical innovator specializing in cloud architecture and cybersecurity",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    name: "Murenzi Dan",
    role: "Lead Developer",
    bio: "Full-stack expert with a passion for creating scalable solutions",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  }
];

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "100+", label: "Projects Completed" },
  { value: "50+", label: "Happy Clients" },
  { value: "24/7", label: "Support" }
];

const values = [
  {
    title: "Innovation",
    description: "Pushing boundaries with cutting-edge solutions"
  },
  {
    title: "Excellence",
    description: "Delivering exceptional quality in everything we do"
  },
  {
    title: "Integrity",
    description: "Building trust through transparency and honesty"
  },
  {
    title: "Collaboration",
    description: "Working together to achieve remarkable results"
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-900 pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10"></div>
          <div className="absolute right-0 top-20 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl"></div>
          <div className="absolute left-20 bottom-20 w-72 h-72 bg-purple-500/20 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
            >
              About Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl text-gray-300 mb-8"
            >
              Building the future of digital solutions with passion and innovation
            </motion.p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Our Team
            </h2>
            <p className="text-gray-400 text-lg">
              Meet the innovators behind our success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8">
                  <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-3xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{member.name}</h3>
                    <p className="text-purple-400 mb-4">{member.role}</p>
                    <p className="text-gray-400 mb-6">{member.bio}</p>
                    <div className="flex justify-center space-x-4">
                      <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                        <Twitter className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative bg-black/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Our Values
            </h2>
            <p className="text-gray-400 text-lg">
              The principles that guide our work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all group"
              >
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's build something amazing together
            </p>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 hover:from-purple-600 hover:to-blue-600 transition-all group"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 