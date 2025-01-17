"use client";

import { cn } from '@/lib/utils';

interface PlaceholderImageProps {
  className?: string;
  text?: string;
}

export function PlaceholderImage({ className, text = 'Image not found' }: PlaceholderImageProps) {
  return (
    <div
      className={cn(
        'w-full h-full bg-muted flex items-center justify-center text-muted-foreground text-sm',
        className
      )}
    >
      {text}
    </div>
  );
} 