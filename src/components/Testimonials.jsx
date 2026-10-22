import React from 'react';
import { testimonials } from '../data/portfolioData';
import { Star, Shield } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden bg-cyber-grid border-t border-[var(--border-color)]">
      {/* Ambient orbs */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[#8B1FA0]/10 dark:bg-[#8B1FA0]/15 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[350px] h-[350px] bg-[#EE34A4]/8 dark:bg-[#DA79E9]/8 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B1FA0]/10 border border-[#8B1FA0]/20 text-[#8B1FA0] text-xs font-mono mb-4 font-semibold">
            <Shield className="w-3.5 h-3.5" />
            <span>CLIENT OUTCOMES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-color)] tracking-tight mb-4">
            What Founders & Ops Leaders Say
          </h2>
          <p className="text-[var(--muted-color)] text-sm sm:text-base leading-relaxed">
            Real feedback from leaders who scaled their operations and recovered thousands of manual hours.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl glass-panel p-6 sm:p-7 glass-panel-hover flex flex-col justify-between"
            >
              <div>
                {/* Stars in Realtime Colors Sunny Gold */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#EE34A4] text-[#EE34A4]" />
                  ))}
                </div>

                <p className="text-sm text-[var(--muted-color)] leading-relaxed mb-6 italic">
                  "{item.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-color)] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#8B1FA0]/15 border border-[#8B1FA0]/35 text-[#8B1FA0] font-bold font-mono text-xs flex items-center justify-center">
                  {item.avatar}
                </div>
                <div>
                  <div className="text-sm font-bold text-[var(--text-color)]">
                    {item.name}
                  </div>
                  <div className="text-xs text-[var(--subtle-color)]">
                    {item.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
