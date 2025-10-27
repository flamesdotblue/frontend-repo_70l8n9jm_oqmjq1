import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/30 to-slate-950/80" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs sm:text-sm tracking-wide backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Open to opportunities
        </p>
        <h1 className="mt-6 text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Hi, I’m <span className="text-emerald-400">Aashrith</span>, a Software Engineer
        </h1>
        <p className="mt-4 text-slate-300 text-base sm:text-lg md:text-xl">
          I craft fast, accessible web experiences with React, Node, and modern JavaScript. 1.5 years of hands-on experience at Ellucian building reliable, user-focused products.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#projects" className="inline-flex justify-center rounded-md bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-6 py-3 transition">
            View Work
          </a>
          <a href="#contact" className="inline-flex justify-center rounded-md border border-white/15 hover:border-white/30 bg-white/5 hover:bg-white/10 text-white px-6 py-3 transition">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
