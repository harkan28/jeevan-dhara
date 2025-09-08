'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import SpotlightCard from './SpotlightCard';

const team = [
  {
    id: 1,
    name: "Harshit Rawal",
    role: "Team Leader & ML Developer",
    description: "Team leader specializing in machine learning algorithms and AI-powered solutions for health analytics.",
    image: "/team/harshit-rawal.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/harshitexe",
      github: "https://github.com/harkan28",
      instagram: "https://www.instagram.com/harsh1t.py/"
    }
  },
  {
    id: 2,
    name: "Anurag Mishra",
    role: "Android Developer",
    description: "Developing robust Android applications with offline capabilities for rural community access.",
    image: "/team/anurag-mishra.jpeg",
    social: {
      linkedin: "#",
      github: "#",
      instagram: "#"
    }
  },
  {
    id: 3,
    name: "Kushi Dasar",
    role: "UI/UX Designer",
    description: "Designing accessible and intuitive interfaces for diverse user backgrounds and technical literacy levels.",
    image: "/team/kushi-dasar.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/khushidasar",
      github: "https://github.com/Khushi-Dasar",
      instagram: "https://www.instagram.com/khushi_dasar"
    }
  },
  {
    id: 4,
    name: "Riya Soni",
    role: "ML Model Developer",
    description: "Developing and optimizing machine learning models for water quality prediction and disease outbreak forecasting.",
    image: "/team/riya-soni.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/riya-soni-177802267/",
      github: "https://github.com/riyaaa09",
      instagram: "#"
    }
  },
  {
    id: 5,
    name: "Sammridhi Mishra",
    role: "Research and Documentation",
    description: "Conducting research on water-borne diseases and maintaining comprehensive project documentation.",
    image: "/team/sammridhi-mishra.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/samriddhi-mishra-51053a29a",
      github: "https://github.com/samriddhi1911",
      instagram: "https://www.instagram.com/samriddhi_19_"
    }
  },
  {
    id: 6,
    name: "Sakshi Sen",
    role: "Research and Documentation",
    description: "Analyzing health patterns and contributing to research documentation for project development.",
    image: null,
    social: {
      linkedin: "#",
      github: "#",
      instagram: "https://www.instagram.com/saks.hi8048"
    }
  }
];

const MinimalTeam = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const socialIcons = {
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    github: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    instagram: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    )
  };

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 section-fade"></div>
      <motion.div 
        className="absolute top-20 right-20 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-96 h-96 bg-purple-100/15 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
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
            Our Team
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
            Six dedicated innovators working to solve healthcare challenges in rural Northeast India through cutting-edge technology and compassionate design
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative"
              onHoverStart={() => setHoveredMember(member.id)}
              onHoverEnd={() => setHoveredMember(null)}
              whileHover={{ y: -10 }}
            >
              <SpotlightCard
                spotlightColor="rgba(168, 85, 247, 0.25)"
                className="text-center relative overflow-hidden h-full flex flex-col"
              >
                {/* Avatar */}
                <div className="relative mb-6 mx-auto z-10" style={{ width: 'clamp(120px, 20vw, 160px)', height: 'clamp(120px, 20vw, 160px)' }}>
                  {member.image ? (
                    <motion.div
                      className="relative w-full h-full rounded-full overflow-hidden shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 120px, 160px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  ) : (
                    <motion.div 
                      className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold shadow-lg"
                      style={{
                        fontSize: 'clamp(1.5rem, 4vw, 2rem)'
                      }}
                      whileHover={{ scale: 1.1, background: 'linear-gradient(135deg, #e5e7eb, #d1d5db)' }}
                      transition={{ duration: 0.3 }}
                    >
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </motion.div>
                  )}

                  {/* Social Links Overlay */}
                  <AnimatePresence>
                    {hoveredMember === member.id && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="flex space-x-3">
                          {Object.entries(member.social).map(([platform, url]) => (
                            <motion.a
                              key={platform}
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="social-link p-3 rounded-full shadow-lg text-gray-700 hover:text-gray-900"
                              whileHover={{ scale: 1.2, y: -2 }}
                              whileTap={{ scale: 0.9 }}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 * Object.keys(member.social).indexOf(platform) }}
                            >
                              {socialIcons[platform as keyof typeof socialIcons]}
                            </motion.a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                {/* Content */}
                <motion.div 
                  className="space-y-3 relative z-10 flex-grow"
                  animate={{ 
                    y: hoveredMember === member.id ? -5 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 
                    className="font-bold text-black text-balance"
                    style={{
                      fontSize: 'clamp(1.125rem, 3vw, 1.25rem)',
                      lineHeight: '1.3'
                    }}
                  >
                    {member.name}
                  </h3>
                  
                  <p 
                    className="text-blue-600 font-semibold"
                    style={{
                      fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
                      marginBottom: '0.75rem'
                    }}
                  >
                    {member.role}
                  </p>
                  
                  <motion.p 
                    className="text-gray-600 leading-relaxed text-pretty"
                    style={{
                      fontSize: 'clamp(0.875rem, 2vw, 0.875rem)',
                      lineHeight: '1.6'
                    }}
                    animate={{ 
                      opacity: hoveredMember === member.id ? 1 : 0.8 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {member.description}
                  </motion.p>
                </motion.div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MinimalTeam;
