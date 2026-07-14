import React from 'react';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    title: 'Ingeniería de Sistemas',
    institution: 'Unidades Tecnológicas de Santander',
    period: 'Ago 2025 - En curso'
  },
  {
    title: 'Técnico Laboral en Desarrollo de Software',
    institution: 'Campuslands, Floridablanca',
    period: 'Ene 2024 - Nov 2024'
  },
  {
    title: 'Tecnólogo en Desarrollo de Sistemas Informáticos',
    institution: 'Unidades Tecnológicas de Santander',
    period: 'Ago 2019 - Dic 2023'
  }
];

export const EducationList: React.FC = () => {
  return (
    <div className="glass-card p-8 md:p-10 mb-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
          <GraduationCap className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Formación Académica</h3>
      </div>

      <div className="space-y-6">
        {education.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row md:items-center justify-between gap-2 p-5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">
            <div>
              <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200">{item.title}</h4>
              <span className="text-sm text-slate-500 dark:text-slate-400">{item.institution}</span>
            </div>
            <div className="shrink-0 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-medium border border-emerald-500/20">
              {item.period}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
