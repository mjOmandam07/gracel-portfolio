import React from 'react';
import { processSteps } from '../data/portfolioData';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Process() {
  return (
    <section id="process" className="py-24 relative overflow-hidden bg-cyber-grid">
      {/* Ambient orbs */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-[#8B1FA0]/10 dark:bg-[#8B1FA0]/15 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-[#EE34A4]/8 dark:bg-[#DA79E9]/8 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B1FA0]/10 border border-[#8B1FA0]/20 text-[#8B1FA0] text-xs font-mono mb-4 font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-color)] tracking-tight mb-4">
            Engineering Process & Delivery
          </h2>
          <p className="text-[var(--muted-color)] text-sm sm:text-base leading-relaxed">
            I don't just patch together brittle webhooks. I design resilient, documented, self-healing automation architectures built to scale.
          </p>
        </div>

        {/* 4-Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="rounded-3xl glass-panel p-6 sm:p-7 glass-panel-hover flex flex-col justify-between relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black font-mono text-[#8B1FA0]">
                    {step.step}
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-black/[0.03] dark:bg-white/5 text-[var(--subtle-color)]">
                    {step.duration}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[var(--text-color)] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-[var(--muted-color)] leading-relaxed mb-6 font-normal">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-color)]">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--subtle-color)] mb-1">
                  Target Deliverable:
                </div>
                <div className="text-xs font-semibold text-[var(--text-color)] flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8B1FA0] shrink-0 mt-0.5" />
                  <span>{step.deliverable}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
