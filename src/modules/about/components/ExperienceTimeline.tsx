import React from 'react';
import { Briefcase } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const experiences = [
    {
      role: 'Software Developer & IA',
      company: 'Tecnolosys',
      period: 'Marzo 2026 - Junio 2026',
      description: 'Desarrollo, modificación e implementación de módulos personalizados en el ERP Odoo, además del diseño y despliegue de agentes automatizados con n8n y LangChain. Implementación del backend completo de un Chatbot inteligente en WhatsApp.',
      technologies: ['Odoo', 'Python', 'n8n', 'LangChain', 'OpenAI'],
    },
    {
      role: 'Desarrollador Full Stack',
      company: 'Campuslands',
      period: 'Febrero 2023 - Enero 2024',
      description: 'Creación de aplicaciones web responsivas y escalables usando tecnologías modernas y bases de datos relacionales y no relacionales. Liderazgo en el desarrollo de microservicios.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'MySQL'],
    },
    {
      role: 'Interprete Bilingüe Inglés',
      company: 'Solvo Global',
      period: 'Octubre 2021 - Diciembre 2022',
      description: 'Facilitación de comunicación fluida entre clientes hispanohablantes y angloparlantes, traduciendo conceptos técnicos y comerciales con alta precisión.',
      technologies: ['Inglés C1', 'Comunicación', 'Servicio al Cliente'],
    },
  ];

  return (
    <div className="glass-card p-8 md:p-10 mb-8 h-full">
      <div className="flex items-center gap-3 mb-10">
        <div className="p-3 bg-primary/10 rounded-xl">
          <Briefcase className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Experiencia Laboral</h3>
      </div>
      
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 md:pl-6">
            {/* Línea de tiempo visual (visible en desktop) */}
            <div className="hidden md:block absolute left-0 top-2 bottom-[-48px] w-px bg-slate-300 dark:bg-white/10 last:bg-transparent"></div>
            
            {/* Timeline dot (desktop) */}
            <div className="hidden md:block absolute left-[-5px] top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20 z-10"></div>
            
            <div className="md:grid md:grid-cols-[1fr_3fr] md:gap-8 items-start relative">
              <div className="mb-4 md:mb-0">
                <div className="text-sm font-semibold text-primary mb-1">{exp.period}</div>
              </div>
              
              <div className="glass-effect p-6 rounded-2xl hover:bg-slate-200/50 dark:hover:bg-white/5 transition-colors border-transparent hover:border-slate-300 dark:hover:border-white/10 border relative">
                {/* Mobile timeline dot */}
                <div className="absolute left-[-32px] top-8 w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20 z-10 md:hidden"></div>
                
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h4>
                <div className="text-slate-500 dark:text-slate-400 font-medium mb-4">{exp.company}</div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/20 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
