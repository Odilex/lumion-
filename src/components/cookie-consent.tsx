'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="relative bg-black/80 backdrop-blur-sm rounded-lg border border-cyan-500/30 p-6 shadow-lg"
              initial={false}
              animate={{
                boxShadow: '0 0 30px rgba(34, 211, 238, 0.1)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 rounded-lg" />
              
              <div className="relative flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2 font-mono">
                    🍪 Privacy Settings
                  </h3>
                  <p className="text-gray-300 text-sm">
                    We use cookies to enhance your browsing experience and analyze our traffic. 
                    By clicking "Accept All", you consent to our use of cookies. 
                    See our{' '}
                    <Link
                      href="/privacy"
                      className="text-cyan-400 hover:text-cyan-300 underline transition-colors"
                    >
                      Privacy Policy
                    </Link>
                    {' '}for more information.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.button
                    onClick={handleDecline}
                    className="px-6 py-2 rounded-md border border-cyan-500/30 text-cyan-400 hover:bg-cyan-950/30 transition-colors font-mono text-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Decline All
                  </motion.button>
                  <motion.button
                    onClick={handleAccept}
                    className="px-6 py-2 rounded-md bg-cyan-500 text-black hover:bg-cyan-400 transition-colors font-mono text-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Accept All
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 