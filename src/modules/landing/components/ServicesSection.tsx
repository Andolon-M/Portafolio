import React from 'react';
import { Bot, Code2, Cpu, Database, Blocks, Smartphone } from 'lucide-react';

const services = [
  {
    title: 'Desarrollo Web Full Stack',
    description: 'Aplicaciones modernas, rápidas y escalables creadas desde cero con React, Node.js y arquitecturas sólidas.',
    icon: <Code2 className="w-8 h-8 text-blue-400" />,
  },
  {
    title: 'Bots Conversacionales & IA',
    description: 'Agentes inteligentes integrados en WhatsApp, Telegram y MS Teams, potenciados por modelos de lenguaje (LLMs).',
    icon: <Bot className="w-8 h-8 text-emerald-400" />,
  },
  {
    title: 'Automatización con n8n',
    description: 'Optimización de procesos de negocio conectando múltiples APIs y herramientas mediante flujos automatizados en n8n.',
    icon: <Cpu className="w-8 h-8 text-amber-400" />,
  },
  {
    title: 'Módulos Odoo ERP',
    description: 'Desarrollo e integración de módulos personalizados en Odoo para adaptar el ERP exactamente a las necesidades de tu empresa.',
    icon: <Database className="w-8 h-8 text-purple-400" />,
  },
  {
    title: 'Arquitectura & Consultoría',
    description: 'Diseño de sistemas, patrones de arquitectura de software (como Feature-Sliced Design) y revisión técnica integral.',
    icon: <Blocks className="w-8 h-8 text-rose-400" />,
  },
  {
    title: 'Integraciones API',
    description: 'Conexión de sistemas heredados con plataformas modernas, Webhooks y sincronización de datos en tiempo real.',
    icon: <Smartphone className="w-8 h-8 text-cyan-400" />,
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight">
            Servicios <span className="text-gradient">Especializados</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Soluciones tecnológicas diseñadas para optimizar tus procesos, escalar tu negocio y llevar tus ideas a la realidad con código limpio y arquitecturas robustas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-card p-8 group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl glass-effect flex items-center justify-center mb-6 text-primary shadow-[0_0_15px_rgba(139,92,246,0.3)] group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
