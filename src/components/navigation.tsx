"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const navigation = {
  mainLinks: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Services', href: '#', hasDropdown: true },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ],
  services: [
    {
      name: 'Web Development',
      href: '/services/web-development',
      description: 'Modern and scalable web applications',
      icon: '🌐',
      category: 'Development'
    },
    {
      name: 'App Development',
      href: '/services/app-development',
      description: 'Native and cross-platform mobile apps',
      icon: '📱',
      category: 'Development'
    },
    {
      name: 'Digital Marketing',
      href: '/services/digital-marketing',
      description: 'Results-driven marketing strategies',
      icon: '📈',
      category: 'Marketing'
    },
    {
      name: 'AI Solutions',
      href: '/services/ai-solutions',
      description: 'Intelligent automation and ML solutions',
      icon: '🤖',
      category: 'Technology'
    },
    {
      name: 'Cybersecurity',
      href: '/services/cybersecurity',
      description: 'Enterprise-grade security solutions',
      icon: '🔒',
      category: 'Technology'
    }
  ],
  cta: [
    { name: 'Get Started', href: '/contact' }
  ]
};

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative group">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 group-hover:from-purple-500 group-hover:to-blue-500 transition-all">
              Lumion
            </span>
            <motion.div
              className="absolute -inset-x-2 -inset-y-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.mainLinks.map((link) => (
              link.hasDropdown ? (
                <div key={link.name} className="relative group">
                  <button
                    onClick={() => setShowServices(!showServices)}
                    className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showServices ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {showServices && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 -translate-x-1/2 mt-2 w-[480px] rounded-2xl bg-gray-900/95 backdrop-blur-md border border-white/10 shadow-2xl"
                        onMouseLeave={() => setShowServices(false)}
                      >
                        <div className="p-6">
                          <div className="text-sm font-medium text-purple-400 mb-4">Our Services</div>
                          <div className="grid grid-cols-2 gap-4">
                            {['Development', 'Technology', 'Marketing'].map((category) => (
                              <div key={category} className="space-y-3">
                                <div className="text-xs font-medium text-gray-400 uppercase tracking-wider">{category}</div>
                                {navigation.services
                                  .filter(service => service.category === category)
                                  .map((service) => (
                                    <Link
                                      key={service.name}
                                      href={service.href}
                                      className="block p-3 rounded-xl hover:bg-white/5 transition-all duration-200 group relative overflow-hidden"
                                      onClick={() => setShowServices(false)}
                                    >
                                      <div className="flex items-start gap-3">
                                        <span className="text-xl">{service.icon}</span>
                                        <div>
                                          <div className="text-sm font-medium text-white group-hover:text-purple-400 transition-colors flex items-center gap-2">
                                            {service.name}
                                            <motion.span
                                              className="opacity-0 group-hover:opacity-100 transition-opacity"
                                              initial={{ x: -10 }}
                                              animate={{ x: 0 }}
                                            >
                                              →
                                            </motion.span>
                                          </div>
                                          <div className="text-xs text-gray-400 mt-1 group-hover:text-gray-300 transition-colors">
                                            {service.description}
                                          </div>
                                        </div>
                                      </div>
                                      <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100"
                                        initial={false}
                                        animate={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                      />
                                    </Link>
                                  ))}
                              </div>
                            ))}
                          </div>
                          <div className="mt-6 pt-6 border-t border-white/10">
                            <Link
                              href="/services"
                              className="text-sm text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2"
                              onClick={() => setShowServices(false)}
                            >
                              View all services
                              <motion.span
                                initial={{ x: 0 }}
                                whileHover={{ x: 4 }}
                                transition={{ duration: 0.2 }}
                              >
                                →
                              </motion.span>
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors group ${
                    isActive(link.href)
                      ? 'text-purple-400'
                      : 'text-gray-300 hover:text-purple-400'
                  }`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300" />
                </Link>
              )
            ))}

            {/* CTA Button */}
            {navigation.cta.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative group"
              >
                <span className="block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:from-purple-600 hover:to-blue-600 transition-all">
                  {item.name}
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur group-hover:blur-md transition-all"
                  style={{ zIndex: -1 }}
                  initial={{ opacity: 0.5 }}
                  whileHover={{ opacity: 0.8 }}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-gray-900/95 backdrop-blur-md rounded-b-2xl border-t border-white/10"
            >
              <div className="space-y-4 p-4">
                {navigation.mainLinks.map((link) => (
                  !link.hasDropdown ? (
                    <motion.div
                      key={link.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        className={`block px-4 py-2 text-sm font-medium rounded-lg ${
                          isActive(link.href)
                            ? 'text-purple-400 bg-white/5'
                            : 'text-gray-300 hover:text-purple-400 hover:bg-white/5'
                        } transition-colors`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ) : null
                ))}

                <div className="px-4 py-2">
                  <div className="text-sm font-medium text-gray-300 mb-2">Services</div>
                  <div className="space-y-2 pl-4">
                    {navigation.services.map((service, index) => (
                      <motion.div
                        key={service.name}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <Link
                          href={service.href}
                          className="block text-sm text-gray-400 hover:text-purple-400 py-2"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {navigation.cta.map((item) => (
                  <motion.div
                    key={item.name}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="px-4"
                  >
                    <Link
                      href={item.href}
                      className="block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-3 rounded-lg text-sm font-medium text-center hover:from-purple-600 hover:to-blue-600 transition-all"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
} 