"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { StatItem } from "@/data/about";

interface StatCounterProps {
  stat: StatItem;
  delay?: number;
}

export default function StatCounter({ stat, delay = 0 }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1600; // ms
    const frames = 60;
    const interval = duration / frames;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = Math.min(step / frames, 1);
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const val = easedProgress * stat.value;

      setCurrentValue(val);

      if (progress >= 1) {
        clearInterval(timer);
        setCurrentValue(stat.value);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isInView, stat.value]);

  const formattedValue =
    stat.decimals !== undefined && stat.decimals > 0
      ? currentValue.toFixed(stat.decimals)
      : Math.floor(currentValue).toString();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="group relative p-5 sm:p-6 rounded-2xl bg-[#121212]/90 hover:bg-[#161616] border border-white/[0.08] hover:border-emerald-500/30 transition-all duration-300 hover:shadow-[0_10px_25px_-5px_rgba(16,185,129,0.12)] hover:-translate-y-1"
    >
      {/* Top accent line that reveals on hover */}
      <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Number Display */}
      <div className="flex items-baseline gap-1 text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
        <span className="text-white group-hover:text-emerald-400 transition-colors">
          {formattedValue}
        </span>
        {stat.suffix && (
          <span className="text-emerald-400 font-sans font-bold">
            {stat.suffix}
          </span>
        )}
      </div>

      {/* Primary Label */}
      <div className="mt-2 text-sm sm:text-base font-semibold text-zinc-200 group-hover:text-white transition-colors">
        {stat.label}
      </div>

      {/* Secondary Context */}
      <div className="mt-1 text-xs text-zinc-400 font-normal">
        {stat.sublabel}
      </div>
    </motion.div>
  );
}
