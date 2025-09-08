'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Mail, User } from 'lucide-react';

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const teamMembers = [
    {
      name: 'Harshit Rawal',
      role: 'Team Leader',
      description: 'Full-stack developer specializing in React and Node.js with expertise in AI/ML integration',
      image: '/api/placeholder/300/300',
      social: {
        github: '#',
        linkedin: '#',
        email: 'harshit@nagarisaath.com'
      }
    },
    {
      name: 'Anurag Mishra',
      role: 'Team Leader',
      description: 'AI/ML Engineer focused on disease prediction models and data analytics',
      image: '/api/placeholder/300/300',
      social: {
        github: '#',
        linkedin: '#',
        email: 'anurag@nagarisaath.com'
      }
    },
    {
      name: 'Kushi Dasar',
      role: 'Team Member',
      description: 'Mobile App Developer with expertise in React Native and Flutter development',
      image: '/api/placeholder/300/300',
      social: {
        github: '#',
        linkedin: '#',
        email: 'kushi@nagarisaath.com'
      }
    },
    {
      name: 'Riya Soni',
      role: 'Team Member',
      description: 'UI/UX Designer creating intuitive interfaces for healthcare applications',
      image: '/api/placeholder/300/300',
      social: {
        github: '#',
        linkedin: '#',
        email: 'riya@nagarisaath.com'
      }
    },
    {
      name: 'Sammridhii Mishra',
      role: 'Team Member',
      description: 'Backend Developer specializing in IoT integration and real-time data processing',
      image: '/api/placeholder/300/300',
      social: {
        github: '#',
        linkedin: '#',
        email: 'sammridhii@nagarisaath.com'
      }
    },
    {
      name: 'Sakshi Sen',
      role: 'Team Member',
      description: 'Data Scientist working on predictive analytics and machine learning models',
      image: '/api/placeholder/300/300',
      social: {
        github: '#',
        linkedin: '#',
        email: 'sakshi@nagarisaath.com'
      }
    }
  ];

  return (
    <section id="team" className="section-padding bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 font-poppins mb-6">
            Meet Our <span className="text-gradient">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-roboto">
            Passionate innovators dedicated to solving rural healthcare challenges through technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="hover-lift bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center group"
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-[#6C63FF] to-[#0D47A1] p-1">
                  <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                    <User className="w-16 h-16 text-gray-400" />
                  </div>
                </div>
                
                {/* Role Badge */}
                <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-sm font-medium ${
                  member.role === 'Team Leader' 
                    ? 'bg-gradient-to-r from-[#6C63FF] to-[#0D47A1] text-white' 
                    : 'bg-gray-100 text-gray-700'
                }`}>
                  {member.role}
                </div>
              </div>

              {/* Member Info */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 font-poppins mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 font-roboto leading-relaxed">
                  {member.description}
                </p>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                <motion.a
                  href={member.social.github}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#6C63FF] hover:text-white transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href={member.social.linkedin}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#0D47A1] hover:text-white transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href={`mailto:${member.social.email}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-green-500 hover:text-white transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
        >
          {[
            { number: '6', label: 'Team Members', subtitle: 'Diverse Skills' },
            { number: '3+', label: 'Months', subtitle: 'Development' },
            { number: '10+', label: 'Technologies', subtitle: 'Mastered' },
            { number: '100%', label: 'Dedication', subtitle: 'To Innovation' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
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

export default TeamSection;
