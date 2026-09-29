import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Server, CheckCircle2, Layers, Globe, Radio } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { TiltCard } from '../ui/TiltCard';
import { PERSONAL_DATA, Project } from '../../data/content';
import { PROJECT_PREVIEWS } from '../ui/ProjectMiniPreviews';
import { HolographicProjectStage } from '../ui/HolographicProjectStage';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'hologram' | 'grid'>('hologram');

  const categories = ['All', 'Featured', 'Full Stack', 'Distributed Systems', 'Web App', 'AI & ML'];

  const filteredProjects = PERSONAL_DATA.projects.filter((p) => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Featured') return p.featured;
    return p.category === selectedCategory;
  });

  return (
    <section id="projects" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        badge="AWARD-WINNING PORTFOLIO"
        title="Featured Projects & Full Stack Architecture"
        subtitle="Explore interactive 3D holographic architecture workflows, real-time live deployments, and source code across my 7+ projects."
        accentColor="rose"
      />

      {/* View Mode Switcher */}
      <div className="flex items-center justify-center gap-3 mb-10">
        <button
          onClick={() => setViewMode('hologram')}
          className={`px-5 py-2.5 rounded-2xl text-xs font-mono font-bold transition-all flex items-center gap-2 cursor-pointer ${
            viewMode === 'hologram'
              ? 'bg-gradient-to-r from-rose-600 via-pink-600 to-violet-600 text-white shadow-[0_0_20px_rgba(244,63,94,0.4)] border border-rose-400/50'
              : 'glass-panel text-slate-400 hover:text-white border border-white/10'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>3D Holographic Stage View</span>
        </button>

        <button
          onClick={() => setViewMode('grid')}
          className={`px-5 py-2.5 rounded-2xl text-xs font-mono font-bold transition-all flex items-center gap-2 cursor-pointer ${
            viewMode === 'grid'
              ? 'bg-gradient-to-r from-rose-600 via-pink-600 to-violet-600 text-white shadow-[0_0_20px_rgba(244,63,94,0.4)] border border-rose-400/50'
              : 'glass-panel text-slate-400 hover:text-white border border-white/10'
          }`}
        >
          <Layers className="w-3.5 h-3.5 text-rose-400" />
          <span>Interactive Grid View ({PERSONAL_DATA.projects.length})</span>
        </button>
      </div>

      {/* ================= 1. HOLOGRAPHIC 3D STAGE VIEW ================= */}
      {viewMode === 'hologram' && (
        <div className="mb-16">
          <HolographicProjectStage />
        </div>
      )}

      {/* ================= 2. INTERACTIVE GRID VIEW ================= */}
      {viewMode === 'grid' && (
        <div>
          {/* Category Filter Pills */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/30 border border-rose-400/40 font-semibold'
                    : 'glass-panel text-slate-300 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => {
                const isFeatured = project.featured;

                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={isFeatured ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'}
                  >
                    <TiltCard maxTilt={3} glowColor="rgba(244, 63, 94, 0.25)" className="h-full">
                      <div className={`rounded-3xl p-5 sm:p-7 border flex flex-col justify-between h-full relative overflow-hidden group transition-all duration-300 ${
                        isFeatured 
                          ? 'border-rose-500/40 bg-gradient-to-br from-rose-950/30 via-slate-900/95 to-slate-950 shadow-2xl' 
                          : 'border-white/10 hover:border-white/30 bg-slate-900/90 shadow-xl'
                      }`}>
                        
                        {/* Ambient Glow */}
                        <div className="absolute top-0 right-0 w-48 h-48 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

                        <div>
                          {/* Live Browser UI Preview */}
                          <div className="relative w-full rounded-2xl overflow-hidden border border-white/15 bg-slate-950 mb-5 shadow-2xl">
                            <div className="flex items-center justify-between px-3.5 py-2 bg-slate-900 border-b border-white/10">
                              <div className="flex items-center gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                              </div>
                              
                              <div className="px-3 py-0.5 rounded-md bg-slate-950 border border-white/10 text-[10px] font-mono text-cyan-300 truncate max-w-[220px]">
                                {project.liveUrl.replace('https://', '').replace('/', '')}
                              </div>

                              <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-400">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                <span>LIVE</span>
                              </div>
                            </div>

                            <div className="h-48 sm:h-52 w-full overflow-hidden bg-slate-950">
                              {PROJECT_PREVIEWS[project.id] || (
                                <div className="w-full h-full flex items-center justify-center text-slate-500 font-mono text-xs">
                                  {project.title} Interface
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Top Bar: Subtitle & Category */}
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium text-rose-300 bg-rose-950/60 border border-rose-500/30">
                              {project.category}
                            </span>
                            {isFeatured && (
                              <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-amber-500/20 border border-amber-500/40 text-[10px] text-amber-300 font-mono">
                                <Sparkles className="w-3 h-3 text-amber-400" />
                                <span>Featured</span>
                              </div>
                            )}
                          </div>

                          {/* Project Title */}
                          <h3 className="text-xl sm:text-2xl font-heading font-black text-white group-hover:text-rose-400 transition-colors mb-1">
                            {project.title}
                          </h3>

                          <p className="text-xs font-mono text-cyan-300 mb-3">
                            {project.subtitle}
                          </p>

                          <p className="text-slate-200 text-sm leading-relaxed mb-4 font-light">
                            {project.description}
                          </p>

                          <div className="space-y-1.5 mb-4 p-3.5 rounded-2xl bg-slate-950/90 border border-white/10">
                            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                              <Layers className="w-3 h-3 text-rose-400" />
                              <span>Key Feats & Architecture</span>
                            </div>
                            {project.highlights.map((highlight, hIdx) => (
                              <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-normal">
                                <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                                <span>{highlight}</span>
                              </div>
                            ))}
                          </div>

                          {project.metrics && (
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
                              {project.metrics.map((m, mIdx) => (
                                <div key={mIdx} className="p-2 rounded-xl bg-white/5 border border-white/5 text-center">
                                  <div className="text-xs font-mono font-bold text-white">{m.value}</div>
                                  <div className="text-[9px] text-slate-400 font-mono">{m.label}</div>
                                </div>
                              ))}
                            </div>
                          )}

                          <div className="flex flex-wrap gap-1.5 mb-6">
                            {project.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-800 text-slate-200 border border-white/10"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-2 pt-4 border-t border-white/10 flex-wrap z-20 relative">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2.5 rounded-xl text-xs font-heading font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-violet-600 hover:from-rose-500 hover:to-violet-500 text-white shadow-lg shadow-rose-600/30 flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Live App</span>
                          </a>

                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3.5 py-2.5 rounded-xl text-xs font-mono font-medium bg-slate-800 hover:bg-slate-700 text-white border border-white/15 flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-md"
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>{project.githubBackendUrl ? "Frontend Code" : "GitHub Repo"}</span>
                          </a>

                          {project.githubBackendUrl && (
                            <a
                              href={project.githubBackendUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3.5 py-2.5 rounded-xl text-xs font-mono font-medium bg-slate-800 hover:bg-slate-700 text-white border border-white/15 flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-md"
                            >
                              <Server className="w-3.5 h-3.5 text-rose-400" />
                              <span>Backend Repo</span>
                            </a>
                          )}
                        </div>

                      </div>
                    </TiltCard>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </section>
  );
};
