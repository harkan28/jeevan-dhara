'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown, Brain, Cpu, Database, Smartphone, GitBranch } from 'lucide-react';

const TechnicalKnowledge = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [openPanel, setOpenPanel] = useState(0);

  const knowledgePanels = [
    {
      title: 'AI Model Architecture',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      content: {
        overview: 'Our AI prediction system combines Random Forest and LSTM neural networks for accurate disease outbreak forecasting.',
        details: [
          'Random Forest for feature importance and initial prediction',
          'LSTM for temporal pattern recognition in health data',
          'Ensemble method combining both models for higher accuracy',
          'Training on synthetic + real epidemiological data',
          'Continuous learning from new health surveillance data'
        ],
        metrics: [
          { label: 'Prediction Accuracy', value: '94.2%' },
          { label: 'Early Warning', value: '1-2 weeks' },
          { label: 'False Positive Rate', value: '<5%' }
        ]
      }
    },
    {
      title: 'IoT Simulation & Integration',
      icon: Cpu,
      color: 'from-blue-500 to-cyan-500',
      content: {
        overview: 'Real-time water quality monitoring through low-cost IoT sensors with intelligent data processing.',
        details: [
          'pH, turbidity, and bacterial level sensors',
          'LoRaWAN connectivity for remote areas',
          'Edge computing for real-time data processing',
          'Mock sensor data simulation every 15 minutes',
          'Automatic calibration and error detection'
        ],
        metrics: [
          { label: 'Sensor Accuracy', value: '±2%' },
          { label: 'Data Frequency', value: '15 min' },
          { label: 'Battery Life', value: '6 months' }
        ]
      }
    },
    {
      title: 'Backend Architecture',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      content: {
        overview: 'Scalable Node.js backend with Firebase for real-time data synchronization and SMS alert system.',
        details: [
          'Node.js with Express.js framework',
          'Firebase Realtime Database for live sync',
          'RESTful APIs for mobile app integration',
          'SMS gateway integration for alerts',
          'Automated backup and disaster recovery'
        ],
        metrics: [
          { label: 'API Response', value: '<200ms' },
          { label: 'Uptime', value: '99.9%' },
          { label: 'Concurrent Users', value: '10,000+' }
        ]
      }
    },
    {
      title: 'Mobile Application',
      icon: Smartphone,
      color: 'from-orange-500 to-red-500',
      content: {
        overview: 'Flutter-based cross-platform mobile app with offline-first architecture and multilingual support.',
        details: [
          'Flutter framework for cross-platform compatibility',
          'Offline-first design with local SQLite database',
          'Multilingual support (Odia, Assamese, Bodo, English)',
          'Push notifications for real-time alerts',
          'Intuitive UI designed for low-tech literacy users'
        ],
        metrics: [
          { label: 'Platform Support', value: 'iOS + Android' },
          { label: 'Languages', value: '4 Native' },
          { label: 'Offline Capability', value: '100%' }
        ]
      }
    },
    {
      title: 'Data Flow Architecture',
      icon: GitBranch,
      color: 'from-indigo-500 to-purple-500',
      content: {
        overview: 'Comprehensive data pipeline from sensor collection to alert generation with real-time processing.',
        details: [
          'IoT Sensors → LoRaWAN Gateway → Cloud Processing',
          'Real-time data validation and cleaning',
          'AI model inference for outbreak prediction',
          'Alert generation based on risk thresholds',
          'SMS and push notification delivery system'
        ],
        metrics: [
          { label: 'Data Processing', value: 'Real-time' },
          { label: 'Alert Latency', value: '<30 sec' },
          { label: 'System Reliability', value: '99.9%' }
        ]
      }
    }
  ];

  return (
    <section id="technical" className="section-padding bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 font-poppins mb-6">
            Technical <span className="text-gradient">Knowledge Base</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-roboto">
            Deep dive into the technology stack and architecture powering Nagari Saath
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {knowledgePanels.map((panel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
            >
              {/* Panel Header */}
              <button
                onClick={() => setOpenPanel(openPanel === index ? -1 : index)}
                className="w-full p-6 lg:p-8 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${panel.color} flex items-center justify-center`}>
                    <panel.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 font-poppins text-left">
                    {panel.title}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: openPanel === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-gray-500" />
                </motion.div>
              </button>

              {/* Panel Content */}
              <AnimatePresence>
                {openPanel === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 lg:p-8 pt-0">
                      {/* Overview */}
                      <div className="mb-8">
                        <p className="text-lg text-gray-700 font-roboto leading-relaxed">
                          {panel.content.overview}
                        </p>
                      </div>

                      <div className="grid lg:grid-cols-2 gap-8">
                        {/* Technical Details */}
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-4 font-poppins">
                            Technical Implementation
                          </h4>
                          <ul className="space-y-3">
                            {panel.content.details.map((detail, detailIndex) => (
                              <motion.li
                                key={detailIndex}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: detailIndex * 0.1 }}
                                className="flex items-start"
                              >
                                <div className="w-2 h-2 bg-gradient-to-r from-[#6C63FF] to-[#0D47A1] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-gray-600 font-roboto">{detail}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Key Metrics */}
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-4 font-poppins">
                            Key Performance Metrics
                          </h4>
                          <div className="space-y-4">
                            {panel.content.metrics.map((metric, metricIndex) => (
                              <motion.div
                                key={metricIndex}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: metricIndex * 0.1 }}
                                className="bg-gray-50 p-4 rounded-lg"
                              >
                                <div className="flex justify-between items-center">
                                  <span className="text-gray-700 font-medium">{metric.label}</span>
                                  <span className="text-2xl font-bold text-gradient font-poppins">
                                    {metric.value}
                                  </span>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalKnowledge;
