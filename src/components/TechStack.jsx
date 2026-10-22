import React, { useState } from 'react';
import { techStack } from '../data/portfolioData';
import { Cpu } from 'lucide-react';

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(techStack.map((tool) => tool.category)))];

  const filteredTools = techStack.filter((tool) => {
    if (selectedCategory === 'All') return true;
    return tool.category === selectedCategory;
  });

  return (
    <section id="stack" className="py-24 relative overflow-hidden bg-cyber-grid">
      {/* Ambient orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#8B1FA0]/8 dark:bg-[#8B1FA0]/12 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[280px] h-[280px] bg-[#EE34A4]/8 dark:bg-[#DA79E9]/8 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B1FA0]/10 border border-[#8B1FA0]/20 text-[#8B1FA0] text-xs font-mono mb-4 font-semibold">
            <Cpu className="w-3.5 h-3.5" />
            <span>TOOLING & ECOSYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-color)] tracking-tight mb-4">
            Technical Stack & Integrations
          </h2>
          <p className="text-[var(--muted-color)] text-sm sm:text-base leading-relaxed">
            Battle-tested technologies selected for maximum reliability, speed, and zero data leakage.
          </p>
        </div>

        {/* Marquee ticker */}
        <div className="relative overflow-hidden py-4 mb-14 border-y border-[var(--border-color)] bg-black/[0.03] dark:bg-black/40">
          <div className="flex animate-marquee gap-8 items-center text-xs font-mono text-[var(--text-color)]">
            {[...techStack, ...techStack, ...techStack].map((item, index) => (
              <div key={index} className="flex items-center gap-2 shrink-0 px-3 py-1.5 rounded-lg bg-black/[0.04] dark:bg-white/5 border border-[var(--border-color)]">
                <span className="w-2 h-2 rounded-full bg-[#8B1FA0]"></span>
                <span className="font-semibold text-[var(--text-color)]">{item.name}</span>
                <span className="text-[var(--subtle-color)] text-[11px]">({item.category})</span>
              </div>
            ))}
          </div>
        </div>

        {/* Categories Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-[#8B1FA0] text-white font-semibold shadow-md shadow-[#8B1FA0]/25'
                  : 'bg-black/[0.03] dark:bg-white/5 text-[var(--muted-color)] hover:text-[var(--text-color)] hover:bg-black/5 dark:hover:bg-white/10 border border-[var(--border-color)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredTools.map((tool, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#8B1FA0] bg-[#8B1FA0]/10 px-2 py-0.5 rounded-md font-semibold">
                    {tool.badge}
                  </span>
                  <span className="text-[10px] font-mono text-[var(--subtle-color)]">
                    {tool.proficiency}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[var(--text-color)] mb-1">
                  {tool.name}
                </h3>
                <p className="text-xs text-[var(--muted-color)]">
                  {tool.category}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[var(--border-color)] flex items-center justify-between text-[11px] font-mono text-[var(--subtle-color)]">
                <span>Production Ready</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B1FA0]"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
