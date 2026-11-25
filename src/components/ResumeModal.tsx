"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ExternalLink, FileText } from "lucide-react";
import { aboutData } from "@/data/about";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const { personal } = aboutData;
  const resumeUrl = personal.resumeUrl || "/Ujjawal_Resume.pdf";

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="relative w-full max-w-5xl h-[92vh] flex flex-col rounded-2xl bg-[#111111] border border-white/[0.12] shadow-2xl overflow-hidden z-10"
          >
            {/* Modal Top Actions Bar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-white/[0.08] bg-[#161616] flex-shrink-0">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <div className="ml-3 flex items-center gap-2 font-mono text-xs text-zinc-300">
                  <FileText className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-semibold text-white">Ujjawal_Resume.pdf</span>
                  <span className="hidden sm:inline-block text-[11px] px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    Original CV
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={resumeUrl}
                  download="Ujjawal_Resume.pdf"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs transition-all shadow-sm hover:scale-[1.02]"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download CV</span>
                </a>

                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white font-medium text-xs transition-colors border border-white/[0.06]"
                  title="Open original PDF in new tab"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open in Tab</span>
                </a>

                <button
                  onClick={onClose}
                  aria-label="Close modal"
                  className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Resume Document Viewer - Embedded Original CV PDF */}
            <div className="flex-1 w-full h-full relative bg-[#0a0a0a] overflow-hidden">
              <iframe
                src={`${resumeUrl}#view=FitH`}
                className="w-full h-full border-0 bg-[#0d0d0d]"
                title="Ujjawal's Original CV"
              />
            </div>

            {/* Bottom Info Strip */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-2 border-t border-white/[0.06] bg-[#121212] text-xs text-zinc-400 flex-shrink-0">
              <span className="text-[11px] text-zinc-400">
                Official CV &bull; Ujjawal &bull; Lovely Professional University
              </span>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-emerald-400 hover:underline inline-flex items-center gap-1"
              >
                <span>Direct PDF Link</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
