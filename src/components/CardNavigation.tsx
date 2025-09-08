'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const CardNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', href: '#', icon: '🏠' },
    { id: 'about', label: 'About', href: '#about', icon: '📋' },
    { id: 'features', label: 'Features', href: '#features', icon: '⚡' },
    { id: 'team', label: 'Team', href: '#team', icon: '👥' },
    { id: 'contact', label: 'Contact', href: '#contact', icon: '📞' }
  ];

  return (
    <motion.nav
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[9999]"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      style={{ 
        position: 'fixed',
        top: '1rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9999
      }}
    >
      {/* Main Card Container */}
      <motion.div
        className="relative bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl overflow-hidden"
        style={{
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(20px)',
          boxShadow: `
            0 8px 32px rgba(0, 0, 0, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.2),
            inset 0 -1px 0 rgba(255, 255, 255, 0.1)
          `
        }}
      >
        {/* Chrome-like reflection overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)',
            borderRadius: 'inherit'
          }}
        />
        
        {/* Navigation Items Container */}
        <div className="flex items-center space-x-1 p-3">
          {navItems.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.href}
              className="relative group"
              onMouseEnter={() => setActiveItem(item.id)}
              onMouseLeave={() => setActiveItem('')}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Individual Card */}
              <motion.div
                className="relative px-4 py-3 rounded-xl transition-all duration-300 overflow-hidden"
                style={{
                  background: activeItem === item.id 
                    ? 'rgba(255, 255, 255, 0.15)' 
                    : 'rgba(255, 255, 255, 0.05)',
                  border: activeItem === item.id 
                    ? '1px solid rgba(255, 255, 255, 0.3)' 
                    : '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)'
                }}
                animate={{
                  background: activeItem === item.id 
                    ? 'rgba(255, 255, 255, 0.15)' 
                    : 'rgba(255, 255, 255, 0.05)'
                }}
              >
                {/* Hover effect background */}
                <AnimatePresence>
                  {activeItem === item.id && (
                    <motion.div
                      className="absolute inset-0"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 197, 253, 0.08) 100%)',
                        borderRadius: 'inherit'
                      }}
                    />
                  )}
                </AnimatePresence>
                
                {/* Content */}
                <div className="relative flex items-center space-x-2">
                  <motion.span 
                    className="text-lg"
                    animate={{
                      scale: activeItem === item.id ? 1.1 : 1,
                      rotate: activeItem === item.id ? [0, -10, 10, -5, 0] : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.icon}
                  </motion.span>
                  
                  <motion.span
                    className="text-sm font-medium text-gray-700 whitespace-nowrap"
                    style={{
                      color: activeItem === item.id ? '#1f2937' : '#4b5563',
                      fontWeight: activeItem === item.id ? '600' : '500'
                    }}
                    animate={{
                      color: activeItem === item.id ? '#1f2937' : '#4b5563'
                    }}
                  >
                    {item.label}
                  </motion.span>
                </div>

                {/* Shimmer effect on hover */}
                <AnimatePresence>
                  {activeItem === item.id && (
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ x: '-100%', opacity: 0 }}
                      animate={{ x: '100%', opacity: [0, 1, 0] }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6, ease: 'easeInOut' }}
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                        borderRadius: 'inherit'
                      }}
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.a>
          ))}
        </div>

        {/* Download Button */}
        <motion.div className="px-3 pb-3">
          <motion.button
            className="w-full bg-gradient-to-r from-gray-900 to-black text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 overflow-hidden relative group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
            }}
          >
            <motion.span
              className="relative z-10 flex items-center justify-center space-x-2"
              animate={{
                textShadow: [
                  '0 0 0px rgba(255,255,255,0)',
                  '0 0 10px rgba(255,255,255,0.3)',
                  '0 0 0px rgba(255,255,255,0)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span>📥</span>
              <span>Download Now</span>
            </motion.span>
            
            {/* Button hover effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              style={{ borderRadius: 'inherit' }}
            />
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

export default CardNavigation;
