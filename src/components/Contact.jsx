import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const email = 'aasr20is@cmrit.ac.in';

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Portfolio inquiry from ${name || 'Visitor'}`;
    const body = message || 'Hi! I would love to connect.';
    const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 text-white border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold">Let’s build something</h2>
        <p className="mt-2 text-slate-400">
          Have an idea, role, or project in mind? Send a message and I’ll get back soon.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
          <div>
            <label className="block text-sm text-slate-300">Your name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jane Doe"
              className="mt-1 w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/60"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-300">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              placeholder="Tell me about your project, timeline, and goals."
              className="mt-1 w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/60"
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-6 py-3 transition"
            >
              Send message
            </button>
            <a
              href={`mailto:${email}`}
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
            >
              Or email directly
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
