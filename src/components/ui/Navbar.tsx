import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, Sparkles, Download } from 'lucide-react';
import { PERSONAL_DATA } from '../../data/content';

interface NavbarProps {
  activeSection: string;
  onResumeOpen: () => void;
}

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Passions', href: '#passions' },
  { name: 'DSA & Stats', href: '#coding' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onResumeOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledRatio = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolledRatio);
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 pt-4 pb-2 transition-all duration-300 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo / Brand */}
        <motion.a
          href="#hero"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="pointer-events-auto group relative flex items-center gap-2.5 px-4 py-2 rounded-2xl glass-panel border border-white/10 hover:border-cyan-500/40 transition-all shadow-lg"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-rose-500 flex items-center justify-center font-heading font-black text-white text-sm shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            {PERSONAL_DATA.initials}
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-sm text-white tracking-wide group-hover:text-cyan-400 transition-colors">
              {PERSONAL_DATA.name}
            </span>
            <span className="text-[10px] font-mono text-slate-400 hidden sm:inline">
              Full Stack Dev
            </span>
          </div>
        </motion.a>

        {/* Desktop Navigation Glass Pill */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="pointer-events-auto hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full glass-panel border border-white/10 shadow-2xl backdrop-blur-xl"
        >
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-violet-500/30 border border-cyan-400/40 rounded-full shadow-[0_0_12px_rgba(6,182,212,0.3)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </motion.nav>

        {/* Right Action buttons */}
        <div className="pointer-events-auto flex items-center gap-2 sm:gap-3">
          {/* Interactive Resume View Button */}
          <motion.button
            onClick={onResumeOpen}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-heading font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </motion.button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl glass-panel border border-white/10 text-slate-300 hover:text-white cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Scroll progress bar */}
      <div className="max-w-7xl mx-auto mt-2 px-1">
        <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 via-violet-500 to-rose-500 transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="pointer-events-auto lg:hidden absolute top-20 left-4 right-4 p-5 rounded-3xl glass-panel border border-white/15 shadow-2xl backdrop-blur-2xl flex flex-col gap-2"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-cyan-400 text-xs font-mono">→</span>
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 mt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onResumeOpen();
                }}
                className="w-full py-3 rounded-xl text-center text-sm font-semibold bg-cyan-500 hover:bg-cyan-400 text-white flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>View Full Resume</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
