"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail,
  PhoneCall,
  ArrowRight,
  Sparkles,
  MapPin,
  CheckCircle2,
  FileText,
} from "lucide-react";
import { LinkedInIcon, XTwitterIcon, GitHubIcon } from "@/components/SocialIcons";
import SectionHeading from "@/components/SectionHeading";
import StatCounter from "@/components/StatCounter";
import TimelineCard from "@/components/TimelineCard";
import ExperienceCard from "@/components/ExperienceCard";
import TechGroupCard from "@/components/TechGroupCard";
import GitHubActivity from "@/components/GitHubActivity";
import ResumeModal from "@/components/ResumeModal";
import { aboutData } from "@/data/about";

export default function AboutClient() {
  const { personal, stats, education, whatIDo, experiences, techGroups } = aboutData;
  const [resumeOpen, setResumeOpen] = useState(false);
  const [avatarError, setAvatarError] = useState(false);

  const bookCallUrl = `mailto:${personal.email}?subject=Let's%20Connect%20-%20Ujjawal%20Portfolio&body=Hi%20Ujjawal,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity.`;

  return (
    <div className="relative overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-500/[0.05] blur-[140px] pointer-events-none -z-10" />

      {/* ========================================================
          SECTION 1: INTRO / HERO
         ======================================================== */}
      <section id="hero" className="py-12 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Content (7 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1"
            >
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-medium tracking-widest uppercase w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                More About Me
              </div>

              {/* Heading: I'm {FirstName}, a Full-Stack *Developer* */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
                I&apos;m {personal.firstName}, a Full-Stack{" "}
                <span className="font-serif italic font-normal text-emerald-400 underline decoration-emerald-500/30 decoration-2 underline-offset-4">
                  Developer
                </span>
              </h1>

              {/* Big line: "My name is {FullName}." */}
              <div className="text-xl sm:text-2xl font-bold text-zinc-100 mb-2">
                My name is {personal.fullName}.
              </div>

              {/* Tagline */}
              <div className="text-base sm:text-lg font-medium text-emerald-400/90 mb-6 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{personal.tagline}</span>
              </div>

              {/* 3 Short Paragraphs of Bio */}
              <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed mb-8">
                {personal.bioParagraphs.map((para, idx) => (
                  <p key={idx} className="text-zinc-300">
                    {para}
                  </p>
                ))}
              </div>

              {/* Action Buttons: "Book a Call" (primary) + Social icon buttons */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href={bookCallUrl}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm transition-all hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:scale-[1.02]"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Book a Call</span>
                </a>

                <button
                  onClick={() => setResumeOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-[#161616] hover:bg-zinc-800 text-white font-medium text-sm border border-white/[0.08] hover:border-emerald-500/30 transition-all hover:scale-[1.02]"
                >
                  <FileText className="w-4 h-4 text-emerald-400" />
                  <span>View Resume</span>
                </button>

                {/* Social Icon Buttons: GitHub, LinkedIn, X */}
                <div className="flex items-center gap-2 sm:ml-2">
                  <a
                    href={personal.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="p-3.5 rounded-2xl bg-[#121212] hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/[0.08] hover:border-emerald-500/40 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all hover:scale-105"
                  >
                    <GitHubIcon className="w-4 h-4" />
                  </a>

                  <a
                    href={personal.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="p-3.5 rounded-2xl bg-[#121212] hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/[0.08] hover:border-emerald-500/40 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all hover:scale-105"
                  >
                    <LinkedInIcon className="w-4 h-4" />
                  </a>

                  <a
                    href={personal.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X / Twitter"
                    className="p-3.5 rounded-2xl bg-[#121212] hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/[0.08] hover:border-emerald-500/40 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all hover:scale-105"
                  >
                    <XTwitterIcon className="w-4 h-4" />
                  </a>

                  <a
                    href={`mailto:${personal.email}`}
                    aria-label="Send Email"
                    className="p-3.5 rounded-2xl bg-[#121212] hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/[0.08] hover:border-emerald-500/40 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all hover:scale-105"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Portrait photo in rounded card with subtle gradient border (5 cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-5 flex justify-center order-1 lg:order-2"
            >
              <div className="relative group w-full max-w-[380px]">
                {/* Subtle outer glow on hover */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500/30 via-emerald-400/10 to-teal-500/20 opacity-60 blur-xl group-hover:opacity-100 transition duration-500" />

                {/* 1px Gradient Border Container */}
                <div className="relative p-[1px] rounded-3xl bg-gradient-to-b from-emerald-400/40 via-white/[0.12] to-white/[0.04] shadow-2xl">
                  <div className="relative rounded-[23px] overflow-hidden bg-[#141414]">
                    {/* Portrait Image */}
                    <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-900">
                      {!avatarError ? (
                        <Image
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                          alt="Ujjawal portrait"
                          fill
                          priority
                          sizes="(max-width: 768px) 100vw, 400px"
                          className="object-cover object-center filter grayscale-[25%] contrast-[1.05] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                          onError={() => setAvatarError(true)}
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-zinc-900 to-[#121212] text-center">
                          <div className="w-20 h-20 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-3xl font-bold font-mono text-emerald-400 mb-3">
                            U
                          </div>
                          <div className="text-lg font-bold text-white">{personal.fullName}</div>
                          <div className="text-xs text-emerald-400 font-mono mt-1">{personal.roleTitle}</div>
                        </div>
                      )}

                      {/* Ambient Gradient Overlay for text contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                      {/* Floating Bottom Card Over Image */}
                      <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#111111]/85 backdrop-blur-md border border-white/[0.1] shadow-lg">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="relative flex h-2.5 w-2.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                            </span>
                            <span className="text-xs font-medium text-white">
                              Available for Roles
                            </span>
                          </div>
                          <span className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-400">
                            <MapPin className="w-3 h-3 text-emerald-400" />
                            Punjab, IN
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Row of 4 Counters */}
          <div className="mt-14 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, idx) => (
              <StatCounter key={stat.id} stat={stat} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 2: WORK / EDUCATION TIMELINE CARDS
         ======================================================== */}
      <section id="education" className="py-16 sm:py-20 border-t border-white/[0.06] bg-[#0c0c0c]/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="Education"
            title="My Academic *Journey*"
            subtitle="Solid foundations in computer science theory, algorithms, and practical software engineering."
          />

          {/* Vertical list of timeline cards */}
          <div className="max-w-4xl mx-auto mt-8">
            {education.map((item, index) => (
              <TimelineCard
                key={item.id}
                item={item}
                index={index}
                isLast={index === education.length - 1}
              />
            ))}

            {/* "Hire me" button below the timeline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-between p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-zinc-900 to-zinc-900 border border-emerald-500/20 gap-4"
            >
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  Looking for an ambitious Full-Stack Engineer?
                </h4>
                <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                  Available for Summer 2026 internships and entry-level technical roles.
                </p>
              </div>

              <a
                href={bookCallUrl}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs sm:text-sm transition-all hover:scale-105 shadow-md flex-shrink-0"
              >
                <span>Hire Me</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 3: WHAT I DO
         ======================================================== */}
      <section id="what-i-do" className="py-16 sm:py-20 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="Capabilities"
            title="What I *Do*"
            subtitle="Core technical strengths I bring to engineering teams, from initial system design to production deployment."
          />

          {/* Grid of pill/chip tags */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-8">
            {whatIDo.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.08, ease: "easeOut" }}
                className="group relative p-5 sm:p-6 rounded-2xl bg-[#121212]/90 hover:bg-[#161616] border border-white/[0.08] hover:border-emerald-500/30 transition-all duration-300 hover:shadow-[0_10px_25px_-10px_rgba(16,185,129,0.15)] hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {item.shortDesc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 4: THE EXPERIENCE (DETAILED CARDS)
         ======================================================== */}
      <section id="experience" className="py-16 sm:py-20 border-t border-white/[0.06] bg-[#0c0c0c]/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="The Experience"
            title="Experience That Brings *Ideas to Life*"
            subtitle="Hands-on full-stack projects, distributed systems architecture, and algorithmic implementations."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8">
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.id} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 5: TECH STACK
         ======================================================== */}
      <section id="tech-stack" className="py-16 sm:py-20 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="Tech Stack"
            title="What I Bring to the *Table*"
            subtitle="Languages, frameworks, databases, and developer tools I utilize to engineer scalable products."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8">
            {techGroups.map((group, index) => (
              <TechGroupCard key={group.id} group={group} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 6: GITHUB ACTIVITY
         ======================================================== */}
      <GitHubActivity />

      {/* Interactive Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
