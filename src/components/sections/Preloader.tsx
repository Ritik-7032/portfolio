import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_DATA } from '../../data/content';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 600);
          }, 300);
          return 100;
        }
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030712] text-white select-none"
        >
          {/* Subtle glowing radial background */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />

          {/* RK Animated Monogram */}
          <div className="relative mb-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-slate-900/90 border border-white/10 flex items-center justify-center shadow-2xl relative overflow-hidden"
            >
              {/* Shimmer Border */}
              <div 
                className="absolute inset-0 bg-gradient-to-tr from-cyan-500 via-violet-500 to-rose-500 opacity-30 animate-spin-slow"
                style={{ filter: 'blur(10px)' }}
              />

              <span className="font-heading font-black text-4xl sm:text-5xl text-gradient relative z-10 tracking-wider">
                {PERSONAL_DATA.initials}
              </span>
            </motion.div>
          </div>

          {/* Name & Title */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl font-heading font-bold text-slate-200 tracking-wide mb-1"
          >
            {PERSONAL_DATA.name}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xs font-mono text-cyan-400 mb-8 tracking-widest uppercase"
          >
            INITIALIZING 3D EXPERIENCE
          </motion.p>

          {/* Progress Bar & Percentage */}
          <div className="w-56 sm:w-64 flex flex-col items-center gap-2">
            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-white/5">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-rose-500 rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>
            <div className="flex justify-between w-full text-[11px] font-mono text-slate-400">
              <span>LOADING ASSETS</span>
              <span className="text-cyan-400 font-bold">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
