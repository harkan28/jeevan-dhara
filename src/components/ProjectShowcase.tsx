'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Smartphone, BarChart3, Bell, Droplets } from 'lucide-react';

const ProjectShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentSlide, setCurrentSlide] = useState(0);

  const appScreens = [
    {
      title: 'Home Dashboard',
      description: 'Real-time overview of water quality and health alerts for ASHA workers',
      icon: Smartphone,
      features: ['Health Status Overview', 'Quick Access Menu', 'Emergency Alerts']
    },
    {
      title: 'Water Quality Monitor',
      description: 'Live monitoring of pH, turbidity, and bacterial levels from IoT sensors',
      icon: Droplets,
      features: ['Real-time Sensor Data', 'Quality Indicators', 'Historical Trends']
    },
    {
      title: 'AI Insights',
      description: 'Machine learning predictions for disease outbreak risks and prevention',
      icon: BarChart3,
      features: ['Prediction Models', 'Risk Assessment', 'Trend Analysis']
    },
    {
      title: 'Alert System',
      description: 'Instant notifications for health officials and community members',
      icon: Bell,
      features: ['SMS Notifications', 'Emergency Broadcasts', 'Multilingual Support']
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % appScreens.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + appScreens.length) % appScreens.length);
  };

  return (
    <section id="project" className="section-padding bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 font-poppins mb-6">
            Project <span className="text-gradient">Showcase</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-roboto">
            Explore our Flutter mobile application designed for healthcare workers and communities
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Mobile App Carousel */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#6C63FF] to-[#0D47A1] rounded-3xl p-8 lg:p-12 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
                <div className="absolute top-20 right-20 w-16 h-16 border-2 border-white rounded-full"></div>
                <div className="absolute bottom-20 left-20 w-12 h-12 border-2 border-white rounded-full"></div>
              </div>

              <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Content */}
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-white"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      {React.createElement(appScreens[currentSlide].icon, { className: 'w-8 h-8' })}
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold font-poppins">
                      {appScreens[currentSlide].title}
                    </h3>
                  </div>
                  
                  <p className="text-xl mb-8 text-white/90 font-roboto leading-relaxed">
                    {appScreens[currentSlide].description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold mb-4">Key Features:</h4>
                    {appScreens[currentSlide].features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center"
                      >
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        <span className="text-white/90">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Mock Phone */}
                <motion.div
                  key={`phone-${currentSlide}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="flex justify-center"
                >
                  <div className="relative">
                    <div className="w-64 h-[520px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                      <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                        {/* Status Bar */}
                        <div className="h-6 bg-gray-100 flex items-center justify-between px-4 text-xs">
                          <span>9:41 AM</span>
                          <span>100%</span>
                        </div>
                        
                        {/* Screen Content */}
                        <div className="h-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-6">
                          <div className="text-center">
                            {React.createElement(appScreens[currentSlide].icon, { 
                              className: 'w-20 h-20 text-[#6C63FF] mx-auto mb-4' 
                            })}
                            <h4 className="text-lg font-bold text-gray-900 mb-2">
                              {appScreens[currentSlide].title}
                            </h4>
                            <p className="text-sm text-gray-600">
                              Mock interface preview
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Navigation Controls */}
              <div className="flex justify-center items-center mt-8 space-x-4">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>

                <div className="flex space-x-2">
                  {appScreens.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                        index === currentSlide ? 'bg-white' : 'bg-white/40'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Auto-rotate info */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center text-gray-600 mt-6 font-roboto"
          >
            Real-time dashboard for ASHA workers and community members
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
