import fs from 'fs';
import path from 'path';

const outputDir = path.resolve('public/images/projects');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 1. CollabDesk UI
const collabDeskSvg = `
<svg width="1200" height="700" viewBox="0 0 1200 700" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#090d16" />
      <stop offset="50%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#020617" />
    </linearGradient>
    <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06b6d4" />
      <stop offset="100%" stop-color="#3b82f6" />
    </linearGradient>
    <linearGradient id="geminiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8b5cf6" />
      <stop offset="100%" stop-color="#ec4899" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="700" rx="16" fill="url(#bg)"/>
  
  <!-- Window Header -->
  <rect width="1200" height="52" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
  <circle cx="30" cy="26" r="6" fill="#ef4444"/>
  <circle cx="50" cy="26" r="6" fill="#f59e0b"/>
  <circle cx="70" cy="26" r="6" fill="#10b981"/>
  <rect x="360" y="12" width="480" height="28" rx="8" fill="#1e293b"/>
  <text x="600" y="31" fill="#94a3b8" font-family="sans-serif" font-size="12" text-anchor="middle">collabdesk.workspace/app/boards/sprint-4</text>

  <!-- Sidebar -->
  <rect x="0" y="52" width="220" height="648" fill="#0b1120" stroke="#1e293b" stroke-width="1"/>
  <text x="24" y="95" fill="#f8fafc" font-family="sans-serif" font-size="18" font-weight="bold">CollabDesk</text>
  <rect x="140" y="80" width="60" height="20" rx="6" fill="url(#geminiGrad)"/>
  <text x="170" y="94" fill="#ffffff" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">AI Powered</text>

  <!-- Sidebar items -->
  <rect x="16" y="120" width="188" height="36" rx="8" fill="#1e293b"/>
  <text x="50" y="143" fill="#38bdf8" font-family="sans-serif" font-size="13" font-weight="bold">⚡ Active Board</text>
  <text x="50" y="185" fill="#64748b" font-family="sans-serif" font-size="13">📁 S3 Files & Assets</text>
  <text x="50" y="225" fill="#64748b" font-family="sans-serif" font-size="13">💳 Subscriptions (Razorpay)</text>
  <text x="50" y="265" fill="#64748b" font-family="sans-serif" font-size="13">👥 Team (5 Online)</text>

  <!-- Main Workspace Header -->
  <text x="250" y="105" fill="#f8fafc" font-family="sans-serif" font-size="22" font-weight="bold">Sprint 4: Architecture & AI Subtasks</text>
  <rect x="1020" y="80" width="150" height="36" rx="8" fill="url(#geminiGrad)"/>
  <text x="1095" y="103" fill="#ffffff" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">✨ AI Auto-Breakdown</text>

  <!-- Kanban Columns -->
  <!-- Col 1: Todo -->
  <rect x="250" y="140" width="280" height="520" rx="12" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
  <text x="270" y="172" fill="#cbd5e1" font-family="sans-serif" font-size="14" font-weight="bold">To Do (3)</text>
  
  <rect x="265" y="195" width="250" height="120" rx="10" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="280" y="225" fill="#f8fafc" font-family="sans-serif" font-size="13" font-weight="bold">Implement EC2 PM2 Cluster</text>
  <text x="280" y="248" fill="#94a3b8" font-family="sans-serif" font-size="11">Configure zero-downtime reloads</text>
  <rect x="280" y="275" width="60" height="20" rx="4" fill="#38bdf8" fill-opacity="0.2"/>
  <text x="310" y="289" fill="#38bdf8" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">DevOps</text>

  <rect x="265" y="330" width="250" height="120" rx="10" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="280" y="360" fill="#f8fafc" font-family="sans-serif" font-size="13" font-weight="bold">Razorpay Webhook Verification</text>
  <text x="280" y="383" fill="#94a3b8" font-family="sans-serif" font-size="11">Validate SHA256 signatures</text>
  <rect x="280" y="410" width="60" height="20" rx="4" fill="#f43f5e" fill-opacity="0.2"/>
  <text x="310" y="424" fill="#f43f5e" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">Payments</text>

  <!-- Col 2: In Progress (Realtime Sync) -->
  <rect x="560" y="140" width="280" height="520" rx="12" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
  <text x="580" y="172" fill="#38bdf8" font-family="sans-serif" font-size="14" font-weight="bold">In Progress (Socket.io Live)</text>

  <rect x="575" y="195" width="250" height="150" rx="10" fill="#1e293b" stroke="#06b6d4" stroke-width="1.5"/>
  <text x="590" y="225" fill="#f8fafc" font-family="sans-serif" font-size="13" font-weight="bold">AI Subtask Generation via Gemini</text>
  <text x="590" y="248" fill="#94a3b8" font-family="sans-serif" font-size="11">✓ Parsed 4 atomic micro-tasks</text>
  <text x="590" y="268" fill="#94a3b8" font-family="sans-serif" font-size="11">✓ Synced to MongoDB instantly</text>
  <rect x="590" y="295" width="70" height="22" rx="4" fill="url(#geminiGrad)"/>
  <text x="625" y="310" fill="#ffffff" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">Gemini AI</text>
  <rect x="670" y="295" width="70" height="22" rx="4" fill="#06b6d4" fill-opacity="0.2"/>
  <text x="705" y="310" fill="#06b6d4" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">Socket.io</text>

  <!-- Col 3: Done -->
  <rect x="870" y="140" width="280" height="520" rx="12" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
  <text x="890" y="172" fill="#10b981" font-family="sans-serif" font-size="14" font-weight="bold">Done (Completed)</text>

  <rect x="885" y="195" width="250" height="110" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="1"/>
  <text x="900" y="225" fill="#f8fafc" font-family="sans-serif" font-size="13" font-weight="bold">AWS S3 Pre-signed Uploads</text>
  <text x="900" y="248" fill="#94a3b8" font-family="sans-serif" font-size="11">Direct client-to-bucket pipeline</text>
  <rect x="900" y="268" width="60" height="20" rx="4" fill="#10b981" fill-opacity="0.2"/>
  <text x="930" y="282" fill="#10b981" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">Cloud</text>
</svg>
`;

// 2. Email Job Scheduler UI
const emailSchedulerSvg = `
<svg width="1200" height="700" viewBox="0 0 1200 700" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#080e1a" />
      <stop offset="100%" stop-color="#020617" />
    </linearGradient>
    <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ef4444" />
      <stop offset="100%" stop-color="#dc2626" />
    </linearGradient>
  </defs>

  <rect width="1200" height="700" rx="16" fill="url(#bg2)"/>
  
  <!-- Window Header -->
  <rect width="1200" height="52" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
  <circle cx="30" cy="26" r="6" fill="#ef4444"/>
  <circle cx="50" cy="26" r="6" fill="#f59e0b"/>
  <circle cx="70" cy="26" r="6" fill="#10b981"/>
  <rect x="360" y="12" width="480" height="28" rx="8" fill="#1e293b"/>
  <text x="600" y="31" fill="#94a3b8" font-family="sans-serif" font-size="12" text-anchor="middle">email-scheduler.dashboard/analytics</text>

  <!-- Title & Metrics -->
  <text x="50" y="105" fill="#f8fafc" font-family="sans-serif" font-size="24" font-weight="bold">BullMQ & Redis High-Throughput Dispatcher</text>
  <rect x="980" y="78" width="170" height="34" rx="8" fill="#10b981" fill-opacity="0.15" stroke="#10b981" stroke-width="1"/>
  <text x="1065" y="100" fill="#10b981" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">● Workers Active (4 Nodes)</text>

  <!-- Metric Cards -->
  <rect x="50" y="135" width="250" height="110" rx="12" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
  <text x="75" y="170" fill="#94a3b8" font-family="sans-serif" font-size="12">BATCH CAPACITY</text>
  <text x="75" y="210" fill="#f8fafc" font-family="sans-serif" font-size="28" font-weight="bold">10,000</text>
  <text x="180" y="210" fill="#06b6d4" font-family="sans-serif" font-size="13">/ Request</text>

  <rect x="330" y="135" width="250" height="110" rx="12" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
  <text x="355" y="170" fill="#94a3b8" font-family="sans-serif" font-size="12">RATE LIMITER</text>
  <text x="355" y="210" fill="#ef4444" font-family="sans-serif" font-size="24" font-weight="bold">Atomic Lua</text>
  <text x="500" y="210" fill="#94a3b8" font-family="sans-serif" font-size="11">(Redis)</text>

  <rect x="610" y="135" width="250" height="110" rx="12" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
  <text x="635" y="170" fill="#94a3b8" font-family="sans-serif" font-size="12">DELIVERY STATUS</text>
  <text x="635" y="210" fill="#10b981" font-family="sans-serif" font-size="28" font-weight="bold">99.98%</text>

  <rect x="890" y="135" width="250" height="110" rx="12" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
  <text x="915" y="170" fill="#94a3b8" font-family="sans-serif" font-size="12">CRASH RECOVERY</text>
  <text x="915" y="210" fill="#8b5cf6" font-family="sans-serif" font-size="24" font-weight="bold">Idempotent</text>

  <!-- Live Queue Visualizer -->
  <rect x="50" y="275" width="1100" height="380" rx="14" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
  <text x="80" y="315" fill="#cbd5e1" font-family="sans-serif" font-size="16" font-weight="bold">Live Job Queue Stream (BullMQ + PostgreSQL)</text>

  <!-- Table rows -->
  <rect x="80" y="340" width="1040" height="45" rx="8" fill="#1e293b"/>
  <text x="100" y="367" fill="#38bdf8" font-family="monospace" font-size="12">JOB-98421</text>
  <text x="240" y="367" fill="#f8fafc" font-family="sans-serif" font-size="12">Transactional Auth Email (3,400 recipients)</text>
  <text x="750" y="367" fill="#10b981" font-family="sans-serif" font-size="12">COMPLETED (0.8s)</text>

  <rect x="80" y="395" width="1040" height="45" rx="8" fill="#1e293b" fill-opacity="0.6"/>
  <text x="100" y="422" fill="#38bdf8" font-family="monospace" font-size="12">JOB-98422</text>
  <text x="240" y="422" fill="#f8fafc" font-family="sans-serif" font-size="12">Marketing Digest Campaign (8,900 recipients)</text>
  <text x="750" y="422" fill="#f59e0b" font-family="sans-serif" font-size="12">PROCESSING (Lua Limiter 50/s)</text>

  <rect x="80" y="450" width="1040" height="45" rx="8" fill="#1e293b" fill-opacity="0.6"/>
  <text x="100" y="477" fill="#38bdf8" font-family="monospace" font-size="12">JOB-98423</text>
  <text x="240" y="477" fill="#f8fafc" font-family="sans-serif" font-size="12">Weekly Activity Summary (1,200 recipients)</text>
  <text x="750" y="477" fill="#94a3b8" font-family="sans-serif" font-size="12">QUEUED (Delayed 5m)</text>
</svg>
`;

// 3. Edutom UI
const edutomSvg = `
<svg width="1200" height="700" viewBox="0 0 1200 700" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#07121e" />
      <stop offset="100%" stop-color="#020617" />
    </linearGradient>
  </defs>
  <rect width="1200" height="700" rx="16" fill="url(#bg3)"/>
  <rect width="1200" height="52" fill="#0f172a" stroke="#1e293b"/>
  <circle cx="30" cy="26" r="6" fill="#ef4444"/><circle cx="50" cy="26" r="6" fill="#f59e0b"/><circle cx="70" cy="26" r="6" fill="#10b981"/>
  <text x="600" y="31" fill="#94a3b8" font-family="sans-serif" font-size="12" text-anchor="middle">edutom.learning/courses/full-stack-dev</text>

  <text x="60" y="110" fill="#f8fafc" font-family="sans-serif" font-size="24" font-weight="bold">Edutom — Smart Interactive E-Learning Platform</text>
  
  <!-- Course Card 1 -->
  <rect x="60" y="150" width="340" height="480" rx="14" fill="#0f172a" stroke="#1e293b"/>
  <rect x="60" y="150" width="340" height="180" rx="14" fill="#1e3a8a"/>
  <text x="85" y="240" fill="#ffffff" font-family="sans-serif" font-size="20" font-weight="bold">Full Stack Web Architecture</text>
  <text x="85" y="365" fill="#f8fafc" font-family="sans-serif" font-size="16" font-weight="bold">Master MERN, Redis & Cloud</text>
  <text x="85" y="395" fill="#94a3b8" font-family="sans-serif" font-size="13">24 Modules • Real-world projects</text>
  <rect x="85" y="440" width="290" height="8" rx="4" fill="#1e293b"/>
  <rect x="85" y="440" width="220" height="8" rx="4" fill="#38bdf8"/>
  <text x="85" y="475" fill="#38bdf8" font-family="sans-serif" font-size="12">75% Completed</text>

  <!-- Course Card 2 -->
  <rect x="430" y="150" width="340" height="480" rx="14" fill="#0f172a" stroke="#1e293b"/>
  <rect x="430" y="150" width="340" height="180" rx="14" fill="#4c1d95"/>
  <text x="455" y="240" fill="#ffffff" font-family="sans-serif" font-size="20" font-weight="bold">C++ & Algorithmic DSA</text>
  <text x="455" y="365" fill="#f8fafc" font-family="sans-serif" font-size="16" font-weight="bold">Data Structures from Scratch</text>
  <text x="455" y="395" fill="#94a3b8" font-family="sans-serif" font-size="13">250+ Practice Problems & Tests</text>
  <rect x="455" y="440" width="290" height="8" rx="4" fill="#1e293b"/>
  <rect x="455" y="440" width="270" height="8" rx="4" fill="#a855f7"/>
  <text x="455" y="475" fill="#a855f7" font-family="sans-serif" font-size="12">92% Completed</text>

  <!-- Analytics side panel -->
  <rect x="800" y="150" width="340" height="480" rx="14" fill="#0f172a" stroke="#1e293b"/>
  <text x="825" y="195" fill="#f8fafc" font-family="sans-serif" font-size="18" font-weight="bold">Student Analytics</text>
  <rect x="825" y="225" width="290" height="80" rx="10" fill="#1e293b"/>
  <text x="845" y="255" fill="#94a3b8" font-family="sans-serif" font-size="12">TOTAL STUDY HOURS</text>
  <text x="845" y="285" fill="#38bdf8" font-family="sans-serif" font-size="22" font-weight="bold">148.5 hrs</text>
</svg>
`;

// 4. CuriBlog UI
const curiBlogSvg = `
<svg width="1200" height="700" viewBox="0 0 1200 700" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg4" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a0a14" />
      <stop offset="100%" stop-color="#020617" />
    </linearGradient>
  </defs>
  <rect width="1200" height="700" rx="16" fill="url(#bg4)"/>
  <rect width="1200" height="52" fill="#0f172a" stroke="#1e293b"/>
  <circle cx="30" cy="26" r="6" fill="#ef4444"/><circle cx="50" cy="26" r="6" fill="#f59e0b"/><circle cx="70" cy="26" r="6" fill="#10b981"/>
  <text x="600" y="31" fill="#94a3b8" font-family="sans-serif" font-size="12" text-anchor="middle">curiblog.dev/posts/distributed-queues-guide</text>

  <!-- Article View -->
  <rect x="180" y="85" width="840" height="570" rx="16" fill="#0f172a" stroke="#1e293b"/>
  <text x="220" y="140" fill="#818cf8" font-family="monospace" font-size="13">#DISTRIBUTED SYSTEMS • ARCHITECTURE</text>
  <text x="220" y="185" fill="#ffffff" font-family="sans-serif" font-size="26" font-weight="bold">Scaling Message Queues with BullMQ & Redis</text>
  <text x="220" y="220" fill="#94a3b8" font-family="sans-serif" font-size="13">Published by Ritik Kumar • 6 min read • 420 Claps</text>
  
  <!-- Code Snippet block in blog -->
  <rect x="220" y="250" width="760" height="170" rx="10" fill="#020617" stroke="#334155"/>
  <text x="245" y="285" fill="#38bdf8" font-family="monospace" font-size="13">const emailQueue = new Queue('emailPipeline', { connection: redisConfig });</text>
  <text x="245" y="315" fill="#a855f7" font-family="monospace" font-size="13">await emailQueue.add('sendBulkEmail', { recipients, template }, { attempts: 3 });</text>
  <text x="245" y="345" fill="#10b981" font-family="monospace" font-size="13">// Atomic Redis Lua Token Bucket Rate Limiter</text>
  <text x="245" y="375" fill="#f59e0b" font-family="monospace" font-size="13">const allowed = await redis.eval(luaRateLimiterScript, 1, userKey, limit, window);</text>

  <text x="220" y="470" fill="#cbd5e1" font-family="sans-serif" font-size="14" leading="24">
    In modern backend engineering, preventing server event-loop blocking during massive batch dispatches requires
  </text>
  <text x="220" y="495" fill="#cbd5e1" font-family="sans-serif" font-size="14">
    decoupling ingestion from execution using distributed background workers and atomic Lua scripting.
  </text>
</svg>
`;

// 5. Tingl UI
const tinglSvg = `
<svg width="1200" height="700" viewBox="0 0 1200 700" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg5" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f071a" />
      <stop offset="100%" stop-color="#030712" />
    </linearGradient>
  </defs>
  <rect width="1200" height="700" rx="16" fill="url(#bg5)"/>
  <rect width="1200" height="52" fill="#0f172a" stroke="#1e293b"/>
  <circle cx="30" cy="26" r="6" fill="#ef4444"/><circle cx="50" cy="26" r="6" fill="#f59e0b"/><circle cx="70" cy="26" r="6" fill="#10b981"/>
  <text x="600" y="31" fill="#94a3b8" font-family="sans-serif" font-size="12" text-anchor="middle">tingl.social/messages/active-room</text>

  <!-- Left Chat list -->
  <rect x="60" y="80" width="300" height="580" rx="14" fill="#0f172a" stroke="#1e293b"/>
  <text x="85" y="125" fill="#f8fafc" font-family="sans-serif" font-size="20" font-weight="bold">Tingl Chat</text>
  <circle cx="280" cy="120" r="5" fill="#10b981"/>
  
  <rect x="75" y="150" width="270" height="65" rx="10" fill="#1e293b"/>
  <circle cx="105" cy="182" r="18" fill="#8b5cf6"/>
  <text x="135" y="178" fill="#ffffff" font-family="sans-serif" font-size="13" font-weight="bold">Engineering Guild</text>
  <text x="135" y="196" fill="#38bdf8" font-family="sans-serif" font-size="11">Ritik: Socket.io connected!</text>

  <!-- Right Chat conversation window -->
  <rect x="380" y="80" width="760" height="580" rx="14" fill="#0f172a" stroke="#1e293b"/>
  <text x="410" y="125" fill="#f8fafc" font-family="sans-serif" font-size="18" font-weight="bold"># Developers Hub</text>
  
  <!-- Chat bubbles -->
  <rect x="410" y="170" width="380" height="60" rx="12" fill="#1e293b"/>
  <text x="430" y="198" fill="#cbd5e1" font-family="sans-serif" font-size="13">Hey team! Are the WebRTC video feeds synced?</text>
  
  <rect x="680" y="250" width="430" height="70" rx="12" fill="#8b5cf6"/>
  <text x="700" y="278" fill="#ffffff" font-family="sans-serif" font-size="13" font-weight="bold">Ritik Kumar (You)</text>
  <text x="700" y="300" fill="#ffffff" font-family="sans-serif" font-size="13">Yes, sub-50ms latency with WebSocket rooms!</text>

  <rect x="410" y="580" width="700" height="50" rx="12" fill="#020617" stroke="#334155"/>
  <text x="435" y="612" fill="#64748b" font-family="sans-serif" font-size="13">Type a live message or attach media...</text>
</svg>
`;

// 6. MeetOnGo UI
const meetOnGoSvg = `
<svg width="1200" height="700" viewBox="0 0 1200 700" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg6" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#041219" />
      <stop offset="100%" stop-color="#020617" />
    </linearGradient>
  </defs>
  <rect width="1200" height="700" rx="16" fill="url(#bg6)"/>
  <rect width="1200" height="52" fill="#0f172a" stroke="#1e293b"/>
  <circle cx="30" cy="26" r="6" fill="#ef4444"/><circle cx="50" cy="26" r="6" fill="#f59e0b"/><circle cx="70" cy="26" r="6" fill="#10b981"/>
  <text x="600" y="31" fill="#94a3b8" font-family="sans-serif" font-size="12" text-anchor="middle">meetongo.live/room/eng-standup-82</text>

  <!-- Video Grid (4 participants) -->
  <rect x="60" y="80" width="520" height="250" rx="14" fill="#0f172a" stroke="#06b6d4" stroke-width="2"/>
  <rect x="80" y="100" width="480" height="210" rx="10" fill="#1e293b"/>
  <text x="105" y="290" fill="#ffffff" font-family="sans-serif" font-size="13" font-weight="bold">Ritik Kumar (Host)</text>
  <circle cx="530" cy="285" r="8" fill="#10b981"/>

  <rect x="620" y="80" width="520" height="250" rx="14" fill="#0f172a" stroke="#1e293b"/>
  <rect x="640" y="100" width="480" height="210" rx="10" fill="#1e293b"/>
  <text x="665" y="290" fill="#ffffff" font-family="sans-serif" font-size="13">Sarah Chen (Remote)</text>

  <rect x="60" y="350" width="520" height="250" rx="14" fill="#0f172a" stroke="#1e293b"/>
  <rect x="80" y="370" width="480" height="210" rx="10" fill="#1e293b"/>
  <text x="105" y="560" fill="#ffffff" font-family="sans-serif" font-size="13">Liam Patel</text>

  <rect x="620" y="350" width="520" height="250" rx="14" fill="#0f172a" stroke="#1e293b"/>
  <rect x="640" y="370" width="480" height="210" rx="10" fill="#1e293b"/>
  <text x="665" y="560" fill="#ffffff" font-family="sans-serif" font-size="13">Screen Share: System Architecture</text>

  <!-- Control Bar -->
  <rect x="420" y="620" width="360" height="50" rx="16" fill="#0f172a" stroke="#334155"/>
  <circle cx="460" cy="645" r="16" fill="#1e293b"/>
  <circle cx="510" cy="645" r="16" fill="#1e293b"/>
  <circle cx="560" cy="645" r="16" fill="#06b6d4"/>
  <circle cx="610" cy="645" r="16" fill="#1e293b"/>
  <circle cx="720" cy="645" r="16" fill="#ef4444"/>
</svg>
`;

// 7. LeafEnhancer UI
const leafEnhancerSvg = `
<svg width="1200" height="700" viewBox="0 0 1200 700" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg7" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#041a0f" />
      <stop offset="100%" stop-color="#020617" />
    </linearGradient>
  </defs>
  <rect width="1200" height="700" rx="16" fill="url(#bg7)"/>
  <rect width="1200" height="52" fill="#0f172a" stroke="#1e293b"/>
  <circle cx="30" cy="26" r="6" fill="#ef4444"/><circle cx="50" cy="26" r="6" fill="#f59e0b"/><circle cx="70" cy="26" r="6" fill="#10b981"/>
  <text x="600" y="31" fill="#94a3b8" font-family="sans-serif" font-size="12" text-anchor="middle">leafenhancer.ai/diagnose/scan-894</text>

  <text x="60" y="105" fill="#f8fafc" font-family="sans-serif" font-size="24" font-weight="bold">LeafEnhancer — AI Crop Pathology Diagnostics</text>

  <!-- Left: Image Scanner -->
  <rect x="60" y="135" width="520" height="510" rx="14" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
  <rect x="90" y="165" width="460" height="380" rx="10" fill="#064e3b"/>
  <text x="320" y="360" fill="#6ee7b7" font-family="sans-serif" font-size="18" text-anchor="middle">🌿 Leaf Visual Analysis Complete</text>
  <text x="320" y="390" fill="#a7f3d0" font-family="sans-serif" font-size="13" text-anchor="middle">Resolution: 4K Enhanced</text>

  <!-- Right: Diagnostic Metrics -->
  <rect x="620" y="135" width="520" height="510" rx="14" fill="#0f172a" stroke="#1e293b"/>
  <text x="650" y="180" fill="#f8fafc" font-family="sans-serif" font-size="20" font-weight="bold">Disease Detection Results</text>

  <rect x="650" y="210" width="460" height="90" rx="10" fill="#1e293b"/>
  <text x="675" y="245" fill="#94a3b8" font-family="sans-serif" font-size="12">DIAGNOSED CONDITION</text>
  <text x="675" y="275" fill="#ef4444" font-family="sans-serif" font-size="18" font-weight="bold">Early Blight (Alternaria Solani)</text>
  <text x="1020" y="275" fill="#10b981" font-family="sans-serif" font-size="16" font-weight="bold">96.8% Conf.</text>

  <rect x="650" y="320" width="460" height="150" rx="10" fill="#1e293b"/>
  <text x="675" y="355" fill="#10b981" font-family="sans-serif" font-size="14" font-weight="bold">Recommended Agricultural Treatment</text>
  <text x="675" y="385" fill="#cbd5e1" font-family="sans-serif" font-size="12">• Apply organic copper-based fungicide spray</text>
  <text x="675" y="410" fill="#cbd5e1" font-family="sans-serif" font-size="12">• Improve soil aeration and morning drip irrigation</text>
  <text x="675" y="435" fill="#cbd5e1" font-family="sans-serif" font-size="12">• Prune infected bottom leaves to restrict fungal spread</text>
</svg>
`;

fs.writeFileSync(path.join(outputDir, 'collabdesk.svg'), collabDeskSvg.trim());
fs.writeFileSync(path.join(outputDir, 'email-scheduler.svg'), emailSchedulerSvg.trim());
fs.writeFileSync(path.join(outputDir, 'edutom.svg'), edutomSvg.trim());
fs.writeFileSync(path.join(outputDir, 'curiblog.svg'), curiBlogSvg.trim());
fs.writeFileSync(path.join(outputDir, 'tingl.svg'), tinglSvg.trim());
fs.writeFileSync(path.join(outputDir, 'meetongo.svg'), meetOnGoSvg.trim());
fs.writeFileSync(path.join(outputDir, 'leafenhancer.svg'), leafEnhancerSvg.trim());

console.log('Successfully generated all 7 UI preview cover SVGs in public/images/projects/');
