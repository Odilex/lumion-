'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlitchText } from './glitch-text';
import { HologramCard } from './hologram-card';
import { Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "Working with this team has been transformative for our business. Their innovative approach and technical expertise helped us achieve our digital goals faster than we imagined.",
    author: "John Smith",
    role: "CEO",
    company: "TechCorp Solutions",
    image: "/testimonials/john.jpg"
  },
  {
    id: 2,
    content: "The attention to detail and creative solutions provided by the team were exceptional. They didn't just meet our expectations; they exceeded them in every way.",
    author: "Sarah Johnson",
    role: "Marketing Director",
    company: "InnovateLabs",
    image: "/testimonials/sarah.jpg"
  },
  {
    id: 3,
    content: "Their ability to understand our vision and translate it into a stunning digital experience was remarkable. The results have had a direct impact on our business growth.",
    author: "Michael Chen",
    role: "Product Manager",
    company: "FutureWorks Inc",
    image: "/testimonials/michael.jpg"
  }
];

export function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
      
      <div className="container relative">
        <div className="text-center mb-16">
          <GlitchText
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            What Our Clients Say
          </GlitchText>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about
            working with us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <HologramCard>
                <div className="p-8 md:p-12">
                  <Quote className="w-12 h-12 text-primary mb-6" />
                  <p className="text-xl md:text-2xl mb-8 italic text-muted-foreground">
                    "{testimonials[currentIndex].content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].author}
                      className="w-16 h-16 rounded-full"
                    />
                    <div>
                      <div className="font-bold text-lg">
                        {testimonials[currentIndex].author}
                      </div>
                      <div className="text-primary">
                        {testimonials[currentIndex].role}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonials[currentIndex].company}
                      </div>
                    </div>
                  </div>
                </div>
              </HologramCard>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index
                    ? 'bg-primary w-12'
                    : 'bg-muted hover:bg-muted/80'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-12 w-24 h-24 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
} 