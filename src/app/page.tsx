'use client';

import React from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import MinimalFeatures from '@/components/MinimalFeatures';
import MinimalTeam from '@/components/MinimalTeam';
import MinimalFooter from '@/components/MinimalFooter';
import LiquidChromeBackground from '@/components/LiquidChromeBackground';
import PillNavigation from '@/components/PillNavigation';

export default function HomePage() {
  return (
    <div className="min-h-screen relative overflow-x-hidden bg-gray-50">
      {/* Liquid Chrome Background */}
      <LiquidChromeBackground />
      
      {/* Modern Pill Navigation */}
      <PillNavigation />
      
      {/* Main Content with proper spacing */}
      <main className="relative z-10">
        {/* Hero Section with improved proportions */}
        <section className="min-h-screen pt-16">
          <HeroSection />
        </section>
        
        {/* Content sections with proper spacing */}
        <div className="space-y-24 py-12">
          <section id="about" className="scroll-mt-32">
            <AboutSection />
          </section>
          
          <section id="features" className="scroll-mt-32">
            <MinimalFeatures />
          </section>
          
          <section id="team" className="scroll-mt-32">
            <MinimalTeam />
          </section>
        </div>
      </main>
      
      {/* Footer */}
      {/* Footer removed for cleaner design */}
    </div>
  );
}
