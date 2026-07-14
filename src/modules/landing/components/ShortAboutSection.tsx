import React from 'react';
import { ArrowRight, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ShortAboutSection: React.FC = () => {
  return (
    <section id="about-preview" className="py-24 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="glass-card p-8 md:p-12 lg:p-16 border-t border-t-primary/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Column */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight">
                Un poco sobre <span className="text-gradient">Mí</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                Soy un desarrollador apasionado por crear software que realmente importe. Combino mi experiencia en desarrollo web con conocimientos avanzados en automatización e IA para construir herramientas que potencien negocios.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
                He liderado equipos técnicos, diseñado arquitecturas de sistemas complejos y creado desde plataformas SaaS hasta agentes conversacionales inteligentes.
              </p>
              
              <Link 
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-200 dark:bg-white/10 hover:bg-primary/90 hover:text-white text-slate-900 dark:text-white font-semibold transition-all border border-slate-300 dark:border-white/10 hover:border-primary shadow-lg hover:-translate-y-1"
              >
                Ver Perfil Completo <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
            {/* Image & Stats Column */}
            <div className="order-1 lg:order-2 flex gap-6 justify-center lg:justify-end items-center">
              {/* Main Photo */}
              <div className="w-full max-w-xs shrink-0 relative hidden md:block">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden glass-effect border-2 border-black/5 dark:border-white/5 relative group">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 opacity-0 dark:opacity-100" />
                  <img 
                    src="/myPhoto.jpg" 
                    alt="Anderson Mendez" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Anderson+Mendez&background=8b5cf6&color=fff&size=400";
                    }}
                  />
                </div>
              </div>
              
              {/* Floating Badges */}
              <div className="flex flex-col gap-4">
                <div className="glass-card p-6 rounded-2xl animate-float">
                  <div className="text-4xl font-black text-primary mb-1">+4</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">Años de<br/>Experiencia</div>
                </div>
                
                <div className="glass-card p-6 rounded-2xl animate-float" style={{ animationDelay: '1.5s' }}>
                  <Code2 className="w-8 h-8 text-blue-500 dark:text-blue-400 mb-3" />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">Desarrollador<br/>Fullstack & IA</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
