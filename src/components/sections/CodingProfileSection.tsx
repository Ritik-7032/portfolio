import React from 'react';
import { motion } from 'framer-motion';
import { Code2, ExternalLink, Flame, Trophy, CheckCircle, Terminal } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { PERSONAL_DATA } from '../../data/content';

export const CodingProfileSection: React.FC = () => {
  const { leetcodeProfile } = PERSONAL_DATA;

  return (
    <section id="coding" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <SectionHeading
        badge="PROBLEM SOLVING"
        title="Algorithmic Prowess & LeetCode Metrics"
        subtitle="Consistent problem-solving track record across competitive data structures and algorithms in C++."
        accentColor="amber"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: LeetCode Summary Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5"
        >
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-amber-500/30 relative overflow-hidden bg-gradient-to-br from-amber-950/20 via-slate-900/80 to-slate-950 shadow-2xl">
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Profile Header */}
            <div className="flex items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-lg">
                    @{leetcodeProfile.username}
                  </h3>
                  <span className="text-xs font-mono text-slate-400">
                    LeetCode Profile
                  </span>
                </div>
              </div>

              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                {leetcodeProfile.activeBadge}
              </span>
            </div>

            {/* Main Solved Stats */}
            <div className="p-6 rounded-2xl bg-slate-950/70 border border-white/5 text-center mb-6">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block mb-1">
                Problems Conquered
              </span>
              <div className="text-5xl font-heading font-black text-amber-400 mb-1">
                {leetcodeProfile.totalSolved}
              </div>
              <span className="text-xs font-mono text-slate-300">
                (Part of {leetcodeProfile.overallDsaSolved} total C++ DSA problems)
              </span>
            </div>

            {/* Quick Metrics */}
            <div className="space-y-3 mb-6 text-xs text-slate-300">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5">
                <span className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-amber-400" />
                  <span>LeetCode 50 Days Badge</span>
                </span>
                <span className="font-mono text-amber-400 font-bold">2025</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5">
                <span className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span>Primary Language</span>
                </span>
                <span className="font-mono text-cyan-400 font-bold">C++</span>
              </div>
            </div>

            {/* Link to LeetCode */}
            <a
              href={leetcodeProfile.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl font-medium text-xs bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02] active:scale-95"
            >
              <span>View Verified LeetCode Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Topic Breakdown Bars */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10"
        >
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
            <h4 className="font-heading font-bold text-white text-lg">
              Topic Mastery Distribution
            </h4>
            <span className="text-xs font-mono text-slate-400">
              C++ Algorithm Solutions
            </span>
          </div>

          <div className="space-y-5">
            {leetcodeProfile.topicBreakdown.map((item, idx) => {
              const percentage = Math.min(100, Math.round((item.count / 90) * 100));
              return (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-300 font-medium">{item.topic}</span>
                    <span className="text-slate-400">{item.count} Solved</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: idx * 0.1, ease: 'easeOut' }}
                      className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
