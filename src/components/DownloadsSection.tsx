'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Download, FileText, Video, BookOpen, ExternalLink } from 'lucide-react';

const DownloadsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const downloads = [
    {
      title: 'Download APK',
      description: 'Get the latest version of Nagari Saath mobile app for Android devices',
      icon: Download,
      color: 'from-green-500 to-emerald-500',
      link: '#',
      buttonText: 'Download Now',
      size: '45 MB',
      version: 'v1.2.0'
    },
    {
      title: 'Project Documentation',
      description: 'Comprehensive technical documentation and user guide for the system',
      icon: FileText,
      color: 'from-blue-500 to-cyan-500',
      link: '#',
      buttonText: 'View PDF',
      size: '12 MB',
      version: 'Latest'
    },
    {
      title: 'YouTube Demo Video',
      description: 'Watch live demonstration of Nagari Saath features and capabilities',
      icon: Video,
      color: 'from-red-500 to-pink-500',
      link: '#',
      buttonText: 'Watch Video',
      size: '15 min',
      version: 'HD Quality'
    },
    {
      title: 'Research Paper',
      description: 'Academic research paper on AI-driven disease prediction in rural healthcare',
      icon: BookOpen,
      color: 'from-purple-500 to-indigo-500',
      link: '#',
      buttonText: 'Read Paper',
      size: '8 MB',
      version: 'Peer Reviewed'
    }
  ];

  return (
    <section id="downloads" className="section-padding bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 font-poppins mb-6">
            Downloads & <span className="text-gradient">Resources</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-roboto">
            Access our mobile app, documentation, and research materials
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {downloads.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="hover-lift bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 font-poppins">
                        {item.title}
                      </h3>
                      <div className="flex space-x-4 text-sm text-gray-500 mt-1">
                        <span>{item.size}</span>
                        <span>•</span>
                        <span>{item.version}</span>
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" />
                </div>

                {/* Description */}
                <p className="text-gray-600 text-lg mb-8 font-roboto leading-relaxed">
                  {item.description}
                </p>

                {/* Download Button */}
                <motion.a
                  href={item.link}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`inline-flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r ${item.color} text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group`}
                >
                  <item.icon className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  {item.buttonText}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[#6C63FF] to-[#0D47A1] rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 font-poppins">
              Need Support or Have Questions?
            </h3>
            <p className="text-xl mb-8 text-white/90 font-roboto">
              Our team is here to help you get started with Nagari Saath
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:support@nagarisaath.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-[#6C63FF] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Contact Support
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#6C63FF] transition-all duration-200"
              >
                View GitHub
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadsSection;
