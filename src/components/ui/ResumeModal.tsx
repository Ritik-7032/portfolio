import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Download, ExternalLink, FileText, CheckCircle2, 
  Sparkles, Briefcase, GraduationCap, Code2, Award, Mail, Phone, MapPin, Globe
} from 'lucide-react';
import { PERSONAL_DATA } from '../../data/content';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [viewMode, setViewMode] = useState<'pdf' | 'interactive'>('pdf');

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden select-none">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="relative w-full max-w-5xl h-[92vh] max-h-[950px] bg-slate-950/95 border border-white/20 rounded-3xl shadow-2xl flex flex-col overflow-hidden z-10"
          >
            {/* Top Navigation Bar */}
            <div className="flex items-center justify-between px-5 sm:px-7 py-3.5 bg-slate-900/90 border-b border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-sm sm:text-base flex items-center gap-2">
                    <span>{PERSONAL_DATA.name} — Resume</span>
                    <span className="hidden sm:inline px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono text-[10px] border border-cyan-500/30">
                      B.Tech ECE • IIIT Ranchi
                    </span>
                  </h3>
                  <span className="text-[11px] font-mono text-slate-400 hidden sm:block">
                    Full Stack Developer (React, Node.js, TypeScript, C++)
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                {/* View Mode Switcher (PDF vs Document View) */}
                <div className="hidden md:flex items-center gap-1 p-1 bg-slate-800/80 rounded-xl border border-white/10 mr-2">
                  <button
                    onClick={() => setViewMode('pdf')}
                    className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all ${
                      viewMode === 'pdf'
                        ? 'bg-cyan-500 text-white font-bold shadow-md shadow-cyan-500/30'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    PDF View
                  </button>
                  <button
                    onClick={() => setViewMode('interactive')}
                    className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all ${
                      viewMode === 'interactive'
                        ? 'bg-cyan-500 text-white font-bold shadow-md shadow-cyan-500/30'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Interactive Doc
                  </button>
                </div>

                {/* Open In New Tab */}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white border border-white/10 transition-all"
                  title="Open PDF in new browser tab"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Tab</span>
                </a>

                {/* Direct Download Button */}
                <a
                  href="/resume.pdf"
                  download="Ritik_Kumar_Resume.pdf"
                  className="px-4 py-2 rounded-xl text-xs font-heading font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/30 flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl bg-white/5 hover:bg-red-500/20 text-slate-400 hover:text-red-400 border border-white/10 transition-colors cursor-pointer ml-1"
                  title="Close resume popup (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="flex-1 w-full overflow-y-auto bg-slate-950 p-2 sm:p-4">
              {viewMode === 'pdf' ? (
                /* PDF Embed View */
                <div className="w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-slate-900 shadow-inner flex flex-col">
                  <iframe
                    src="/resume.pdf#toolbar=1&navpanes=0&view=FitH"
                    title="Ritik Kumar Resume"
                    className="w-full h-full min-h-[600px] border-none block bg-slate-900"
                  />
                </div>
              ) : (
                /* Clean Interactive Document Resume View */
                <div className="max-w-4xl mx-auto p-6 sm:p-10 bg-slate-900/90 rounded-3xl border border-white/10 shadow-2xl text-slate-200 select-text space-y-8">
                  {/* Document Header */}
                  <div className="text-center pb-6 border-b border-white/10">
                    <h1 className="text-3xl sm:text-4xl font-heading font-black text-white mb-2">
                      {PERSONAL_DATA.name.toUpperCase()}
                    </h1>
                    <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-cyan-300">
                      <span>singhritik7032@gmail.com</span>
                      <span>•</span>
                      <span>github.com/Ritik-7032</span>
                      <span>•</span>
                      <span>linkedin.com/in/ritik-rajput7032</span>
                      <span>•</span>
                      <span>leetcode.com/u/ritik-7032</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <div>
                    <h2 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-widest mb-2">
                      PROFESSIONAL SUMMARY
                    </h2>
                    <p className="text-sm text-slate-300 leading-relaxed font-light">
                      Full-stack developer (React, Node.js, TypeScript, C++) and B.Tech ECE student at IIIT Ranchi with a 3-month remote web development internship and two full-stack projects deployed to production. Shipped real-time collaboration, payment, and queue-based scheduling systems using MongoDB, PostgreSQL, Redis, and AWS. Solved 250+ DSA problems in C++.
                    </p>
                  </div>

                  {/* Education */}
                  <div>
                    <h2 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-widest mb-3">
                      EDUCATION
                    </h2>
                    <div className="space-y-3 text-sm">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                        <div>
                          <span className="font-bold text-white">Indian Institute of Information Technology (IIIT) Ranchi</span>
                          <span className="text-xs text-slate-400 block">B.Tech in Electronics and Communication Engineering</span>
                        </div>
                        <div className="text-right font-mono text-xs text-cyan-300 mt-1 sm:mt-0">
                          <span>2023 – 2027</span>
                          <span className="block font-bold">CGPA: 7.39/10 (till 6th sem)</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Experience */}
                  <div>
                    <h2 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-widest mb-3">
                      EXPERIENCE
                    </h2>
                    <div className="space-y-4">
                      {PERSONAL_DATA.experience.map((exp) => (
                        <div key={exp.id} className="space-y-2">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                            <span className="font-bold text-white">{exp.role} | {exp.company}</span>
                            <span className="font-mono text-xs text-slate-400">{exp.period}</span>
                          </div>
                          <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
                            {exp.points.map((pt, pIdx) => (
                              <li key={pIdx}>{pt}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Projects */}
                  <div>
                    <h2 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-widest mb-3">
                      PROJECTS
                    </h2>
                    <div className="space-y-5">
                      {PERSONAL_DATA.projects.slice(0, 3).map((proj) => (
                        <div key={proj.id} className="space-y-1.5">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                            <span className="font-bold text-white">{proj.title} — {proj.subtitle}</span>
                            <span className="font-mono text-xs text-cyan-400">{proj.techStack.slice(0, 5).join(', ')}</span>
                          </div>
                          <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
                            {proj.highlights.map((h, hIdx) => (
                              <li key={hIdx}>{h}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technical Skills */}
                  <div>
                    <h2 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-widest mb-3">
                      TECHNICAL SKILLS
                    </h2>
                    <div className="space-y-1.5 text-xs text-slate-300">
                      <p><strong className="text-white font-mono">Languages:</strong> C++, JavaScript (ES6+), TypeScript, SQL, HTML5, CSS3</p>
                      <p><strong className="text-white font-mono">Frontend:</strong> React.js, React Router, Tailwind CSS, Vite, Axios</p>
                      <p><strong className="text-white font-mono">Backend & Auth:</strong> Node.js, Express.js, REST APIs, Socket.io, BullMQ, Passport.js, Zod, JWT, Google OAuth 2.0</p>
                      <p><strong className="text-white font-mono">Databases:</strong> PostgreSQL, MongoDB, Redis, Prisma ORM, Mongoose</p>
                      <p><strong className="text-white font-mono">Cloud & DevOps:</strong> AWS (EC2, S3), Docker, Docker Compose, PM2, Vercel, Render</p>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h2 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-widest mb-3">
                      ACHIEVEMENTS & LEADERSHIP
                    </h2>
                    <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-300">
                      <li>Secured 95 percentile in JEE Main 2023</li>
                      <li>Solved 250+ DSA problems in C++ across LeetCode (197) and local practice (50 Days Badge 2025)</li>
                      <li>Faculty Coordinator, FDP | IIIT Ranchi (4-day program for 50+ participants)</li>
                      <li>Organizer, Intra-Hostel Volleyball Tournaments | IIIT Ranchi (3 tournaments with 5 teams each)</li>
                    </ul>
                  </div>

                </div>
              )}
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
