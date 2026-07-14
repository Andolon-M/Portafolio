import React from 'react';
import { ArrowRight, Bot, Code2, Cpu } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center py-8 px-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10 flex flex-col lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-6 animate-pulse">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            Disponible para nuevos proyectos
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-slate-900 dark:text-white leading-tight">
            Desarrollo de Software <br/>
            <span className="text-gradient">Inteligente & Escalable</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl leading-relaxed">
            Especialista en aplicaciones web a medida, automatizaciones avanzadas y soluciones con Inteligencia Artificial que impulsan tu negocio al siguiente nivel.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary hover:bg-primary-hover text-white font-semibold transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:-translate-y-1 flex items-center justify-center gap-2">
              Ver Proyectos <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full glass-effect text-slate-900 dark:text-white font-semibold hover:bg-slate-200/50 dark:hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              Contactarme
            </button>
          </div>
        </div>
        
        {/* Visual/Graphic Content */}
        <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
          <div className="aspect-square relative flex items-center justify-center">
            {/* Abstract Tech Graphic */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen"></div>
            
            <div className="relative z-10 grid grid-cols-2 gap-4 w-full p-8">
              <div className="glass-card p-6 flex flex-col items-center justify-center gap-3 transform translate-y-8 animate-[bounce_4s_infinite]">
                <Code2 className="w-10 h-10 text-blue-500 dark:text-blue-400" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Web Apps</span>
              </div>
              <div className="glass-card p-6 flex flex-col items-center justify-center gap-3 transform -translate-y-4 animate-[bounce_5s_infinite]">
                <Bot className="w-10 h-10 text-emerald-500 dark:text-emerald-400" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Bots & IA</span>
              </div>
              <div className="glass-card p-6 flex flex-col items-center justify-center gap-3 transform translate-y-4 animate-[bounce_4.5s_infinite]">
                <Cpu className="w-10 h-10 text-amber-500 dark:text-amber-400" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Automatización</span>
              </div>
              <div className="glass-card p-6 flex flex-col items-center justify-center gap-3 transform -translate-y-8 animate-[bounce_5.5s_infinite]">
                <div className="w-10 h-10 rounded-full border-2 border-primary border-t-transparent animate-spin"></div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Odoo / ERP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
