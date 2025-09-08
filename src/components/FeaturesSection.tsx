'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Brain, Wifi, Smartphone, Globe, MessageSquare, Database } from 'lucide-react';

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      icon: Brain,
      title: 'AI Prediction Engine',
      description: 'Uses Random Forest + LSTM to predict disease outbreaks 1–2 weeks early with high accuracy',
      color: 'bg-purple-100 text-purple-600',
      delay: 0.1
    },
    {
      icon: Wifi,
      title: 'IoT Integration',
      description: 'Connects to low-cost water sensors for pH, turbidity, and bacterial levels monitoring',
      color: 'bg-blue-100 text-blue-600',
      delay: 0.2
    },
    {
      icon: Smartphone,
      title: 'Offline Mode',
      description: 'Works without internet connectivity — syncs data when online connection is available',
      color: 'bg-green-100 text-green-600',
      delay: 0.3
    },
    {
      icon: Globe,
      title: 'Multilingual Support',
      description: 'Native support for Odia, Assamese, Bodo, and English languages for better accessibility',
      color: 'bg-orange-100 text-orange-600',
      delay: 0.4
    },
    {
      icon: MessageSquare,
      title: 'SMS Alerts',
      description: 'Sends real-time warnings to health officials and village leaders via SMS notifications',
      color: 'bg-red-100 text-red-600',
      delay: 0.5
    },
    {
      icon: Database,
      title: 'Real-time Analytics',
      description: 'Comprehensive dashboard with data visualization and trend analysis for informed decisions',
      color: 'bg-indigo-100 text-indigo-600',
      delay: 0.6
    }
  ];

  return (
    <section id="features" className="section-padding bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 font-poppins mb-6">
            Features & <span className="text-gradient">Technology Stack</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-roboto">
            Cutting-edge technology designed for rural healthcare challenges
          </p>
        </motion.div>

        {/* Features Timeline */}
        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#6C63FF] to-[#0D47A1] rounded-full"></div>

          <div className="space-y-12 lg:space-y-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: feature.delay }}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Feature Card */}
                <div className="w-full lg:w-5/12 mb-6 lg:mb-0">
                  <div className="hover-lift bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
                    <div className="flex items-start space-x-4">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 ${feature.color}`}>
                        <feature.icon className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 font-poppins mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed font-roboto">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline node - hidden on mobile */}
                <div className="hidden lg:block w-2/12 flex justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: feature.delay + 0.3 }}
                    className="w-6 h-6 bg-gradient-to-r from-[#6C63FF] to-[#0D47A1] rounded-full border-4 border-white shadow-lg"
                  />
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technology Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 font-poppins mb-8">
            Built with Modern Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React Native', 'Node.js', 'Firebase', 'TensorFlow', 
              'Random Forest', 'LSTM', 'IoT Sensors', 'SMS Gateway'
            ].map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                className="px-6 py-3 bg-gradient-to-r from-[#6C63FF] to-[#0D47A1] text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
