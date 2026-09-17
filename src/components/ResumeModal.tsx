import { useEffect } from 'react';
import { personalInfo, aboutDetails, skillCategories, projects, certifications, activities } from '../data/portfolioData';
import { X, Printer, Mail, Phone } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-neutral-950/65 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      <div
        id="resume-modal-card"
        className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="no-print p-4 sm:px-6 border-b border-neutral-200 bg-neutral-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-neutral-950">Curriculum Vitae</span>
            <span className="text-xs text-neutral-500 bg-neutral-200/70 px-2 py-0.5 rounded">
              Verified Source Data
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              id="resume-print-btn"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-neutral-900 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-100 transition-colors shadow-2xs cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              id="resume-close-btn"
              className="p-1.5 text-neutral-500 hover:text-neutral-900 rounded-lg hover:bg-neutral-200 transition-colors cursor-pointer"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable ATS-Styled Resume Content */}
        <div className="p-6 sm:p-10 overflow-y-auto font-sans text-neutral-900 bg-white">
          {/* Header */}
          <div className="text-center border-b border-neutral-300 pb-5">
            <h1 id="resume-title" className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 uppercase">
              {personalInfo.name}
            </h1>
            <p className="text-sm font-medium text-neutral-700 mt-1">
              {personalInfo.degree}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-neutral-600 mt-2.5">
              <span className="inline-flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-neutral-500" />
                <a href={`mailto:${personalInfo.email}`} className="hover:underline">{personalInfo.email}</a>
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-neutral-500" />
                <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="hover:underline">{personalInfo.phone}</a>
              </span>
              <span>•</span>
              <span>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline font-medium text-neutral-900">
                  {personalInfo.linkedinDisplay}
                </a>
              </span>
              <span>•</span>
              <span>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:underline font-medium text-neutral-900">
                  {personalInfo.githubDisplay}
                </a>
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mt-5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed text-justify">
              {personalInfo.summary}
            </p>
          </div>

          {/* Education */}
          <div className="mt-5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2">
              Education
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-start justify-between text-xs sm:text-sm">
              <div>
                <div className="font-bold text-neutral-950">{aboutDetails.degree}</div>
                <div className="text-neutral-700 font-medium">{aboutDetails.university}</div>
              </div>
              <div className="text-left sm:text-right text-xs text-neutral-600 mt-0.5 sm:mt-0">
                <div className="font-semibold text-neutral-900">{aboutDetails.duration}</div>
                <div className="font-medium text-neutral-800">CGPA: {aboutDetails.cgpa}</div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mt-5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2">
              Technical Skills
            </h2>
            <div className="space-y-1.5 text-xs sm:text-sm">
              {skillCategories.map((cat) => (
                <div key={cat.name} className="flex flex-col sm:flex-row gap-1 sm:gap-2">
                  <span className="font-bold text-neutral-950 min-w-44 text-xs">
                    {cat.name}:
                  </span>
                  <span className="text-neutral-700 text-xs">
                    {cat.skills.join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Projects */}
          <div className="mt-5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2">
              Technical Projects
            </h2>

            <div className="space-y-4">
              {projects.map((proj) => (
                <div key={proj.id} className="text-xs sm:text-sm">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div className="font-bold text-neutral-950">
                      {proj.title}
                      {proj.role && (
                        <span className="ml-2 font-semibold text-neutral-700 text-xs">
                          (Role: {proj.role})
                        </span>
                      )}
                      {proj.liveUrl && (
                        <span className="ml-2 text-xs font-normal text-blue-700">
                          • <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">{proj.liveUrl}</a>
                        </span>
                      )}
                    </div>
                    <div className="text-xs font-mono text-neutral-600">
                      {proj.technologies.join(', ')}
                    </div>
                  </div>

                  <p className="text-xs text-neutral-700 mt-1 leading-relaxed">
                    {proj.overview}
                  </p>

                  <ul className="list-disc list-outside ml-4 mt-1 space-y-0.5 text-xs text-neutral-700">
                    {proj.keyContributions.map((c, idx) => (
                      <li key={idx} className="leading-snug">
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2">
              Certifications
            </h2>
            <ul className="list-disc list-outside ml-4 space-y-0.5 text-xs text-neutral-800">
              {certifications.map((c) => (
                <li key={c.name} className="font-medium">
                  {c.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Leadership & Activities */}
          <div className="mt-5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2">
              Leadership & Activities
            </h2>
            {activities.map((a) => (
              <div key={a.title} className="text-xs">
                <div className="flex justify-between font-bold text-neutral-950">
                  <span>{a.title}</span>
                  <span className="font-semibold text-neutral-700">{a.period}</span>
                </div>
                <ul className="list-disc list-outside ml-4 mt-1 space-y-0.5 text-neutral-700">
                  {a.bullets.map((b, idx) => (
                    <li key={idx} className="leading-snug">{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
