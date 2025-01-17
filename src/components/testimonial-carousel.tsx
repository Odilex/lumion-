"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoPlayInterval?: number;
}

export function TestimonialCarousel({
  testimonials,
  autoPlayInterval = 5000
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [testimonials.length, autoPlayInterval]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      if (newDirection === 1) {
        return (prev + 1) % testimonials.length;
      }
      return prev === 0 ? testimonials.length - 1 : prev - 1;
    });
  };

  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={() => paginate(-1)}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
      </div>

      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={() => paginate(1)}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="w-full px-4"
        >
          <div className="bg-muted p-8 rounded-2xl">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div className="flex-1">
                <Quote className="w-12 h-12 text-primary/20 mb-4" />
                <p className="text-lg md:text-xl mb-6 italic text-muted-foreground">
                  {testimonials[currentIndex].content}
                </p>
                <div>
                  <h4 className="font-semibold text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-muted-foreground">
                    {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primary' : 'bg-primary/20'
            }`}
          />
        ))}
      </div>
    </div>
  );
} 