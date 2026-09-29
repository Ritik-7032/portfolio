import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Flame, Trophy, Plus, Minus, ShieldCheck, Zap } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Barbell3D } from '../3d/Barbell3D';
import { SoundWaveVisualizer } from '../ui/SoundWaveVisualizer';
import { TiltCard } from '../ui/TiltCard';
import { PERSONAL_DATA } from '../../data/content';

export const BeyondCodeSection: React.FC = () => {
  const [plates, setPlates] = useState(4); // 4 pairs representing max weight 150kg
  const [isLifting, setIsLifting] = useState(true);

  // Bar is 20kg
  // 1 pair (60kg), 2 pairs (100kg - Bench), 3 pairs (120kg - Squat), 4 pairs (150kg - Deadlift)
  const plateWeights = [20, 60, 100, 120, 150];
  const currentWeight = plateWeights[plates];

  return (
    <section id="passions" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        badge="BEYOND CODE"
        title="Fueling Mind, Body & Artistry"
        subtitle="The dual passions that cultivate relentless discipline under the iron and creative expression through vocal arts."
        accentColor="rose"
      />

      <div className="space-y-16">
        
        {/* ================= 1. WEIGHT LIFTING SECTION ================= */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-rose-500/30 relative overflow-hidden bg-gradient-to-br from-rose-950/20 via-slate-900/80 to-slate-950 shadow-2xl">
          <div className="absolute top-0 left-0 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Heading */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-red-600 to-amber-600 flex items-center justify-center text-white shadow-lg shadow-red-500/25">
                <Dumbbell className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-black text-white">
                  {PERSONAL_DATA.passions.lifting.title}
                </h3>
                <p className="text-xs font-mono text-rose-300">
                  {PERSONAL_DATA.passions.lifting.subtitle}
                </p>
              </div>
            </div>

            {/* Total Indicator Badge */}
            <div className="flex items-center gap-3">
              <div className="px-5 py-2.5 rounded-2xl bg-slate-950/90 border border-rose-500/40 text-right shadow-lg">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">Big 3 Powerlifting Total</span>
                <span className="text-2xl font-mono font-black text-rose-400">370 KG <span className="text-xs text-slate-400 font-normal">(815 LBS)</span></span>
              </div>
            </div>
          </div>

          {/* Personal Record Badges Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {PERSONAL_DATA.passions.lifting.records.map((rec, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-slate-950/80 border border-rose-500/25 text-center flex flex-col justify-between hover:border-rose-400/50 transition-colors"
              >
                <div>
                  <span className="text-[10px] font-mono text-rose-300 uppercase tracking-wider block mb-0.5">
                    {rec.badge}
                  </span>
                  <div className="text-sm font-heading font-bold text-white">
                    {rec.lift}
                  </div>
                </div>
                <div className="mt-2 pt-2 border-t border-white/5">
                  <span className="text-xl font-mono font-black text-rose-400 block">
                    {rec.weight}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    {rec.lbs}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: 3D Interactive Barbell Canvas */}
            <div className="lg:col-span-7 flex flex-col items-center">
              <div className="w-full bg-slate-950/90 rounded-3xl p-4 border border-white/10 shadow-inner relative">
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-white/10 text-xs font-mono text-rose-300">
                  <Flame className="w-3.5 h-3.5 text-rose-400" />
                  <span>Interactive 3D Barbell (Loaded: {currentWeight} KG / {Math.round(currentWeight * 2.20462)} LBS)</span>
                </div>

                <Barbell3D plateCount={plates} isLifting={isLifting} />

                {/* Plate Controls */}
                <div className="flex items-center justify-between gap-3 pt-3 border-t border-white/10 px-2 flex-wrap">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setPlates((prev) => Math.max(0, prev - 1))}
                      disabled={plates <= 0}
                      className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-white text-xs font-mono flex items-center gap-1.5 border border-white/10 cursor-pointer"
                    >
                      <Minus className="w-3.5 h-3.5" /> Unload
                    </button>
                    <button
                      onClick={() => setPlates((prev) => Math.min(4, prev + 1))}
                      disabled={plates >= 4}
                      className="px-3.5 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-500 disabled:opacity-30 text-white text-xs font-mono flex items-center gap-1.5 shadow-md shadow-rose-600/30 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" /> Load (Max 150kg)
                    </button>
                  </div>

                  <button
                    onClick={() => setIsLifting(!isLifting)}
                    className="px-3.5 py-1.5 rounded-xl bg-slate-900 text-slate-200 text-xs font-mono border border-white/10 hover:text-white cursor-pointer"
                  >
                    {isLifting ? 'Pause Lift Motion' : 'Start Lift Motion'}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Gym Photo & Philosophy */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <TiltCard maxTilt={8} glowColor="rgba(239, 68, 68, 0.25)">
                <div className="rounded-2xl overflow-hidden glass-panel border border-white/10 relative h-72 sm:h-80">
                  <img
                    src={PERSONAL_DATA.passions.lifting.photo}
                    alt="Ritik Kumar Weight Lifting in Gym"
                    className="w-full h-full object-cover object-center filter contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-rose-400 font-bold flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" />
                      Discipline in Action • 370kg Total
                    </span>
                    <p className="text-xs text-slate-200 font-light mt-0.5">
                      &ldquo;{PERSONAL_DATA.passions.lifting.quote}&rdquo;
                    </p>
                  </div>
                </div>
              </TiltCard>

              {/* Attributes */}
              <div className="grid grid-cols-3 gap-2">
                {PERSONAL_DATA.passions.lifting.attributes.map((attr, idx) => (
                  <div key={idx} className="p-3 rounded-xl glass-panel border border-white/5 text-center">
                    <span className="text-[10px] font-mono text-slate-400 block">{attr.label}</span>
                    <span className="text-xs font-bold text-rose-400 mt-0.5 block">{attr.value}</span>
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
