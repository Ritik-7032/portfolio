import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, Send, Github, Linkedin, Code2, Sparkles, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SectionHeading } from '../ui/SectionHeading';
import { PERSONAL_DATA } from '../../data/content';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_DATA.email);
    setCopied(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#06b6d4', '#8b5cf6', '#f43f5e']
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Hello Ritik,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${PERSONAL_DATA.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        badge="GET IN TOUCH"
        title="Let's Build Something Exceptional"
        subtitle="Open to Full Stack, SDE, Backend & Frontend opportunities. Have an opening or exciting project? Let's connect!"
        accentColor="cyan"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Direct info & Quick Connect */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col justify-between"
        >
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden mb-6">
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <h3 className="text-2xl font-heading font-bold text-white mb-3">
              Reach Out Directly
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
              I am actively interviewing and eager to contribute to innovative software engineering teams. Feel free to copy my direct email or connect through LinkedIn.
            </p>

            {/* Email Copy Card */}
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-white/10 flex items-center justify-between gap-3 mb-6">
              <div className="overflow-hidden">
                <span className="text-[10px] font-mono text-slate-400 block uppercase">Direct Inbox</span>
                <span className="text-sm font-mono font-medium text-cyan-300 truncate block">
                  {PERSONAL_DATA.email}
                </span>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 border border-cyan-500/30 transition-all flex items-center gap-1.5 text-xs font-mono shrink-0"
                title="Copy Email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {/* Location & Status */}
            <div className="space-y-2 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-500" />
                <span>{PERSONAL_DATA.contact.location}</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for Immediate Joining / Internships / Full-Time</span>
              </div>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="grid grid-cols-3 gap-3">
            <a
              href={PERSONAL_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-4 rounded-2xl border border-white/10 hover:border-white/30 text-center flex flex-col items-center gap-2 transition-all hover:scale-105"
            >
              <Github className="w-5 h-5 text-white" />
              <span className="text-xs font-mono text-slate-300">GitHub</span>
            </a>

            <a
              href={PERSONAL_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-4 rounded-2xl border border-white/10 hover:border-cyan-400/40 text-center flex flex-col items-center gap-2 transition-all hover:scale-105"
            >
              <Linkedin className="w-5 h-5 text-cyan-400" />
              <span className="text-xs font-mono text-cyan-300">LinkedIn</span>
            </a>

            <a
              href={PERSONAL_DATA.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-4 rounded-2xl border border-white/10 hover:border-amber-400/40 text-center flex flex-col items-center gap-2 transition-all hover:scale-105"
            >
              <Code2 className="w-5 h-5 text-amber-400" />
              <span className="text-xs font-mono text-amber-300">LeetCode</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Mailto Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <form
            onSubmit={handleSubmit}
            className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden"
          >
            <h4 className="text-xl font-heading font-bold text-white mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span>Send a Message</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Alex Mercer"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5">
                  YOUR EMAIL
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-xs font-mono text-slate-400 mb-1.5">
                SUBJECT
              </label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Software Engineering Role / Project Inquiry"
                className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            <div className="mb-6">
              <label className="block text-xs font-mono text-slate-400 mb-1.5">
                MESSAGE
              </label>
              <textarea
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Hi Ritik, we'd love to chat about an opportunity..."
                className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl font-heading font-bold text-sm bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-95 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Send Message via Email</span>
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};
