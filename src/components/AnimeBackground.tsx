'use client';

import React, { useEffect, useRef } from 'react';

const AnimeBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create floating particles
    const particleCount = 12;
    const particles: HTMLDivElement[] = [];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full';
      
      // Different sizes and colors for particles
      const size = Math.random() * 8 + 3; // 3-11px
      const isBlue = Math.random() > 0.6;
      const opacity = Math.random() * 0.2 + 0.1; // 0.1-0.3
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.backgroundColor = isBlue ? '#3b82f6' : '#6b7280';
      particle.style.opacity = opacity.toString();
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animation = `particleFloat ${4 + Math.random() * 3}s ease-in-out infinite`;
      particle.style.animationDelay = `${i * 0.4}s`;
      
      containerRef.current.appendChild(particle);
      particles.push(particle);
    }

    // Create larger wave elements
    const waves: HTMLDivElement[] = [];
    for (let i = 0; i < 3; i++) {
      const wave = document.createElement('div');
      wave.className = 'absolute rounded-full';
      const size = 400 + i * 300;
      
      wave.style.width = `${size}px`;
      wave.style.height = `${size}px`;
      wave.style.background = i === 0 
        ? 'radial-gradient(circle, rgba(59, 130, 246, 0.03) 0%, transparent 70%)'
        : 'radial-gradient(circle, rgba(107, 114, 128, 0.02) 0%, transparent 70%)';
      wave.style.left = `${Math.random() * 30}%`;
      wave.style.top = `${Math.random() * 30}%`;
      wave.style.animation = `waveFloat ${12 + i * 3}s linear infinite`;
      wave.style.animationDelay = `${i * 2}s`;
      
      containerRef.current.appendChild(wave);
      waves.push(wave);
    }

    return () => {
      // Cleanup
      [...particles, ...waves].forEach(element => {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      });
    };
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes particleFloat {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); 
            opacity: 0.1; 
          }
          25% { 
            transform: translateY(-30px) translateX(-15px) rotate(90deg) scale(1.2); 
            opacity: 0.3; 
          }
          50% { 
            transform: translateY(-15px) translateX(20px) rotate(180deg) scale(0.8); 
            opacity: 0.2; 
          }
          75% { 
            transform: translateY(-40px) translateX(-10px) rotate(270deg) scale(1.1); 
            opacity: 0.25; 
          }
        }
        
        @keyframes waveFloat {
          0% { 
            transform: scale(1) rotate(0deg) translate(0px, 0px); 
            opacity: 0.02; 
          }
          33% { 
            transform: scale(1.1) rotate(120deg) translate(-20px, -10px); 
            opacity: 0.05; 
          }
          66% { 
            transform: scale(0.9) rotate(240deg) translate(15px, -20px); 
            opacity: 0.03; 
          }
          100% { 
            transform: scale(1) rotate(360deg) translate(0px, 0px); 
            opacity: 0.02; 
          }
        }
        
        @keyframes gentlePulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.05); opacity: 1; }
        }
      `}</style>
      <div 
        ref={containerRef}
        className="fixed inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: 1 }}
      />
    </>
  );
};

export default AnimeBackground;
