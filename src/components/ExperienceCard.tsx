"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExperienceItem } from "@/data/about";
import TechChip from "./TechChip";
import {
  Calendar,
  MapPin,
  ChevronDown,
  ExternalLink,
  Briefcase,
  Layers,
  Award,
} from "lucide-react";
import { GitHubIcon } from "./SocialIcons";

interface ExperienceCardProps {
  experience: ExperienceItem;
  index: number;
}

export default function ExperienceCard({
  experience,
  index,
}: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getTypeBadge = (type: ExperienceItem["type"]) => {
    switch (type) {
      case "Project":
        return {
          bg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
          icon: <Layers className="w-3.5 h-3.5" />,
        };
      case "Training":
        return {
          bg: "bg-sky-500/10 text-sky-400 border-sky-500/20",
          icon: <Award className="w-3.5 h-3.5" />,
        };
      case "Internship":
        return {
          bg: "bg-purple-500/10 text-purple-400 border-purple-500/20",
          icon: <Briefcase className="w-3.5 h-3.5" />,
        };
      default:
        return {
          bg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
          icon: <Layers className="w-3.5 h-3.5" />,
        };
    }
  };

  const badgeStyle = getTypeBadge(experience.type);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group relative flex flex-col p-6 sm:p-8 rounded-2xl bg-[#121212]/90 hover:bg-[#161616] border border-white/[0.08] hover:border-emerald-500/30 transition-all duration-300 hover:shadow-[0_12px_32px_-12px_rgba(16,185,129,0.15)] hover:-translate-y-1"
    >
      {/* Top Header: Title & Badges */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
        <div>
          <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full border text-xs font-mono font-medium ${badgeStyle.bg}`}
            >
              {badgeStyle.icon}
              {experience.type}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-zinc-400">
              <MapPin className="w-3 h-3 text-zinc-500" />
              {experience.location}
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
            {experience.title}
          </h3>
        </div>

        {/* Date Period & Links */}
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-white/[0.06] text-xs font-mono text-zinc-300">
            <Calendar className="w-3.5 h-3.5 text-emerald-400" />
            {experience.period}
          </span>
          {experience.githubUrl && (
            <a
              href={experience.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${experience.title} on GitHub`}
              className="p-2 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/[0.06] hover:border-emerald-500/30 transition-all"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
          )}
          {experience.liveUrl && (
            <a
              href={experience.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo of ${experience.title}`}
              className="p-2 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/[0.06] hover:border-emerald-500/30 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Role */}
      <div className="text-sm sm:text-base font-semibold text-emerald-400 mb-3">
        {experience.role}
      </div>

      {/* Short Paragraph */}
      <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-4">
        {experience.summary}
      </p>

      {/* 3 Bullet Achievements (Expandable or always preview 1, expand for all 3) */}
      <div className="space-y-2.5 mb-5">
        {/* First bullet always visible */}
        {experience.bullets.length > 0 && (
          <div className="flex items-start gap-2.5 text-sm text-zinc-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
            <p className="leading-relaxed">
              <strong className="text-white font-semibold">
                {experience.bullets[0].lead}:
              </strong>{" "}
              {experience.bullets[0].description}
            </p>
          </div>
        )}

        {/* Remaining bullets animated */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              key="content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden space-y-2.5 pt-1"
            >
              {experience.bullets.slice(1).map((bullet, bIndex) => (
                <div
                  key={bIndex}
                  className="flex items-start gap-2.5 text-sm text-zinc-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                  <p className="leading-relaxed">
                    <strong className="text-white font-semibold">
                      {bullet.lead}:
                    </strong>{" "}
                    {bullet.description}
                  </p>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Read More / Collapse Toggle Button */}
      {experience.bullets.length > 1 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-400 hover:text-emerald-300 transition-colors w-fit mb-6 group/btn focus:outline-none"
        >
          <span>{isExpanded ? "Show less" : "Read more achievements"}</span>
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </button>
      )}

      {/* Tech Chips Row */}
      <div className="pt-4 border-t border-white/[0.06] mt-auto">
        <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2.5">
          Technologies Used
        </div>
        <div className="flex flex-wrap gap-2">
          {experience.techSlugs.map((tech) => (
            <TechChip
              key={tech.slug}
              name={tech.name}
              slug={tech.slug}
              white={tech.white}
              size="sm"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
