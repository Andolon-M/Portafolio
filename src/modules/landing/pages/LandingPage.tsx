import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { ServicesSection } from '../components/ServicesSection';
import { ShortAboutSection } from '../components/ShortAboutSection';

export const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <ShortAboutSection />
      <ServicesSection />
      
      {/* Sección temporal de Proyectos (Demos) - Se puede extraer a su propio componente luego */}
      <section id="projects" className="py-24 relative bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">
              Mis <span className="text-gradient">Proyectos y Demos</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Próximamente... Aquí se mostrarán los demos interactivos de cada uno de los proyectos.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="glass-card p-12 text-center max-w-2xl w-full border-dashed border-2 border-slate-700">
              <span className="text-4xl block mb-4">🚀</span>
              <h3 className="text-2xl font-semibold text-slate-300 mb-2">Construyendo el futuro</h3>
              <p className="text-slate-500">Estamos preparando los entornos interactivos.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
