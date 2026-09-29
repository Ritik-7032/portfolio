# Ritik Kumar — 3D Award-Level Personal Portfolio

A cinematic, 3D animated personal portfolio website built with **React**, **Three.js / React Three Fiber**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lenis Smooth Scroll**.

---

## 🚀 Key Highlights & 3D Interactive Features

1. **Cinematic Preloader**: Animated "RK" monogram with progress counter and smooth reveal transition.
2. **Interactive 3D Hero Scene**: Floating chromatic distorted crystal, dynamic orbital rings, and an interactive starfield responding to cursor movement and scroll.
3. **About Me with 3D Tilt HUD**: Parallax photo card featuring Ritik's night portrait and 4 live animated stat counters (250+ DSA, 95%ile JEE Main, 3M Internship, 2 Deployed Full-Stack Apps).
4. **3D Skill Constellation**: Interactive 3D tech orbit + categorized skill matrices with search and category filters.
5. **Production Project Showcase**:
   - **CollabDesk**: AI-Powered Team Workspace (React 19, Socket.io, AWS EC2/S3, PM2, Gemini API, Razorpay).
   - **Email Job Scheduler**: High-Throughput Email Pipeline (BullMQ, Redis Lua rate limiter, Docker, Vercel/Render).
6. **Experience & Education Milestones**:
   - Briscent Global LLC (BISANA Connective Solutions) Web Dev Internship timeline.
   - Academic trajectory: Class 10 (82%) → Class 12 (89%) → JEE Main 2023 (95%ile) → IIIT Ranchi B.Tech ECE (CGPA 7.39/10).
7. **Passions (Beyond Code)**:
   - **Weight Lifting**: 3D Olympic Barbell that loads plates, lifts interactively, and features Ritik's gym portrait.
   - **Singing**: Real-time canvas audio visualizer with multi-harmonic frequency waves, Web Audio synthesis, and custom audio slot.
8. **LeetCode & Problem Solving**: Profile card with 197 LeetCode solved (250+ total DSA), 50 Days Badge 2025, and topic mastery progress meters.
9. **Contact & Footer**: Direct email copy with particle confetti, mailto form (zero backend required), and fast social links.

---

## 📁 Single Source of Truth
All profile content, projects, achievements, skills, and links are centralized in one file:
`src/data/content.ts`

To update links, live URLs (e.g. CollabDesk Cloudflare URL), audio clips, or photos, simply edit `src/data/content.ts` without modifying components!

---

## 🛠️ Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production
npm run build
```

---

## 🌐 1-Click Deployment to Vercel

1. Push this repository to your GitHub account: `https://github.com/Ritik-7032/portfolio`
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**
3. Select your repository
4. Framework preset: **Vite**
5. Click **"Deploy"** (Zero configuration needed — builds and deploys in seconds!)
