"use client";

import React from "react";
import { motion } from "framer-motion";
import TechChip from "./TechChip";
import { TechGroup } from "@/data/about";
import { Layout, Server, Cloud, Wrench } from "lucide-react";

interface TechGroupCardProps {
  group: TechGroup;
  index: number;
}

const groupIcons: Record<string, React.ReactNode> = {
  frontend: <Layout className="w-5 h-5 text-emerald-400" />,
  backend: <Server className="w-5 h-5 text-emerald-400" />,
  devops: <Cloud className="w-5 h-5 text-emerald-400" />,
  tools: <Wrench className="w-5 h-5 text-emerald-400" />,
};

export default function TechGroupCard({ group, index }: TechGroupCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#121212]/90 hover:bg-[#161616] border border-white/[0.08] hover:border-emerald-500/30 transition-all duration-300 hover:shadow-[0_12px_30px_-10px_rgba(16,185,129,0.12)] hover:-translate-y-1"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      <div>
        {/* Header with icon and title */}
        <div className="flex items-center gap-3 mb-2.5">
          <div className="p-2.5 rounded-xl bg-zinc-900 border border-white/[0.06] group-hover:border-emerald-500/20 transition-colors">
            {groupIcons[group.id] || <Server className="w-5 h-5 text-emerald-400" />}
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
            {group.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-sm text-zinc-400 leading-relaxed mb-6">
          {group.description}
        </p>

        {/* Chips Grid */}
        <div className="flex flex-wrap gap-2 sm:gap-2.5">
          {group.items.map((tech) => (
            <TechChip
              key={tech.slug}
              name={tech.name}
              slug={tech.slug}
              white={tech.white}
              size="md"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
