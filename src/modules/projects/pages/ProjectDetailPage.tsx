import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, MessageCircle, CheckCircle2 } from 'lucide-react';
import { projectsData } from '../data/projectsData';

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find(p => p.id === id);

  // Scroll al top al montar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <Navigate to="/#projects" replace />;
  }

  return (
    <div className="min-h-screen pt-24 pb-16 relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        {/* Back Button */}
        <Link 
          to="/#projects" 
          className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors mb-8 font-medium"
        >
          <ArrowLeft className="w-5 h-5" /> Volver a proyectos
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {project.technologies.map((tech, i) => (
              <span key={i} className="px-4 py-2 text-sm font-semibold bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-800 shadow-sm">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            {project.demoUrl && (
              <a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:-translate-y-1"
              >
                <ExternalLink className="w-5 h-5" /> Ver Proyecto en Vivo
              </a>
            )}
            {project.botUrl && (
              <a 
                href={project.botUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5" /> Probar Asistente (Sara IVE)
              </a>
            )}
          </div>
        </div>

        {/* Banner Image */}
        <div className="w-full aspect-video rounded-3xl overflow-hidden mb-16 shadow-2xl border border-slate-200 dark:border-white/10 relative group">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-black/10 dark:ring-white/10 rounded-3xl pointer-events-none" />
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Sobre el Proyecto</h2>
              <div className="text-slate-600 dark:text-slate-300 space-y-4 text-lg leading-relaxed whitespace-pre-line">
                {project.fullDescription}
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <section className="glass-card p-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Capacidades Clave</h3>
              <ul className="space-y-4">
                {project.capabilities.map((cap, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{cap}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        {/* Screenshots Gallery */}
        {project.screenshots && project.screenshots.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Galería</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.screenshots.map((img, index) => (
                <div key={index} className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-white/10 aspect-video group">
                  <img src={img} alt={`${project.title} screenshot ${index + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
