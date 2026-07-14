import React from 'react';
import { Code, Server, Lightbulb, Languages } from 'lucide-react';

const technicalSkills = [
  'TypeScript', 'React', 'Node.js', 'Next.js', 'Python',
  'MySQL', 'MongoDB', 'Odoo', 'n8n', 'LangChain',
  'DevOps', 'Docker', 'Git', 'Laravel'
];

const softSkills = [
  'Aprendizaje autodidacta', 'Orientación al logro', 'Trabajo en equipo',
  'Adaptación al cambio', 'Autocontrol', 'Liderazgo'
];

export const SkillsGrid: React.FC = () => {
  return (
    <div className="glass-card p-8 md:p-10 mb-8 h-full">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 rounded-xl bg-purple-500/20 text-purple-600 dark:text-purple-400">
          <Code className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Habilidades & Competencias</h3>
      </div>

      <div className="space-y-8">
        {/* Technical Skills */}
        <div>
          <h4 className="flex items-center gap-2 text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">
            <Server className="w-5 h-5 text-blue-500 dark:text-blue-400" /> Tecnologías
          </h4>
          <div className="flex flex-wrap gap-3">
            {technicalSkills.map((skill, index) => (
              <span 
                key={index} 
                className="px-4 py-2 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-primary/20 hover:border-primary/50 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h4 className="flex items-center gap-2 text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">
            <Lightbulb className="w-5 h-5 text-amber-500 dark:text-amber-400" /> Competencias Blandas
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {softSkills.map((skill, index) => (
              <div 
                key={index} 
                className="flex items-center gap-2 p-3 rounded-lg bg-slate-100 dark:bg-white/5 border-l-2 border-l-primary/50"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span className="text-sm text-slate-700 dark:text-slate-300">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div>
          <h4 className="flex items-center gap-2 text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">
            <Languages className="w-5 h-5 text-emerald-500 dark:text-emerald-400" /> Idiomas
          </h4>
          <div className="inline-flex items-center gap-3 px-4 py-3 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <span className="text-2xl">🇺🇸</span>
            <div>
              <span className="block font-medium text-slate-800 dark:text-slate-200">Inglés</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">Nivel A2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
