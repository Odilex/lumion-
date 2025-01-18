"use client";

import { AnimatedCounter } from "./animated-counter";

interface Stat {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

interface HolographicStatsProps {
  stats: Stat[];
  color?: string;
}

export function HolographicStats({ stats, color = "text-primary" }: HolographicStatsProps) {
  return <AnimatedCounter stats={stats} color={color} />;
} 