import React, { useState } from 'react';
import { Calculator, ArrowRight, DollarSign, Clock, Users, Sparkles } from 'lucide-react';

export default function RoiCalculator() {
  const [teamSize, setTeamSize] = useState(6);
  const [hoursPerWeek, setHoursPerWeek] = useState(8);
  const [hourlyRate, setHourlyRate] = useState(45);

  // Calculations
  const weeklyHoursLost = teamSize * hoursPerWeek;
  const annualHoursLost = weeklyHoursLost * 50; // 50 working weeks
  const annualCostLost = annualHoursLost * hourlyRate;
  
  // Assuming 80% automated efficiency
  const annualHoursSaved = Math.round(annualHoursLost * 0.8);
  const annualDollarsSaved = Math.round(annualCostLost * 0.8);

  return (
    <section id="roi" className="py-24 relative overflow-hidden bg-cyber-grid border-t border-[var(--border-color)]">
      {/* Ambient orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[450px] h-[450px] bg-[#8B1FA0]/10 dark:bg-[#8B1FA0]/15 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[#EE34A4]/8 dark:bg-[#DA79E9]/8 rounded-full blur-[110px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl glass-panel p-8 sm:p-12 relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#8B1FA0]/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Inputs */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B1FA0]/10 border border-[#8B1FA0]/20 text-[#8B1FA0] text-xs font-mono mb-4 font-semibold">
                <Calculator className="w-3.5 h-3.5" />
                <span>INTERACTIVE ROI ESTIMATOR</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-color)] tracking-tight mb-4">
                Quantify Your Automation Upside
              </h2>
              <p className="text-[var(--muted-color)] text-sm sm:text-base leading-relaxed mb-8">
                Tired of your talent wasting cycles on copy-pasting data, manual triage, and status updates? Adjust the inputs below to see your potential recovery.
              </p>

              {/* Sliders */}
              <div className="space-y-6">
                {/* Team size slider */}
                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-[var(--text-color)] flex items-center gap-1.5 font-medium">
                      <Users className="w-3.5 h-3.5 text-[#8B1FA0]" />
                      Team Members on Repetitive Tasks
                    </span>
                    <span className="text-[#8B1FA0] font-bold text-sm">
                      {teamSize} people
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="40"
                    value={teamSize}
                    onChange={(e) => setTeamSize(Number(e.target.value))}
                    className="w-full h-2 bg-black/10 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#8B1FA0]"
                  />
                  <div className="flex justify-between text-[10px] text-[var(--subtle-color)] font-mono mt-1">
                    <span>1 person</span>
                    <span>40 people</span>
                  </div>
                </div>

                {/* Hours per week slider */}
                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-[var(--text-color)] flex items-center gap-1.5 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#8B1FA0]" />
                      Hours Spent / Person / Week
                    </span>
                    <span className="text-[#8B1FA0] font-bold text-sm">
                      {hoursPerWeek} hrs/week
                    </span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="30"
                    value={hoursPerWeek}
                    onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                    className="w-full h-2 bg-black/10 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#8B1FA0]"
                  />
                  <div className="flex justify-between text-[10px] text-[var(--subtle-color)] font-mono mt-1">
                    <span>2 hrs</span>
                    <span>30 hrs</span>
                  </div>
                </div>

                {/* Hourly rate slider */}
                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-[var(--text-color)] flex items-center gap-1.5 font-medium">
                      <DollarSign className="w-3.5 h-3.5 text-[#8B1FA0]" />
                      Blended Hourly Cost
                    </span>
                    <span className="text-[#8B1FA0] font-bold text-sm">
                      ${hourlyRate}/hr
                    </span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="180"
                    step="5"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    className="w-full h-2 bg-black/10 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#8B1FA0]"
                  />
                  <div className="flex justify-between text-[10px] text-[var(--subtle-color)] font-mono mt-1">
                    <span>$20/hr</span>
                    <span>$180/hr</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Output Box */}
            <div className="lg:col-span-6 bg-[#8B1FA0]/[0.05] dark:bg-[#8B1FA0]/10 border border-[#8B1FA0]/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#8B1FA0]/20">
                <span className="text-xs font-mono text-[#8B1FA0] font-bold flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#DA79E9]" />
                  ESTIMATED ANNUAL IMPACT
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#8B1FA0]/10 text-[#8B1FA0] font-semibold border border-[#8B1FA0]/20">
                  80% Efficiency Gain
                </span>
              </div>

              <div className="space-y-6 mb-8">
                <div>
                  <div className="text-xs font-mono text-[var(--muted-color)] mb-1">
                    Estimated Annual Dollars Reclaimed
                  </div>
                  <div className="text-4xl sm:text-5xl font-extrabold font-mono text-gradient-primary">
                    ${annualDollarsSaved.toLocaleString()}
                  </div>
                  <div className="text-xs text-[var(--muted-color)] mt-1">
                    Capital directly saved from eliminated manual busywork.
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[var(--border-color)]">
                  <div>
                    <div className="text-xs font-mono text-[var(--muted-color)] mb-1">
                      Annual Hours Saved
                    </div>
                    <div className="text-2xl font-bold font-mono text-[var(--text-color)]">
                      {annualHoursSaved.toLocaleString()} hrs
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[var(--muted-color)] mb-1">
                      Weekly Hours Saved
                    </div>
                    <div className="text-2xl font-bold font-mono text-[var(--text-color)]">
                      {Math.round(weeklyHoursLost * 0.8)} hrs / wk
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#8B1FA0] hover:bg-[#6E0880] rounded-xl primary-glow transition-all"
              >
                <span>Automate These Workflows With Gracel</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
