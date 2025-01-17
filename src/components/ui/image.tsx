"use client";

import { useState } from 'react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { cn } from '@/lib/utils';
import { PlaceholderImage } from './placeholder-image';

interface ImageProps extends Omit<NextImageProps, 'src'> {
  src: string;
  fallbackSrc?: string;
}

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#E5E7EB" offset="20%" />
      <stop stop-color="#F3F4F6" offset="50%" />
      <stop stop-color="#E5E7EB" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#E5E7EB" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

export function Image({
  src,
  alt,
  className,
  width = 1200,
  height = 800,
  fallbackSrc = '/placeholders/image-placeholder.jpg',
  ...props
}: ImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return <PlaceholderImage className={className} text={`Unable to load image: ${alt}`} />;
  }

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <NextImage
        {...props}
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn('duration-700 ease-in-out')}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`}
        onError={() => setError(true)}
      />
    </div>
  );
} 