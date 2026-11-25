# Ujjawal — Personal Portfolio & About Page

A modern, high-performance portfolio website built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed in a dark-themed aesthetic (`#0a0a0a`), subtle card surfaces, emerald accent highlights, and SimpleIcons CDN integration.

---

## ⚡ Tech Stack

- **Framework**: Next.js (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: SimpleIcons CDN (`https://cdn.simpleicons.org/<slug>`), Lucide React
- **Fonts**: Geist Sans, Geist Mono, Playfair Display (Serif Italic)

---

## 🚀 Quick Start (Running Locally)

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) or directly to the About page at [http://localhost:3000/about](http://localhost:3000/about).

4. **Production Build**:
   ```bash
   npm run build
   npm run start
   ```

---

## ✏️ How to Edit Content

All text, statistics, education items, project details, and tech chips are stored in a single typed configuration file:

📁 **`/src/data/about.ts`** (also accessible via `/data/about.ts`)

You can edit any section without touching component code:

- **Personal Info & Bio**: Update `personal.firstName`, `personal.fullName`, `personal.tagline`, `personal.bioParagraphs`, and contact links.
- **Stats Row**: Modify the 4 counters in `stats` (e.g. `Projects Built`, `Technologies Mastered`, `Academic CGPA`, `DSA Problems Solved`).
- **Education Timeline**: Add, edit, or reorder degree items in `education`.
- **Capabilities**: Update chip tags in `whatIDo`.
- **Experience / Projects**: Edit `experiences` (includes bold lead-in bullet points, tech tags, and links).
- **Tech Stack**: Customize the 4 groups (Frontend, Backend, DevOps, Tools) in `techGroups`.
- **Certificates & Achievements**: Update `certificates` and `achievements`.

---

## 🐍 GitHub Contribution Snake

The `/about` page embeds the animated GitHub contribution snake SVG:
`https://raw.githubusercontent.com/Ujjawal0001/Ujjawal0001/output/github-snake-dark.svg`

To generate this automatically on your GitHub profile:
1. Ensure your repository has the `Platane/snk` GitHub Action configured under `.github/workflows/snake.yml`.
2. The Action will automatically build and commit `github-snake-dark.svg` to an `output` branch.
3. If the snake SVG is loading or not yet configured, the portfolio automatically falls back to an interactive contribution matrix!

---

## 🚢 Deploying to Vercel

1. Push your code to your GitHub repository:
   ```bash
   git add .
   git commit -m "feat: complete portfolio about page"
   git branch -M main
   git remote add origin https://github.com/Ujjawal0001/Portfolio.git
   git push -u origin main
   ```

2. Visit [Vercel](https://vercel.com/new).
3. Import your `Portfolio` repository.
4. Framework Preset will be automatically detected as **Next.js**.
5. Click **Deploy**. Your portfolio will be live with full SSL, global CDN, and automated preview deployments on every push.

---

## 📂 Project Architecture

```
Portfolio/
├── data/
│   └── about.ts            # Root data re-export
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   ├── page.tsx          # SEO-optimized Server Component
│   │   │   └── AboutClient.tsx   # Interactive Framer Motion page
│   │   ├── blog/
│   │   │   └── page.tsx          # Engineering thoughts / posts
│   │   ├── globals.css           # Dark theme variables & grid styles
│   │   ├── layout.tsx            # Global layout with Navbar & Footer
│   │   └── page.tsx              # Landing page
│   ├── components/
│   │   ├── Navbar.tsx            # Sticky blurred translucent navigation
│   │   ├── Footer.tsx            # Friendly footer with pulsing status dot
│   │   ├── SectionHeading.tsx    # Eyebrow + Serif Italic accent heading
│   │   ├── StatCounter.tsx       # Animated viewport count-up cards
│   │   ├── TimelineCard.tsx      # Connected education / work timeline
│   │   ├── ExperienceCard.tsx    # Expandable project cards with tech chips
│   │   ├── TechChip.tsx          # SimpleIcons CDN tech badge with hover glow
│   │   ├── TechGroupCard.tsx     # 4 grouped skill categories
│   │   ├── GitHubActivity.tsx    # Contribution snake & metrics visualizer
│   │   └── ResumeModal.tsx       # Printable resume view & PDF modal
│   └── data/
│       └── about.ts              # Single source of truth for portfolio data
├── next.config.ts                # Turbopack & remote image patterns
├── package.json
└── tsconfig.json
```
