import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { ServicesSection } from '../components/ServicesSection';
import { ShortAboutSection } from '../components/ShortAboutSection';
import { ProjectsSection } from '../../projects/components/ProjectsSection';

export const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <ShortAboutSection />
      <ServicesSection />
      
      <ProjectsSection />
    </div>
  );
};
