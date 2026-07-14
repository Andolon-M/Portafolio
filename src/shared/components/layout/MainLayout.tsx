import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Terminal } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';

export const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-[-1] bg-slate-50 dark:bg-slate-950 transition-colors overflow-hidden">
        {/* Círculo Morado */}
        <div className="absolute top-0 left-0 w-[50vw] h-[50vw] md:w-[40vw] md:h-[40vw] rounded-full bg-purple-600/20 blur-[120px] mix-blend-multiply dark:mix-blend-screen pointer-events-none animate-blob" />
        {/* Círculo Secundario (Fucsia/Índigo) */}
        <div className="absolute top-0 left-0 w-[60vw] h-[60vw] md:w-[45vw] md:h-[45vw] rounded-full bg-indigo-600/20 blur-[120px] mix-blend-multiply dark:mix-blend-screen pointer-events-none animate-blob-reverse" />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full glass-effect border-b border-black/5 dark:border-white/10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Terminal className="text-primary h-6 w-6" />
            <span className="text-xl font-bold tracking-tighter text-slate-900 dark:text-white">
              Ando<span className="text-primary">lon_</span>
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex gap-6">
              <Link to="/" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white transition-colors">Inicio</Link>
              <Link to="/about" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white transition-colors">Sobre mí</Link>
              <a href="/#services" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white transition-colors">Servicios</a>
              <a href="/#projects" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white transition-colors">Proyectos</a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 glass-effect mt-auto">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Portafolio Profesional. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            {/* Redes sociales placeholders */}
            <a href="#" className="text-slate-400 hover:text-white transition-colors">GitHub</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
