"use client";

import React from "react";
import { motion } from "framer-motion";
import { EducationItem } from "@/data/about";
import { GraduationCap, Award, BookOpen, Terminal, MapPin, Calendar, CheckCircle2 } from "lucide-react";

interface TimelineCardProps {
  item: EducationItem;
  index: number;
  isLast?: boolean;
}

export default function TimelineCard({
  item,
  index,
  isLast = false,
}: TimelineCardProps) {
  const getIcon = () => {
    switch (item.accentIcon) {
      case "graduation":
        return <GraduationCap className="w-5 h-5 text-emerald-400" />;
      case "bootcamp":
        return <Terminal className="w-5 h-5 text-emerald-400" />;
      case "school":
        return <BookOpen className="w-5 h-5 text-emerald-400" />;
      case "award":
        return <Award className="w-5 h-5 text-emerald-400" />;
      default:
        return <GraduationCap className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="relative flex gap-4 sm:gap-6 group"
    >
      {/* Vertical Spine & Node */}
      <div className="flex flex-col items-center">
        {/* Node Circle */}
        <div className="relative z-10 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#161616] border border-white/[0.12] group-hover:border-emerald-500/50 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-all duration-300">
          {getIcon()}
        </div>
        {/* Connecting line */}
        {!isLast && (
          <div className="w-[2px] flex-1 my-2 bg-gradient-to-b from-white/[0.12] via-emerald-500/20 to-white/[0.04]" />
        )}
      </div>

      {/* Content Card */}
      <div className="flex-1 pb-8 sm:pb-10">
        <div className="p-5 sm:p-7 rounded-2xl bg-[#121212]/90 hover:bg-[#161616] border border-white/[0.08] hover:border-emerald-500/30 transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(16,185,129,0.12)] hover:-translate-y-0.5">
          {/* Header Row: Title and Date */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
            <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
              {item.institution}
            </h3>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-white/[0.06] text-xs font-mono text-zinc-300 w-fit">
              <Calendar className="w-3 h-3 text-emerald-400" />
              {item.period}
            </span>
          </div>

          {/* Role / Degree */}
          <div className="text-sm sm:text-base font-semibold text-emerald-400 mb-2">
            {item.degree}
          </div>

          {/* Metadata Row: Location & Grade */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-zinc-400 mb-3.5">
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-zinc-500" />
              {item.location}
            </span>
            {item.grade && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-medium">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                {item.grade}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-sm text-zinc-400 leading-relaxed">
            {item.description}
          </p>

          {/* Optional Course / Focus tags */}
          {item.courses && item.courses.length > 0 && (
            <div className="mt-4 pt-3.5 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
              <span className="text-xs text-zinc-400 font-mono uppercase tracking-wider mr-1">
                Focus Areas:
              </span>
              {item.courses.map((course) => (
                <span
                  key={course}
                  className="px-2.5 py-1 rounded-lg bg-zinc-900/80 border border-white/[0.06] text-xs text-zinc-300 font-normal"
                >
                  {course}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
