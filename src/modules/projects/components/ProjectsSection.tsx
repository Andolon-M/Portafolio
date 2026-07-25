import React from 'react';
import { ProjectCard } from './ProjectCard';
import { projectsData } from '../data/projectsData';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight">
            Mis <span className="text-gradient">Proyectos y Demos</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Explora algunos de los proyectos más destacados que he desarrollado, 
            diseñados con enfoque en la escalabilidad, la automatización y la experiencia de usuario.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
