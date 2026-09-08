"use client";

import { useState } from "react";

export default function Home() {
  const [dark, setDark] = useState(true);

  return (
    <main
      className={
        dark
          ? "min-h-screen bg-[#070707] text-white"
          : "min-h-screen bg-white text-black"
      }
    >
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
            className="transition-all duration-300 hover:-translate-y-0.5 hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]"
          >
            Contact
          </a>
        </div>

        <button
          onClick={() => setDark(!dark)}
          className="rounded-xl border border-white/10 px-3 py-2 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
        >
          {dark ? "☀️" : "🌙"}
        </button>
      </nav>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="pointer-events-none absolute right-0 top-1/4 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="pointer-events-none absolute left-[12%] top-[28%] h-32 w-32 animate-[floatGlow_6s_ease-in-out_infinite] rounded-full bg-cyan-400/10 blur-[70px]" />

        <div className="relative z-10 mx-auto w-full max-w-6xl animate-[fadeInUp_0.8s_ease-out]">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-cyan-400">
            Creative Technologist
          </p>

          <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-tight drop-shadow-[0_0_25px_rgba(34,211,238,0.08)] sm:text-7xl md:text-8xl">
            Building
            <br />

            <span className="animate-[gradientMove_4s_ease-in-out_infinite] bg-[length:200%_auto] bg-gradient-to-r from-cyan-300 via-white to-blue-400 bg-clip-text text-transparent">
              Modern
            </span>

            <br />

            Digital Experiences.
          </h1>

          <p className="mt-8 max-w-2xl animate-[descriptionReveal_1s_ease-out_0.4s_both] text-lg leading-8 text-white/50">
            I create digital experiences by combining AI, design,
            technology and creative thinking.
          </p>

          <div className="mt-9 flex animate-[buttonsReveal_1s_ease-out_0.7s_both] gap-4">
            <a
              href="/projects"
              className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]"
            >
              Explore Projects →
            </a>

            <a
              href="/contact"
              className="rounded-xl border border-white/15 px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-white/40 sm:flex-row">
          <p>© 2026 MK Arts. All rights reserved.</p>

          <p>
            Built with <span className="text-cyan-400">Next.js</span> &
            creativity.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }

          50% {
            background-position: 100% 50%;
          }

          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes descriptionReveal {
          from {
            opacity: 0;
            transform: translateY(12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes buttonsReveal {
          from {
            opacity: 0;
            transform: translateY(14px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatGlow {
          0%,
          100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-35px);
          }
        }
      `}</style>
    </main>
  );
}