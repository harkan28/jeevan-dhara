'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { AlertTriangle, Lightbulb } from 'lucide-react';

const ProblemStatement = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8 }
    }
  };

  const cardVariantsRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="problem" className="section-padding bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 font-poppins mb-6">
            The <span className="text-gradient">Challenge</span> & Our{' '}
            <span className="text-gradient">Solution</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-roboto">
            Addressing critical health challenges in rural Northeast India through innovative technology
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto"
        >
          {/* Problem Card */}
          <motion.div
            variants={cardVariants}
            className="hover-lift bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-gray-100"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <AlertTriangle className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 font-poppins">
                The Challenge
              </h3>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-700 text-lg leading-relaxed font-roboto">
                Water-borne diseases like <strong className="text-red-600">cholera, typhoid, and diarrhea</strong> are 
                rampant in rural Northeast India due to contaminated water sources and delayed medical response.
              </p>
              
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                <h4 className="font-semibold text-red-800 mb-2">Critical Issues:</h4>
                <ul className="text-red-700 space-y-1 text-sm">
                  <li>• Limited access to clean water monitoring</li>
                  <li>• Delayed outbreak detection and response</li>
                  <li>• Lack of early warning systems</li>
                  <li>• Poor connectivity in remote areas</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Solution Card */}
          <motion.div
            variants={cardVariantsRight}
            className="hover-lift bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-gray-100"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <Lightbulb className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 font-poppins">
                Our Solution
              </h3>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-700 text-lg leading-relaxed font-roboto">
                We built <strong className="text-blue-600">Jeevan Dhara</strong> — a smart health surveillance 
                system that predicts outbreaks using AI, monitors water quality via IoT, and empowers ASHA workers 
                with real-time alerts.
              </p>
              
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                <h4 className="font-semibold text-blue-800 mb-2">Key Features:</h4>
                <ul className="text-blue-700 space-y-1 text-sm">
                  <li>• AI-powered disease prediction (1-2 weeks early)</li>
                  <li>• IoT water quality monitoring</li>
                  <li>• Offline-first mobile application</li>
                  <li>• Multilingual support & SMS alerts</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
        >
          {[
            { number: '1-2', label: 'Weeks Early', subtitle: 'Prediction' },
            { number: '4', label: 'Languages', subtitle: 'Supported' },
            { number: '24/7', label: 'Monitoring', subtitle: 'Real-time' },
            { number: '100%', label: 'Offline', subtitle: 'Capable' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2 font-poppins">
                {stat.number}
              </div>
              <div className="text-gray-900 font-semibold text-lg">
                {stat.label}
              </div>
              <div className="text-gray-600 text-sm">
                {stat.subtitle}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemStatement;
