const skills = [
  ["AI & ChatGPT", "AI tools, prompting and intelligent workflows."],
  ["Video Editing", "Creative editing, storytelling and visual production."],
  ["Content Creation", "Ideas, scripts, visuals and digital content."],
  ["Graphic Design", "Visual design and modern digital branding."],
  ["Social Media", "Social content and digital brand growth."],
  ["Web Development", "Modern websites and interactive experiences."],
];

export default function Skills() {
  return (
    <main className="min-h-screen bg-[#070707] text-white">
      {/* NAVBAR */}
      <nav className="fixed left-1/2 top-5 z-50 flex w-[92%] max-w-6xl -translate-x-1/2 items-center justify-between rounded-2xl border border-white/10 bg-black/60 px-5 py-3 backdrop-blur-xl">
        <a
          href="/"
          className="text-xl font-bold transition-all duration-300 hover:text-cyan-400 hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.45)]"
        >
          MK Arts<span className="text-cyan-400">.</span>
        </a>

        <div className="flex gap-3 text-xs text-white/70 sm:gap-5 sm:text-sm">
          <a
            href="/"
            className="transition-all duration-300 hover:-translate-y-0.5 hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]"
          >
            Home
          </a>

          <a
            href="/about"
            className="transition-all duration-300 hover:-translate-y-0.5 hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]"
          >
            About
          </a>

          <a
            href="/skills"
            className="text-cyan-400 transition-all duration-300 hover:-translate-y-0.5 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]"
          >
            Skills
          </a>

          <a
            href="/projects"
            className="transition-all duration-300 hover:-translate-y-0.5 hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]"
          >
            Projects
          </a>

          <a
            href="/contact"
            className="transition-all duration-300 hover:-translate-y-0.5 hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* SKILLS */}
      <section className="relative min-h-screen overflow-hidden px-6 py-32">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
            Capabilities
          </p>

          <h1 className="mt-4 text-5xl font-bold sm:text-6xl">
            Skills & Expertise
          </h1>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map(([title, description]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-cyan-400/[0.04] hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]"
              >
                <h2 className="text-xl font-bold">{title}</h2>

                <p className="mt-2 text-sm leading-6 text-white/40">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <a
            href="/"
            className="mt-10 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]"
          >
            ← Back to Home
          </a>
        </div>
      </section>
    </main>
  );
}