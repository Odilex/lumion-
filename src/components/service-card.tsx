'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { NeonGlow } from './neon-glow';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  color?: string;
}

export function ServiceCard({ title, description, icon: Icon, href, color = 'text-primary' }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, rotateY: 5 }}
      whileTap={{ scale: 0.98 }}
      className="relative group"
      style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
    >
      <NeonGlow>
        <Link href={href}>
          <div className="p-6 bg-background/80 backdrop-blur-sm rounded-xl border border-border hover:border-primary/50 transition-colors">
            <div className="relative z-10">
              <div className={`${color} w-12 h-12 rounded-lg bg-background/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
              <p className="text-muted-foreground">{description}</p>
            </div>
            
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            
            {/* 3D Effect Elements */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity" style={{ transform: 'translateZ(-10px)' }} />
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity" style={{ transform: 'translateZ(-20px)' }} />
          </div>
        </Link>
      </NeonGlow>
    </motion.div>
  );
} 