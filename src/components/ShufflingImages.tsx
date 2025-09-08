'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const ShufflingImages: React.FC = () => {
  const images = [
    '/church-of-the-king-j9jZSqfH5YI-unsplash.jpg',
    '/gyan-shahane-fcSRftXfgWU-unsplash.jpg',
    '/gyan-shahane-xuwdUAgEBqc-unsplash.jpg',
    '/pexels-absoluteabhi-31760611.jpg',
    '/pexels-ajaybhargavguduru-1043566.jpg',
    '/pexels-equalstock-20445168.jpg',
    '/pexels-equalstock-27722046.jpg',
    '/pexels-vikashkr50-31029366.jpg',
    '/tejash-verma-4fBJyxrw_5w-unsplash.jpg',
    '/unidentified-indian-girl-using-hand-pump-for-drinking-water.webp'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <Image
            src={images[currentImageIndex]}
            alt={`Water quality image ${currentImageIndex + 1}`}
            fill
            className="object-cover"
            style={{
              filter: 'brightness(0.8) contrast(1.1) saturate(0.9)',
            }}
            priority={currentImageIndex === 0}
          />
          
          {/* Subtle overlay for better text readability */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          
          {/* Corner accents */}
          <motion.div
            className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/30"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          
          <motion.div
            className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white/30"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Image indicator dots */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        {images.map((_, index) => (
          <motion.div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
            whileHover={{ scale: 1.2 }}
            onClick={() => setCurrentImageIndex(index)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ShufflingImages;
