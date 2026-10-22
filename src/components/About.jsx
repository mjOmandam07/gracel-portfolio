import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { MapPin, ArrowUpRight, FileText } from 'lucide-react';

const skills = ['n8n', 'Zapier', 'Make.com', 'ChatGPT', 'Claude', 'Airtable', 'REST APIs', 'Supabase'];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-cyber-grid border-t border-[var(--border-color)]">
      {/* Ambient orbs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[450px] h-[450px] bg-[#8B1FA0]/10 dark:bg-[#8B1FA0]/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-[#EE34A4]/8 dark:bg-[#DA79E9]/8 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — Photo + floating stat cards */}
          <div className="relative flex justify-center lg:justify-start">
            {/* Floating card — top left */}
            <div className="absolute -top-4 -left-4 z-10 glass-panel px-5 py-3 rounded-2xl shadow-lg">
              <p className="text-2xl font-extrabold text-[#8B1FA0]">9</p>
              <p className="text-xs text-[var(--muted-color)] font-medium mt-0.5">Projects</p>
            </div>

            {/* Photo */}
            <div className="relative w-72 sm:w-80 lg:w-[340px]">
              {/* Glow ring behind image */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#8B1FA0]/30 to-[#EE34A4]/20 blur-2xl scale-105 pointer-events-none"></div>
              <div className="relative rounded-3xl overflow-hidden border border-[var(--card-border)] shadow-2xl">
                <img
                  src="/images/graceljoynobg.png"
                  alt="Gracel Urquia"
                  className="w-full h-full object-cover object-top"
                  style={{ aspectRatio: '3/4' }}
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[var(--bg-color)]/40 to-transparent pointer-events-none"></div>
              </div>
            </div>

            {/* Floating card — bottom right */}
            <div className="absolute -bottom-4 -right-4 lg:right-8 z-10 glass-panel px-5 py-3 rounded-2xl shadow-lg">
              <p className="text-2xl font-extrabold text-[#8B1FA0]">24/7</p>
              <p className="text-xs text-[var(--muted-color)] font-medium mt-0.5">Automated Systems</p>
            </div>
          </div>

          {/* RIGHT — Text content */}
          <div className="flex flex-col gap-6">
            {/* Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B1FA0]/10 border border-[#8B1FA0]/20 text-[#8B1FA0] text-xs font-mono font-semibold w-fit">
              ABOUT ME
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-color)] leading-[1.1]">
              AI Automation Specialist turning{' '}
              <span className="text-gradient-primary">manual work into autonomous systems</span>
            </h2>

            {/* Bio */}
            <p className="text-base text-[var(--muted-color)] leading-relaxed">
              I'm{' '}
              <span className="font-semibold text-[#8B1FA0]">Gracel Urquia</span>
              {', '}
              {personalInfo.bio}
            </p>

            {/* Location */}
            <div className="flex items-center gap-1.5 text-sm text-[var(--subtle-color)]">
              <MapPin className="w-4 h-4 text-[#8B1FA0]" />
              <span>{personalInfo.location}</span>
            </div>

            {/* Skill tags */}
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs rounded-full border border-[var(--card-border)] text-[var(--muted-color)] bg-[#8B1FA0]/5 hover:border-[#8B1FA0]/40 hover:text-[#8B1FA0] transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#8B1FA0] hover:bg-[#6E0880] rounded-xl shadow-sm hover:shadow-[0_0_20px_rgba(139,31,160,0.4)] transition-all transform hover:-translate-y-0.5"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[var(--text-color)] border border-[var(--card-border)] hover:border-[#8B1FA0]/50 hover:text-[#8B1FA0] rounded-xl transition-all transform hover:-translate-y-0.5 glass-panel"
              >
                <FileText className="w-4 h-4" />
                <span>Get in Touch</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

