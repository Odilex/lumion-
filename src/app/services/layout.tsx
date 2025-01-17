'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Code, Search, Globe, Cpu, Rocket, Shield } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: "Web Development",
    href: "/services/web-development",
    description: "Custom web applications and websites"
  },
  {
    icon: Search,
    title: "SEO",
    href: "/services/seo",
    description: "Search engine optimization services"
  },
  {
    icon: Globe,
    title: "Digital Marketing",
    href: "/services/digital-marketing",
    description: "Comprehensive digital marketing solutions"
  },
  {
    icon: Cpu,
    title: "AI Solutions",
    href: "/services/ai-solutions",
    description: "Artificial intelligence and machine learning"
  },
  {
    icon: Rocket,
    title: "App Development",
    href: "/services/app-development",
    description: "Mobile and desktop applications"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    href: "/services/cybersecurity",
    description: "Security solutions and consulting"
  }
];

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Services Navigation */}
      <nav className="border-b border-white/10 bg-black/20 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center overflow-x-auto py-4 gap-4 no-scrollbar">
            {services.map((service) => {
              const isActive = pathname === service.href;
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="flex-shrink-0"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <service.icon className="w-4 h-4" />
                    <span className="whitespace-nowrap">{service.title}</span>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Page Content */}
      {children}
    </div>
  );
} 