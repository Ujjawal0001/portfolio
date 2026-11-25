"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText, PhoneCall } from "lucide-react";
import ResumeModal from "./ResumeModal";
import { aboutData } from "@/data/about";

export default function Navbar() {
  const pathname = usePathname();
  const [currentHash, setCurrentHash] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync hash changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentHash(window.location.hash);
    }

    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Scroll spy on /about page to distinguish between "About" and "Work" (#experience)
  useEffect(() => {
    if (pathname !== "/about") {
      setCurrentHash("");
      return;
    }

    if (window.location.hash === "#experience") {
      setCurrentHash("#experience");
    }

    const checkExperienceSection = () => {
      const expEl = document.getElementById("experience");
      if (!expEl) return;
      const rect = expEl.getBoundingClientRect();
      // If experience section is scrolled into active view
      if (rect.top <= 250 && rect.bottom >= 150) {
        setCurrentHash("#experience");
      } else if (rect.top > 250) {
        setCurrentHash("");
      }
    };

    window.addEventListener("scroll", checkExperienceSection, { passive: true });
    checkExperienceSection();
    return () => window.removeEventListener("scroll", checkExperienceSection);
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Work", href: "/about#experience" },
    { label: "Blog", href: "/blog" },
  ];

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    if (href === "/blog") {
      return pathname === "/blog" || pathname?.startsWith("/blog/");
    }
    if (href === "/about#experience") {
      return pathname === "/about" && currentHash === "#experience";
    }
    if (href === "/about") {
      return pathname === "/about" && currentHash !== "#experience";
    }
    return pathname === href;
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href === "/about#experience") {
      setCurrentHash("#experience");
      if (pathname === "/about") {
        e.preventDefault();
        const el = document.getElementById("experience");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
        window.history.pushState(null, "", "/about#experience");
      }
    } else if (href === "/about") {
      setCurrentHash("");
      if (pathname === "/about") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.history.pushState(null, "", "/about");
      }
    } else {
      setCurrentHash("");
    }
  };

  const bookCallUrl = `mailto:${aboutData.personal.email}?subject=Introductory%20Call%20-%20Ujjawal%20Portfolio&body=Hi%20Ujjawal,%0D%0A%0D%0AI%20would%20love%20to%20connect%20regarding%20an%20opportunity/project.`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-md bg-[#0a0a0a]/85 border-b border-white/[0.08] py-3.5 shadow-lg shadow-black/40"
            : "bg-transparent py-5 border-b border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={(e) => handleNavClick(e, "/")}
            className="group flex items-center gap-2 focus:outline-none"
            aria-label="Ujjawal's Portfolio Home"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-500 to-emerald-300 flex items-center justify-center font-mono font-bold text-black text-sm shadow-[0_0_15px_rgba(16,185,129,0.3)] group-hover:scale-105 transition-transform">
              U
            </div>
            <span className="font-bold text-lg sm:text-xl text-white tracking-tight group-hover:text-emerald-400 transition-colors">
              {aboutData.personal.fullName}
              <span className="text-emerald-400">.</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#121212]/80 px-3 py-1.5 rounded-full border border-white/[0.08] backdrop-blur-sm shadow-inner">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link.href);

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    isActive
                      ? "text-emerald-400 bg-emerald-500/10"
                      : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full border border-emerald-500/30"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={bookCallUrl}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/[0.05] border border-transparent hover:border-white/[0.08] transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
              <span>Book a Call</span>
            </a>

            <button
              onClick={() => setResumeOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-500 hover:bg-emerald-400 text-black transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:scale-[1.02]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setResumeOpen(true)}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500 text-black"
            >
              Resume
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="p-2 rounded-xl bg-zinc-900 border border-white/[0.08] text-zinc-300 hover:text-white"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-emerald-400" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden border-b border-white/[0.08] bg-[#0c0c0c]/95 backdrop-blur-xl px-4 py-5 shadow-2xl"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = isLinkActive(link.href);

                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={(e) => {
                        handleNavClick(e, link.href);
                        setMobileMenuOpen(false);
                      }}
                      className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? "text-emerald-400 bg-emerald-500/10 border border-emerald-500/20"
                          : "text-zinc-300 hover:text-white hover:bg-white/[0.05]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}

                <div className="pt-3 border-t border-white/[0.08] flex flex-col gap-2 mt-2">
                  <a
                    href={bookCallUrl}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/[0.08] text-sm text-zinc-200 font-medium"
                  >
                    <PhoneCall className="w-4 h-4 text-emerald-400" />
                    Book a Call
                  </a>

                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setResumeOpen(true);
                    }}
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 text-black text-sm font-semibold"
                  >
                    <FileText className="w-4 h-4" />
                    View &amp; Download Resume
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
