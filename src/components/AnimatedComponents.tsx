'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AnimatedTextSplit = ({ 
  text, 
  className = '', 
  delay = 0 
}: { 
  text: string; 
  className?: string; 
  delay?: number; 
}) => {
  const chars = text.split('');
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay }
    })
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 120,
        duration: 0.6
      }
    },
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.9,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 120
      }
    }
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
      style={{ display: 'inline-block' }}
    >
      {chars.map((char, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ 
            display: 'inline-block',
            transformOrigin: 'bottom center'
          }}
          whileHover={{
            y: -6,
            scale: 1.05,
            color: '#6C63FF',
            transition: { duration: 0.2 }
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Beautiful floating elements */}
      <motion.div
        className="absolute top-1/4 left-1/6 w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-30"
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-2/3 right-1/5 w-8 h-8 border-2 border-green-400 rounded-full opacity-25"
        animate={{
          y: [25, -25, 25],
          x: [15, -15, 15],
          scale: [1, 0.8, 1],
          rotate: [0, -180, -360]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <motion.div
        className="absolute top-1/2 right-1/3 w-4 h-4 bg-gradient-to-br from-orange-400 to-orange-600 opacity-20 rounded-sm"
        animate={{
          y: [-30, 30, -30],
          x: [-15, 15, -15],
          rotate: [0, 90, 180, 270, 360]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
          delay: 2
        }}
      />
      
      <motion.div
        className="absolute top-1/3 left-3/4 w-5 h-5 border border-purple-400 rotate-45 opacity-20"
        animate={{
          y: [15, -15, 15],
          x: [-8, 8, -8],
          scale: [1, 1.3, 1],
          rotate: [45, 225, 405]
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />

      {/* Additional floating dots */}
      <motion.div
        className="absolute top-1/6 right-1/2 w-2 h-2 bg-blue-300 rounded-full opacity-40"
        animate={{
          y: [-10, 10, -10],
          scale: [1, 1.5, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-green-300 rounded-full opacity-30"
        animate={{
          y: [20, -20, 20],
          x: [10, -10, 10]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />
    </div>
  );
};

export { AnimatedTextSplit, FloatingElements };
