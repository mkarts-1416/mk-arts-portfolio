const projects = [
  {
    status: "In Progress",
    image: "/portfolio-platform.png",
    title: "Portfolio Platform",
    description:
      "A modern personal portfolio and project management platform.",
  },
  {
    status: "Concept",
    image: "/ai-innovation.png",
    title: "AI Innovation",
    description:
      "Exploring intelligent tools, automation and AI-powered experiences.",
  },
  {
    status: "Coming Soon",
    image: "/creative-studio.png",
    title: "Creative Studio",
    description:
      "A collection of creative work across video, design and content.",
  },
];

export default function Projects() {
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
            className="text-cyan-400 transition-all duration-300 hover:-translate-y-0.5 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]"
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

      {/* PROJECTS */}
      <section className="relative min-h-screen overflow-hidden px-6 py-32">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/4 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
            Selected Work
          </p>

          <h1 className="mt-4 text-5xl font-bold sm:text-6xl">
            Featured Projects
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/50">
            A selection of projects built through creativity,
            technology and continuous learning.
          </p>

          {/* MY VIDEO */}
          <div className="mt-16">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
              My Video
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Creative Showcase
            </h2>

            <div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-[#0c0c0c] shadow-[0_0_50px_rgba(34,211,238,0.08)]">
              {/* VIDEO PLAYER */}
              <div className="relative bg-black">
                <video
                  controls
                  preload="metadata"
                  className="aspect-video w-full object-contain"
                >
                  <source
                    src="/videos/my-video.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* VIDEO INFORMATION */}
              <div className="border-t border-white/10 px-6 py-6 sm:px-8">
                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">
                      MK Arts • Creative Work
                    </p>

                    <h3 className="mt-2 text-2xl font-bold">
                      My Creative Showcase
                    </h3>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-white/40">
                      A glimpse into my creative work, ideas and digital
                      experiences.
                    </p>
                  </div>

                  <div className="shrink-0 rounded-xl border border-cyan-400/20 bg-cyan-400/[0.05] px-4 py-3 text-sm text-cyan-300">
                    Featured Video
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PROJECT CARDS */}
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-cyan-400/[0.04] hover:shadow-[0_0_35px_rgba(34,211,238,0.08)]"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
                    {project.status}
                  </p>

                  <h2 className="mt-3 text-2xl font-bold">
                    {project.title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-white/40">
                    {project.description}
                  </p>
                </div>
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