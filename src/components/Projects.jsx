import React, { useState, useEffect } from 'react';
import projectsData from '../data/projects.json';
import {
  Layers,
  Sparkles,
  ExternalLink,
  X,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  AlertCircle,
  Target,
  ArrowRight,
  Eye,
  Code,
  Cpu,
  Workflow,
  Image as ImageIcon,
  Briefcase,
  Zap,
  Award
} from 'lucide-react';

const categoryStyles = {
  Zapier: 'bg-amber-500/10 text-amber-600 dark:text-amber-300 border-amber-500/30',
  Make: 'bg-purple-500/10 text-purple-600 dark:text-purple-300 border-purple-500/30',
  n8n: 'bg-rose-500/10 text-rose-600 dark:text-rose-300 border-rose-500/30',
  Flutter: 'bg-sky-500/10 text-sky-600 dark:text-sky-300 border-sky-500/30',
  'Next.js': 'bg-stone-500/10 text-stone-700 dark:text-stone-300 border-stone-500/30',
};

const formatToolTag = (tool) => {
  return tool.split('(')[0].trim().replace(/\bintegration\b/i, '').trim();
};

const PAGE_SIZE = 6;

export default function Projects() {
  const projects = projectsData.projects || [];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  // Derive unique categories from projects.json
  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === 'All') return true;
    return project.category === selectedCategory;
  });

  const totalPages = Math.ceil(filteredProjects.length / PAGE_SIZE) || 1;
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + PAGE_SIZE);

  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      const section = document.getElementById('projects');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Modal open & close handlers
  const openModal = (project) => {
    setActiveModalProject(project);
    setModalImageIndex(0);
  };

  const closeModal = () => {
    setActiveModalProject(null);
    setModalImageIndex(0);
  };

  // Lock body scroll when modal is active & listen for Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };

    if (activeModalProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModalProject]);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-cyber-grid border-t border-[var(--border-color)]">
      {/* Ambient orbs */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#8B1FA0]/10 dark:bg-[#8B1FA0]/15 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-[#EE34A4]/8 dark:bg-[#DA79E9]/8 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B1FA0]/10 border border-[#8B1FA0]/20 text-[#8B1FA0] text-xs font-mono mb-4 font-semibold">
              <Layers className="w-3.5 h-3.5" />
              <span>PRODUCTION PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-color)] tracking-tight mb-3">
              Case Studies & Automated Pipelines
            </h2>
            <p className="text-[var(--muted-color)] text-sm sm:text-base max-w-2xl leading-relaxed">
              Explore end-to-end automation workflows, AI orchestrations, and full-stack solutions built to eliminate manual toil and operate reliably.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-black/[0.04] dark:bg-white/5 p-1.5 rounded-2xl border border-[var(--border-color)] self-start md:self-auto">
            {categories.map((cat) => {
              const count = cat === 'All' ? projects.length : projects.filter((p) => p.category === cat).length;
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategorySelect(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-[#8B1FA0] text-white font-semibold shadow-md shadow-[#8B1FA0]/25'
                      : 'text-[var(--muted-color)] hover:text-[var(--text-color)] hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      isSelected ? 'bg-black/20 text-white' : 'bg-black/10 dark:bg-white/10 text-[var(--subtle-color)]'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid: 3 columns, 2 rows (6 cards max per page) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedProjects.map((project) => {
            const coverImage = project.images?.[0];
            const badgeClass = categoryStyles[project.category] || 'bg-[#8B1FA0]/10 text-[#8B1FA0] border-[#8B1FA0]/30';
            const displayTools = (project.tools_and_stack || []).slice(0, 3).map(formatToolTag);

            return (
              <div
                key={project.id}
                onClick={() => openModal(project)}
                className="group rounded-2xl glass-panel overflow-hidden flex flex-col justify-between glass-panel-hover cursor-pointer transition-all duration-300"
              >
                <div>
                  {/* Image Cover */}
                  <div className="relative h-36 sm:h-40 w-full overflow-hidden bg-slate-950/60 border-b border-[var(--border-color)]">
                    {coverImage ? (
                      <img
                        src={encodeURI(coverImage)}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-[#8B1FA0]/10 text-[#8B1FA0] font-mono text-xl font-bold">
                        {project.title.charAt(0)}
                      </div>
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-color)] via-transparent to-black/30 pointer-events-none" />

                    {/* Category Badge */}
                    <div className="absolute top-2.5 left-2.5 z-10">
                      <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border backdrop-blur-md ${badgeClass}`}>
                        {project.category}
                      </span>
                    </div>

                    {/* Photos Count Badge (if > 1) */}
                    {project.images && project.images.length > 1 && (
                      <div className="absolute bottom-2.5 right-2.5 z-10 flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/75 backdrop-blur-md text-[10px] font-mono text-slate-200 border border-white/10">
                        <ImageIcon className="w-3 h-3 text-[#DA79E9]" />
                        <span>{project.images.length}</span>
                      </div>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="p-4 sm:p-5">
                    <h3 className="text-base font-bold text-[var(--text-color)] mb-1.5 leading-snug group-hover:text-[#8B1FA0] transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[var(--muted-color)] line-clamp-2 leading-relaxed mb-3 font-normal">
                      {project.short_description || project.description}
                    </p>

                    {/* Key Outcome Highlight */}
                    {project.outcome && project.outcome.length > 0 && (
                      <div className="flex items-center gap-2 text-[11px] text-[var(--muted-color)] bg-black/[0.03] dark:bg-black/30 px-2.5 py-1.5 rounded-lg border border-[var(--border-color)] font-mono">
                        <CheckCircle2 className="w-3 h-3 text-[#8B1FA0] shrink-0" />
                        <span className="truncate">
                          <span className="text-[var(--text-color)] font-semibold">{project.outcome[0].name}: </span>
                          <span>{project.outcome[0].description}</span>
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer: Tools & CTA */}
                <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {displayTools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-black/[0.03] dark:bg-white/5 border border-[var(--border-color)] text-[var(--muted-color)]"
                      >
                        {tool}
                      </span>
                    ))}
                    {(project.tools_and_stack || []).length > 3 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-black/[0.03] dark:bg-white/5 text-[var(--subtle-color)]">
                        +{(project.tools_and_stack.length - 3)}
                      </span>
                    )}
                  </div>

                  <div className="pt-2.5 border-t border-[var(--border-color)] flex items-center justify-between text-xs font-semibold text-[#8B1FA0] group-hover:text-[#6E0880]">
                    <span className="font-mono text-[11px]">Explore Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[var(--border-color)]">
            <div className="text-xs font-mono text-[var(--muted-color)]">
              Showing{' '}
              <span className="text-[#8B1FA0] font-semibold">
                {startIndex + 1}–{Math.min(startIndex + PAGE_SIZE, filteredProjects.length)}
              </span>{' '}
              of <span className="text-[var(--text-color)] font-semibold">{filteredProjects.length}</span> projects
            </div>

            <div className="flex items-center gap-2">
              {/* Prev Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous Page"
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                  currentPage === 1
                    ? 'bg-black/[0.02] dark:bg-white/5 text-[var(--subtle-color)] border border-[var(--border-color)] cursor-not-allowed opacity-50'
                    : 'bg-black/[0.03] dark:bg-white/5 text-[var(--muted-color)] hover:text-[var(--text-color)] hover:bg-black/5 dark:hover:bg-white/10 border border-[var(--border-color)]'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Prev</span>
              </button>

              {/* Page Numbers */}
              <div className="flex items-center gap-1.5">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-9 h-9 rounded-xl text-xs font-mono font-semibold transition-all ${
                      currentPage === pageNum
                        ? 'bg-[#8B1FA0] text-white shadow-md shadow-[#8B1FA0]/25 scale-105'
                        : 'bg-black/[0.03] dark:bg-white/5 text-[var(--muted-color)] hover:text-[var(--text-color)] hover:bg-black/5 dark:hover:bg-white/10 border border-[var(--border-color)]'
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next Page"
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                  currentPage === totalPages
                    ? 'bg-black/[0.02] dark:bg-white/5 text-[var(--subtle-color)] border border-[var(--border-color)] cursor-not-allowed opacity-50'
                    : 'bg-black/[0.03] dark:bg-white/5 text-[var(--muted-color)] hover:text-[var(--text-color)] hover:bg-black/5 dark:hover:bg-white/10 border border-[var(--border-color)]'
                }`}
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Case Study Detail Modal */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[var(--surface-solid)] border border-[#8B1FA0]/30 rounded-3xl shadow-2xl p-6 sm:p-8 text-[var(--text-color)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-5 border-b border-[var(--border-color)] gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span
                    className={`text-xs font-mono font-semibold px-3 py-1 rounded-full border ${
                      categoryStyles[activeModalProject.category] || 'bg-[#8B1FA0]/10 text-[#8B1FA0] border-[#8B1FA0]/30'
                    }`}
                  >
                    {activeModalProject.category}
                  </span>
                  {activeModalProject.role && (
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-black/[0.04] dark:bg-white/5 text-[var(--muted-color)] border border-[var(--border-color)]">
                      {activeModalProject.role.split(',')[0]}
                    </span>
                  )}
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-color)] tracking-tight leading-snug">
                  {activeModalProject.title}
                </h2>
              </div>

              <button
                onClick={closeModal}
                aria-label="Close modal"
                className="p-2 rounded-xl bg-black/[0.04] dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-[var(--muted-color)] hover:text-[var(--text-color)] transition-colors shrink-0 border border-[var(--border-color)]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-8 pt-6">
              {/* Image Preview / Gallery */}
              {activeModalProject.images && activeModalProject.images.length > 0 && (
                <div className="space-y-3">
                  <div className="relative rounded-2xl overflow-hidden border border-[var(--border-color)] bg-slate-950/80 shadow-xl max-h-[440px] flex items-center justify-center">
                    <img
                      src={encodeURI(activeModalProject.images[modalImageIndex] || activeModalProject.images[0])}
                      alt={activeModalProject.title}
                      className="w-full h-auto max-h-[440px] object-contain"
                    />
                  </div>

                  {/* Thumbnail Switcher if multiple images */}
                  {activeModalProject.images.length > 1 && (
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 [scrollbar-width:none]">
                      {activeModalProject.images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setModalImageIndex(idx)}
                          className={`relative shrink-0 w-20 h-14 rounded-lg overflow-hidden border transition-all ${
                            modalImageIndex === idx
                              ? 'border-[#8B1FA0] ring-2 ring-[#8B1FA0]/40 scale-105'
                              : 'border-[var(--border-color)] opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img
                            src={encodeURI(img)}
                            alt={`Thumbnail ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Description & Client Context */}
              <div className="space-y-4">
                <p className="text-sm sm:text-base text-[var(--text-color)] leading-relaxed font-normal">
                  {activeModalProject.description}
                </p>

                {activeModalProject.client_context && (
                  <div className="p-4 rounded-2xl bg-black/[0.03] dark:bg-white/[0.03] border border-[var(--border-color)] flex items-start gap-3">
                    <Briefcase className="w-4 h-4 text-[#8B1FA0] shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm text-[var(--muted-color)]">
                      <span className="font-semibold text-[var(--text-color)]">Client Context: </span>
                      {activeModalProject.client_context}
                    </div>
                  </div>
                )}
              </div>

              {/* Problem Breakdown */}
              {activeModalProject.problem && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-rose-500 dark:text-rose-400">
                    <AlertCircle className="w-4 h-4" />
                    <span>The Challenge & Bottlenecks</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--muted-color)] leading-relaxed">
                    {activeModalProject.problem.summary}
                  </p>
                  {activeModalProject.problem.issues && activeModalProject.problem.issues.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {activeModalProject.problem.issues.map((issue, idx) => (
                        <div key={idx} className="p-3.5 rounded-xl bg-black/[0.03] dark:bg-black/40 border border-[var(--border-color)]">
                          <div className="text-xs font-semibold text-[var(--text-color)] mb-1">
                            {issue.name}
                          </div>
                          <div className="text-xs text-[var(--muted-color)] leading-relaxed">
                            {issue.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Objectives */}
              {activeModalProject.objectives && activeModalProject.objectives.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#8B1FA0]">
                    <Target className="w-4 h-4" />
                    <span>Project Objectives</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeModalProject.objectives.map((obj, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[var(--muted-color)] p-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8B1FA0] shrink-0 mt-0.5" />
                        <span>{obj}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Approach & Steps */}
              {activeModalProject.approach && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#8B1FA0]">
                    <Workflow className="w-4 h-4" />
                    <span>Architecture & Execution Sequence</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--muted-color)] leading-relaxed">
                    {activeModalProject.approach.summary}
                  </p>

                  {activeModalProject.approach.steps && activeModalProject.approach.steps.length > 0 && (
                    <div className="space-y-2.5 pt-1">
                      {activeModalProject.approach.steps.map((s, idx) => (
                        <div key={idx} className="p-3.5 rounded-xl bg-black/[0.03] dark:bg-black/40 border border-[var(--border-color)] flex items-start gap-3">
                          <div className="w-6 h-6 rounded-lg bg-[#8B1FA0]/10 border border-[#8B1FA0]/20 text-[#8B1FA0] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                            {s.step || idx + 1}
                          </div>
                          <div>
                            <div className="text-xs font-bold text-[var(--text-color)] mb-0.5">
                              {s.name}
                            </div>
                            <div className="text-xs text-[var(--muted-color)] leading-relaxed">
                              {s.description}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Sub-workflows (if present) */}
              {activeModalProject.subworkflows && activeModalProject.subworkflows.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#DA79E9]">
                    <Cpu className="w-4 h-4" />
                    <span>Modular Sub-Workflows</span>
                  </div>
                  <div className="space-y-4">
                    {activeModalProject.subworkflows.map((sw, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-black/[0.04] dark:bg-black/50 border border-[#DA79E9]/30 space-y-3">
                        <div className="text-sm font-bold text-[var(--text-color)] flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#DA79E9]"></span>
                          <span>{sw.name}</span>
                        </div>
                        <p className="text-xs text-[var(--muted-color)] leading-relaxed">
                          {sw.description}
                        </p>
                        {sw.images && sw.images.length > 0 && (
                          <div className="rounded-xl overflow-hidden border border-[var(--border-color)] bg-black/70 max-h-[300px]">
                            <img
                              src={encodeURI(sw.images[0])}
                              alt={sw.name}
                              className="w-full h-auto object-contain"
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Design Decisions */}
              {activeModalProject.key_design_decisions && activeModalProject.key_design_decisions.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[var(--text-color)]">
                    <Code className="w-4 h-4 text-[#8B1FA0]" />
                    <span>Key Engineering Decisions</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeModalProject.key_design_decisions.map((dec, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-[var(--border-color)]">
                        <div className="text-xs font-bold text-[#8B1FA0] mb-1">
                          {dec.name}
                        </div>
                        <div className="text-xs text-[var(--muted-color)] leading-relaxed">
                          {dec.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Outcomes & Measurable Impact */}
              {activeModalProject.outcome && activeModalProject.outcome.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#8B1FA0]">
                    <Award className="w-4 h-4" />
                    <span>Outcomes & Quantifiable Results</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeModalProject.outcome.map((res, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-black/[0.03] dark:bg-black/40 border border-[#8B1FA0]/20">
                        <div className="text-xs font-bold text-[var(--text-color)] mb-1 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#8B1FA0] shrink-0" />
                          <span>{res.name}</span>
                        </div>
                        <div className="text-xs text-[var(--muted-color)] leading-relaxed pl-5">
                          {res.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Business Value Highlight Box */}
              {activeModalProject.business_value && (
                <div className="p-5 rounded-2xl border border-[#8B1FA0]/30 bg-[#8B1FA0]/5 primary-glow-sm relative overflow-hidden">
                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#8B1FA0] mb-2 flex items-center gap-1.5">
                    <Zap className="w-4 h-4 fill-[#8B1FA0]" />
                    <span>Business Value & ROI</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-color)] leading-relaxed italic">
                    "{activeModalProject.business_value}"
                  </p>
                </div>
              )}

              {/* Tools & Stack Details */}
              {activeModalProject.tools_and_stack && activeModalProject.tools_and_stack.length > 0 && (
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--subtle-color)]">
                    Complete Tooling & Infrastructure
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.tools_and_stack.map((tool, idx) => (
                      <div
                        key={idx}
                        className="text-xs font-mono px-3 py-1.5 rounded-xl bg-black/[0.03] dark:bg-white/5 border border-[var(--border-color)] text-[var(--muted-color)]"
                      >
                        {tool}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
