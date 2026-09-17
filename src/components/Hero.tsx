import { personalInfo, projects } from '../data/portfolioData';
import { ArrowDown, Github, Linkedin, Mail, GraduationCap, Award, Calendar, Sparkles, CheckCircle, Code } from 'lucide-react';
import { TiltCard } from './TiltCard';

interface HeroProps {
  onOpenResume: () => void;
}

export function Hero({ onOpenResume }: HeroProps) {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-38 lg:pb-28 border-b border-neutral-200/80 bg-grid-subtle overflow-hidden"
    >
      {/* Decorative ambient 3D gradient aura */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Introductions & Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Recruiter Quick Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/80 text-xs text-neutral-800 font-medium shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open to AI/ML, Software Engineering & Frontend Roles</span>
            </div>

            {/* Main Headings */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-950 leading-[1.08]">
                {personalInfo.name}
              </h1>

              <p className="text-lg sm:text-xl font-semibold text-blue-700 tracking-tight">
                {personalInfo.degree}
              </p>
            </div>

            {/* Concise Description from Resume */}
            <div className="max-w-2xl">
              <p className="text-base text-neutral-600 leading-relaxed">
                {personalInfo.summary}
              </p>
            </div>

            {/* Key Academic & Profile Highlights */}
            <div className="flex flex-wrap gap-2.5 text-xs sm:text-sm text-neutral-700">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/90 border border-neutral-200/90 shadow-2xs">
                <GraduationCap className="w-4 h-4 text-blue-700" />
                <span className="font-semibold text-neutral-900">{personalInfo.institution}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/90 border border-neutral-200/90 shadow-2xs">
                <Calendar className="w-4 h-4 text-blue-700" />
                <span>Graduation: <strong className="text-neutral-900 font-semibold">{personalInfo.graduationPeriod}</strong></span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/90 border border-neutral-200/90 shadow-2xs">
                <Award className="w-4 h-4 text-blue-700" />
                <span>CGPA: <strong className="text-neutral-900 font-semibold">{personalInfo.cgpa}</strong></span>
              </div>
            </div>

            {/* Call to Actions & Profile Links */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                id="hero-view-projects-btn"
                onClick={scrollToProjects}
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-neutral-950 rounded-xl hover:bg-neutral-800 active:scale-98 transition-all shadow-md hover:shadow-lg cursor-pointer hover:-translate-y-0.5"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                id="hero-contact-btn"
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-neutral-900 bg-white border border-neutral-300 rounded-xl hover:bg-neutral-50 hover:border-neutral-400 active:scale-98 transition-all shadow-2xs hover:shadow-xs cursor-pointer hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-neutral-700" />
                <span>Contact Me</span>
              </button>

              <button
                id="hero-resume-btn"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100/80 rounded-xl transition-colors cursor-pointer"
              >
                <span>View Resume</span>
              </button>

              {/* Social/Code Links strictly from resume */}
              <div className="flex items-center gap-1.5 pl-2 sm:pl-3 border-l border-neutral-300">
                <a
                  id="hero-github-link"
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2 text-neutral-700 hover:text-neutral-950 hover:bg-white rounded-lg transition-all hover:scale-110 shadow-2xs border border-transparent hover:border-neutral-200"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  id="hero-linkedin-link"
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2 text-neutral-700 hover:text-neutral-950 hover:bg-white rounded-lg transition-all hover:scale-110 shadow-2xs border border-transparent hover:border-neutral-200"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Interactive Recruiter Snapshot Card */}
          <div className="lg:col-span-5">
            <TiltCard
              maxTilt={9}
              scale={1.02}
              className="cursor-default"
            >
              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-neutral-200/90 shadow-xl preserve-3d">
                {/* 3D Floating Header */}
                <div className="flex items-center justify-between pb-4 border-b border-neutral-100 translate-z-20">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-blue-50 text-blue-700 border border-blue-100">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-neutral-950 uppercase tracking-wider">
                        Recruiter Quick Glance
                      </div>
                      <div className="text-[11px] text-neutral-500 font-medium">
                        Hover card for 3D perspective
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                    CGPA {personalInfo.cgpa}
                  </span>
                </div>

                {/* 3D Floating Highlights Grid */}
                <div className="grid grid-cols-2 gap-3 my-5 translate-z-30">
                  <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/70 hover:bg-white hover:border-blue-200 transition-colors">
                    <div className="text-2xl font-black text-neutral-950 tracking-tight">{projects.length}</div>
                    <div className="text-xs font-medium text-neutral-600 mt-0.5">Featured Projects</div>
                    <div className="text-[10px] text-blue-700 font-semibold mt-1">AI/ML & Frontend</div>
                  </div>

                  <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/70 hover:bg-white hover:border-blue-200 transition-colors">
                    <div className="text-2xl font-black text-neutral-950 tracking-tight">8.72</div>
                    <div className="text-xs font-medium text-neutral-600 mt-0.5">Academic CGPA</div>
                    <div className="text-[10px] text-neutral-500 font-medium mt-1">Top Tier Standing</div>
                  </div>

                  <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/70 hover:bg-white hover:border-blue-200 transition-colors">
                    <div className="text-2xl font-black text-neutral-950 tracking-tight">1,000+</div>
                    <div className="text-xs font-medium text-neutral-600 mt-0.5">Transactions Analyzed</div>
                    <div className="text-[10px] text-neutral-500 font-medium mt-1">Personal Finance Advisor</div>
                  </div>

                  <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/70 hover:bg-white hover:border-blue-200 transition-colors">
                    <div className="text-2xl font-black text-neutral-950 tracking-tight">3</div>
                    <div className="text-xs font-medium text-neutral-600 mt-0.5">Certifications</div>
                    <div className="text-[10px] text-neutral-500 font-medium mt-1">Azure AI, Oracle, Salesforce</div>
                  </div>
                </div>

                {/* 3D Floating Verified Tag List */}
                <div className="space-y-2 pt-1 translate-z-20">
                  <div className="flex items-center gap-2 text-xs text-neutral-700">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                    <span>Python, JavaScript, SQL, Flask, REST APIs & MySQL</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-700">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                    <span>Machine Learning, Deep Learning, NLP, Generative AI & LLMs</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-700">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                    <span>AWS, Docker, Kubernetes & Core CS Foundations</span>
                  </div>
                </div>

                {/* Card Footer Button */}
                <div className="mt-5 pt-3.5 border-t border-neutral-100 flex items-center justify-between translate-z-12">
                  <span className="text-[11px] text-neutral-500 font-medium">Ready for immediate interview review</span>
                  <button
                    onClick={scrollToProjects}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-800 cursor-pointer"
                  >
                    <span>View Details</span>
                    <Code className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
