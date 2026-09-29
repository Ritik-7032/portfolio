import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Music, Flame, Sparkles, Plus, Minus } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Barbell3D } from '../3d/Barbell3D';
import { SoundWaveVisualizer } from '../ui/SoundWaveVisualizer';
import { TiltCard } from '../ui/TiltCard';
import { PERSONAL_DATA } from '../../data/content';

export const BeyondCodeSection: React.FC = () => {
  const [plates, setPlates] = useState(3); // 1 to 4 pairs
  const [isLifting, setIsLifting] = useState(true);

  // Bar is 20kg, each pair adds weight
  // 1 pair (2x20kg) = 60kg
  // 2 pairs (+2x20kg) = 100kg
  // 3 pairs (+2x15kg) = 130kg
  // 4 pairs (+2x10kg) = 150kg
  const plateWeights = [20, 60, 100, 130, 150];
  const currentWeight = plateWeights[plates];

  return (
    <section id="passions" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        badge="BEYOND CODE"
        title="Fueling Mind, Body & Artistry"
        subtitle="The dual passions that cultivate relentless discipline in the gym and creative expression through vocal arts."
        accentColor="rose"
      />

      <div className="space-y-16">
        
        {/* ================= 1. WEIGHT LIFTING SECTION ================= */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-80 h-80 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Heading */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-red-600 to-amber-600 flex items-center justify-center text-white shadow-lg shadow-red-500/20">
                <Dumbbell className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-black text-white">
                  {PERSONAL_DATA.passions.lifting.title}
                </h3>
                <p className="text-xs font-mono text-rose-400">
                  {PERSONAL_DATA.passions.lifting.subtitle}
                </p>
              </div>
            </div>

            {/* Weight Indicator Badge */}
            <div className="flex items-center gap-3">
              <div className="px-4 py-2 rounded-2xl bg-slate-900/90 border border-rose-500/30 text-right">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">Total Loaded Weight</span>
                <span className="text-xl font-mono font-black text-rose-400">{currentWeight} KG <span className="text-xs text-slate-400">({Math.round(currentWeight * 2.20462)} LBS)</span></span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: 3D Interactive Barbell Canvas */}
            <div className="lg:col-span-7 flex flex-col items-center">
              <div className="w-full bg-slate-950/70 rounded-3xl p-4 border border-white/5 shadow-inner relative">
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-white/10 text-xs font-mono text-rose-400">
                  <Flame className="w-3.5 h-3.5" />
                  <span>3D Olympic Barbell (Drag & Load Plates)</span>
                </div>

                <Barbell3D plateCount={plates} isLifting={isLifting} />

                {/* Plate Controls */}
                <div className="flex items-center justify-between gap-3 pt-3 border-t border-white/5 px-2 flex-wrap">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setPlates((prev) => Math.max(0, prev - 1))}
                      disabled={plates <= 0}
                      className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 disabled:opacity-30 text-white text-xs font-mono flex items-center gap-1 border border-white/10"
                    >
                      <Minus className="w-3.5 h-3.5" /> Unload Plate
                    </button>
                    <button
                      onClick={() => setPlates((prev) => Math.min(4, prev + 1))}
                      disabled={plates >= 4}
                      className="px-3 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-500 disabled:opacity-30 text-white text-xs font-mono flex items-center gap-1 shadow-md shadow-rose-600/30"
                    >
                      <Plus className="w-3.5 h-3.5" /> Load Plate
                    </button>
                  </div>

                  <button
                    onClick={() => setIsLifting(!isLifting)}
                    className="px-3 py-1.5 rounded-xl bg-slate-800 text-slate-200 text-xs font-mono border border-white/10 hover:text-white"
                  >
                    {isLifting ? 'Pause Motion' : 'Start Lifting Motion'}
                  </button>
                </div>
              </div>

              <p className="mt-4 text-xs font-mono text-slate-500 text-center">
                ℹ️ {PERSONAL_DATA.passions.lifting.personalRecordPlaceholder}
              </p>
            </div>

            {/* Right Column: Gym Photo & Philosophy */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <TiltCard maxTilt={8} glowColor="rgba(239, 68, 68, 0.2)">
                <div className="rounded-2xl overflow-hidden glass-panel border border-white/10 relative h-72 sm:h-80">
                  <img
                    src={PERSONAL_DATA.passions.lifting.photo}
                    alt="Ritik Kumar Weight Lifting"
                    className="w-full h-full object-cover object-center filter contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-rose-400 font-semibold">
                      Discipline in Action
                    </span>
                    <p className="text-xs text-slate-200 font-light mt-0.5">
                      Iron cultivates the resilience needed to debug complex distributed bugs under pressure.
                    </p>
                  </div>
                </div>
              </TiltCard>

              {/* Attributes */}
              <div className="grid grid-cols-3 gap-2">
                {PERSONAL_DATA.passions.lifting.attributes.map((attr, idx) => (
                  <div key={idx} className="p-3 rounded-xl glass-panel border border-white/5 text-center">
                    <span className="text-[10px] font-mono text-slate-400 block">{attr.label}</span>
                    <span className="text-xs font-bold text-white mt-0.5 block">{attr.value}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ================= 2. SINGING & VOCAL HARMONICS ================= */}
        <SoundWaveVisualizer />

      </div>
    </section>
  );
};
