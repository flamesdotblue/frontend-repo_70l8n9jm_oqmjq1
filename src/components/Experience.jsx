import React from 'react';

const Experience = () => {
  return (
    <section id="projects" className="py-20 bg-slate-950 text-white border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold">Experience</h2>
        <p className="mt-2 text-slate-400 max-w-2xl">
          1.5 years as a Software Engineer at Ellucian, collaborating on
          production features, improving performance, and delivering
          maintainable code across the stack.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold text-lg">Frontend Engineering</h3>
            <p className="mt-2 text-slate-300 text-sm">
              Built reactive, accessible interfaces with React and modern
              CSS. Focused on performance, UI consistency, and component
              reuse.
            </p>
            <ul className="mt-4 list-disc pl-5 text-slate-300 text-sm space-y-1">
              <li>Accessible components and responsive layouts</li>
              <li>Optimized rendering, code-splitting, and caching</li>
              <li>Design systems alignment and review</li>
            </ul>
          </article>

          <article className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold text-lg">Backend & APIs</h3>
            <p className="mt-2 text-slate-300 text-sm">
              Implemented REST APIs and Node services with clean routing,
              validation, and logging. Integrated third-party services and
              CI/CD pipelines.
            </p>
            <ul className="mt-4 list-disc pl-5 text-slate-300 text-sm space-y-1">
              <li>Express.js, authentication, and middleware</li>
              <li>RESTful API design and documentation</li>
              <li>Monitoring and reliability improvements</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;
