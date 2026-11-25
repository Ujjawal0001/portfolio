"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Code2 } from "lucide-react";

interface TechChipProps {
  name: string;
  slug: string;
  white?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function TechChip({
  name,
  slug,
  white = false,
  size = "md",
  className = "",
}: TechChipProps) {
  const [imgError, setImgError] = useState(false);

  // SimpleIcons CDN URL: append /white if icon is naturally dark/black
  const iconUrl = `https://cdn.simpleicons.org/${slug}${white ? "/white" : ""}`;

  const sizeStyles = {
    sm: "px-2.5 py-1 text-xs gap-1.5",
    md: "px-3.5 py-1.5 text-xs sm:text-sm gap-2",
    lg: "px-4 py-2 text-sm gap-2.5",
  };

  const iconSizes = {
    sm: 14,
    md: 16,
    lg: 18,
  };

  return (
    <div
      className={`group inline-flex items-center rounded-xl bg-zinc-900/90 hover:bg-zinc-800/90 text-zinc-300 hover:text-white border border-white/[0.08] hover:border-emerald-500/40 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] transition-all duration-200 transform hover:scale-[1.03] select-none cursor-default ${sizeStyles[size]} ${className}`}
    >
      <div className="relative flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110">
        {!imgError ? (
          <Image
            src={iconUrl}
            alt={`${name} icon`}
            width={iconSizes[size]}
            height={iconSizes[size]}
            className="w-4 h-4 object-contain filter group-hover:brightness-110"
            onError={() => setImgError(true)}
            unoptimized // SimpleIcons CDN already serves optimized SVGs
          />
        ) : (
          <Code2 className="w-3.5 h-3.5 text-emerald-400" />
        )}
      </div>
      <span className="font-medium tracking-tight whitespace-nowrap">{name}</span>
    </div>
  );
}
