import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Project } from '../data/projectsData';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative w-full h-[450px] rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 border border-slate-800 dark:border-white/10">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${project.image})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-950/50 group-hover:bg-slate-950/60 transition-colors duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent transition-opacity duration-500 opacity-100" />
      
      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
        <h3 className="text-3xl font-bold text-white mb-3 transform transition-transform duration-300 group-hover:-translate-y-1">
          {project.title}
        </h3>
        
        <p className="text-slate-300 text-sm md:text-base line-clamp-3 mb-6 transform transition-all duration-300 opacity-80 group-hover:opacity-100 group-hover:-translate-y-1">
          {project.shortDescription}
        </p>
        
        <div className="flex gap-2 flex-wrap mb-8 transform transition-transform duration-300 group-hover:-translate-y-1">
          {project.technologies.slice(0, 4).map((tech, i) => (
            <span key={i} className="px-3 py-1 text-xs font-medium bg-white/10 text-white rounded-full backdrop-blur-md border border-white/20">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-3 py-1 text-xs font-medium bg-white/10 text-white rounded-full backdrop-blur-md border border-white/20">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
        
        <Link 
          to={`/projects/${project.id}`}
          className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-full font-semibold transition-all group/btn shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transform group-hover:-translate-y-1"
        >
          Ver más detalles
          <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};
