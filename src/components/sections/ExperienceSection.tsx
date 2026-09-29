import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { PERSONAL_DATA } from '../../data/content';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <SectionHeading
        badge="WORK EXPERIENCE"
        title="Professional Industry Experience"
        subtitle="Hands-on software development in distributed engineering environments."
        accentColor="amber"
      />

      <div className="relative border-l-2 border-amber-500/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
        {PERSONAL_DATA.experience.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative group"
          >
            {/* Glowing Timeline Marker Node */}
            <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-amber-400 flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.6)] group-hover:scale-125 transition-transform">
              <div className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            </div>

            {/* Experience Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-amber-500/40 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white group-hover:text-amber-300 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-amber-400 font-semibold text-sm flex items-center gap-1.5 mt-0.5">
                    <span>{exp.company}</span>
                    {exp.companySubtext && (
                      <span className="text-slate-400 font-normal">({exp.companySubtext})</span>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Bullet Points */}
              <div className="space-y-3 mt-5">
                {exp.points.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Technology Tags */}
              <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-amber-950/30 text-amber-300 border border-amber-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
