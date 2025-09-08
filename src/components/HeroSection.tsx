'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedTextSplit, FloatingElements } from './AnimatedComponents';
import SplitText from './SplitText';
import ShufflingImages from './ShufflingImages';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <FloatingElements />
      
      {/* Main Content Container with enhanced spacing */}
      <div className="container max-w-7xl mx-auto relative z-10 px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[85vh]">
          
          {/* Left Content - Text */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              {/* Main Title with proper font sizing and alignment */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 1.2, 
                  delay: 0.3,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                className="space-y-4"
              >
                {/* JEEVAN DHARA on one line with proper font size */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  style={{
                    fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
                    fontWeight: '800',
                    lineHeight: '1.1',
                    letterSpacing: '-0.02em',
                    color: '#1A1A1A',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    marginBottom: '0',
                    display: 'block'
                  }}
                  className="text-black font-black tracking-tight"
                >
                  <SplitText
                    text="JEEVAN DHARA"
                    className="font-black text-black"
                    delay={0.5}
                  />
                </motion.h1>
                
                {/* Subtitle with better positioning */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="pt-4"
                  style={{
                    fontSize: 'clamp(1.25rem, 4vw, 1.75rem)',
                    lineHeight: '1.3',
                    fontWeight: '600',
                    color: '#6B7280',
                    fontFamily: 'Inter, system-ui, sans-serif'
                  }}
                >
                  <AnimatedTextSplit 
                    text="AI-Powered Early Warning System"
                    className="text-gray-600 font-semibold"
                    delay={1.5}
                  />
                </motion.div>
              </motion.div>
              
              {/* Description with enhanced spacing */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
              >
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                <motion.p 
                  className="text-gray-600 leading-relaxed max-w-xl"
                  style={{
                    fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                    lineHeight: '1.7',
                    fontFamily: 'Inter, system-ui, sans-serif'
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  Protecting communities in rural Northeast India through intelligent water quality monitoring 
                  and early disease outbreak prediction using cutting-edge AI algorithms and real-time data analysis.
                </motion.p>
              </motion.div>

              {/* Enhanced CTA Button with H&M-inspired styling */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2.2 }}
                className="pt-6"
              >
                <motion.button
                  className="group relative overflow-hidden px-12 py-5 rounded-none bg-black text-white font-bold text-lg tracking-wide uppercase transition-all duration-500"
                  style={{
                    fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    letterSpacing: '0.1em',
                    border: 'none',
                    cursor: 'pointer',
                    borderRadius: '0px',
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -2,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  whileTap={{ 
                    scale: 0.98,
                    transition: { duration: 0.1 }
                  }}
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/jeevan-dhara-app.apk';
                    link.download = 'JeevanDhara.apk';
                    link.click();
                  }}
                >
                  {/* White background slide effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    style={{
                      originX: 0,
                    }}
                  />
                  
                  {/* Button content with color change */}
                  <motion.span 
                    className="relative z-10 flex items-center justify-center gap-4 group-hover:text-black transition-colors duration-400"
                  >
                    Download App
                    <motion.span
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1, 1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="text-xl"
                    >
                      📱
                    </motion.span>
                  </motion.span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Right Content - Vertical Image Gallery */}
          <div className="lg:col-span-5 relative h-[500px] lg:h-[600px] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full h-full max-w-md"
              style={{
                borderRadius: '0px',
                overflow: 'hidden',
                border: '1px solid rgba(0,0,0,0.1)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              }}
            >
              <ShufflingImages />
            </motion.div>
          </div>
        </div>

        {/* Minimalist Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 3.0 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ 
              y: [0, 8, 0]
            }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-6 h-12 border border-black/20 flex justify-center items-start pt-2 bg-white/50 backdrop-blur-sm"
            style={{
              borderRadius: '0px', // Sharp corners
            }}
            whileHover={{
              scale: 1.1,
              borderColor: 'rgba(0,0,0,0.4)',
              transition: { duration: 0.3 }
            }}
          >
            <motion.div 
              className="w-1 h-2 bg-black/60"
              animate={{
                backgroundColor: ['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.9)', 'rgba(0,0,0,0.6)']
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                borderRadius: '0px',
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
