export default function Contact() {
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
            className="text-cyan-400 transition-all duration-300 hover:-translate-y-0.5 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* CONTACT */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 py-32">
        {/* Ambient glows */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="pointer-events-none absolute right-0 top-1/4 h-[250px] w-[250px] rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
            Contact
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-bold leading-tight sm:text-6xl md:text-7xl">
            Let’s build something{" "}
            <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.2)]">
              great.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/50">
            Have an idea, project or collaboration in mind?
            Let’s connect and turn the idea into something meaningful.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="mailto:mr.mk1416@gmail.com?subject=Portfolio%20Contact"
              className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]"
            >
              Get in Touch →
            </a>

            <a
              href="/"
              className="rounded-xl border border-white/15 px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]"
            >
              ← Back to Home
            </a>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6">
            <p className="text-sm text-white/40">
              Email
            </p>

            <a
              href="mailto:mr.mk1416@gmail.com"
              className="mt-1 inline-block text-white/70 transition-colors duration-300 hover:text-cyan-400"
            >
              mr.mk1416@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}