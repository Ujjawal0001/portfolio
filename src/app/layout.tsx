import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ujjawal.dev"),
  title: {
    default: "Ujjawal | Full-Stack Developer",
    template: "%s | Ujjawal",
  },
  description:
    "Portfolio of Ujjawal — Full-Stack Developer, CSE student at Lovely Professional University. Specializing in MERN, Next.js, TypeScript, Flutter, and scalable distributed systems.",
  keywords: [
    "Ujjawal",
    "Full-Stack Developer",
    "Software Engineer",
    "Next.js Portfolio",
    "React Developer",
    "Node.js",
    "MERN Stack",
    "Flutter",
    "LPU",
    "Lovely Professional University",
  ],
  authors: [{ name: "Ujjawal", url: "https://github.com/Ujjawal0001" }],
  creator: "Ujjawal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ujjawal.dev",
    title: "Ujjawal | Full-Stack Developer & Problem Solver",
    description:
      "Crafting high-performance web applications, scalable REST APIs, and delightful digital experiences.",
    siteName: "Ujjawal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ujjawal | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in MERN, Next.js, TypeScript, and modern system architectures.",
    creator: "@ujjawal",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-[#ededed] selection:bg-emerald-500/20 selection:text-emerald-300">
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
