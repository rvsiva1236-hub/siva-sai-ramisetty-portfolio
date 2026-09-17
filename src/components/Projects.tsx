import { useState, useMemo } from 'react';
import { projects } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Code2, ShieldAlert, Zap, Layers } from 'lucide-react';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<'All' | 'AI / ML' | 'Frontend'>('All');

  const filteredProjects = useMemo(() => {
    if (filter === 'All') return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <section id="projects" className="py-16 sm:py-24 border-b border-neutral-200/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full uppercase tracking-wider mb-2">
              <Code2 className="w-3.5 h-3.5" />
              <span>Core Evaluated Work</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-neutral-950">
              Featured Engineering Projects
            </h2>
            <p className="mt-1 text-sm sm:text-base text-neutral-600 max-w-2xl">
              Production-focused implementations with quantifiable accuracy, automation metrics, and verified engineering responsibilities.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1.5 bg-neutral-100 p-1 rounded-xl self-start sm:self-auto border border-neutral-200 shadow-2xs">
            {(['All', 'AI / ML', 'Frontend'] as const).map((cat) => (
              <button
                key={cat}
                id={`project-tab-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  filter === cat
                    ? 'bg-white text-neutral-950 shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-950'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Recruiter Quick Metrics Highlight Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          <div className="p-3.5 rounded-xl bg-white border border-neutral-200 shadow-2xs">
            <div className="flex items-center gap-1.5 text-[11px] font-semibold text-neutral-500 uppercase tracking-wider mb-1">
              <Zap className="w-3.5 h-3.5 text-blue-700" />
              <span>Transaction Scale</span>
            </div>
            <div className="text-xl font-black text-neutral-950">1,000+</div>
            <div className="text-[11px] text-neutral-600 truncate">Financial Transactions</div>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-neutral-200 shadow-2xs">
            <div className="flex items-center gap-1.5 text-[11px] font-semibold text-neutral-500 uppercase tracking-wider mb-1">
              <Zap className="w-3.5 h-3.5 text-blue-700" />
              <span>Model Accuracy</span>
            </div>
            <div className="text-xl font-black text-neutral-950">88% – 90%+</div>
            <div className="text-[11px] text-neutral-600 truncate">Classification & Extraction</div>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-neutral-200 shadow-2xs">
            <div className="flex items-center gap-1.5 text-[11px] font-semibold text-neutral-500 uppercase tracking-wider mb-1">
              <Zap className="w-3.5 h-3.5 text-blue-700" />
              <span>Screening Speed</span>
            </div>
            <div className="text-xl font-black text-neutral-950">60% Faster</div>
            <div className="text-[11px] text-neutral-600 truncate">Resume Review Reduction</div>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-neutral-200 shadow-2xs">
            <div className="flex items-center gap-1.5 text-[11px] font-semibold text-neutral-500 uppercase tracking-wider mb-1">
              <Layers className="w-3.5 h-3.5 text-blue-700" />
              <span>UI Architecture</span>
            </div>
            <div className="text-xl font-black text-neutral-950">React + REST</div>
            <div className="text-[11px] text-neutral-600 truncate">Modular Frontend Systems</div>
          </div>
        </div>

        {/* Ownership Transparency Notice for Recruiters */}
        <div className="mb-8 p-4 rounded-xl bg-white border border-neutral-200 text-xs text-neutral-600 flex items-start gap-3 shadow-2xs">
          <ShieldAlert className="w-4 h-4 text-neutral-800 mt-0.5 shrink-0" />
          <p className="leading-relaxed">
            <strong className="text-neutral-900 font-semibold">Strict Recruiter Transparency:</strong> Every project details exact scope and verified ownership. For collaborative projects like <span className="font-semibold text-neutral-900">OnboardAI</span>, contributions are strictly identified under the <span className="font-semibold text-neutral-900 underline decoration-neutral-300">Frontend Developer</span> role without inflating backend or ML authorship.
          </p>
        </div>

        {/* Projects Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
