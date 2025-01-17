"use client";

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ],
  services: [
    { name: 'Software Development', href: '/services/software-development' },
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Mobile Apps', href: '/services/mobile-apps' },
    { name: 'Digital Marketing', href: '/services/digital-marketing' },
    { name: 'SEO Services', href: '/services/seo' },
    { name: 'UI/UX Design', href: '/services/design' }
  ],
  resources: [
    { name: 'Client Dashboard', href: '/dashboard' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'FAQs', href: '/faqs' }
  ],
  social: [
    { name: 'Facebook', href: 'https://facebook.com/__lumion', icon: Facebook },
    { name: 'Twitter', href: 'https://twitter.com/__lumion', icon: Twitter },
    { name: 'Instagram', href: 'https://instagram.com/__lumion', icon: Instagram },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/lumion', icon: Linkedin }
  ]
};

export function Footer() {
  return (
    <footer className="bg-muted">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="text-2xl font-bold">
              Lumion
            </Link>
            <p className="mt-4 text-muted-foreground">
              Transforming businesses through innovative software solutions and data-driven marketing strategies.
            </p>
            <div className="mt-6 flex space-x-4">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-muted-foreground" />
                <span className="text-muted-foreground">
                  1 KN 78 St<br />
                  Norrsken Kigali
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-muted-foreground" />
                <a 
                  href="tel:+250780217221" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  +250 780 217 221
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-muted-foreground" />
                <a 
                  href="mailto:lumion.corps@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  lumion.corps@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Lumion. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}