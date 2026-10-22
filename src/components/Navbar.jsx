import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Tech Stack', href: '#stack' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/5 dark:bg-black/10 backdrop-blur-xl border-b border-[var(--border-color)] border-opacity-40 py-3 shadow-sm shadow-black/5 dark:shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#8B1FA0]/15 border border-[#8B1FA0]/30 text-[#8B1FA0] font-mono font-bold text-sm tracking-wider group-hover:border-[#8B1FA0] group-hover:shadow-[0_0_15px_rgba(232,49,27,0.35)] transition-all">
              GU
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#8B1FA0] rounded-full animate-ping"></span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#8B1FA0] rounded-full"></span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-wide text-[var(--text-color)] group-hover:text-[#8B1FA0] transition-colors">
                Gracel Urquia
              </span>
              <span className="text-[11px] font-mono text-[#8B1FA0]/90 font-medium">
                AI Automation Specialist
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.04] dark:bg-white/[0.03] border border-[var(--border-color)] rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-[var(--muted-color)] hover:text-[#8B1FA0] px-3 py-1.5 rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/[0.05]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-2 text-xs font-mono text-[#8B1FA0] bg-[#8B1FA0]/10 border border-[#8B1FA0]/20 px-3 py-1 rounded-full font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B1FA0] animate-pulse"></span>
              <span>Available for Hire</span>
            </div>

            {/* Light / Dark Mode Toggle */}
            <ThemeToggle />

            <a
              href="#contact"
              className="relative inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#8B1FA0] hover:bg-[#6E0880] rounded-xl shadow-sm hover:shadow-[0_0_20px_rgba(232,49,27,0.4)] transition-all transform hover:-translate-y-0.5"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu and toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/5 border border-[var(--border-color)] text-[var(--text-color)] hover:text-[#8B1FA0]"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[var(--surface-solid)] border-b border-[var(--border-color)] px-4 pt-3 pb-6 space-y-2 mt-2 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-[var(--muted-color)] hover:text-[#8B1FA0] px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-[var(--border-color)] flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono text-[#8B1FA0]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B1FA0] animate-pulse"></span>
              <span>Available for Hire</span>
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#8B1FA0] rounded-lg"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
