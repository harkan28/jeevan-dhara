'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#features', label: 'Features' },
    { href: '#team', label: 'Team' },
    { href: '#contact', label: 'Contact' }
  ];

  const MenuIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  );

  const CloseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 glass-effect"
      style={{
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
      }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
    >
      <div className="container">
        <div 
          className="flex items-center justify-between"
          style={{ 
            height: '72px',
            paddingTop: '0.5rem',
            paddingBottom: '0.5rem'
          }}
        >
          {/* Logo with Anime.js inspired effects */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            animate={{
              filter: [
                'drop-shadow(0 0 0px rgba(59, 130, 246, 0))',
                'drop-shadow(0 0 8px rgba(59, 130, 246, 0.3))',
                'drop-shadow(0 0 0px rgba(59, 130, 246, 0))'
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Link 
              href="/" 
              className="font-medium text-black hover:text-gray-800 transition-colors relative overflow-hidden"
              style={{
                fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)',
                textDecoration: 'none'
              }}
            >
              <motion.span
                animate={{
                  background: [
                    'linear-gradient(90deg, #000000 0%, #000000 100%)',
                    'linear-gradient(90deg, #000000 0%, #3b82f6 50%, #000000 100%)',
                    'linear-gradient(90deg, #000000 0%, #000000 100%)'
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent'
                }}
              >
                Jeevan Dhara
              </motion.span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-black transition-colors relative group overflow-hidden"
                style={{
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  textDecoration: 'none',
                  padding: '0.5rem 0'
                }}
                whileHover={{ 
                  y: -2,
                  color: '#3b82f6',
                  textShadow: '0 0 8px rgba(59, 130, 246, 0.4)'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <motion.span
                  className="relative z-10"
                  animate={{
                    scale: [1, 1.02, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                >
                  {link.label}
                </motion.span>
                
                {/* Animated underline */}
                <motion.span 
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600"
                  initial={{ width: 0 }}
                  whileHover={{ 
                    width: '100%',
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                />
                
                {/* Animated background ripple on hover */}
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 rounded"
                  whileHover={{
                    opacity: 0.1,
                    scale: [1, 1.1, 1],
                    transition: { duration: 0.4 }
                  }}
                />
              </motion.a>
            ))}
            
            <motion.button
              className="bg-black text-white hover:bg-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded-lg"
              style={{
                padding: '0.5rem 1.5rem',
                fontSize: '0.875rem',
                fontWeight: '500',
                borderRadius: '0.5rem'
              }}
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              Download
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-gray-600 hover:text-black transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            style={{ 
              minWidth: '44px',
              minHeight: '44px',
              touchAction: 'manipulation'
            }}
            aria-label="Toggle mobile menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <CloseIcon />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <MenuIcon />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div 
              className="container"
              style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem' }}
            >
              <div className="space-y-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="block text-gray-600 hover:text-black transition-colors"
                    style={{
                      fontSize: '1rem',
                      fontWeight: '500',
                      padding: '0.75rem 0',
                      textDecoration: 'none',
                      touchAction: 'manipulation'
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
                
                                  <button className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-900 transition-colors font-medium">
                    Download
                  </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
