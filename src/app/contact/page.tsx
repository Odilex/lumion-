'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ParallaxSection } from '@/components/parallax-section';
import { GlitchText } from '@/components/glitch-text';
import { HologramCard } from '@/components/hologram-card';
import { NeonGlow } from '@/components/neon-glow';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    details: 'lumion.corps@gmail.com',
    link: 'mailto:lumion.corps@gmail.com'
  },
  {
    icon: Phone,
    title: 'Phone',
    details: '+250 780 217 221',
    link: 'tel:+250780217221'
  },
  {
    icon: MapPin,
    title: 'Location',
    details: 'Norrsken House Kigali, 1 KN 78 St, Kigali, Rwanda',
    link: 'https://maps.google.com/?q=Norrsken+House+Kigali'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: 'Monday - Sunday: 9:00 AM - 6:00 PM (CAT)',
    link: null
  }
];

const socialLinks = [
  { name: 'Facebook', url: 'https://facebook.com/__lumion' },
  { name: 'Twitter', url: 'https://twitter.com/__lumion' },
  { name: 'LinkedIn', url: 'https://linkedin.com/company/lumion' },
  { name: 'Instagram', url: 'https://instagram.com/__lumion' }
];

export default function ContactPage() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };

    // Send to your email endpoint
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        (e.target as HTMLFormElement).reset();
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <ParallaxSection
        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000"
        title="Contact Us"
        subtitle="Let's Build Rwanda's Digital Future Together"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
      </ParallaxSection>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <GlitchText className="text-3xl md:text-4xl font-bold mb-4">
              Get in Touch
            </GlitchText>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Located in the heart of Kigali at Norrsken House, we're here to help transform your ideas into reality. 
              Whether you're a startup or an established business in East Africa, let's create something extraordinary together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <HologramCard className="p-6 h-full">
                  <info.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {info.details}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{info.details}</p>
                  )}
                </HologramCard>
              </motion.div>
            ))}
        </div>

            {/* Contact Form */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <HologramCard className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    />
                  </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                    className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                    rows={6}
                      required
                    className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  ></textarea>
                  </div>
                <div>
                  <NeonGlow>
                  <button
                    type="submit"
                      className="w-full py-4 flex items-center justify-center gap-2 text-lg font-semibold hover:scale-105 transition-transform"
                  >
                      <Send className="w-5 h-5" />
                    Send Message
                  </button>
                  </NeonGlow>
                </div>
                </form>
              </HologramCard>
            </motion.div>
        </div>
      </section>
    </main>
  );
} 