import React from 'react';
import { ProfileHeader } from '../components/ProfileHeader';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
import { SkillsGrid } from '../components/SkillsGrid';
import { EducationList } from '../components/EducationList';

export const AboutPage: React.FC = () => {
  return (
    <div className="w-full py-12 px-4 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <ProfileHeader />
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-3">
            <ExperienceTimeline />
          </div>
          <div className="flex flex-col gap-8 h-full lg:col-span-2">
            <SkillsGrid />
            <EducationList />
          </div>
        </div>
      </div>
    </div>
  );
};
