'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ShinyTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  speed?: number;
  maxLines?: number;
}

const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  className = '',
  style = {},
  disabled = false,
  speed = 3,
  maxLines = 1,
}) => {
  return (
    <motion.div
      className={`relative inline-block ${className}`}
      style={{
        maxWidth: maxLines > 1 ? '100%' : 'none',
        lineHeight: maxLines > 1 ? '1.2' : 'normal',
        ...style,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <span
        className={`relative z-10 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent ${
          disabled ? '' : 'animate-shine'
        }`}
        style={{
          backgroundSize: disabled ? '100% 100%' : '200% 100%',
          backgroundPosition: disabled ? '0 0' : '-200% 0',
          animation: disabled
            ? 'none'
            : `shine ${speed}s ease-in-out infinite`,
        }}
      >
        {text}
      </span>
      
      {/* Shine overlay effect */}
      {!disabled && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
          animate={{
            x: ['-100%', '200%'],
          }}
          transition={{
            duration: speed,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            width: '150%',
            height: '100%',
            left: '-25%',
          }}
        />
      )}
      
      <style jsx>{`
        @keyframes shine {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        
        .animate-shine {
          background-image: linear-gradient(
            90deg,
            #1a1a1a 0%,
            #4a4a4a 20%,
            #ffffff 50%,
            #4a4a4a 80%,
            #1a1a1a 100%
          );
        }
      `}</style>
    </motion.div>
  );
};

export default ShinyText;
