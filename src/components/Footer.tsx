import { personalInfo } from '../data/portfolioData';
import { Mail, Github, Linkedin, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-white border-t border-neutral-200 py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Identity */}
          <div className="text-center sm:text-left">
            <div className="text-base font-bold text-neutral-950">
              {personalInfo.name}
            </div>
            <div className="text-xs text-neutral-500 mt-0.5">
              {personalInfo.degree} • {personalInfo.institution}
            </div>
          </div>

          {/* Links strictly from resume */}
          <div className="flex items-center gap-4 text-xs font-medium text-neutral-600">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-1.5 hover:text-neutral-950 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-neutral-950 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-neutral-950 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-md hover:bg-neutral-100 text-neutral-600 hover:text-neutral-950 transition-colors cursor-pointer ml-2"
              aria-label="Back to top"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
