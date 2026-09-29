import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Code, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { TiltCard } from '../ui/TiltCard';
import { PERSONAL_DATA } from '../../data/content';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        badge="ABOUT RITIK"
        title="Engineering Scalable Systems with Precision & Rigor"
        subtitle="A snapshot of my technical journey, core philosophy, and quantitative milestones."
        accentColor="cyan"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: 3D Parallax Photo Frame */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex justify-center"
        >
          <TiltCard
            maxTilt={10}
            glowColor="rgba(6, 182, 212, 0.25)"
            className="w-full max-w-md"
          >
            <div className="relative rounded-3xl p-3 glass-panel border border-white/15 overflow-hidden shadow-2xl group">
              
              {/* Futuristic Cyber Frame Corners */}
              <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-cyan-400 z-20 pointer-events-none" />
              <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-cyan-400 z-20 pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-cyan-400 z-20 pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-cyan-400 z-20 pointer-events-none" />

              {/* Ritik's Portrait Image */}
              <div className="relative h-[440px] sm:h-[480px] w-full rounded-2xl overflow-hidden bg-slate-900">
                <img
                  src={PERSONAL_DATA.portraitImage}
                  alt="Ritik Kumar"
                  className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80" />

                {/* Floating HUD info badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl glass-panel border border-white/20 backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-heading font-bold text-white text-base">
                        {PERSONAL_DATA.name}
                      </h3>
                      <p className="text-xs font-mono text-cyan-400">
                        IIIT Ranchi • ECE 2027
                      </p>
                    </div>
                    <div className="px-2.5 py-1 rounded-lg bg-cyan-500/20 border border-cyan-500/40 text-[10px] font-mono text-cyan-300">
                      FULL STACK
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>

        {/* Right Column: Bio & Highlights */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          <div className="glass-panel p-8 rounded-3xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs mb-3">
              <Terminal className="w-4 h-4" />
              <span>whoami.ts</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4">
              Building at the intersection of performant backend architectures and modern interactive web experiences.
            </h3>

            <p className="text-slate-300 leading-relaxed text-base mb-4">
              {PERSONAL_DATA.about.intro}
            </p>

            <p className="text-slate-400 leading-relaxed text-sm">
              {PERSONAL_DATA.about.subIntro}
            </p>

            {/* Quick check bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-6 border-t border-white/10 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>MERN & TypeScript Production Stack</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
                <span>Asynchronous Queues & Redis Rate Limiters</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>250+ Algorithmic Problems in C++</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0" />
                <span>AWS EC2/S3 & Docker Containerization</span>
              </div>
            </div>
          </div>

          {/* Animated 4 Stat Counters */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {PERSONAL_DATA.about.stats.map((stat, i) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-panel p-4 rounded-2xl border border-white/10 text-center hover:border-cyan-500/40 transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-heading font-black text-gradient">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-xs font-semibold text-white mt-1">
                  {stat.label}
                </div>
                <div className="text-[10px] text-slate-400 font-mono mt-1 line-clamp-2">
                  {stat.subtext}
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};
