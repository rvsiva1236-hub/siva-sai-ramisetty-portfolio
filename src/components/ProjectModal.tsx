import { useEffect } from 'react';
import { Project } from '../types';
import { X, CheckCircle2, TrendingUp, Layers, Workflow, UserCheck, Globe, ExternalLink } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-950/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        id="project-modal-card"
        className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-neutral-200/90 flex items-start justify-between bg-neutral-50/50">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-neutral-200/70 text-neutral-800">
                {project.category}
              </span>
              {project.role && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-neutral-900 text-white">
                  <UserCheck className="w-3 h-3" />
                  Role: {project.role}
                </span>
              )}
            </div>
            <h3 id="project-modal-title" className="text-xl sm:text-2xl font-bold text-neutral-950">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-xs sm:text-sm text-neutral-600 mt-1">{project.subtitle}</p>
            )}
            {project.liveUrl && (
              <div className="mt-3 flex items-center gap-2">
                <a
                  id="project-modal-header-live-link"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-600 hover:text-white border border-blue-200/80 rounded-lg transition-colors cursor-pointer"
                >
                  <Globe className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate max-w-[280px] sm:max-w-md">Open Live Site: {project.liveUrl}</span>
                  <ExternalLink className="w-3 h-3 shrink-0" />
                </a>
              </div>
            )}
          </div>

          <button
            id="modal-close-btn"
            onClick={onClose}
            className="p-2 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2.5 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-neutral-700" />
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-neutral-100 text-neutral-900 text-xs font-medium rounded-md border border-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Overview */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
              Project Overview
            </h4>
            <p className="text-sm text-neutral-700 leading-relaxed bg-neutral-50 p-4 rounded-xl border border-neutral-200/70">
              {project.overview}
            </p>
          </div>

          {/* Quantifiable Project Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3 flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-neutral-700" />
                Measurable Results & Metrics
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 text-center"
                  >
                    <div className="text-lg sm:text-xl font-bold text-neutral-950">{m.value}</div>
                    <div className="text-[11px] font-medium text-neutral-600 mt-1 leading-snug">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Contributions / Highlights */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">
              {project.role ? `My Responsibilities & Contributions (${project.role})` : 'Key Contributions'}
            </h4>
            <div className="space-y-2">
              {project.keyContributions.map((contribution, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-sm text-neutral-800"
                >
                  <CheckCircle2 className="w-4 h-4 text-neutral-900 mt-0.5 shrink-0" />
                  <span className="leading-snug">{contribution}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features (specifically provided for OnboardAI) */}
          {project.features && project.features.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">
                Key Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-neutral-50 border border-neutral-200/80 text-xs font-medium text-neutral-800 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 shrink-0"></span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Project Workflow (How it works - specifically for OnboardAI) */}
          {project.workflow && project.workflow.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3 flex items-center gap-1.5">
                <Workflow className="w-3.5 h-3.5 text-neutral-700" />
                Project Workflow
              </h4>
              <ol className="relative border-l border-neutral-300 ml-3 space-y-4 py-1">
                {project.workflow.map((step, idx) => (
                  <li key={idx} className="ml-5">
                    <span className="absolute -left-2.5 flex items-center justify-center w-5 h-5 bg-white border border-neutral-400 rounded-full text-[11px] font-bold text-neutral-800">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-700 leading-snug">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Project Outcome */}
          {project.outcome && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
                Project Outcome
              </h4>
              <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed bg-blue-50/70 p-4 rounded-xl border border-blue-200/80">
                {project.outcome}
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-neutral-200/90 bg-neutral-50/70 flex items-center justify-between gap-3">
          <div>
            {project.liveUrl && (
              <a
                id="modal-footer-live-btn"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-2xs"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Visit Live Application</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-neutral-900 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-100 transition-colors cursor-pointer"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
