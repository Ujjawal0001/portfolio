import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Me | Full-Stack Developer",
  description:
    "Learn about Ujjawal, a Computer Science student at Lovely Professional University and Full-Stack Developer specializing in MERN, Next.js, Flutter, and algorithmic problem-solving.",
  openGraph: {
    title: "About Ujjawal | Full-Stack Developer Portfolio",
    description:
      "Explore Ujjawal's background, education at Lovely Professional University, featured projects (ExamPro, AgriGuide, DeadlockX), and full technical stack.",
    url: "https://ujjawal.dev/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Ujjawal | Full-Stack Developer",
    description:
      "Full-stack MERN, Next.js, and Flutter developer. Discover projects, academic journey, and technical skills.",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
