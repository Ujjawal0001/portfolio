import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { aboutData } from "@/data/about";
import StatCounter from "@/components/StatCounter";

export const metadata: Metadata = {
  title: "Ujjawal | Full-Stack Developer",
  description:
    "Full-Stack Developer, CSE student at Lovely Professional University. Specializing in MERN, Next.js, TypeScript, Flutter, and algorithms.",
};

export default function Home() {
  const { personal, stats, experiences } = aboutData;

  return (
    <div className="relative overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-emerald-500/[0.06] blur-[150px] pointer-events-none -z-10" />

      {/* Hero Intro */}
      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          {/* Eyebrow Status */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-mono text-xs font-medium tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>{personal.availabilityStatus}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Building software with{" "}
            <span className="font-serif italic text-emerald-400 font-normal underline decoration-emerald-500/30 decoration-2 underline-offset-8">
              precision
            </span>{" "}
            and purpose.
          </h1>

          <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Hi, I&apos;m <strong className="text-white">{personal.fullName}</strong>. A full-stack
            developer and Computer Science undergraduate at Lovely Professional University,
            specializing in Next.js, MERN, Flutter, and scalable backend architecture.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm transition-all hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:scale-[1.02]"
            >
              <span>Explore My About Page</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/about#experience"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#141414] hover:bg-zinc-800 text-white font-medium text-sm border border-white/[0.08] hover:border-emerald-500/30 transition-all hover:scale-[1.02]"
            >
              <span>View Projects</span>
            </Link>
          </div>

          {/* Real Stats Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {stats.map((stat, idx) => (
              <StatCounter key={stat.id} stat={stat} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Highlight */}
      <section className="py-16 border-t border-white/[0.06] bg-[#0c0c0c]/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-1">
                Selected Works
              </div>
              <h2 className="text-3xl font-bold text-white tracking-tight">
                Featured <span className="font-serif italic text-emerald-400 font-normal">Projects</span>
              </h2>
            </div>

            <Link
              href="/about#experience"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span>View all projects &amp; details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experiences.slice(0, 3).map((exp) => (
              <div
                key={exp.id}
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-[#121212]/90 border border-white/[0.08] hover:border-emerald-500/30 transition-all duration-300 hover:shadow-[0_10px_25px_-10px_rgba(16,185,129,0.15)] hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                    <span className="text-emerald-400">{exp.type}</span>
                    <span>{exp.period}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed mb-4">
                    {exp.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {exp.techSlugs.slice(0, 3).map((t) => (
                      <span
                        key={t.slug}
                        className="px-2 py-0.5 rounded-md bg-zinc-900 border border-white/[0.06] text-[11px] text-zinc-300"
                      >
                        {t.name}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/about#experience"
                    className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-emerald-400 transition-colors"
                    aria-label={`View ${exp.title}`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
