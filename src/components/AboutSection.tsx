'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SpotlightCard from './SpotlightCard';

const panels = [
  {
    id: 1,
    title: "Water Quality Monitoring",
    description: "Real-time analysis of water parameters including pH, turbidity, bacteria levels, and chemical contaminants.",
    color: "bg-gray-50",
    textColor: "text-gray-900"
  },
  {
    id: 2,
    title: "Disease Prediction",
    description: "AI algorithms predict potential water-borne disease outbreaks using historical data and current conditions.",
    color: "bg-black",
    textColor: "text-white"
  },
  {
    id: 3,
    title: "Community Alerts",
    description: "Instant notifications to rural communities when water quality issues are detected.",
    color: "bg-gray-100",
    textColor: "text-gray-900"
  }
];

const AboutSection = () => {
  const [currentPanel, setCurrentPanel] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPanel((prev) => (prev + 1) % panels.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Effects */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-100/30 to-purple-100/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.4, 1],
          rotate: [0, 180, 360],
          x: [0, 100, 0],
          y: [0, 50, 0]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-purple-100/25 to-blue-100/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1.3, 1, 1.3],
          rotate: [360, 180, 0],
          x: [0, -80, 0],
          y: [0, -40, 0]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container relative z-10">
        <div 
          className="grid lg:grid-cols-2 items-center"
          style={{ gap: 'clamp(3rem, 8vw, 6rem)' }}
        >
          {/* Content Side */}
          <div className="space-y-8 lg:space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
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
                Protecting Rural<br />Northeast India
              </motion.h2>
              
              <motion.p 
                className="text-gray-600 leading-relaxed max-w-xl text-pretty glass-effect rounded-lg p-6"
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
                Our intelligent monitoring system combines IoT sensors, AI prediction models, 
                and community-focused alerts to prevent water-borne diseases before they spread.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 gap-6 lg:gap-8"
            >
              {[
                { metric: '24/7', label: 'Continuous Monitoring' },
                { metric: '95%', label: 'Prediction Accuracy' },
                { metric: '50+', label: 'Villages Protected' },
                { metric: '10k+', label: 'Lives Impacted' }
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <SpotlightCard
                    spotlightColor="rgba(59, 130, 246, 0.2)"
                    className="text-center space-y-2 h-full flex flex-col justify-center"
                  >
                    <motion.div 
                      className="font-bold text-black relative z-10"
                      style={{ 
                        fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
                        fontWeight: '800'
                      }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {stat.metric}
                    </motion.div>
                    <div 
                      className="text-gray-600 font-medium relative z-10"
                      style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}
                    >
                      {stat.label}
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Panel Side */}
          <div className="relative">
            <div 
              className="relative overflow-hidden rounded-xl"
              style={{ aspectRatio: '4/5' }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPanel}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className={`absolute inset-0 ${panels[currentPanel].color} flex flex-col justify-end`}
                  style={{ padding: 'clamp(2rem, 6vw, 3rem)' }}
                >
                  <div className="space-y-4">
                    <h3 
                      className={`font-light ${panels[currentPanel].textColor} text-balance`}
                      style={{
                        fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                        lineHeight: '1.2'
                      }}
                    >
                      {panels[currentPanel].title}
                    </h3>
                    
                    <p 
                      className={`leading-relaxed ${panels[currentPanel].textColor} opacity-80 text-pretty`}
                      style={{
                        fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
                        lineHeight: '1.6'
                      }}
                    >
                      {panels[currentPanel].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Panel indicators */}
            <div 
              className="flex justify-center space-x-2"
              style={{ marginTop: '1.5rem' }}
            >
              {panels.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPanel(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index === currentPanel ? 'bg-black' : 'bg-gray-300'
                  }`}
                  style={{ 
                    minWidth: '8px',
                    minHeight: '8px',
                    touchAction: 'manipulation'
                  }}
                  aria-label={`Go to panel ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
