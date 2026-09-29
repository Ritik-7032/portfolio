import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code, Users, Trophy, Sparkles, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { PERSONAL_DATA } from '../../data/content';

const ICON_MAP: Record<string, React.ReactNode> = {
  Award: <Award className="w-6 h-6 text-amber-400" />,
  Code: <Code className="w-6 h-6 text-cyan-400" />,
  Users: <Users className="w-6 h-6 text-violet-400" />,
  Trophy: <Trophy className="w-6 h-6 text-rose-400" />
};

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        badge="HONORS & LEADERSHIP"
        title="Key Achievements & Organizational Impact"
        subtitle="Demonstrated commitment to technical mastery, competitive problem solving, and collegiate leadership."
        accentColor="rose"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PERSONAL_DATA.achievements.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
          >
            {/* Top row */}
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="p-3 rounded-2xl bg-slate-900 border border-white/10 shadow-lg group-hover:scale-110 transition-transform">
                  {ICON_MAP[item.iconName]}
                </div>
                {item.badgeText && (
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white/5 border border-white/10 text-slate-300">
                    {item.badgeText}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-rose-300 transition-colors">
                {item.title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {item.description}
              </p>
            </div>

            {/* Bottom metric tag */}
            {item.metric && (
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400 uppercase">Category: {item.category}</span>
                <span className="font-bold text-rose-400 bg-rose-950/40 px-3 py-1 rounded-lg border border-rose-500/20">
                  {item.metric}
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
