import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Send, CheckCircle2, Clock, Globe } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    service: 'AI Agents & RAG',
    budget: '$5k - $15k',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const servicesList = [
    'AI Agents & RAG',
    'Workflow Orchestration (n8n/Make)',
    'Custom API & Microservices',
    'Automated Reporting & Alerts',
    'Operational Audit',
  ];

  const budgetList = [
    '< $5,000',
    '$5,000 - $15,000',
    '$15,000 - $30,000',
    '$30,000+',
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-cyber-grid">
      {/* Ambient orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#8B1FA0]/10 dark:bg-[#8B1FA0]/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#EE34A4]/8 dark:bg-[#DA79E9]/8 rounded-full blur-[110px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl glass-panel p-8 sm:p-12 relative overflow-hidden">
          {/* Ambient light */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#8B1FA0]/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Direct Info */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B1FA0]/10 border border-[#8B1FA0]/20 text-[#8B1FA0] text-xs font-mono mb-4 font-semibold">
                  <Mail className="w-3.5 h-3.5" />
                  <span>START A PROJECT</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-color)] tracking-tight mb-4">
                  Let's Build Your Autonomous Stack
                </h2>
                <p className="text-[var(--muted-color)] text-sm sm:text-base leading-relaxed mb-8">
                  Whether you have an urgent manual bottleneck to eliminate or want to deploy autonomous AI agents across your organization, I'm ready to architect your solution.
                </p>

                {/* Direct info items */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-[var(--border-color)]">
                    <div className="w-10 h-10 rounded-xl bg-[#8B1FA0]/10 border border-[#8B1FA0]/20 text-[#8B1FA0] flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-[var(--subtle-color)]">Direct Email</div>
                      <a href={`mailto:${personalInfo.email}`} className="text-sm font-mono font-medium text-[var(--text-color)] hover:text-[#8B1FA0] transition-colors">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-[var(--border-color)]">
                    <div className="w-10 h-10 rounded-xl bg-[#8B1FA0]/10 border border-[#8B1FA0]/20 text-[#8B1FA0] flex items-center justify-center">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-[var(--subtle-color)]">SLA Response Guarantee</div>
                      <div className="text-sm font-semibold text-[#8B1FA0] font-mono">
                        Within 24 business hours
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-[var(--border-color)]">
                    <div className="w-10 h-10 rounded-xl bg-[#8B1FA0]/10 border border-[#8B1FA0]/20 text-[#8B1FA0] flex items-center justify-center">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-[var(--subtle-color)]">Work Mode</div>
                      <div className="text-sm font-semibold text-[var(--text-color)]">
                        {personalInfo.location} · Async & Real-time
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status pill */}
              <div className="p-4 rounded-2xl bg-[#8B1FA0]/10 border border-[#8B1FA0]/25 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#8B1FA0] animate-pulse"></span>
                <span className="text-xs font-mono text-[#8B1FA0] font-medium">
                  {personalInfo.status}
                </span>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-7 bg-[var(--surface-color)] border border-[var(--border-color)] rounded-2xl p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-12 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#8B1FA0]/15 text-[#8B1FA0] flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--text-color)] mb-2">
                    Inquiry Received!
                  </h3>
                  <p className="text-[var(--muted-color)] text-sm max-w-md mb-6 leading-relaxed">
                    Thank you, <span className="text-[var(--text-color)] font-semibold">{formState.name}</span>. Gracel has received your project briefing and will review your requirements within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({
                        name: '',
                        email: '',
                        company: '',
                        service: 'AI Agents & RAG',
                        budget: '$5,000 - $15,000',
                        message: '',
                      });
                    }}
                    className="text-xs font-mono text-[#8B1FA0] hover:underline font-semibold"
                  >
                    Send another inquiry →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[var(--muted-color)] mb-1.5 font-medium">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Sarah Connor"
                        className="w-full px-4 py-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-[var(--border-color)] text-[var(--text-color)] text-sm focus:border-[#8B1FA0] focus:outline-none focus:ring-1 focus:ring-[#8B1FA0] transition-all placeholder:text-[var(--subtle-color)]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-[var(--muted-color)] mb-1.5 font-medium">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="sarah@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-[var(--border-color)] text-[var(--text-color)] text-sm focus:border-[#8B1FA0] focus:outline-none focus:ring-1 focus:ring-[#8B1FA0] transition-all placeholder:text-[var(--subtle-color)]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[var(--muted-color)] mb-1.5 font-medium">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      placeholder="Acme Autonomous Inc"
                      className="w-full px-4 py-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-[var(--border-color)] text-[var(--text-color)] text-sm focus:border-[#8B1FA0] focus:outline-none focus:ring-1 focus:ring-[#8B1FA0] transition-all placeholder:text-[var(--subtle-color)]"
                    />
                  </div>

                  {/* Service selector pills */}
                  <div>
                    <label className="block text-xs font-mono text-[var(--muted-color)] mb-2 font-medium">
                      Primary Service Needed
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {servicesList.map((srv) => (
                        <button
                          type="button"
                          key={srv}
                          onClick={() => setFormState({ ...formState, service: srv })}
                          className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                            formState.service === srv
                              ? 'bg-[#8B1FA0] text-white font-semibold shadow-md shadow-[#8B1FA0]/25'
                              : 'bg-black/[0.03] dark:bg-white/5 text-[var(--muted-color)] hover:text-[var(--text-color)] border border-[var(--border-color)]'
                          }`}
                        >
                          {srv}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget selector pills */}
                  <div>
                    <label className="block text-xs font-mono text-[var(--muted-color)] mb-2 font-medium">
                      Estimated Project Budget
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {budgetList.map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setFormState({ ...formState, budget: b })}
                          className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                            formState.budget === b
                              ? 'bg-[#8B1FA0] text-white font-semibold shadow-md shadow-[#8B1FA0]/25'
                              : 'bg-black/[0.03] dark:bg-white/5 text-[var(--muted-color)] hover:text-[var(--text-color)] border border-[var(--border-color)]'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[var(--muted-color)] mb-1.5 font-medium">
                      Tell Me About Your Automation Goals *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Describe your current bottlenecks, current tools (e.g. HubSpot, Slack, Airtable), and what you want to automate..."
                      className="w-full px-4 py-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-[var(--border-color)] text-[var(--text-color)] text-sm focus:border-[#8B1FA0] focus:outline-none focus:ring-1 focus:ring-[#8B1FA0] transition-all placeholder:text-[var(--subtle-color)]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#8B1FA0] hover:bg-[#6E0880] rounded-xl primary-glow transition-all disabled:opacity-50"
                  >
                    {submitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        <span>Routing Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Dispatch Project Brief</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
