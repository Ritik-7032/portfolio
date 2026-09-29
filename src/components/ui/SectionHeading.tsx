import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  badge: string;
  title: string;
  subtitle?: string;
  accentColor?: 'cyan' | 'violet' | 'rose' | 'amber';
  align?: 'left' | 'center' | 'right';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  accentColor = 'cyan',
  align = 'center',
}) => {
  const badgeStyles = {
    cyan: 'border-cyan-500/30 text-cyan-400 bg-cyan-950/40 shadow-[0_0_15px_rgba(6,182,212,0.15)]',
    violet: 'border-violet-500/30 text-violet-400 bg-violet-950/40 shadow-[0_0_15px_rgba(139,92,246,0.15)]',
    rose: 'border-rose-500/30 text-rose-400 bg-rose-950/40 shadow-[0_0_15px_rgba(244,63,94,0.15)]',
    amber: 'border-amber-500/30 text-amber-400 bg-amber-950/40 shadow-[0_0_15px_rgba(245,158,11,0.15)]',
  };

  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }[align];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col mb-14 md:mb-20 ${alignClass}`}
    >
      <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs uppercase tracking-widest font-mono font-medium backdrop-blur-md mb-4 ${badgeStyles[accentColor]}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-current animate-ping" />
        {badge}
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-white max-w-3xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl font-light leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
