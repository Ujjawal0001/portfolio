export interface StatItem {
  id: string;
  value: number;
  suffix?: string;
  decimals?: number;
  label: string;
  sublabel: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location: string;
  grade?: string;
  description: string;
  logoSlug?: string;
  accentIcon: "graduation" | "bootcamp" | "school" | "award";
  courses?: string[];
}

export interface WhatIDoItem {
  id: string;
  title: string;
  shortDesc: string;
  iconSlug?: string;
}

export interface BulletPoint {
  lead: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  type: "Project" | "Training" | "Internship";
  role: string;
  location: string;
  period: string;
  summary: string;
  bullets: BulletPoint[];
  techSlugs: { slug: string; name: string; white?: boolean }[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface TechItem {
  name: string;
  slug: string;
  white?: boolean; // Append /white on SimpleIcons if black icon
}

export interface TechGroup {
  id: string;
  title: string;
  description: string;
  items: TechItem[];
}

export interface CertificateItem {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface AchievementItem {
  title: string;
  platform: string;
  period: string;
  badge?: string;
  description: string;
}

export interface AboutData {
  personal: {
    firstName: string;
    fullName: string;
    roleTitle: string;
    tagline: string;
    headline: string;
    email: string;
    phone: string;
    location: string;
    openToWork: boolean;
    availabilityStatus: string;
    avatarUrl: string;
    resumeUrl: string;
    social: {
      github: string;
      linkedin: string;
      email: string;
      twitter: string;
      leetcode: string;
      hackerrank: string;
    };
    bioParagraphs: string[];
  };
  stats: StatItem[];
  education: EducationItem[];
  whatIDo: WhatIDoItem[];
  experiences: ExperienceItem[];
  techGroups: TechGroup[];
  certificates: CertificateItem[];
  achievements: AchievementItem[];
  github: {
    username: string;
    profileUrl: string;
    snakeSvg: string;
    fallbackStats: {
      totalRepos: number;
      solvedChallenges: number;
      badges: string[];
    };
  };
}

export const aboutData: AboutData = {
  personal: {
    firstName: "Ujjawal",
    fullName: "Ujjawal",
    roleTitle: "Full-Stack Developer",
    tagline: "Student, Problem Solver, Tech Enthusiast.",
    headline: "Building scalable digital solutions with clean code and modern architectures.",
    email: "ujjwl0143@gmail.com",
    phone: "+91 - 9110090744",
    location: "Phagwara, Punjab / Patna, Bihar, India",
    openToWork: true,
    availabilityStatus: "Available for internships & junior full-stack roles",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    resumeUrl: "/Ujjawal_Resume.pdf",
    social: {
      github: "https://github.com/Ujjawal0001",
      linkedin: "https://www.linkedin.com/in/ujjawal1305/",
      email: "mailto:ujjwl0143@gmail.com",
      twitter: "https://twitter.com",
      leetcode: "https://leetcode.com",
      hackerrank: "https://hackerrank.com",
    },
    bioParagraphs: [
      "I am a Computer Science undergraduate at Lovely Professional University with a steadfast focus on architecting modern web platforms, distributed systems, and responsive user interfaces. My core technical foundation centers on the full-stack MERN ecosystem (MongoDB, Express, React, Node.js), Next.js, TypeScript, and mobile engineering with Flutter.",
      "I thrive on solving intricate algorithmic problems and converting conceptual workflows into robust, production-grade applications. From orchestrating high-performance REST APIs and modeling relational and document schemas (PostgreSQL, MongoDB) to engineering real-time computer vision pipelines and accessible UI systems, I balance rigorous logic with intuitive design.",
      "With 100+ DSA problems solved across LeetCode and GeeksforGeeks, Pre-finalist recognition at Smart India Hackathon (SIH) 2025, alongside 5-Star Java and 3-Star Python credentials on HackerRank, I am actively seeking software development internships and entry-level engineering roles. I am eager to collaborate with forward-thinking teams to ship performant, high-impact software.",
    ],
  },
  stats: [
    {
      id: "projects",
      value: 4,
      suffix: "+",
      label: "Projects Built",
      sublabel: "Full-stack apps & AI platforms",
    },
    {
      id: "technologies",
      value: 15,
      suffix: "+",
      label: "Technologies Mastered",
      sublabel: "MERN, Next.js, C++, Java",
    },
    {
      id: "cgpa",
      value: 8.52,
      decimals: 2,
      label: "Academic CGPA",
      sublabel: "B.Tech CSE at LPU",
    },
    {
      id: "dsa",
      value: 100,
      suffix: "+",
      label: "DSA Problems Solved",
      sublabel: "LeetCode & GeeksforGeeks",
    },
  ],
  education: [
    {
      id: "lpu",
      institution: "Lovely Professional University",
      degree: "Bachelor of Technology - Computer Science and Engineering",
      period: "Aug 2024 – Present",
      location: "Phagwara, Punjab",
      grade: "CGPA: 8.52",
      description:
        "Pursuing core computer science curriculum emphasizing Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Distributed Computing.",
      accentIcon: "graduation",
      courses: ["Data Structures & Algorithms", "DBMS", "Operating Systems", "Computer Networks", "Software Engineering"],
    },
    {
      id: "mern-bootcamp",
      institution: "AI Driven MERN Stack Bootcamp",
      degree: "Full-Stack Web Development Training",
      period: "Jun 2026 – Jul 2026",
      location: "Virtual Industry Bootcamp",
      grade: "Completed with Distinction",
      description:
        "Intensive hands-on immersion in building production-ready web apps using MongoDB, Express.js, React.js, and Node.js. Architected server-side middleware, scalable APIs, and responsive client layouts.",
      accentIcon: "bootcamp",
      courses: ["Server-Side Architecture", "React State Optimization", "MongoDB Indexing", "REST Security"],
    },
    {
      id: "intermediate",
      institution: "Adarsh Vikas Vidyalaya",
      degree: "Intermediate (Senior Secondary - 12th)",
      period: "Apr 2022 – Mar 2023",
      location: "Patna, Bihar",
      grade: "Percentage: 77.4%",
      description:
        "Majored in Mathematics, Physics, and Chemistry. Developed strong mathematical intuition, analytical problem-solving skills, and foundational algorithmic thinking.",
      accentIcon: "school",
    },
    {
      id: "matriculation",
      institution: "Adelaide Convent School",
      degree: "Matriculation (Secondary School - 10th)",
      period: "Apr 2020 – May 2021",
      location: "Patna, Bihar",
      grade: "Percentage: 86.2%",
      description:
        "Graduated with top academic standing. Active participant in science fairs, mathematics competitions, and leadership activities.",
      accentIcon: "award",
    },
  ],
  whatIDo: [
    {
      id: "web-dev",
      title: "Web Development",
      shortDesc: "Crafting modern, responsive web apps with Next.js, React, and Tailwind CSS.",
      iconSlug: "react",
    },
    {
      id: "backend-dev",
      title: "Backend Development",
      shortDesc: "Engineering high-throughput, secure server-side logic in Node.js, Express, and Spring Boot.",
      iconSlug: "nodedotjs",
    },
    {
      id: "api-integration",
      title: "API Integration",
      shortDesc: "Orchestrating robust REST APIs, authentication flows, and third-party services.",
      iconSlug: "postman",
    },
    {
      id: "database-design",
      title: "Database Design",
      shortDesc: "Structuring performant relational (PostgreSQL) and document (MongoDB) schemas.",
      iconSlug: "mongodb",
    },
    {
      id: "problem-solving",
      title: "Problem Solving",
      shortDesc: "Applying algorithmic logic with 100+ solved DSA challenges in C++, Java, and Python.",
      iconSlug: "leetcode",
    },
    {
      id: "system-design",
      title: "System Design",
      shortDesc: "Designing modular, decoupled architectures with state persistence and concurrency safety.",
      iconSlug: "visualstudiocode",
    },
    {
      id: "team-collaboration",
      title: "Team Collaboration",
      shortDesc: "Collaborating with Git, GitHub version control, code reviews, and Agile methodologies.",
      iconSlug: "github",
    },
  ],
  experiences: [
    {
      id: "auralis",
      title: "AURALIS – AI-Powered Multimodal Accessible Classroom Platform",
      type: "Project",
      role: "Lead Full-Stack & AI Developer",
      location: "Academic / Remote",
      period: "Nov 2026",
      summary:
        "An AI-powered multimodal web accessibility platform for Deaf and Hard-of-Hearing (DHH) students, converting teacher speech into real-time synchronized captions and Indian Sign Language gestures into text using browser-based computer vision.",
      bullets: [
        {
          lead: "Real-Time Accessible Classroom",
          description:
            "Created a real-time accessible classroom with speech-to-text and ISL support, improving accessibility by 60%.",
        },
        {
          lead: "In-Browser Vision Pipeline",
          description:
            "Engineered an in-browser vision pipeline recognizing 8 gestures from 21 hand landmarks with 90% accuracy.",
        },
        {
          lead: "Low-Latency Caption Streaming",
          description:
            "Broadcast real-time captions using Web Speech API and Socket.io, reducing caption latency by 40%.",
        },
        {
          lead: "Automated Lecture Intelligence",
          description:
            "Automated lecture summarization, flashcards, and semantic search, cutting post-lecture revision time by 50%.",
        },
      ],
      techSlugs: [
        { slug: "nextdotjs", name: "Next.js", white: true },
        { slug: "react", name: "React.js" },
        { slug: "nodedotjs", name: "Node.js" },
        { slug: "socketdotio", name: "Socket.IO", white: true },
        { slug: "postgresql", name: "PostgreSQL" },
        { slug: "prisma", name: "Prisma", white: true },
        { slug: "tailwindcss", name: "TailwindCSS" },
      ],
      githubUrl: "https://github.com/Ujjawal0001/Sign-Language-Speech-Assistant-",
      liveUrl: "https://sign-language-speech-assistant.onrender.com/",
    },
    {
      id: "exampro",
      title: "ExamPro – Exam Preparation App",
      type: "Project",
      role: "Full-Stack Developer",
      location: "Academic / Remote",
      period: "Aug 2026",
      summary:
        "A multi-category exam preparation platform built with Flutter and Node.js delivering mock testing workflows for national exams such as SSC, UPSC, Banking, and Railways.",
      bullets: [
        {
          lead: "Interactive Test Workflows",
          description:
            "Designed fluid test-taking interfaces featuring real-time search, difficulty filters, countdown timers, negative marking logic, and granular student progress tracking.",
        },
        {
          lead: "High-Performance Backend",
          description:
            "Orchestrated modular REST APIs for user authentication, exam schedules, and question banks, accelerating data exchange by 30% across backend systems.",
        },
        {
          lead: "Robust Security & State Management",
          description:
            "Implemented JWT-based authorization and Riverpod state management in Flutter, enhancing application security, reliability, and state consistency by 50%.",
        },
      ],
      techSlugs: [
        { slug: "flutter", name: "Flutter" },
        { slug: "dart", name: "Dart" },
        { slug: "nodedotjs", name: "Node.js" },
        { slug: "express", name: "Express.js", white: true },
        { slug: "mongodb", name: "MongoDB" },
      ],
      githubUrl: "https://github.com/Ujjawal0001",
    },
    {
      id: "agri-guide",
      title: "AgriGuide – Farmer Crop Advisory System",
      type: "Project",
      role: "Full-Stack Engineer",
      location: "Academic / Remote",
      period: "Jul 2026",
      summary:
        "A full-stack MERN agricultural advisory platform designed to assist farmers with data-driven crop recommendations, telemetry sensor tracking, and localized weather insights.",
      bullets: [
        {
          lead: "Smart Advisory Engine",
          description:
            "Integrated real-time weather APIs and crop suitability recommendation algorithms, improving agricultural decision-making accuracy by 60%.",
        },
        {
          lead: "Role-Based Security",
          description:
            "Applied secure JWT authentication with protected routes and role-based access control (RBAC) for field managers and administrative personnel.",
        },
        {
          lead: "Telemetry & Sensor Monitoring",
          description:
            "Developed responsive crop and IoT sensor management modules, reducing manual agricultural monitoring efforts by 50%.",
        },
      ],
      techSlugs: [
        { slug: "react", name: "React.js" },
        { slug: "nodedotjs", name: "Node.js" },
        { slug: "express", name: "Express.js", white: true },
        { slug: "mongodb", name: "MongoDB" },
        { slug: "tailwindcss", name: "TailwindCSS" },
      ],
      githubUrl: "https://github.com/Ujjawal0001",
    },
    {
      id: "deadlockx",
      title: "DeadlockX – Automated Deadlock Detection System",
      type: "Project",
      role: "Systems & Algorithm Developer",
      location: "Academic / Remote",
      period: "May 2026",
      summary:
        "A web-based operating system visualization suite engineered to detect, demonstrate, and analyze deadlocks in concurrent computing environments using dynamic graph visualizers.",
      bullets: [
        {
          lead: "Graph Theory & Cycle Detection",
          description:
            "Architected interactive Resource Allocation Graphs (RAG) executing DFS cycle detection and Banker's Algorithm, improving deadlock identification by 30%.",
        },
        {
          lead: "Step-by-Step State Tracing",
          description:
            "Designed customizable concurrency scenarios with real-time algorithm state tracing, improving operational analysis efficiency by 60%.",
        },
        {
          lead: "Glassmorphic Canvas Interface",
          description:
            "Engineered a glassmorphic user interface with interactive HTML5 Canvas visualizers, enhancing user engagement and conceptual retention by 45%.",
        },
      ],
      techSlugs: [
        { slug: "javascript", name: "JavaScript" },
        { slug: "html5", name: "HTML5" },
        { slug: "css", name: "CSS3" },
      ],
      githubUrl: "https://github.com/Ujjawal0001",
    },
    {
      id: "mern-training",
      title: "AI Driven MERN Stack Bootcamp",
      type: "Training",
      role: "Trainee Full-Stack Developer",
      location: "Virtual Bootcamp",
      period: "Jun 2026 – Jul 2026",
      summary:
        "Intensive industry-aligned software engineering bootcamp focusing on end-to-end full-stack development, modern deployment patterns, and API architecture.",
      bullets: [
        {
          lead: "Server-Side Logic",
          description:
            "Designed and implemented server-side application logic using Node.js and Express.js frameworks with middleware security and error handling.",
        },
        {
          lead: "Modular React Components",
          description:
            "Engineered performant frontend interfaces using React.js with reusable UI components, hooks, and clean state hierarchies.",
        },
        {
          lead: "Database Optimization",
          description:
            "Connected MongoDB databases with backend services for efficient data storage, complex aggregations, and high-speed data retrieval.",
        },
      ],
      techSlugs: [
        { slug: "react", name: "React.js" },
        { slug: "nodedotjs", name: "Node.js" },
        { slug: "express", name: "Express.js", white: true },
        { slug: "mongodb", name: "MongoDB" },
        { slug: "javascript", name: "JavaScript" },
      ],
      githubUrl: "https://github.com/Ujjawal0001",
    },
  ],
  techGroups: [
    {
      id: "frontend",
      title: "Frontend & UI",
      description: "Crafting fluid, accessible, and high-performance user interfaces.",
      items: [
        { name: "React.js", slug: "react" },
        { name: "Next.js", slug: "nextdotjs", white: true },
        { name: "Flutter", slug: "flutter" },
        { name: "Tailwind CSS", slug: "tailwindcss" },
        { name: "HTML5", slug: "html5" },
        { name: "CSS3", slug: "css" },
        { name: "JavaScript", slug: "javascript" },
      ],
    },
    {
      id: "backend",
      title: "Backend & APIs",
      description: "Building secure, scalable microservices, routing, and business logic.",
      items: [
        { name: "Node.js", slug: "nodedotjs" },
        { name: "Express.js", slug: "express", white: true },
        { name: "Spring Boot", slug: "springboot" },
        { name: "Python", slug: "python" },
        { name: "Java", slug: "openjdk" },
        { name: "C++", slug: "cplusplus" },
        { name: "C", slug: "c" },
        { name: "Dart", slug: "dart" },
      ],
    },
    {
      id: "tools-platforms",
      title: "Tools & Platforms",
      description: "Databases, ORM, communication protocols, and cloud platforms.",
      items: [
        { name: "Node.js", slug: "nodedotjs" },
        { name: "PostgreSQL", slug: "postgresql" },
        { name: "REST APIs", slug: "postman" },
        { name: "MongoDB", slug: "mongodb" },
        { name: "Socket.io", slug: "socketdotio", white: true },
        { name: "Prisma ORM", slug: "prisma", white: true },
        { name: "Git", slug: "git" },
        { name: "GitHub", slug: "github", white: true },
      ],
    },
    {
      id: "tools",
      title: "Developer Tools & Workflow",
      description: "Essential tooling for debugging, API testing, and daily productivity.",
      items: [
        { name: "VS Code", slug: "visualstudiocode" },
        { name: "Postman", slug: "postman" },
        { name: "npm", slug: "npm" },
        { name: "Linux", slug: "linux", white: true },
        { name: "LeetCode", slug: "leetcode" },
      ],
    },
  ],
  certificates: [
    {
      title: "Database Management System Part – 2",
      issuer: "Infosys",
      date: "Jul 2026",
    },
    {
      title: "Programming using C++",
      issuer: "Infosys",
      date: "Aug 2025",
    },
    {
      title: "Introduction to AI & ML",
      issuer: "Skillera",
      date: "Mar 2025",
    },
  ],
  achievements: [
    {
      title: "Pre-finalist at Smart India Hackathon (SIH) 2025",
      platform: "Smart India Hackathon (SIH)",
      period: "Sep 2025",
      badge: "Pre-Finalist",
      description:
        "Selected as Pre-finalist at Smart India Hackathon (SIH) 2025 for engineering high-impact, innovative software solutions.",
    },
    {
      title: "5-Star Java & 3-Star Python",
      platform: "HackerRank",
      period: "Sep 2025",
      badge: "5-Star / 3-Star",
      description:
        "Earned 5-Star Badge in Java and 3-Star Badge in Python on HackerRank, demonstrating programming proficiency and problem-solving skills.",
    },
    {
      title: "100+ Coding Problems Solved",
      platform: "LeetCode & GeeksforGeeks",
      period: "Aug 2025",
      badge: "100+ Solved",
      description:
        "Solved 100+ DSA and coding challenges across LeetCode and GeeksforGeeks, mastering data structures, algorithms, and optimization.",
    },
  ],
  github: {
    username: "Ujjawal0001",
    profileUrl: "https://github.com/Ujjawal0001",
    snakeSvg: "https://raw.githubusercontent.com/Ujjawal0001/Ujjawal0001/output/github-snake-dark.svg",
    fallbackStats: {
      totalRepos: 12,
      solvedChallenges: 100,
      badges: ["SIH 2025 Pre-Finalist", "5-Star Java", "3-Star Python", "Infosys DBMS Part 2", "Infosys C++"],
    },
  },
};
