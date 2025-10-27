import React from 'react';

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Node.js',
  'Java',
  'REST APIs',
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold">Core Skills</h2>
        <p className="mt-2 text-slate-400 max-w-2xl">
          A focused toolkit for building reliable web applications end-to-end.
        </p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {skills.map((s) => (
            <div
              key={s}
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm sm:text-base text-center hover:border-emerald-400/40 hover:bg-emerald-400/10 transition"
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
