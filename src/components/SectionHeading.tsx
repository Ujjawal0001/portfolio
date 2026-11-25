"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  highlightWord?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  highlightWord,
  subtitle,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  // If highlightWord isn't explicitly provided, check if title contains *word* syntax
  let displayTitle = title;
  let highlighted = highlightWord;

  const asteriskMatch = title.match(/\*(.*?)\*/);
  if (asteriskMatch && !highlightWord) {
    highlighted = asteriskMatch[1];
    displayTitle = title.replace(/\*.*?\*/, `__HIGHLIGHT__`);
  }

  const parts = highlighted && displayTitle.includes("__HIGHLIGHT__")
    ? displayTitle.split("__HIGHLIGHT__")
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`mb-10 sm:mb-14 ${align === "center" ? "text-center" : "text-left"} ${className}`}
    >
      {/* Eyebrow */}
      <div
        className={`inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-medium tracking-widest uppercase ${
          align === "center" ? "mx-auto" : ""
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        {eyebrow}
      </div>

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
        {parts ? (
          <>
            {parts[0]}
            <span className="font-serif italic text-emerald-400 font-normal underline decoration-emerald-500/30 decoration-2 underline-offset-4">
              {highlighted}
            </span>
            {parts[1]}
          </>
        ) : highlighted && title.includes(highlighted) ? (
          <>
            {title.split(highlighted)[0]}
            <span className="font-serif italic text-emerald-400 font-normal underline decoration-emerald-500/30 decoration-2 underline-offset-4">
              {highlighted}
            </span>
            {title.split(highlighted)[1]}
          </>
        ) : (
          title
        )}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
