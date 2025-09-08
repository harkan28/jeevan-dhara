'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ImageGallery = () => {
  // Placeholder images - you can replace these with actual village images
  const images = [
    {
      id: 1,
      src: "/api/placeholder/400/300",
      alt: "Village water monitoring system",
      caption: "Monitoring water quality in rural Assam"
    },
    {
      id: 2,
      src: "/api/placeholder/400/300", 
      alt: "Community health center",
      caption: "Health center in Meghalaya using our system"
    },
    {
      id: 3,
      src: "/api/placeholder/400/300",
      alt: "Water testing in field",
      caption: "Real-time water testing in Manipur"
    },
    {
      id: 4,
      src: "/api/placeholder/400/300",
      alt: "Village gathering",
      caption: "Community awareness session in Nagaland"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white"></div>
      
      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="hero-title text-black text-balance mb-6"
            style={{
              fontSize: 'clamp(2rem, 6vw, 3rem)',
              fontWeight: '700',
              lineHeight: '1.1',
              letterSpacing: '-0.02em'
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Making a Difference
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
              lineHeight: '1.6'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Protecting communities across Northeast India with smart water monitoring
          </motion.p>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <motion.div
                className="relative overflow-hidden rounded-2xl"
                style={{
                  aspectRatio: '4/3',
                  background: 'rgba(255, 255, 255, 0.4)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)'
                }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                  transition: { duration: 0.3 }
                }}
              >
                {/* Placeholder for image */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="w-12 h-12 mx-auto mb-2 bg-gray-300 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium">Image Placeholder</p>
                  </div>
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Caption overlay */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div 
                    className="glass-effect rounded-lg p-3 text-center"
                    style={{
                      background: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.3)'
                    }}
                  >
                    <p className="text-gray-700 text-sm font-medium leading-tight">
                      {image.caption}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm">
            Join us in protecting water health across rural communities
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ImageGallery;
