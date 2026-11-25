"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import { LinkedInIcon, XTwitterIcon, GitHubIcon } from "./SocialIcons";
import { aboutData } from "@/data/about";
import ResumeModal from "./ResumeModal";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export default function Footer() {
  const { personal } = aboutData;
  const [resumeOpen, setResumeOpen] = useState(false);

  const columns: FooterColumn[] = [
    {
      title: "General",
      links: [
        { label: "Home", href: "/" },
        { label: "About Me", href: "/about" },
        { label: "Work & Projects", href: "/about#experience" },
        { label: "Tech Stack", href: "/about#tech-stack" },
        { label: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Specifics",
      links: [
        { label: "Auralis AI Platform", href: "/about#experience" },
        { label: "ExamPro App", href: "/about#experience" },
        { label: "AgriGuide Advisory", href: "/about#experience" },
        { label: "DeadlockX System", href: "/about#experience" },
        { label: "Education & LPU", href: "/about#education" },
        { label: "Certifications", href: "/about#education" },
      ],
    },
    {
      title: "More",
      links: [
        { label: "GitHub Profile", href: personal.social.github, external: true },
        { label: "LinkedIn Network", href: personal.social.linkedin, external: true },
        { label: "LeetCode Practice", href: personal.social.leetcode, external: true },
        { label: "HackerRank Profile", href: personal.social.hackerrank, external: true },
      ],
    },
  ];

  return (
    <>
      <footer className="mt-20 border-t border-white/[0.08] bg-[#0c0c0c]/90 text-zinc-400 relative overflow-hidden">
        {/* Top ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Left Brand Col (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 focus:outline-none"
              >
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-500 to-emerald-300 flex items-center justify-center font-mono font-bold text-black text-sm shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                  U
                </div>
                <span className="font-bold text-xl text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                  {personal.fullName}
                  <span className="text-emerald-400">.</span>
                </span>
              </Link>

              {/* Short friendly line */}
              <p className="text-zinc-400 text-sm max-w-sm leading-relaxed">
                My inbox is always open whether you have a question, an opportunity,
                or just want to say hi — I&apos;ll do my best to get back to you!
              </p>

              {/* Available for work pill with green pulsing dot */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>{personal.availabilityStatus}</span>
              </div>

              {/* Social icons row */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={personal.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/[0.08] hover:border-emerald-500/40 hover:shadow-[0_0_12px_rgba(16,185,129,0.2)] transition-all hover:scale-105"
                >
                  <GitHubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personal.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/[0.08] hover:border-emerald-500/40 hover:shadow-[0_0_12px_rgba(16,185,129,0.2)] transition-all hover:scale-105"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
                <a
                  href={personal.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X / Twitter"
                  className="p-2.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/[0.08] hover:border-emerald-500/40 hover:shadow-[0_0_12px_rgba(16,185,129,0.2)] transition-all hover:scale-105"
                >
                  <XTwitterIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  aria-label="Send Email"
                  className="p-2.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/[0.08] hover:border-emerald-500/40 hover:shadow-[0_0_12px_rgba(16,185,129,0.2)] transition-all hover:scale-105"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Three link columns (7 cols) */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
              {columns.map((col) => (
                <div key={col.title} className="space-y-3">
                  <div className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
                    {col.title}
                  </div>
                  <ul className="space-y-2 text-sm">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        {link.external ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-zinc-400 hover:text-emerald-400 transition-colors"
                          >
                            <span>{link.label}</span>
                            <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                          </a>
                        ) : (
                          <Link
                            href={link.href}
                            className="text-zinc-400 hover:text-emerald-400 transition-colors"
                          >
                            {link.label}
                          </Link>
                        )}
                      </li>
                    ))}
                    {col.title === "More" && (
                      <li>
                        <button
                          onClick={() => setResumeOpen(true)}
                          className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
                        >
                          <span>View Resume PDF</span>
                          <ArrowUpRight className="w-3 h-3 text-emerald-400" />
                        </button>
                      </li>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Copyright line */}
          <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
            <p>
              &copy; 2026 {personal.fullName}. All rights reserved.
            </p>
            <p className="flex items-center gap-1 text-zinc-400">
              Built with Next.js, TypeScript &amp; Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
