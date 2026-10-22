import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[var(--border-color)] py-12 relative text-[var(--muted-color)] bg-[var(--surface-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between pb-8 mb-8 border-b border-[var(--border-color)] gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#8B1FA0]/15 border border-[#8B1FA0]/35 text-[#8B1FA0] font-mono font-bold text-xs flex items-center justify-center">
              GU
            </div>
            <div>
              <div className="font-bold text-[var(--text-color)] text-sm">
                Gracel Urquia
              </div>
              <div className="text-[11px] font-mono text-[#8B1FA0] font-medium">
                AI Automation Specialist
              </div>
            </div>
          </div>

          {/* System status pill */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B1FA0]/10 border border-[#8B1FA0]/20 text-[#8B1FA0] text-xs font-mono font-medium">
            <span className="w-2 h-2 rounded-full bg-[#8B1FA0] animate-pulse"></span>
            <span>All Automation Nodes Operational (99.8% SLA)</span>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-mono text-[var(--muted-color)] hover:text-[#8B1FA0] p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--subtle-color)] gap-4">
          <div>
            © {new Date().getFullYear()} Gracel Urquia. All rights reserved.
          </div>
          <div className="flex items-center gap-6 font-mono text-[11px]">
            <a href="#services" className="hover:text-[#8B1FA0] transition-colors">Services</a>
            <a href="#projects" className="hover:text-[#8B1FA0] transition-colors">Case Studies</a>
            <a href="#roi" className="hover:text-[#8B1FA0] transition-colors">ROI Calculator</a>
            <a href="#contact" className="hover:text-[#8B1FA0] transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
