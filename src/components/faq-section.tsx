'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { GlitchText } from './glitch-text';
import { HologramCard } from './hologram-card';

const faqs = [
  {
    question: 'What services does Lumion offer?',
    answer: 'Lumion offers a comprehensive range of digital services including software development, web development, mobile app development, digital marketing, SEO optimization, and UI/UX design. We specialize in creating custom solutions tailored to the East African market.'
  },
  {
    question: 'Where is Lumion located?',
    answer: 'We are based in Kigali, Rwanda, at the Norrsken House. Our strategic location allows us to serve clients across East Africa while maintaining strong connections with the local tech ecosystem.'
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary depending on scope and complexity. A simple website might take 4-6 weeks, while a complex software solution could take 3-6 months. We provide detailed timelines during our initial consultation.'
  },
  {
    question: 'Do you offer support after project completion?',
    answer: 'Yes, we provide comprehensive post-launch support and maintenance services. Our team is available 7 days a week to ensure your digital solutions run smoothly and efficiently.'
  },
  {
    question: 'What technologies do you work with?',
    answer: 'We work with a wide range of modern technologies including React, Next.js, Node.js, Python, AWS, and more. Our tech stack is constantly evolving to incorporate the latest innovations in the industry.'
  },
  {
    question: 'How do you handle project communication?',
    answer: 'We maintain transparent communication through regular updates, scheduled meetings, and progress reports. Clients have direct access to our project management tools and can reach us through various channels including WhatsApp and email.'
  }
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <HologramCard className="overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left flex items-center justify-between"
      >
        <span className="text-lg font-semibold">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-6 pb-4 text-muted-foreground">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </HologramCard>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
            Frequently Asked Questions
          </GlitchText>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services and processes
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
} 