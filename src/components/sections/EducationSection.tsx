import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Star, Calendar, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { PERSONAL_DATA } from '../../data/content';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <SectionHeading
        badge="ACADEMIC FOUNDATION"
        title="Education & Milestone Journey"
        subtitle="Chronological academic trajectory from foundational schooling to engineering undergraduate at IIIT Ranchi."
        accentColor="cyan"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PERSONAL_DATA.education.map((item, index) => {
          const isCurrent = item.badge?.includes('Current');
          const isJee = item.id === 'jee-main';

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`glass-panel p-6 sm:p-8 rounded-3xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                isJee
                  ? 'border-amber-500/40 bg-gradient-to-br from-amber-950/20 via-slate-900/60 to-slate-950/80 shadow-[0_0_30px_rgba(245,158,11,0.1)]'
                  : isCurrent
                  ? 'border-cyan-500/40 bg-gradient-to-br from-cyan-950/20 via-slate-900/60 to-slate-950/80 shadow-[0_0_30px_rgba(6,182,212,0.1)]'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <div className={`p-2 rounded-xl ${
                      isJee ? 'bg-amber-500/20 text-amber-400' : 'bg-cyan-500/20 text-cyan-400'
                    }`}>
                      {isJee ? <Award className="w-5 h-5" /> : <GraduationCap className="w-5 h-5" />}
                    </div>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                  </div>

                  {item.badge && (
                    <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold ${
                      isJee
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                        : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Institution Name */}
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-2">
                  {item.institution}
                </h3>

                {/* Degree / Program */}
                <p className="text-sm font-medium text-slate-300 mb-2">
                  {item.degree}
                </p>

                {item.field && (
                  <p className="text-xs font-mono text-slate-400 mb-4">
                    {item.field}
                  </p>
                )}

                {item.highlight && (
                  <p className="text-xs text-slate-400 leading-relaxed italic mb-6">
                    &ldquo;{item.highlight}&rdquo;
                  </p>
                )}
              </div>

              {/* Score / CGPA Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400 uppercase">
                  {item.scoreLabel}
                </span>
                <span className={`text-lg font-heading font-black ${
                  isJee ? 'text-amber-400' : 'text-cyan-400'
                }`}>
                  {item.score}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
