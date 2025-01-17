"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface GlitchTextProps {
  text: string;
  className?: string;
}

export function GlitchText({ text, className }: GlitchTextProps) {
  return (
    <div className={cn('relative inline-block', className)}>
      <span className="relative inline-block">
        {text}
        <span
          className="absolute top-0 left-0 -translate-x-[2px] translate-y-[2px] w-full opacity-50"
          style={{
            clipPath: 'inset(40% 0 61% 0)',
            animation: 'glitch 2s infinite linear alternate-reverse'
          }}
        >
          {text}
        </span>
        <span
          className="absolute top-0 left-0 translate-x-[2px] -translate-y-[2px] w-full opacity-50 text-primary"
          style={{
            clipPath: 'inset(10% 0 85% 0)',
            animation: 'glitch 3s infinite linear alternate-reverse'
          }}
        >
          {text}
        </span>
      </span>
    </div>
  );
} 