import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Server, Zap, CheckCircle2, Layers } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { TiltCard } from '../ui/TiltCard';
import { PERSONAL_DATA, Project } from '../../data/content';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        badge="ENGINEERING SHOWCASE"
        title="Featured Full-Stack Deployments"
        subtitle="End-to-end architectures engineered for real-time concurrency, high throughput, and seamless UX."
        accentColor="rose"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {PERSONAL_DATA.projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            <TiltCard maxTilt={6} glowColor="rgba(244, 63, 94, 0.2)" className="h-full">
              <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between h-full relative overflow-hidden group">
                
                {/* Subtle top corner gradient */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

                <div>
                  {/* Top Bar: Subtitle & Metrics */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-medium text-rose-300 bg-rose-950/40 border border-rose-500/30">
                      {project.subtitle}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                      <Zap className="w-3.5 h-3.5 text-amber-400" />
                      <span>Production</span>
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl sm:text-3xl font-heading font-black text-white group-hover:text-rose-400 transition-colors mb-3">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                    {project.description}
                  </p>

                  {/* Architectural Highlights */}
                  <div className="space-y-2 mb-6 p-4 rounded-2xl bg-slate-900/60 border border-white/5">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-rose-400" />
                      <span>Key Architectural Feats</span>
                    </div>
                    {project.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-normal">
                        <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Key Metrics row */}
                  {project.metrics && (
                    <div className="grid grid-cols-3 gap-2 mb-6">
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-center">
                          <div className="text-xs font-mono font-bold text-white">{m.value}</div>
                          <div className="text-[10px] text-slate-400 font-mono">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-800/80 text-slate-300 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Links */}
                <div className="flex items-center justify-between gap-3 pt-4 border-t border-white/10 flex-wrap">
                  <div className="flex items-center gap-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl text-xs font-semibold bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-600/25 flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl text-xs font-medium glass-panel hover:bg-white/10 text-white border border-white/15 flex items-center gap-1.5 transition-all hover:scale-105"
                      title={project.githubBackendUrl ? "Frontend Repository" : "GitHub Repository"}
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>{project.githubBackendUrl ? "Frontend Repo" : "Code Repo"}</span>
                    </a>

                    {project.githubBackendUrl && (
                      <a
                        href={project.githubBackendUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-2 rounded-xl text-xs font-medium glass-panel hover:bg-white/10 text-white border border-white/15 flex items-center gap-1.5 transition-all hover:scale-105"
                        title="Backend Repository"
                      >
                        <Server className="w-3.5 h-3.5 text-rose-400" />
                        <span>Backend Repo</span>
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
