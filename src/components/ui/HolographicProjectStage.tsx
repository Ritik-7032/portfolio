import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, Github, Sparkles, Server, CheckCircle2, 
  Layers, ArrowRight, ArrowLeft, Zap, Shield, Globe, Cpu, Radio,
  Terminal, Database, Flame, Eye, RefreshCw
} from 'lucide-react';
import { Project, PERSONAL_DATA } from '../../data/content';
import { TiltCard } from '../ui/TiltCard';

// Animated Architecture Wireframe Diagram Component for each project
const ProjectArchitectureDiagram: React.FC<{ project: Project }> = ({ project }) => {
  const [pulseStep, setPulseStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseStep((prev) => (prev + 1) % 4);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  if (project.id === 'collabdesk') {
    return (
      <div className="w-full bg-slate-950/90 rounded-2xl p-4 border border-cyan-500/30 relative overflow-hidden shadow-2xl">
        {/* Glowing Cyber Grid Background */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#06b6d4 1px, transparent 1px)`,
            backgroundSize: '16px 16px'
          }}
        />

        <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-mono font-bold text-white tracking-wider">COLLABDESK • DISTRIBUTED REALTIME MESH</span>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono text-[10px] border border-cyan-500/40">
            Socket.io + AWS EC2
          </span>
        </div>

        {/* Realtime Node Pipeline */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 my-4 relative">
          {/* Node 1 */}
          <div className={`p-3 rounded-xl border transition-all duration-500 ${
            pulseStep === 0 
              ? 'bg-cyan-950/60 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-105' 
              : 'bg-slate-900/80 border-white/10'
          }`}>
            <span className="text-[9px] font-mono text-cyan-400 block mb-1">NODE 01</span>
            <span className="font-heading font-bold text-white text-xs block">React 19 Client</span>
            <span className="text-[10px] text-slate-400 block mt-0.5">Kanban UI & Drag State</span>
          </div>

          {/* Node 2 */}
          <div className={`p-3 rounded-xl border transition-all duration-500 ${
            pulseStep === 1 
              ? 'bg-violet-950/60 border-violet-400 shadow-[0_0_20px_rgba(139,92,246,0.4)] scale-105' 
              : 'bg-slate-900/80 border-white/10'
          }`}>
            <span className="text-[9px] font-mono text-violet-400 block mb-1">NODE 02</span>
            <span className="font-heading font-bold text-white text-xs block">Socket.io Event Hub</span>
            <span className="text-[10px] text-slate-400 block mt-0.5">&lt;50ms Bi-directional Sync</span>
          </div>

          {/* Node 3 */}
          <div className={`p-3 rounded-xl border transition-all duration-500 ${
            pulseStep === 2 
              ? 'bg-pink-950/60 border-pink-400 shadow-[0_0_20px_rgba(244,63,94,0.4)] scale-105' 
              : 'bg-slate-900/80 border-white/10'
          }`}>
            <span className="text-[9px] font-mono text-pink-400 block mb-1">NODE 03</span>
            <span className="font-heading font-bold text-white text-xs block">Gemini AI Engine</span>
            <span className="text-[10px] text-slate-400 block mt-0.5">Auto Subtask Breakdown</span>
          </div>

          {/* Node 4 */}
          <div className={`p-3 rounded-xl border transition-all duration-500 ${
            pulseStep === 3 
              ? 'bg-emerald-950/60 border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.4)] scale-105' 
              : 'bg-slate-900/80 border-white/10'
          }`}>
            <span className="text-[9px] font-mono text-emerald-400 block mb-1">NODE 04</span>
            <span className="font-heading font-bold text-white text-xs block">AWS S3 + Razorpay</span>
            <span className="text-[10px] text-slate-400 block mt-0.5">Signed URLs & Checkouts</span>
          </div>
        </div>

        {/* Live Status Bar */}
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/10">
          <span className="text-slate-300">Cluster Status: <strong className="text-emerald-400">AWS EC2 (PM2 Active)</strong></span>
          <span className="text-cyan-400 flex items-center gap-1">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>Bi-directional Dataflow Active</span>
          </span>
        </div>
      </div>
    );
  }

  if (project.id === 'email-job-scheduler') {
    return (
      <div className="w-full bg-slate-950/90 rounded-2xl p-4 border border-rose-500/30 relative overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400 animate-ping" />
            <span className="font-mono font-bold text-white tracking-wider">ASYNC QUEUE & REDIS LUA PIPELINE</span>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 font-mono text-[10px] border border-rose-500/40">
            10,000 Recipient Capacity
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
          <div className="p-3 rounded-xl bg-slate-900/90 border border-white/10">
            <span className="text-[9px] font-mono text-slate-400 block mb-1">INPUT INGESTION</span>
            <span className="font-heading font-bold text-white text-xs block">Express & BullMQ Producer</span>
            <span className="text-[10px] text-cyan-300 font-mono block mt-1">Non-blocking Event Loop</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/90 border border-rose-500/40 shadow-[0_0_15px_rgba(244,63,94,0.2)]">
            <span className="text-[9px] font-mono text-rose-400 block mb-1">RATE LIMITER</span>
            <span className="font-heading font-bold text-white text-xs block">Atomic Redis Lua Script</span>
            <span className="text-[10px] text-rose-300 font-mono block mt-1">Token Bucket 50/sec</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/90 border border-white/10">
            <span className="text-[9px] font-mono text-slate-400 block mb-1">WORKER NODES</span>
            <span className="font-heading font-bold text-white text-xs block">Idempotent Consumer Pool</span>
            <span className="text-[10px] text-emerald-300 font-mono block mt-1">Automatic Dead-Letter Recovery</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/10">
          <span className="text-slate-300">Containerization: <strong className="text-white">Docker Compose</strong></span>
          <span className="text-emerald-400 font-bold">● High Concurrency Ready</span>
        </div>
      </div>
    );
  }

  // Default Cyber Card for other projects
  return (
    <div className="w-full bg-slate-950/90 rounded-2xl p-4 border border-violet-500/30 relative overflow-hidden shadow-2xl">
      <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-violet-400 animate-pulse" />
          <span className="font-mono font-bold text-white tracking-wider">{project.title.toUpperCase()} • ARCHITECTURE</span>
        </div>
        <span className="px-2.5 py-0.5 rounded-full bg-violet-500/20 text-violet-300 font-mono text-[10px]">
          {project.category}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
        {project.highlights.slice(0, 3).map((feat, i) => (
          <div key={i} className="p-3 rounded-xl bg-slate-900/90 border border-white/10">
            <span className="text-[9px] font-mono text-cyan-400 block mb-1">FEAT {i + 1}</span>
            <span className="text-xs text-slate-200 leading-snug block">{feat}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/10">
        <span>Stack: {project.techStack.slice(0, 4).join(' • ')}</span>
        <span className="text-cyan-400 font-bold">● Production Architecture</span>
      </div>
    </div>
  );
};

export const HolographicProjectStage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projects = PERSONAL_DATA.projects;
  const activeProject = projects[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="relative w-full">
      {/* 1. Stage Floating Project Selector Tabs */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
        {projects.map((p, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={p.id}
              onClick={() => setCurrentIndex(idx)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-mono font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-rose-600 via-pink-600 to-violet-600 text-white shadow-[0_0_25px_rgba(244,63,94,0.4)] border border-rose-400/50 scale-105'
                  : 'glass-panel text-slate-400 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              <span className="text-[10px] text-cyan-300">0{idx + 1}.</span>
              <span>{p.title}</span>
            </button>
          );
        })}
      </div>

      {/* 2. Main 3D Holographic Stage Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProject.id}
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.98 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <TiltCard maxTilt={4} glowColor="rgba(244, 63, 94, 0.3)">
            <div className="relative rounded-3xl p-6 sm:p-10 border border-rose-500/40 bg-gradient-to-br from-slate-950 via-slate-900/95 to-[#050914] shadow-[0_0_50px_rgba(244,63,94,0.15)] overflow-hidden">
              
              {/* Volumetric Glowing Ambient Lights */}
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-rose-600/15 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-600/15 rounded-full blur-[100px] pointer-events-none" />

              {/* Stage Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-600 via-pink-600 to-violet-600 flex items-center justify-center font-heading font-black text-white text-lg shadow-lg shadow-rose-600/30">
                    0{currentIndex + 1}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl sm:text-3xl font-heading font-black text-white">
                        {activeProject.title}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 font-mono text-xs border border-rose-500/30">
                        {activeProject.category}
                      </span>
                    </div>
                    <p className="text-xs font-mono text-cyan-300 mt-0.5 font-medium">
                      {activeProject.subtitle}
                    </p>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <button
                    onClick={handlePrev}
                    className="p-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 transition-all active:scale-95 cursor-pointer"
                    title="Previous Project"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 transition-all active:scale-95 cursor-pointer"
                    title="Next Project"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Stage Body Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                
                {/* Left Column: Description, Metrics & Big Launch Buttons */}
                <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                  <p className="text-slate-200 text-base leading-relaxed font-light">
                    {activeProject.description}
                  </p>

                  {/* Architectural Badges */}
                  <div className="space-y-2">
                    {activeProject.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Metrics Bar */}
                  {activeProject.metrics && (
                    <div className="grid grid-cols-3 gap-2 pt-2">
                      {activeProject.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="p-3 rounded-2xl bg-slate-900/90 border border-white/10 text-center">
                          <div className="text-xs font-mono font-bold text-cyan-300">{m.value}</div>
                          <div className="text-[10px] text-slate-400 font-mono mt-0.5">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {activeProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-800 text-slate-200 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Big Glowing Action Buttons */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10 flex-wrap">
                    {/* Live App Link */}
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3.5 rounded-2xl font-heading font-bold text-sm bg-gradient-to-r from-rose-600 via-pink-600 to-violet-600 hover:from-rose-500 hover:to-violet-500 text-white shadow-[0_0_30px_rgba(244,63,94,0.4)] flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Launch Live App</span>
                    </a>

                    {/* GitHub Repo Link */}
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3.5 rounded-2xl font-mono font-semibold text-xs bg-slate-900 hover:bg-slate-800 text-white border border-white/15 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
                    >
                      <Github className="w-4 h-4" />
                      <span>{activeProject.githubBackendUrl ? "Frontend Repo" : "Source Code"}</span>
                    </a>

                    {/* Backend Repo if applicable */}
                    {activeProject.githubBackendUrl && (
                      <a
                        href={activeProject.githubBackendUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-3.5 rounded-2xl font-mono font-semibold text-xs bg-slate-900 hover:bg-slate-800 text-white border border-white/15 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
                      >
                        <Server className="w-4 h-4 text-rose-400" />
                        <span>Backend Repo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column: Interactive 3D Architecture Diagram & Live Stream */}
                <div className="lg:col-span-6">
                  <ProjectArchitectureDiagram project={activeProject} />
                </div>

              </div>

            </div>
          </TiltCard>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
