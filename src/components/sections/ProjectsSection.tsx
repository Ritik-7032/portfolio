import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Server, CheckCircle2, Layers, Maximize2, X, Eye } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { TiltCard } from '../ui/TiltCard';
import { PERSONAL_DATA, Project } from '../../data/content';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [previewModalProject, setPreviewModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Featured', 'Full Stack', 'Distributed Systems', 'Web App', 'AI & ML'];

  const filteredProjects = PERSONAL_DATA.projects.filter((p) => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Featured') return p.featured;
    return p.category === selectedCategory;
  });

  return (
    <section id="projects" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        badge="ENGINEERING PORTFOLIO"
        title="Featured Projects & Production Web Apps"
        subtitle="Explore interactive UI previews, real-time live deployments, and full-stack source code across my 7+ projects."
        accentColor="rose"
      />

      {/* Category Filter Pills */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-6 mb-12 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all whitespace-nowrap cursor-pointer ${
              selectedCategory === cat
                ? 'bg-gradient-to-r from-rose-600 via-pink-600 to-violet-600 text-white shadow-lg shadow-rose-600/30 border border-rose-400/40 font-semibold'
                : 'glass-panel text-slate-300 hover:text-white hover:bg-white/10 border border-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
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
                <TiltCard maxTilt={4} glowColor="rgba(244, 63, 94, 0.2)" className="h-full">
                  <div className={`glass-panel rounded-3xl p-5 sm:p-7 border flex flex-col justify-between h-full relative overflow-hidden group transition-all duration-300 ${
                    isFeatured 
                      ? 'border-rose-500/40 bg-gradient-to-br from-rose-950/20 via-slate-900/90 to-slate-950 shadow-2xl' 
                      : 'border-white/10 hover:border-white/30 bg-slate-900/80 shadow-lg'
                  }`}>
                    
                    {/* Glow orb */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

                    <div>
                      {/* ================= 1. FIRST UI PICTURE / COVER PHOTO ================= */}
                      <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-slate-950 mb-5 group/cover">
                        {/* Browser Window Chrome Header */}
                        <div className="flex items-center justify-between px-3 py-2 bg-slate-900/95 border-b border-white/10">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                          </div>
                          <span className="text-[10px] font-mono text-slate-400 truncate max-w-[200px]">
                            {project.title.toLowerCase()}.app
                          </span>
                          <button
                            onClick={() => setPreviewModalProject(project)}
                            className="p-1 rounded bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors cursor-pointer"
                            title="Expand UI Screenshot"
                          >
                            <Maximize2 className="w-3 h-3" />
                          </button>
                        </div>

                        {/* UI Preview Image */}
                        <div 
                          className="relative h-44 sm:h-52 w-full overflow-hidden bg-slate-950 cursor-pointer"
                          onClick={() => setPreviewModalProject(project)}
                        >
                          <img
                            src={project.coverImage}
                            alt={`${project.title} UI Preview`}
                            className="w-full h-full object-cover object-top group-hover/cover:scale-105 transition-transform duration-500 ease-out"
                          />
                          
                          {/* Hover Overlay with Preview Icon */}
                          <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/cover:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-[1px]">
                            <span className="px-3 py-1.5 rounded-xl bg-slate-900/90 border border-white/20 text-xs font-mono text-white flex items-center gap-1.5 shadow-xl">
                              <Eye className="w-3.5 h-3.5 text-rose-400" />
                              <span>View UI Snapshot</span>
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Top Bar: Subtitle & Category */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium text-rose-300 bg-rose-950/50 border border-rose-500/30">
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

                      {/* Description */}
                      <p className="text-slate-300 text-sm leading-relaxed mb-4 font-light">
                        {project.description}
                      </p>

                      {/* Architectural Highlights */}
                      <div className="space-y-1.5 mb-4 p-3 rounded-2xl bg-slate-950/80 border border-white/5">
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

                      {/* Metrics if available */}
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

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-800/90 text-slate-300 border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Links */}
                    <div className="flex items-center justify-between gap-2 pt-4 border-t border-white/10 flex-wrap">
                      <div className="flex items-center gap-2 flex-wrap">
                        {/* Live Link Button */}
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white shadow-lg shadow-rose-600/30 flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live App</span>
                        </a>

                        {/* GitHub Button */}
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3.5 py-2 rounded-xl text-xs font-medium bg-slate-800 hover:bg-slate-700 text-white border border-white/15 flex items-center gap-1.5 transition-all hover:scale-105"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>{project.githubBackendUrl ? "Frontend" : "GitHub"}</span>
                        </a>

                        {/* Backend GitHub Button if applicable */}
                        {project.githubBackendUrl && (
                          <a
                            href={project.githubBackendUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3.5 py-2 rounded-xl text-xs font-medium bg-slate-800 hover:bg-slate-700 text-white border border-white/15 flex items-center gap-1.5 transition-all hover:scale-105"
                          >
                            <Server className="w-3.5 h-3.5 text-rose-400" />
                            <span>Backend</span>
                          </a>
                        )}
                      </div>
                    </div>

                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* ================= 2. FULL RESOLUTION UI MODAL ================= */}
      <AnimatePresence>
        {previewModalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setPreviewModalProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel max-w-4xl w-full rounded-3xl p-4 sm:p-6 border border-white/20 bg-slate-950 shadow-2xl relative overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <div>
                  <h3 className="text-xl font-heading font-bold text-white flex items-center gap-2">
                    {previewModalProject.title}
                    <span className="text-xs font-mono text-cyan-300 font-normal">
                      • {previewModalProject.subtitle}
                    </span>
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={previewModalProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-rose-600 hover:bg-rose-500 text-white flex items-center gap-1.5"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>Open Live App</span>
                  </a>
                  <button
                    onClick={() => setPreviewModalProject(null)}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Full Mockup Image */}
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
                <img
                  src={previewModalProject.coverImage}
                  alt={previewModalProject.title}
                  className="w-full h-auto max-h-[70vh] object-contain block"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
