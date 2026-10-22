import React from 'react';
import { services } from '../data/portfolioData';
import { Bot, GitBranch, Database, Code2, BarChart3, Compass, CheckCircle2, ArrowRight } from 'lucide-react';

const iconMap = {
  Bot: Bot,
  GitBranch: GitBranch,
  Database: Database,
  Code2: Code2,
  BarChart3: BarChart3,
  Compass: Compass,
};

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-cyber-grid">
      {/* Ambient orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#8B1FA0]/10 dark:bg-[#8B1FA0]/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[#EE34A4]/8 dark:bg-[#DA79E9]/8 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B1FA0]/10 border border-[#8B1FA0]/20 text-[#8B1FA0] text-xs font-mono mb-4 font-semibold">
            <span>CORE CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-color)] tracking-tight mb-4">
            High-Impact Automation Services
          </h2>
          <p className="text-[var(--muted-color)] text-sm sm:text-base leading-relaxed">
            From single-task webhook automations to autonomous multi-agent swarms, I deliver production-ready systems tailored to your tech stack.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Bot;
            return (
              <div
                key={service.id}
                className="rounded-3xl glass-panel p-6 sm:p-7 glass-panel-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#8B1FA0]/10 border border-[#8B1FA0]/25 text-[#8B1FA0] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    {service.highlight && (
                      <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-[#DA79E9]/20 text-[#8B1FA0] dark:text-[#DA79E9] border border-[#DA79E9]/30">
                        {service.highlight}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-[var(--text-color)] mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[var(--muted-color)] leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-mono font-semibold text-[var(--subtle-color)] uppercase tracking-wider mb-2">
                      Key Deliverables
                    </div>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[var(--muted-color)]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8B1FA0] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--border-color)]">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8B1FA0] hover:text-[#6E0880] group font-mono"
                  >
                    <span>Request this service</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
