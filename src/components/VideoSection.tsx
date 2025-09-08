'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play, Pause } from 'lucide-react';

const VideoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    // In a real implementation, you would control the actual video playback here
  };

  return (
    <section id="video" className="section-padding bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 font-poppins mb-6">
            Live <span className="text-gradient">Demo</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-roboto">
            See Jeevan Dhara in action and understand how our AI predicts disease outbreaks
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          {/* Video Container */}
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl group">
            {/* Video Thumbnail/Placeholder */}
            <div className="aspect-video bg-gradient-to-br from-[#6C63FF] to-[#0D47A1] flex items-center justify-center relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full animate-pulse"></div>
                <div className="absolute top-20 right-20 w-16 h-16 border-2 border-white rounded-full animate-pulse delay-300"></div>
                <div className="absolute bottom-20 left-20 w-12 h-12 border-2 border-white rounded-full animate-pulse delay-700"></div>
                <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-white rounded-full animate-pulse delay-500"></div>
              </div>

              {/* Play Button */}
              <motion.button
                onClick={handlePlayPause}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative z-10 w-24 h-24 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white border-opacity-50 hover:bg-opacity-30 transition-all duration-300"
              >
                {isPlaying ? (
                  <Pause className="w-10 h-10 text-white ml-1" />
                ) : (
                  <Play className="w-10 h-10 text-white ml-1" />
                )}
              </motion.button>

              {/* Video Title Overlay */}
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold font-poppins mb-2">
                  Jeevan Dhara: Live Demo
                </h3>
                <p className="text-white/80 font-roboto">
                  Watch how our AI predicts cholera risk and sends SMS alerts to health officials
                </p>
              </div>

              {/* Duration Badge */}
              <div className="absolute top-6 right-6 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm font-medium">
                15:30
              </div>
            </div>

            {/* Video Controls Overlay (shown when playing) */}
            {isPlaying && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6"
              >
                <div className="flex items-center space-x-4">
                  <button
                    onClick={handlePlayPause}
                    className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center"
                  >
                    <Pause className="w-5 h-5 text-white" />
                  </button>
                  <div className="flex-1 h-1 bg-white bg-opacity-30 rounded-full">
                    <div className="w-1/3 h-full bg-white rounded-full"></div>
                  </div>
                  <span className="text-white text-sm">5:20 / 15:30</span>
                </div>
              </motion.div>
            )}
          </div>

          {/* Video Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 font-poppins mb-4">
                Complete System Demonstration
              </h3>
              <p className="text-lg text-gray-600 font-roboto leading-relaxed mb-6">
                This comprehensive demo shows the entire workflow from water sensor data collection 
                to AI-powered disease prediction and real-time alert distribution to healthcare workers 
                and community members in rural Northeast India.
              </p>
              
              {/* Video Features */}
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {[
                  { title: 'Real-time Monitoring', description: 'Live sensor data collection' },
                  { title: 'AI Predictions', description: 'Disease outbreak forecasting' },
                  { title: 'Alert System', description: 'SMS and mobile notifications' }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="text-center p-4 bg-white rounded-lg shadow-md"
                  >
                    <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* YouTube Embed Alternative */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4 font-roboto">
            Prefer to watch on YouTube?
          </p>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Watch on YouTube
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
