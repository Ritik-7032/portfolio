import React from 'react';
import { ArrowUp, Github, Linkedin, Code2, Heart, Sparkles } from 'lucide-react';
import { PERSONAL_DATA } from '../../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#02050e] pt-16 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-40 bg-cyan-500/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Monogram Brand */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 via-violet-500 to-rose-500 flex items-center justify-center font-heading font-black text-white text-base shadow-lg shadow-cyan-500/20">
            {PERSONAL_DATA.initials}
          </div>
          <span className="font-heading font-extrabold text-xl text-white tracking-wider">
            {PERSONAL_DATA.name}
          </span>
        </div>

        <p className="text-sm text-slate-400 max-w-md font-light mb-8">
          Crafting resilient backend pipelines, high-throughput distributed systems, and award-level interactive web experiences.
        </p>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs font-mono text-slate-400 mb-8">
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
          <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
          <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>
          <a href="#passions" className="hover:text-cyan-400 transition-colors">Beyond Code</a>
          <a href="#coding" className="hover:text-cyan-400 transition-colors">LeetCode (197)</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 mb-10">
          <a
            href={PERSONAL_DATA.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all hover:scale-110"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_DATA.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-cyan-400 transition-all hover:scale-110"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_DATA.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-amber-400 transition-all hover:scale-110"
            title="LeetCode"
          >
            <Code2 className="w-4 h-4" />
          </a>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="mb-8 px-4 py-2 rounded-full glass-panel border border-white/10 hover:border-cyan-400/40 text-xs font-mono text-slate-300 hover:text-white flex items-center gap-2 transition-all hover:scale-105"
        >
          <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          <span>Back to Top</span>
        </button>

        {/* Copyright notice */}
        <div className="text-[11px] font-mono text-slate-500 border-t border-white/5 pt-6 w-full max-w-xl">
          <p>© {new Date().getFullYear()} Ritik Kumar. All rights reserved.</p>
          <p className="mt-1 text-slate-600">
            Engineered with React, TypeScript, Three.js & Tailwind CSS. Zero backend dependency.
          </p>
        </div>

      </div>
    </footer>
  );
};
