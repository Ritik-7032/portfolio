import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Download, Mail, Github, Linkedin, Code2 } from 'lucide-react';
import { HeroCanvas } from '../3d/HeroCanvas';
import { MagneticButton } from '../ui/MagneticButton';
import { PERSONAL_DATA } from '../../data/content';
import { useMousePosition } from '../../hooks/useMousePosition';

export const HeroSection: React.FC = () => {
  const mousePos = useMousePosition();
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for roles
  useEffect(() => {
    const currentRole = PERSONAL_DATA.rolesTyping[roleIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % PERSONAL_DATA.rolesTyping.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 overflow-hidden">
      {/* 3D Canvas Background */}
      <HeroCanvas mousePos={mousePos} />

      {/* Central Backdrop Vignette for 100% Crisp Readability */}
      <div 
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: 'radial-gradient(ellipse 65% 55% at 50% 48%, rgba(3, 7, 18, 0.82) 0%, rgba(3, 7, 18, 0.45) 55%, transparent 100%)'
        }}
      />

      {/* Center Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center mt-4">
        
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-emerald-500/40 bg-emerald-950/40 backdrop-blur-xl mb-6 shadow-[0_0_25px_rgba(16,185,129,0.2)]"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono font-medium text-emerald-300 tracking-wide">
            {PERSONAL_DATA.status}
          </span>
        </motion.div>

        {/* Hero Main Name with High Contrast */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-black tracking-tight text-white mb-4 drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]"
        >
          Hi, I&apos;m{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300 text-transparent bg-clip-text drop-shadow-[0_0_30px_rgba(6,182,212,0.4)]">
            {PERSONAL_DATA.name}
          </span>
        </motion.h1>

        {/* Dynamic Typewriter Role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="min-h-[44px] sm:min-h-[52px] flex items-center justify-center mb-5 px-4 py-1.5 rounded-2xl bg-slate-900/60 border border-white/5 backdrop-blur-md"
        >
          <h2 className="text-lg sm:text-2xl md:text-3xl font-heading font-bold text-slate-100 flex items-center gap-1">
            <span className="text-cyan-300 font-mono tracking-tight">{displayText}</span>
            <span className="animate-pulse text-pink-400 font-normal">|</span>
          </h2>
        </motion.div>

        {/* Subtitle Statement with Enhanced Contrast */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-base sm:text-lg text-slate-200 max-w-2xl mb-10 leading-relaxed font-light drop-shadow-md"
        >
          Undergrad at <span className="text-cyan-300 font-semibold underline decoration-cyan-500/50 underline-offset-4">IIIT Ranchi</span> building high-throughput distributed engines, cloud-native architectures, and modern web apps with <span className="text-white font-medium bg-slate-800/80 px-2 py-0.5 rounded border border-white/10 font-mono text-sm">React</span>, <span className="text-white font-medium bg-slate-800/80 px-2 py-0.5 rounded border border-white/10 font-mono text-sm">TypeScript</span>, and <span className="text-white font-medium bg-slate-800/80 px-2 py-0.5 rounded border border-white/10 font-mono text-sm">C++</span>.
        </motion.p>

        {/* CTA Buttons Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
        >
          <MagneticButton
            as="a"
            href="#projects"
            className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-heading font-bold text-sm shadow-xl shadow-cyan-500/25 border border-cyan-400/40 transition-all hover:scale-105 active:scale-95"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Explore 7+ Projects
          </MagneticButton>

          <MagneticButton
            as="a"
            href={PERSONAL_DATA.resumeUrl}
            target="_blank"
            download="Ritik_Kumar_Resume.pdf"
            className="px-6 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-white font-heading font-semibold text-sm border border-cyan-500/30 transition-all hover:scale-105 active:scale-95 shadow-lg"
          >
            <Download className="w-4 h-4 mr-2 text-cyan-400" />
            Download Resume
          </MagneticButton>

          <MagneticButton
            as="a"
            href="#contact"
            className="px-6 py-3.5 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-heading font-semibold text-sm border border-white/15 transition-all hover:scale-105 active:scale-95"
          >
            <Mail className="w-4 h-4 mr-2 text-pink-400" />
            Contact Me
          </MagneticButton>
        </motion.div>

        {/* Social Links Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex items-center gap-3 p-2 rounded-2xl glass-panel border border-white/10 shadow-lg"
        >
          <a
            href={PERSONAL_DATA.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl hover:bg-white/10 text-slate-300 hover:text-white transition-all hover:scale-110"
            title="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={PERSONAL_DATA.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl hover:bg-white/10 text-slate-300 hover:text-cyan-400 transition-all hover:scale-110"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={PERSONAL_DATA.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl hover:bg-white/10 text-slate-300 hover:text-amber-400 transition-all hover:scale-110"
            title="LeetCode (197 Solved)"
          >
            <Code2 className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${PERSONAL_DATA.email}`}
            className="p-2.5 rounded-xl hover:bg-white/10 text-slate-300 hover:text-pink-400 transition-all hover:scale-110"
            title="Send Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
