'use client';

import React from 'react';
import { motion } from 'framer-motion';

const MinimalFooter = () => {
  return (
    <footer className="bg-gradient-to-br from-black to-gray-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <motion.div 
        className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl"
        animate={{ 
          scale: [1.1, 1, 1.1],
          x: [0, -30, 0],
          y: [0, -20, 0]
        }}
        transition={{ 
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div 
        className="container relative z-10"
        style={{ 
          paddingTop: 'clamp(4rem, 8vw, 6rem)', 
          paddingBottom: 'clamp(4rem, 8vw, 6rem)' 
        }}
      >
        <div 
          className="grid lg:grid-cols-2 items-start"
          style={{ gap: 'clamp(3rem, 8vw, 6rem)' }}
        >
          {/* Main Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <motion.h2 
                className="hero-title text-balance"
                style={{
                  fontSize: 'clamp(2.5rem, 8vw, 4rem)',
                  fontWeight: '900',
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em',
                  background: 'linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                Jeevan Dhara
              </motion.h2>
              <p 
                className="text-gray-400 leading-relaxed max-w-lg text-pretty"
                style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
                  lineHeight: '1.6'
                }}
              >
                Smart Water Health Monitoring System for rural Northeast India. 
                Protecting communities through AI-powered early warning systems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <p 
                className="text-gray-500"
                style={{ fontSize: 'clamp(0.875rem, 2vw, 0.875rem)' }}
              >
                Smart India Hackathon 2025 Project
              </p>
              <p 
                className="text-gray-500"
                style={{ fontSize: 'clamp(0.875rem, 2vw, 0.875rem)' }}
              >
                Built with passion for rural healthcare innovation
              </p>
            </motion.div>
          </div>

          {/* Links & Contact */}
          <div 
            className="grid sm:grid-cols-2"
            style={{ gap: 'clamp(2rem, 6vw, 3rem)' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <h3 
                className="font-medium"
                style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}
              >
                Project
              </h3>
              <div className="space-y-3">
                {[
                  { label: 'About System', href: '#about' },
                  { label: 'Features', href: '#features' },
                  { label: 'Our Team', href: '#team' },
                  { label: 'View Demo', href: '#demo' }
                ].map((link, index) => (
                  <a 
                    key={index}
                    href={link.href} 
                    className="block text-gray-400 hover:text-white transition-colors"
                    style={{ 
                      fontSize: 'clamp(0.875rem, 2vw, 0.875rem)',
                      touchAction: 'manipulation'
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <h3 
                className="font-medium"
                style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}
              >
                Contact
              </h3>
              <div className="space-y-3">
                {[
                  'Team Lead: Harshit Rawal',
                  'Email: team@jeevandhara.com',
                  'Institution: [Your Institution]'
                ].map((contact, index) => (
                  <p 
                    key={index}
                    className="text-gray-400"
                    style={{ fontSize: 'clamp(0.875rem, 2vw, 0.875rem)' }}
                  >
                    {contact}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ 
            marginTop: 'clamp(3rem, 6vw, 4rem)', 
            paddingTop: 'clamp(2rem, 4vw, 2rem)' 
          }}
        >
          <p 
            className="text-gray-500 text-center sm:text-left"
            style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}
          >
            © 2025 Jeevan Dhara. Smart India Hackathon 2025.
          </p>
          <p 
            className="text-gray-500 text-center sm:text-right"
            style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}
          >
            Built with Next.js, TypeScript & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default MinimalFooter;
