"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, GitCommit, Flame, Trophy, Terminal } from "lucide-react";
import { GitHubIcon } from "./SocialIcons";
import SectionHeading from "./SectionHeading";
import { aboutData } from "@/data/about";

export default function GitHubActivity() {
  const [snakeError, setSnakeError] = useState(false);
  const { github } = aboutData;

  // Generate 52 weeks * 7 days simulation data for interactive heatmap
  const weeks = 40;
  const daysPerWeek = 7;
  const sampleGrid = Array.from({ length: weeks * daysPerWeek }, (_, i) => {
    // pseudo-random contribution intensity
    const seed = (i * 37) % 100;
    if (seed > 85) return 4;
    if (seed > 65) return 3;
    if (seed > 45) return 2;
    if (seed > 25) return 1;
    return 0;
  });

  const getCellColor = (level: number) => {
    switch (level) {
      case 4:
        return "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]";
      case 3:
        return "bg-emerald-500/80";
      case 2:
        return "bg-emerald-600/50";
      case 1:
        return "bg-emerald-800/30";
      default:
        return "bg-zinc-800/50";
    }
  };

  return (
    <section id="github-activity" className="py-16 sm:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contributions"
          title="GitHub *Activity*"
          subtitle="Git up and running — continuous learning and shipping code every day with our friendly contribution snake."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="rounded-2xl bg-[#121212]/90 border border-white/[0.08] hover:border-emerald-500/30 transition-all p-6 sm:p-8"
        >
          {/* Top Bar with GitHub Profile Link & Badges */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/[0.06]">
            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-2xl bg-zinc-900 border border-white/[0.08] text-white">
                <GitHubIcon className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-white">
                    @{github.username}
                  </h3>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                    Active
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400">
                  Full-stack repositories, DSA algorithms, and open source
                </p>
              </div>
            </div>

            <a
              href={github.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-sm font-medium text-white border border-white/[0.08] hover:border-emerald-500/30 transition-all hover:scale-[1.02] shadow-sm w-fit"
            >
              <span>View GitHub Profile</span>
              <ExternalLink className="w-4 h-4 text-emerald-400" />
            </a>
          </div>

          {/* Snake SVG Container */}
          <div className="relative rounded-xl overflow-hidden bg-[#0c0c0c] border border-white/[0.06] p-4 sm:p-6 mb-6">
            <div className="flex items-center justify-between mb-3 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <Terminal className="w-3.5 h-3.5" />
                snake-eating-contributions.svg
              </span>
              <span className="text-zinc-500 hidden sm:inline">
                Generated via Platane/snk
              </span>
            </div>

            {!snakeError ? (
              <div className="relative w-full aspect-[21/9] sm:aspect-[21/7] max-h-[220px] flex items-center justify-center overflow-hidden">
                <Image
                  src={github.snakeSvg}
                  alt="GitHub Contribution Snake Animation"
                  fill
                  className="object-contain"
                  onError={() => setSnakeError(true)}
                  unoptimized
                />
              </div>
            ) : (
              /* High-fidelity interactive contribution matrix fallback */
              <div className="w-full overflow-x-auto py-2">
                <div className="min-w-[650px] space-y-1">
                  <div className="grid grid-flow-col grid-rows-7 gap-1">
                    {sampleGrid.map((level, idx) => (
                      <div
                        key={idx}
                        className={`w-2.5 h-2.5 rounded-xs transition-all duration-200 hover:scale-125 ${getCellColor(
                          level
                        )}`}
                        title={`Activity level: ${level}`}
                      />
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-zinc-400 font-mono pt-2">
                    <span>Less</span>
                    <div className="flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded-xs bg-zinc-800/50" />
                      <span className="w-2.5 h-2.5 rounded-xs bg-emerald-800/40" />
                      <span className="w-2.5 h-2.5 rounded-xs bg-emerald-600/60" />
                      <span className="w-2.5 h-2.5 rounded-xs bg-emerald-500/80" />
                      <span className="w-2.5 h-2.5 rounded-xs bg-emerald-400" />
                    </div>
                    <span>More</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-900/60 border border-white/[0.04]">
              <Flame className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <div>
                <div className="text-sm font-semibold text-white">Daily Coding Streak</div>
                <div className="text-xs text-zinc-400">100+ LeetCode & GFG challenges</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-900/60 border border-white/[0.04]">
              <Trophy className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <div>
                <div className="text-sm font-semibold text-white">HackerRank Badges</div>
                <div className="text-xs text-zinc-400">5-Star Java & 3-Star Python</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-900/60 border border-white/[0.04]">
              <GitCommit className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <div>
                <div className="text-sm font-semibold text-white">Verified Certs</div>
                <div className="text-xs text-zinc-400">Infosys DBMS Part 2 & C++</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
