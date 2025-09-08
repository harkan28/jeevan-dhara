'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const PillNavigation = () => {
  const [activeItem, setActiveItem] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    const navItems = [
    { id: 'home', label: 'Home', href: '#' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'features', label: 'Features', href: '#features' },
    { id: 'team', label: 'Team', href: '#team' },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: scrolled 
          ? 'rgba(249, 250, 251, 0.95)' 
          : 'rgba(249, 250, 251, 0.8)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: scrolled 
          ? '0 4px 20px rgba(0, 0, 0, 0.08)' 
          : '0 2px 10px rgba(0, 0, 0, 0.04)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">💧</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                Jeevan Dhara
              </span>
            </motion.div>
          </div>

          {/* Pill Navigation */}
          <nav className="hidden md:flex">
            <motion.div
              className="relative bg-white/60 backdrop-blur-md rounded-full p-1 border border-gray-200/50 shadow-lg"
              style={{
                background: 'rgba(255, 255, 255, 0.6)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.9)'
              }}
            >
              <div className="flex items-center space-x-1">
                {navItems.map((item) => (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    className="relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full"
                    style={{
                      color: activeItem === item.id ? '#1a1a1a' : '#6b7280'
                    }}
                    onMouseEnter={() => setActiveItem(item.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {activeItem === item.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: 'linear-gradient(135deg, #6C63FF 0%, #5B54E8 100%)',
                          boxShadow: '0 4px 16px rgba(108, 99, 255, 0.3)'
                        }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                      />
                    )}
                    <span className={`relative z-10 ${
                      activeItem === item.id ? 'text-white' : 'text-gray-600'
                    }`}>
                      {item.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center">
            {/* Download Button */}
            <motion.button
              className="relative px-8 py-3 font-semibold text-white rounded-full overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, #6C63FF 0%, #5B54E8 100%)',
                boxShadow: '0 4px 16px rgba(108, 99, 255, 0.3)'
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 8px 25px rgba(108, 99, 255, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="relative z-10">Download App</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ borderRadius: 'inherit' }}
              />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xl">☰</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default PillNavigation;
