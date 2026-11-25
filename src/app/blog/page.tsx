import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Blog | Engineering Thoughts",
  description: "Articles and musings on full-stack architecture, algorithms, and system design by Ujjawal.",
};

export default function BlogPage() {
  const upcomingPosts = [
    {
      title: "Building an Automated Deadlock Detection Visualizer with Banker's Algorithm",
      excerpt: "Deep dive into Resource Allocation Graphs (RAG), cycle detection in directed graphs, and interactive HTML5 Canvas visualizers.",
      date: "Coming Soon",
      readTime: "6 min read",
      category: "Systems & Algorithms",
    },
    {
      title: "State Management in Flutter: Comparing Riverpod with Provider",
      excerpt: "How Riverpod provides compile-time safety and dependency injection for production Flutter mobile applications.",
      date: "Coming Soon",
      readTime: "5 min read",
      category: "Mobile Architecture",
    },
    {
      title: "Optimizing MongoDB Aggregations in MERN Applications",
      excerpt: "Techniques for index tuning, compound queries, and reducing response latencies across distributed REST APIs.",
      date: "Coming Soon",
      readTime: "7 min read",
      category: "Backend & Databases",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <Link
        href="/about"
        className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors mb-8"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Back to About Me
      </Link>

      <SectionHeading
        eyebrow="Writing & Thoughts"
        title="Engineering *Insights*"
        subtitle="Reflections on full-stack engineering, algorithms, system design, and the latest web technologies."
      />

      <div className="space-y-6 mt-8">
        {upcomingPosts.map((post, idx) => (
          <div
            key={idx}
            className="group relative p-6 sm:p-7 rounded-2xl bg-[#121212]/90 hover:bg-[#161616] border border-white/[0.08] hover:border-emerald-500/30 transition-all duration-300"
          >
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400 mb-3">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3 text-zinc-500" />
                {post.date}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-zinc-500" />
                {post.readTime}
              </span>
            </div>

            <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
              {post.title}
            </h3>

            <p className="text-sm text-zinc-400 leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
