export default function About() {
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
            className="text-cyan-400 transition-all duration-300 hover:-translate-y-0.5 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]"
          >
            About
          </a>

          <a
            href="/skills"
            className="transition-all duration-300 hover:-translate-y-0.5 hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]"
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

      {/* ABOUT */}
      <section className="relative min-h-screen overflow-hidden px-6 py-32">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
            About
          </p>

          <h1 className="mt-4 text-5xl font-bold sm:text-6xl">
            About Me
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/60">
            I’m Mahesh Kumar — a creator exploring AI, technology,
            design and content creation. I enjoy turning ideas into
            useful and creative digital experiences.
          </p>

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