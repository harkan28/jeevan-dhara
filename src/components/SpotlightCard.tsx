'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({ 
  children, 
  className = '',
  spotlightColor = 'rgba(99, 102, 241, 0.3)'
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  const handleMouseEnterWithEffect = (e: React.MouseEvent<HTMLDivElement>) => {
    handleMouseEnter();
    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
    e.currentTarget.style.transform = 'translateY(-2px)';
  };

  const handleMouseLeaveWithEffect = (e: React.MouseEvent<HTMLDivElement>) => {
    handleMouseLeave();
    e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
    e.currentTarget.style.transform = 'translateY(0px)';
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnterWithEffect}
      onMouseLeave={handleMouseLeaveWithEffect}
      className={`relative overflow-hidden ${className}`}
      style={{
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(15px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        borderRadius: '1.5rem',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        padding: 'clamp(1.5rem, 4vw, 2rem)',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
      }}
    >
      <div
        className="pointer-events-none absolute -inset-px transition duration-500"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 50%)`,
          borderRadius: 'inherit',
        }}
      />
      {children}
    </div>
  );
};

export default SpotlightCard;
