export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full Stack' | 'Distributed Systems' | 'AI & ML' | 'Web App';
  description: string;
  featured: boolean;
  liveUrl?: string;
  githubUrl: string;
  githubBackendUrl?: string;
  techStack: string[];
  highlights: string[];
  metrics?: { label: string; value: string }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companySubtext?: string;
  period: string;
  type: string;
  location: string;
  points: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  period: string;
  score: string;
  scoreLabel: string;
  highlight?: string;
  badge?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  category: 'Academics' | 'DSA' | 'Leadership';
  description: string;
  metric?: string;
  badgeText?: string;
  iconName: string;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: { name: string; level?: string; highlight?: boolean }[];
}

export const PERSONAL_DATA = {
  name: "Ritik Kumar",
  initials: "RK",
  title: "Full Stack Developer & Software Engineer",
  subtitle: "MERN • TypeScript • C++ • Cloud & Distributed Systems",
  targetRoles: ["SDE", "Full Stack Developer", "Backend Engineer", "Frontend Engineer"],
  rolesTyping: [
    "Full Stack Developer",
    "Backend & Distributed Systems Engineer",
    "C++ & DSA Problem Solver",
    "Lifter (370kg Total) & Vocalist"
  ],
  status: "Open to SDE / Full Stack / Backend / Frontend Roles",
  email: "singhritik7032@gmail.com",
  github: "https://github.com/Ritik-7032",
  linkedin: "https://linkedin.com/in/ritik-rajput7032",
  leetcode: "https://leetcode.com/u/ritik-7032/",
  resumeUrl: "/resume.pdf",
  portraitImage: "/images/ritik-portrait.jpg",
  gymImage: "/images/ritik-gym.jpg",
  
  about: {
    intro: "I am a Full Stack Developer and B.Tech undergraduate at IIIT Ranchi who thrives at the intersection of performant backend architectures, intuitive 3D/modern web interfaces, and rigorous algorithmic problem solving.",
    subIntro: "With production experience from a remote web engineering internship, 7+ full-stack and distributed projects deployed online, and 250+ DSA problems conquered in C++, I engineer scalable solutions built for resilience and speed.",
    stats: [
      { id: "dsa", label: "DSA Problems Solved", value: 250, suffix: "+", subtext: "197 on LeetCode + C++ practice" },
      { id: "jee", label: "JEE Main 2023", value: 95, suffix: "%ile", subtext: "Top 5% nationwide in engineering exam" },
      { id: "internship", label: "Remote Internship", value: 3, suffix: " Mo", subtext: "Briscent Global LLC (Client Projects)" },
      { id: "projects", label: "Shipped Projects", value: 7, suffix: "+", subtext: "Production architectures & apps" }
    ]
  },

  skillsCategories: [
    {
      category: "Languages",
      iconName: "Code2",
      skills: [
        { name: "C++", highlight: true },
        { name: "TypeScript", highlight: true },
        { name: "JavaScript (ES6+)", highlight: true },
        { name: "SQL", highlight: false },
        { name: "HTML5", highlight: false },
        { name: "CSS3", highlight: false }
      ]
    },
    {
      category: "Frontend",
      iconName: "Layout",
      skills: [
        { name: "React.js", highlight: true },
        { name: "React Router", highlight: false },
        { name: "Tailwind CSS", highlight: true },
        { name: "Vite", highlight: false },
        { name: "Axios", highlight: false }
      ]
    },
    {
      category: "Backend & Auth",
      iconName: "Server",
      skills: [
        { name: "Node.js", highlight: true },
        { name: "Express.js", highlight: true },
        { name: "REST APIs", highlight: true },
        { name: "Socket.io", highlight: true },
        { name: "BullMQ", highlight: true },
        { name: "Passport.js", highlight: false },
        { name: "Zod", highlight: false },
        { name: "JWT", highlight: false },
        { name: "Google OAuth 2.0", highlight: false }
      ]
    },
    {
      category: "Databases & ORM",
      iconName: "Database",
      skills: [
        { name: "PostgreSQL", highlight: true },
        { name: "MongoDB", highlight: true },
        { name: "Redis", highlight: true },
        { name: "Prisma ORM", highlight: true },
        { name: "Mongoose", highlight: false }
      ]
    },
    {
      category: "Cloud & DevOps",
      iconName: "Cloud",
      skills: [
        { name: "AWS (EC2, S3)", highlight: true },
        { name: "Docker", highlight: true },
        { name: "Docker Compose", highlight: false },
        { name: "PM2", highlight: false },
        { name: "Vercel", highlight: false },
        { name: "Render", highlight: false }
      ]
    },
    {
      category: "Tools & Testing",
      iconName: "Wrench",
      skills: [
        { name: "Git", highlight: true },
        { name: "GitHub", highlight: true },
        { name: "Postman", highlight: false },
        { name: "Vitest", highlight: false },
        { name: "Supertest", highlight: false },
        { name: "ESLint", highlight: false },
        { name: "VS Code", highlight: false }
      ]
    },
    {
      category: "CS Fundamentals",
      iconName: "Cpu",
      skills: [
        { name: "DSA", highlight: true },
        { name: "OOPs", highlight: true },
        { name: "DBMS", highlight: false },
        { name: "Operating Systems", highlight: false },
        { name: "Computer Networks", highlight: false },
        { name: "System Design (Basics)", highlight: true }
      ]
    },
    {
      category: "AI & Integrations",
      iconName: "Sparkles",
      skills: [
        { name: "Google Gemini API", highlight: true },
        { name: "Razorpay Payments", highlight: true },
        { name: "Nodemailer", highlight: false },
        { name: "Antigravity", highlight: false },
        { name: "Claude / ChatGPT", highlight: false }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "collabdesk",
      title: "CollabDesk",
      subtitle: "AI-Powered Real-Time Team Workspace",
      category: "Full Stack",
      description: "A full-featured collaborative project workspace featuring real-time Kanban boards with Socket.io, automated AI subtask generation via Gemini API, secure S3 asset management, and verified Razorpay subscription checkouts.",
      featured: true,
      liveUrl: "https://aka-layer-glad-fabric.trycloudflare.com/",
      githubUrl: "https://github.com/Ritik-7032/collabdesk-frontend",
      githubBackendUrl: "https://github.com/Ritik-7032/collabdesk-backend",
      techStack: [
        "React 19", "Vite", "Tailwind CSS", "Socket.io", "Node.js",
        "Express", "MongoDB", "AWS S3", "AWS EC2", "PM2", "Gemini API", "Razorpay", "JWT", "Google OAuth"
      ],
      highlights: [
        "Real-time synchronized Kanban boards powered by Socket.io bi-directional events",
        "AI-generated subtasks & breakdown powered by Google Gemini API integration",
        "Direct AWS S3 file upload pipeline & Razorpay payment gateway with cryptographic signature verification",
        "Deployed production backend on AWS EC2 instance managed by PM2 process manager"
      ],
      metrics: [
        { label: "Real-Time Sync", value: "< 50ms" },
        { label: "Cloud Storage", value: "AWS S3" },
        { label: "Deployment", value: "AWS EC2 + PM2" }
      ]
    },
    {
      id: "email-job-scheduler",
      title: "Email Job Scheduler",
      subtitle: "High-Throughput Asynchronous Email Engine",
      category: "Distributed Systems",
      description: "A distributed, bulletproof email processing pipeline capable of scheduling, rate-limiting, and dispatching up to 10,000 email recipients per request without blocking server event loops.",
      featured: true,
      liveUrl: "https://email-job-scheduler-alpha.vercel.app",
      githubUrl: "https://github.com/Ritik-7032/Email-Job-Scheduler",
      techStack: [
        "TypeScript", "Express", "BullMQ", "Redis", "PostgreSQL",
        "Prisma ORM", "React", "Tailwind CSS", "Docker", "Docker Compose", "Vercel", "Render"
      ],
      highlights: [
        "High-concurrency queue processing with BullMQ delayed workers handling up to 10,000 recipients per payload",
        "Per-sender rate limiting implemented using custom atomic Redis Lua scripts",
        "Idempotent worker execution with automatic crash recovery and dead-letter queue inspection",
        "Full-stack React dashboard with Google OAuth, containerized via Docker Compose and deployed to Vercel & Render"
      ],
      metrics: [
        { label: "Batch Capacity", value: "10,000 Recipient/Req" },
        { label: "Rate Limiter", value: "Atomic Lua Script" },
        { label: "Queue Engine", value: "BullMQ + Redis" }
      ]
    },
    {
      id: "edutom",
      title: "Edutom",
      subtitle: "Smart Educational & Learning Platform",
      category: "Full Stack",
      description: "A comprehensive digital learning management ecosystem providing structured course management, interactive modules, student tracking, and frictionless learning resources.",
      featured: false,
      githubUrl: "https://github.com/Ritik-7032/edutom",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT Auth"],
      highlights: [
        "Interactive course delivery system with progress analytics and role-based student/teacher dashboards",
        "Secure authentication and authorization pipelines with JWT and bcrypt encryption",
        "Dynamic lesson viewer with multimedia integration and responsive responsive layouts"
      ],
      metrics: [
        { label: "Architecture", value: "RESTful MERN" },
        { label: "UI / Styling", value: "Tailwind CSS" }
      ]
    },
    {
      id: "curiblog",
      title: "CuriBlog",
      subtitle: "Modern Content & Knowledge Publishing Platform",
      category: "Web App",
      description: "An elegant, performant blogging and intellectual content-sharing platform designed for writers and technical enthusiasts to publish rich markdown articles.",
      featured: false,
      githubUrl: "https://github.com/Ritik-7032/curiblog",
      techStack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      highlights: [
        "Rich text and markdown editor with instant preview and SEO-friendly slug generation",
        "Categorized exploration, tag filtering, reader comments, and claps/reactions system",
        "Optimized image delivery and responsive typography for distraction-free reading"
      ],
      metrics: [
        { label: "Content Engine", value: "Markdown Parser" },
        { label: "Database", value: "MongoDB Atlas" }
      ]
    },
    {
      id: "tingl",
      title: "Tingl",
      subtitle: "Real-Time Social Networking & Chat App",
      category: "Full Stack",
      description: "A dynamic real-time social networking platform facilitating instant peer-to-peer messaging, activity feeds, user matchmaking, and live status updates.",
      featured: false,
      githubUrl: "https://github.com/Ritik-7032/tingl",
      techStack: ["React", "Socket.io", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      highlights: [
        "Ultra-low latency instant messaging powered by bidirectional WebSocket rooms",
        "User profile customization, media sharing, and presence status indicators",
        "End-to-end sanitized input handling and responsive mobile-first interface"
      ],
      metrics: [
        { label: "Messaging", value: "Socket.io Rooms" },
        { label: "Latency", value: "Real-time Sync" }
      ]
    },
    {
      id: "meetongo",
      title: "MeetOnGo",
      subtitle: "Instant Video Conferencing & Virtual Meetings",
      category: "Web App",
      description: "A seamless browser-based video meeting tool enabling one-click video rooms, screen sharing, room access control, and low-latency audio/video streams.",
      featured: false,
      githubUrl: "https://github.com/Ritik-7032/meetongo",
      techStack: ["React", "WebRTC", "Socket.io", "Node.js", "Express", "Tailwind CSS"],
      highlights: [
        "Peer-to-peer WebRTC video and audio conferencing with interactive controls",
        "Screen sharing, room creation with unique shareable tokens, and in-call text chat",
        "Optimized bandwidth consumption with adaptive stream resolution"
      ],
      metrics: [
        { label: "Protocol", value: "WebRTC + P2P" },
        { label: "Setup", value: "Zero-Install Rooms" }
      ]
    },
    {
      id: "leafenhancer",
      title: "LeafEnhancer",
      subtitle: "AI Plant Disease Detection & Crop Health",
      category: "AI & ML",
      description: "An innovative agricultural intelligence application that analyzes leaf imagery to identify crop diseases, provides treatment remedies, and enhances imagery for precision farming.",
      featured: false,
      githubUrl: "https://github.com/Ritik-7032/leafenhancer",
      techStack: ["Python", "Computer Vision", "React", "FastAPI / Node.js", "Tailwind CSS"],
      highlights: [
        "Automated leaf pathology recognition and disease diagnostic suggestions",
        "Image preprocessing, enhancement filters, and confidence score generation",
        "Clean farmer-centric UI designed for accessibility on mobile devices"
      ],
      metrics: [
        { label: "Domain", value: "AgroTech / AI" },
        { label: "Analysis", value: "Visual Diagnostics" }
      ]
    }
  ] as Project[],

  experience: [
    {
      id: "briscent-internship",
      role: "Web Development Intern (Remote)",
      company: "Briscent Global LLC",
      companySubtext: "BISANA Connective Solutions",
      period: "Mar 2026 – Jun 2026",
      type: "Internship (Remote)",
      location: "Remote",
      points: [
        "Launched 5+ responsive, cross-browser web interfaces using HTML, CSS, JavaScript, and React for live client projects, crafting reusable UI components.",
        "Collaborated seamlessly across a distributed remote engineering team using Git and GitHub for branch management and code reviews.",
        "Interfaced directly with clients to gather detailed technical specifications and delivered features on schedule.",
        "Authored 10+ pages of comprehensive project documentation and architectural notes for streamlined handover.",
        "Rigorously tested REST APIs and debugged complex UI/logic bugs to elevate application stability and runtime speed."
      ],
      technologies: ["React", "JavaScript", "HTML5", "CSS3", "Git", "GitHub", "REST APIs", "Postman"]
    }
  ] as ExperienceItem[],

  education: [
    {
      id: "iiit-ranchi",
      institution: "Indian Institute of Information Technology (IIIT) Ranchi",
      degree: "B.Tech in Electronics and Communication Engineering",
      field: "ECE",
      period: "2023 – 2027",
      score: "7.39 / 10",
      scoreLabel: "CGPA (till 6th sem)",
      highlight: "Specializing in software engineering, distributed systems, embedded communications, and algorithms.",
      badge: "Current / Undergraduate"
    },
    {
      id: "jee-main",
      institution: "National Testing Agency (NTA)",
      degree: "JEE Main 2023",
      field: "National Engineering Entrance",
      period: "2023",
      score: "95 Percentile",
      scoreLabel: "National Percentile",
      highlight: "Ranked in the top 5% among over 1 million engineering aspirants nationwide.",
      badge: "95%ile Milestone"
    },
    {
      id: "class-12",
      institution: "Vivekanand Sr. Sec School",
      degree: "Class 12th (Senior Secondary)",
      field: "CBSE — Physics, Chemistry, Mathematics (PCM)",
      period: "Passed",
      score: "89%",
      scoreLabel: "Aggregate Score",
      highlight: "Solid mathematical and analytical foundation in CBSE PCM curriculum."
    },
    {
      id: "class-10",
      institution: "Sahid Amar Singh Public School",
      degree: "Class 10th (Secondary)",
      field: "CBSE Curriculum",
      period: "Passed",
      score: "82%",
      scoreLabel: "Aggregate Score",
      highlight: "Comprehensive high school secondary education with academic distinction."
    }
  ] as EducationItem[],

  achievements: [
    {
      id: "jee-achievement",
      title: "95 Percentile in JEE Main 2023",
      category: "Academics",
      description: "Achieved 95 percentile in one of the world's most competitive entrance examinations with over 1 million candidates.",
      metric: "95%ile",
      badgeText: "National Top 5%",
      iconName: "Award"
    },
    {
      id: "dsa-achievement",
      title: "250+ DSA Problems & LeetCode 50-Day Badge",
      category: "DSA",
      description: "Solved 250+ algorithmic problems in C++ (197 on LeetCode + local platforms). Earned LeetCode 50 Days Badge 2025 for consistent daily problem solving.",
      metric: "250+ Solved",
      badgeText: "50-Day Badge 2025",
      iconName: "Code"
    },
    {
      id: "fdp-coordinator",
      title: "Faculty Coordinator — 4-Day FDP",
      category: "Leadership",
      description: "Coordinated a 4-day Faculty Development Program at IIIT Ranchi for 50+ faculty participants, managing communications, technical logistics, and operational arrangements.",
      metric: "50+ Participants",
      badgeText: "IIIT Ranchi Leadership",
      iconName: "Users"
    },
    {
      id: "volleyball-organizer",
      title: "Intra-Hostel Volleyball Tournament Organizer",
      category: "Leadership",
      description: "Successfully organized and managed 3 intra-hostel volleyball tournaments with 5 competing teams each at IIIT Ranchi, overseeing fixtures, team scheduling, and logistics.",
      metric: "3 Tournaments",
      badgeText: "5 Teams Each",
      iconName: "Trophy"
    }
  ] as AchievementItem[],

  leetcodeProfile: {
    username: "ritik-7032",
    profileUrl: "https://leetcode.com/u/ritik-7032/",
    totalSolved: 197,
    overallDsaSolved: "250+",
    activeBadge: "50 Days Badge 2025",
    topicBreakdown: [
      { topic: "Arrays & Strings", count: 85, color: "from-cyan-500 to-blue-600" },
      { topic: "Hash Tables & Sets", count: 38, color: "from-blue-500 to-indigo-600" },
      { topic: "Trees & Binary Trees", count: 32, color: "from-emerald-500 to-teal-600" },
      { topic: "Dynamic Programming", count: 25, color: "from-purple-500 to-pink-600" },
      { topic: "Two Pointers & Sliding Window", count: 28, color: "from-amber-500 to-orange-600" },
      { topic: "Linked Lists & Recursion", count: 20, color: "from-rose-500 to-red-600" }
    ]
  },

  passions: {
    lifting: {
      title: "Power & Discipline: Weight Lifting",
      subtitle: "Building mental grit, structural integrity, and consistency through progressive overload.",
      quote: "The discipline forged under iron translates directly to engineering resilient, high-pressure codebases.",
      photo: "/images/ritik-gym.jpg",
      records: [
        { lift: "Deadlift", weight: "150 kg", lbs: "330 lbs", badge: "Max Pull" },
        { lift: "Squats", weight: "120 kg", lbs: "264 lbs", badge: "Leg Drive" },
        { lift: "Bench Press", weight: "100 kg", lbs: "220 lbs", badge: "Chest & Power" },
        { lift: "Big 3 Total", weight: "370 kg", lbs: "815 lbs", badge: "Combined Total" }
      ],
      attributes: [
        { label: "Deadlift 1RM", value: "150 KG (330 lbs)" },
        { label: "Squat 1RM", value: "120 KG (264 lbs)" },
        { label: "Bench 1RM", value: "100 KG (220 lbs)" }
      ]
    },
    singing: {
      title: "Harmonics & Expression: Vocal Artistry",
      subtitle: "Finding resonance in music, rhythm, and soulful vocal expressions.",
      quote: "Engineering is logic structured into code; singing is passion structured into sound.",
      songName: "Teri Meri Prem Kahani (Vocal Performance by Ritik)",
      voiceClipSlot: "/audio/vocal-demo.mp3",
      audioSampleLabel: "Listen to Ritik's Live Vocal Recording"
    }
  },

  contact: {
    heading: "Let's Build Something Exceptional Together",
    subheading: "I am actively seeking SDE, Full Stack, Backend, and Frontend opportunities. Whether you have an exciting open role, a project idea, or just want to chat tech and fitness, my inbox is open!",
    email: "singhritik7032@gmail.com",
    location: "Ranchi / Remote / Open to Relocation (India)",
    socials: [
      { name: "GitHub", url: "https://github.com/Ritik-7032", iconName: "Github" },
      { name: "LinkedIn", url: "https://linkedin.com/in/ritik-rajput7032", iconName: "Linkedin" },
      { name: "LeetCode", url: "https://leetcode.com/u/ritik-7032/", iconName: "Code2" },
      { name: "Email", url: "mailto:singhritik7032@gmail.com", iconName: "Mail" }
    ]
  }
};
