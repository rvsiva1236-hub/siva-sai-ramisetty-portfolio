import { Project } from '../types';
import { ArrowUpRight, TrendingUp, CheckCircle2, UserCheck, Sparkles, Globe, ExternalLink } from 'lucide-react';
import { TiltCard } from './TiltCard';

interface ProjectCardProps {
  key?: string;
  project: Project;
  onSelect: (project: Project) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <TiltCard
      maxTilt={7}
      scale={1.02}
      className="h-full"
    >
      <div
        id={`project-card-${project.id}`}
        onClick={() => onSelect(project)}
        className="group relative h-full bg-white border border-neutral-200/90 hover:border-blue-300/80 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between preserve-3d cursor-pointer"
      >
        {/* Subtle accent glow gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-indigo-50/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

        <div className="relative z-10">
          {/* Card Header: Category & Role Badge */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3 translate-z-20">
            <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50/90 border border-blue-100 px-2.5 py-0.5 rounded-full">
              <Sparkles className="w-3 h-3 text-blue-600" />
              {project.category}
            </span>
            {project.role ? (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-neutral-900 bg-amber-50 border border-amber-200/80 px-2.5 py-0.5 rounded-full">
                <UserCheck className="w-3 h-3 text-amber-700" />
                Role: {project.role}
              </span>
            ) : (
              <span className="text-[11px] font-medium text-neutral-500">
                AI / Software Project
              </span>
            )}
          </div>

          {/* Project Title */}
          <h3 className="text-xl font-bold text-neutral-950 tracking-tight group-hover:text-blue-900 transition-colors translate-z-20">
            {project.title}
          </h3>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5 mt-3 mb-4 translate-z-12">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-neutral-50 border border-neutral-200 text-neutral-700 group-hover:border-neutral-300 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Short Overview */}
          <p className="text-xs sm:text-sm text-neutral-600 line-clamp-3 mb-4 leading-relaxed">
            {project.overview}
          </p>

          {/* Quantified Metrics Highlight Bar (where provided) */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="mb-5 p-3 rounded-xl bg-neutral-50/90 border border-neutral-200/80 group-hover:border-blue-100 group-hover:bg-blue-50/30 transition-all translate-z-30">
              <div className="flex items-center gap-1 text-[11px] font-bold text-neutral-800 mb-2">
                <TrendingUp className="w-3.5 h-3.5 text-blue-700" />
                <span>Verified Measurable Results</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {project.metrics.slice(0, 2).map((m) => (
                  <div key={m.label} className="bg-white p-2.5 rounded-lg border border-neutral-200/70 shadow-2xs">
                    <div className="text-base font-extrabold text-neutral-950">{m.value}</div>
                    <div className="text-[10px] text-neutral-500 truncate font-medium">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Contributions Preview */}
          <div className="space-y-1.5 mb-6 translate-z-12">
            <div className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider mb-1">
              Key Responsibilities
            </div>
            {project.keyContributions.slice(0, 3).map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-neutral-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-700 mt-0.5 shrink-0" />
                <span className="line-clamp-2 leading-tight">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Footer */}
        <div className="relative z-20 pt-4 border-t border-neutral-100 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            {project.liveUrl ? (
              <a
                id={`live-site-btn-${project.id}`}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-600 hover:text-white border border-blue-200/90 hover:border-blue-600 rounded-lg transition-all shadow-2xs hover:shadow-sm cursor-pointer active:scale-95"
                title={`Open live site for ${project.title}`}
              >
                <Globe className="w-3.5 h-3.5 shrink-0" />
                <span>Live Site</span>
                <ExternalLink className="w-3 h-3 shrink-0" />
              </a>
            ) : (
              <span className="text-xs text-neutral-500 font-medium">
                {project.features ? `${project.features.length} Features Documented` : 'Verified Metrics'}
              </span>
            )}
          </div>
          <button
            id={`view-details-btn-${project.id}`}
            onClick={(e) => {
              e.stopPropagation();
              onSelect(project);
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-neutral-900 bg-neutral-100 hover:bg-neutral-200 group-hover:bg-blue-600 group-hover:text-white rounded-lg transition-all shadow-2xs group-hover:shadow-sm cursor-pointer hover:scale-105 active:scale-95"
          >
            <span>Details</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </TiltCard>
  );
}
