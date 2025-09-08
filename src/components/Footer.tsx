'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Youtube, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    project: [
      { label: 'Home', href: '#home' },
      { label: 'Problem Statement', href: '#problem' },
      { label: 'Features', href: '#features' },
      { label: 'Team', href: '#team' }
    ],
    resources: [
      { label: 'Download APK', href: '#downloads' },
      { label: 'Documentation', href: '#' },
      { label: 'Research Paper', href: '#' },
      { label: 'Demo Video', href: '#video' }
    ],
    support: [
      { label: 'Contact Us', href: 'mailto:contact@nagarisaath.com' },
      { label: 'Technical Support', href: 'mailto:support@nagarisaath.com' },
      { label: 'Bug Reports', href: '#' },
      { label: 'Feature Requests', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Mail, href: 'mailto:contact@nagarisaath.com', label: 'Email' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold font-poppins text-gradient mb-4">
                Nagari Saath
              </h3>
              <p className="text-gray-300 text-lg mb-6 font-roboto leading-relaxed">
                Smart Early Warning System for Water-Borne Diseases in Rural Northeast India. 
                Empowering communities through AI-powered health surveillance and IoT monitoring.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#6C63FF] transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 group-hover:text-white transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Project Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold font-poppins mb-4">Project</h4>
              <ul className="space-y-3">
                {footerLinks.project.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white hover:text-[#6C63FF] transition-colors duration-200 font-roboto"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Resources Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold font-poppins mb-4">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white hover:text-[#6C63FF] transition-colors duration-200 font-roboto"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Support Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold font-poppins mb-4">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white hover:text-[#6C63FF] transition-colors duration-200 font-roboto"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-800"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: '1-2', label: 'Weeks Early Warning' },
              { number: '4', label: 'Languages Supported' },
              { number: '6', label: 'Team Members' },
              { number: '100%', label: 'Offline Capable' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                className="p-4"
              >
                <div className="text-2xl lg:text-3xl font-bold text-gradient mb-2 font-poppins">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm font-roboto">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          >
            <div className="flex items-center space-x-2 text-gray-300 font-roboto">
              <span>© 2025 Nagari Saath</span>
              <span>•</span>
              <span>Built for Smart India Hackathon 2025</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-300 font-roboto">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Heart className="w-4 h-4 text-red-500" fill="currentColor" />
              </motion.div>
              <span>for rural healthcare</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
