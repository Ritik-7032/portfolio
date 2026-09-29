import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Layout, Server, Database, Cloud, Wrench, Cpu, Sparkles, Search 
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { SkillSphere } from '../3d/SkillSphere';
import { PERSONAL_DATA } from '../../data/content';

const ICON_MAP: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-cyan-400" />,
  Layout: <Layout className="w-5 h-5 text-blue-400" />,
  Server: <Server className="w-5 h-5 text-emerald-400" />,
  Database: <Database className="w-5 h-5 text-purple-400" />,
  Cloud: <Cloud className="w-5 h-5 text-amber-400" />,
  Wrench: <Wrench className="w-5 h-5 text-rose-400" />,
  Cpu: <Cpu className="w-5 h-5 text-indigo-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-pink-400" />
};

export const SkillsSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...PERSONAL_DATA.skillsCategories.map(c => c.category)];

  const filteredCategories = PERSONAL_DATA.skillsCategories.map(cat => {
    const isCategoryMatch = activeCategory === 'All' || activeCategory === cat.category;
    if (!isCategoryMatch) return null;

    const filteredSkills = cat.skills.filter(s => 
      s.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filteredSkills.length === 0 && searchTerm) return null;

    return {
      ...cat,
      skills: searchTerm ? filteredSkills : cat.skills
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        badge="TECHNICAL ARSENAL"
        title="Comprehensive Tech Stack & Tooling"
        subtitle="Explore my interactive 3D skill constellation or inspect by technical domain."
        accentColor="violet"
      />

      {/* 3D Tech Constellation Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-panel rounded-3xl p-4 sm:p-6 mb-16 border border-white/10 relative overflow-hidden backdrop-blur-2xl"
      >
        <div className="absolute top-4 left-6 z-10 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-white/10 text-xs font-mono text-cyan-300">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          Interactive 3D Tech Orbit (Drag to rotate)
        </div>
        
        <SkillSphere />
      </motion.div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
        
        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/25 border border-violet-400/30'
                  : 'glass-panel text-slate-400 hover:text-white hover:bg-white/5 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search skill (e.g. C++, Redis)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-900/80 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
          />
        </div>
      </div>

      {/* Categorized Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredCategories.map((cat, idx) => {
          if (!cat) return null;
          return (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-violet-500/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/5">
                  <div className="p-2 rounded-xl bg-slate-900 border border-white/10 group-hover:scale-110 transition-transform">
                    {ICON_MAP[cat.iconName] || <Code2 className="w-5 h-5 text-cyan-400" />}
                  </div>
                  <h3 className="font-heading font-bold text-white text-base">
                    {cat.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                        skill.highlight
                          ? 'bg-cyan-950/50 text-cyan-300 border border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.15)] group-hover:border-cyan-400/50'
                          : 'bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
