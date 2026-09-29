import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Copy, Check, Send, Github, Linkedin, Code2, Sparkles, MapPin, Loader2, CheckCircle2, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SectionHeading } from '../ui/SectionHeading';
import { PERSONAL_DATA } from '../../data/content';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
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

  const getEncodedData = () => {
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name || 'Portfolio Visitor'}`);
    const body = encodeURIComponent(
      `Hello Ritik,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    return { subject, body };
  };

  const handleOpenGmail = () => {
    const { subject, body } = getEncodedData();
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_DATA.email}&su=${subject}&body=${body}`,
      '_blank'
    );
  };

  const handleOpenOutlook = () => {
    const { subject, body } = getEncodedData();
    window.open(
      `https://outlook.live.com/mail/0/deeplink/compose?to=${PERSONAL_DATA.email}&subject=${subject}&body=${body}`,
      '_blank'
    );
  };

  const handleDefaultMailto = () => {
    const { subject, body } = getEncodedData();
    window.location.href = `mailto:${PERSONAL_DATA.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${PERSONAL_DATA.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `⚡ Portfolio Message: ${formData.subject || 'New Inquiry'} (from ${formData.name})`,
          message: formData.message,
          _template: 'table'
        })
      });

      const data = await response.json();

      if (response.ok && (data.success === 'true' || data.success === true)) {
        setStatus('success');
        confetti({
          particleCount: 70,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#06b6d4', '#8b5cf6', '#10b981']
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // If formsubmit needs initial activation or returns fallback, provide instant web launcher
        setStatus('error');
        setErrorMessage(data.message || 'Direct dispatch failed. Use the 1-Click Gmail or Outlook button below!');
      }
    } catch (err: any) {
      console.error('Contact submit error:', err);
      setStatus('error');
      setErrorMessage('Network error. Click "Open in Gmail Web" below to send instantly!');
    }
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
              I am actively interviewing and eager to contribute to innovative software engineering teams. Feel free to send a message via the form, copy my direct email, or launch Gmail directly.
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
                className="p-2.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 border border-cyan-500/30 transition-all flex items-center gap-1.5 text-xs font-mono shrink-0 cursor-pointer"
                title="Copy Email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {/* Quick Webmail Launchers */}
            <div className="mb-6">
              <span className="text-[11px] font-mono text-slate-400 uppercase block mb-2.5">
                Instant Web Compose
              </span>
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={handleOpenGmail}
                  className="px-3.5 py-2.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-300 text-xs font-mono flex items-center justify-center gap-2 transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5 text-red-400" />
                  <span>Open in Gmail</span>
                  <ExternalLink className="w-3 h-3 text-red-400/70" />
                </button>
                <button
                  type="button"
                  onClick={handleOpenOutlook}
                  className="px-3.5 py-2.5 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-mono flex items-center justify-center gap-2 transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                  <span>Open in Outlook</span>
                  <ExternalLink className="w-3 h-3 text-blue-400/70" />
                </button>
              </div>
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

        {/* Right Column: Interactive Contact Form */}
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
            <h4 className="text-xl font-heading font-bold text-white mb-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>Send a Message</span>
              </div>
              <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20">
                Direct Dispatch
              </span>
            </h4>

            {/* Success Banner */}
            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-bold text-emerald-300">Message Delivered! 🎉</h5>
                    <p className="text-xs text-emerald-200/80 mt-1">
                      Thank you for reaching out! Your message was sent directly to Ritik's inbox. I'll get back to you shortly.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Error Banner */}
            <AnimatePresence>
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex flex-col gap-2.5"
                >
                  <div className="flex items-center gap-2 text-amber-300 text-sm font-bold">
                    <span>⚠️ Notice</span>
                  </div>
                  <p className="text-xs text-amber-200/90 leading-relaxed">
                    {errorMessage || 'Direct send encountered an issue. You can launch Gmail or Outlook directly:'}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <button
                      type="button"
                      onClick={handleOpenGmail}
                      className="px-3 py-1.5 rounded-lg bg-red-500/20 hover:bg-red-500/30 border border-red-500/40 text-red-300 text-xs font-mono flex items-center gap-1.5 cursor-pointer"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Send via Gmail Web</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                    <button
                      type="button"
                      onClick={handleDefaultMailto}
                      className="px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 text-cyan-300 text-xs font-mono flex items-center gap-1.5 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Use Default Mail App</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

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

            <div className="space-y-3">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 rounded-xl font-heading font-bold text-sm bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 disabled:opacity-50 text-white shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-95 cursor-pointer"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message Now</span>
                  </>
                )}
              </button>

              {/* Or Compose with Webmail */}
              <div className="flex items-center justify-center gap-3 text-xs text-slate-400 font-mono pt-1">
                <span>Or compose directly in:</span>
                <button
                  type="button"
                  onClick={handleOpenGmail}
                  className="text-red-400 hover:text-red-300 underline underline-offset-4 flex items-center gap-1 cursor-pointer"
                >
                  Gmail <ExternalLink className="w-3 h-3" />
                </button>
                <span>•</span>
                <button
                  type="button"
                  onClick={handleOpenOutlook}
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-4 flex items-center gap-1 cursor-pointer"
                >
                  Outlook <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          </form>
        </motion.div>

      </div>
    </section>
  );
};
