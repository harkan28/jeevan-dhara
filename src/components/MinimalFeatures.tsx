'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';

const features = [
  {
    title: "AI Prediction Engine",
    description: "Machine learning algorithms analyze patterns to predict disease outbreaks 1-2 weeks in advance.",
  },
  {
    title: "IoT Water Sensors",
    description: "Real-time monitoring of pH, turbidity, bacteria, and chemical contaminants in water sources.",
  },
  {
    title: "Offline Mobile App",
    description: "Works without internet connectivity, ensuring rural communities stay connected to health data.",
  },
  {
    title: "Multi-language Support",
    description: "Available in local Northeast Indian languages for better community accessibility.",
  },
  {
    title: "Community Alerts",
    description: "Instant notifications via SMS and app when water quality issues are detected.",
  },
  {
    title: "Health Dashboard",
    description: "Visual analytics for health officials to track trends and make data-driven decisions.",
  }
];

const MinimalFeatures = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background Effects */}
      <motion.div 
        className="absolute top-0 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
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
        className="absolute bottom-0 right-0 w-80 h-80 bg-purple-100/15 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          x: [0, -30, 0],
          y: [0, -20, 0]
        }}
        transition={{ 
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ marginBottom: 'clamp(4rem, 8vw, 6rem)' }}
        >
          <motion.h2 
            className="hero-title text-black text-balance"
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 4rem)',
              fontWeight: '800',
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
              marginBottom: '2rem',
              background: 'linear-gradient(135deg, #1a1a1a 0%, #333333 100%)',
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
            System Features
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-3xl mx-auto text-pretty glass-effect rounded-lg p-6"
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              lineHeight: '1.6',
              fontWeight: '500',
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Comprehensive technology stack designed for rural healthcare challenges in Northeast India
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid-auto-fit">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
              whileHover={{ y: -8 }}
            >
              <SpotlightCard
                spotlightColor="rgba(99, 102, 241, 0.25)"
                className="h-full min-h-[200px] flex flex-col"
              >
                <h3 
                  className="font-medium text-black group-hover:text-gray-900 transition-colors text-balance relative z-10"
                  style={{
                    fontSize: 'clamp(1.125rem, 3vw, 1.25rem)',
                    lineHeight: '1.3',
                    marginBottom: '1rem'
                  }}
                >
                  {feature.title}
                </h3>
                <p 
                  className="text-gray-600 leading-relaxed text-pretty flex-grow relative z-10"
                  style={{
                    fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
                    lineHeight: '1.6'
                  }}
                >
                  {feature.description}
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MinimalFeatures;
