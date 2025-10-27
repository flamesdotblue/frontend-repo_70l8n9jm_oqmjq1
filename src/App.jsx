import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Top navigation */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 bg-slate-950/80 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#home" className="font-bold tracking-tight text-white">
            Aashrith.dev
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-300">
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Experience</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a
            href="#contact"
            className="sm:hidden inline-flex items-center justify-center rounded-md bg-emerald-500 text-slate-900 font-semibold px-3 py-1.5 text-sm"
          >
            Contact
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Skills />
        <Experience />
        <Contact />
      </main>

      <footer className="border-t border-white/5 py-8 text-center text-slate-400 text-sm">
        <div className="max-w-6xl mx-auto px-6">
          <p>© {new Date().getFullYear()} Aashrith. Built with React and love.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
