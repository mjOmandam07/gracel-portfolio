import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowRight, CheckCircle, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-cyber-grid">
      {/* Background ambient glowing orbs with Realtime Colors red & gold */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#8B1FA0]/10 dark:bg-[#8B1FA0]/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-[#EE34A4]/10 dark:bg-[#DA79E9]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B1FA0]/10 border border-[#8B1FA0]/25 text-[#8B1FA0] text-xs font-mono mb-8 backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8B1FA0] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8B1FA0]"></span>
            </span>
            <span className="tracking-wide uppercase font-semibold">
              AI Automation & Agent Architecture
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--text-color)] mb-6 leading-[1.1]">
            Turn Manual Operations Into{' '}
            <span className="text-gradient-primary">Autonomous Systems</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-[var(--muted-color)] max-w-2xl mb-10 leading-relaxed font-normal">
            Hi, I'm <span className="text-[var(--text-color)] font-semibold">{personalInfo.name}</span>. I architect resilient AI agents, end-to-end automation pipelines, and custom API bridges using <span className="text-[#8B1FA0] font-semibold">n8n, Make,</span> and <span className="text-[#8B1FA0] font-semibold"> Zapier</span> to save hundreds of operational hours.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white bg-[#8B1FA0] hover:bg-[#6E0880] rounded-xl primary-glow transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#8B1FA0]/20"
            >
              <Zap className="w-4 h-4 fill-current" />
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-[var(--text-color)] hover:text-[#8B1FA0] bg-white/5 dark:bg-white/[0.04] hover:bg-white/10 border border-[var(--border-color)] hover:border-[#8B1FA0]/40 rounded-xl transition-all"
            >
              <span>Book Automation Audit</span>
            </a>
          </div>

          {/* Stats Grid */}
          <div className="w-full max-w-xl grid grid-cols-2 gap-4 sm:gap-6 text-left">
            {personalInfo.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl glass-panel glass-panel-hover"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-[var(--text-color)] tracking-tight font-mono mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-[var(--muted-color)] font-medium mb-1">
                  {stat.label}
                </div>
                <div className="text-[11px] font-mono text-[#8B1FA0] flex items-center gap-1 font-semibold">
                  <CheckCircle className="w-3 h-3 text-[#8B1FA0]" />
                  {stat.change}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
