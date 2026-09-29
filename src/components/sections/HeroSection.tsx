import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Sparkles, Github, Linkedin, Code2, Mail, ExternalLink } from 'lucide-react';
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
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1600);
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
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-28 pb-16 overflow-hidden">
      {/* 3D Canvas Background */}
      <HeroCanvas mousePos={mousePos} />

      {/* Center Content */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center mt-6">
        
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-emerald-500/30 bg-emerald-950/20 backdrop-blur-xl mb-6 shadow-[0_0_20px_rgba(16,185,129,0.15)]"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono font-medium text-emerald-300">
            {PERSONAL_DATA.status}
          </span>
        </motion.div>

        {/* Hero Main Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-black tracking-tight text-white mb-4"
        >
          Hi, I&apos;m{' '}
          <span className="text-gradient hover:drop-shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all">
            {PERSONAL_DATA.name}
          </span>
        </motion.h1>

        {/* Dynamic Typewriter Role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="h-10 sm:h-12 flex items-center justify-center mb-6"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-semibold text-slate-300">
            <span className="text-cyan-400">{displayText}</span>
            <span className="animate-pulse text-violet-400 font-normal">|</span>
          </h2>
        </motion.div>

        {/* Subtitle statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base sm:text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed font-light"
        >
          Undergrad at <span className="text-white font-medium">IIIT Ranchi</span> building high-performance full-stack systems, distributed queues, and 3D web applications with <span className="text-cyan-400 font-mono">React</span>, <span className="text-violet-400 font-mono">TypeScript</span>, and <span className="text-rose-400 font-mono">C++</span>.
        </motion.p>

        {/* CTA Buttons Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <MagneticButton
            as="a"
            href="#projects"
            className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-heading font-bold text-sm shadow-xl shadow-cyan-500/25 border border-cyan-400/30 transition-all hover:scale-105 active:scale-95"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Explore Projects
          </MagneticButton>

          <MagneticButton
            as="a"
            href={PERSONAL_DATA.resumeUrl}
            target="_blank"
            download="Ritik_Kumar_Resume.pdf"
            className="px-6 py-3.5 rounded-2xl glass-panel hover:bg-white/10 text-white font-heading font-semibold text-sm border border-white/15 transition-all hover:scale-105 active:scale-95 shadow-lg"
          >
            <Download className="w-4 h-4 mr-2 text-cyan-400" />
            Download Resume
          </MagneticButton>

          <MagneticButton
            as="a"
            href="#contact"
            className="px-6 py-3.5 rounded-2xl glass-panel hover:bg-white/10 text-slate-300 hover:text-white font-heading font-semibold text-sm border border-white/10 transition-all hover:scale-105 active:scale-95"
          >
            <Mail className="w-4 h-4 mr-2 text-pink-400" />
            Contact Me
          </MagneticButton>
        </motion.div>

        {/* Social Links Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex items-center gap-3 p-2 rounded-2xl glass-panel border border-white/10 shadow-lg"
        >
          <a
            href={PERSONAL_DATA.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl hover:bg-white/10 text-slate-400 hover:text-white transition-all hover:scale-110"
            title="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={PERSONAL_DATA.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl hover:bg-white/10 text-slate-400 hover:text-cyan-400 transition-all hover:scale-110"
            title="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={PERSONAL_DATA.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl hover:bg-white/10 text-slate-400 hover:text-amber-400 transition-all hover:scale-110"
            title="LeetCode"
          >
            <Code2 className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${PERSONAL_DATA.email}`}
            className="p-2.5 rounded-xl hover:bg-white/10 text-slate-400 hover:text-pink-400 transition-all hover:scale-110"
            title="Send Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
          SCROLL TO EXPLORE
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 bg-cyan-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
