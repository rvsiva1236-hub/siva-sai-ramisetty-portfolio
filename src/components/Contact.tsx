import { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, Linkedin, Github, Copy, Check, ArrowUpRight, Send } from 'lucide-react';
import { TiltCard } from './TiltCard';

export function Contact() {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 border-b border-neutral-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full uppercase tracking-wider mb-2">
            <Send className="w-3.5 h-3.5" />
            <span>Recruiter Connect</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-neutral-950">
            Get in Touch
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-600">
            Available for immediate review for AI/ML, Software Engineering, and Frontend Developer roles. Reach out directly via email, phone, or LinkedIn.
          </p>
        </div>

        {/* Contact Grid with 3D Tilt */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {/* Email Card */}
          <TiltCard maxTilt={6} scale={1.02} className="h-full">
            <div
              id="contact-email-card"
              className="group h-full bg-white border border-neutral-200/90 hover:border-blue-300 rounded-2xl p-6 shadow-2xs hover:shadow-xl transition-all flex flex-col justify-between preserve-3d"
            >
              <div className="translate-z-20">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-700 border border-blue-100 group-hover:scale-110 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.email, 'email')}
                    className="inline-flex items-center gap-1 text-xs font-medium text-neutral-500 hover:text-neutral-950 bg-neutral-100 hover:bg-neutral-200/80 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
                    title="Copy email address"
                  >
                    {copiedType === 'email' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Email Address</div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="mt-1 block text-base font-bold text-neutral-950 hover:text-blue-700 transition-colors break-all"
                >
                  {personalInfo.email}
                </a>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 translate-z-12">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800"
                >
                  <span>Send Direct Email</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </TiltCard>

          {/* Phone Card */}
          <TiltCard maxTilt={6} scale={1.02} className="h-full">
            <div
              id="contact-phone-card"
              className="group h-full bg-white border border-neutral-200/90 hover:border-blue-300 rounded-2xl p-6 shadow-2xs hover:shadow-xl transition-all flex flex-col justify-between preserve-3d"
            >
              <div className="translate-z-20">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-700 border border-blue-100 group-hover:scale-110 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.phone, 'phone')}
                    className="inline-flex items-center gap-1 text-xs font-medium text-neutral-500 hover:text-neutral-950 bg-neutral-100 hover:bg-neutral-200/80 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
                    title="Copy phone number"
                  >
                    {copiedType === 'phone' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Phone</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Phone Number</div>
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="mt-1 block text-base font-bold text-neutral-950 hover:text-blue-700 transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 translate-z-12">
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800"
                >
                  <span>Initiate Call</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </TiltCard>

          {/* LinkedIn Card */}
          <TiltCard maxTilt={6} scale={1.02} className="h-full">
            <div
              id="contact-linkedin-card"
              className="group h-full bg-white border border-neutral-200/90 hover:border-blue-300 rounded-2xl p-6 shadow-2xs hover:shadow-xl transition-all flex flex-col justify-between preserve-3d"
            >
              <div className="translate-z-20">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-700 border border-blue-100 group-hover:scale-110 transition-transform">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded-md">
                    Professional Network
                  </span>
                </div>

                <div className="text-xs font-bold text-neutral-500 uppercase tracking-wider">LinkedIn Profile</div>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-base font-bold text-neutral-950 hover:text-blue-700 transition-colors truncate"
                >
                  {personalInfo.linkedinDisplay}
                </a>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 translate-z-12">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800"
                >
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </TiltCard>

          {/* GitHub Card */}
          <TiltCard maxTilt={6} scale={1.02} className="h-full">
            <div
              id="contact-github-card"
              className="group h-full bg-white border border-neutral-200/90 hover:border-blue-300 rounded-2xl p-6 shadow-2xs hover:shadow-xl transition-all flex flex-col justify-between preserve-3d"
            >
              <div className="translate-z-20">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-neutral-100 text-neutral-950 border border-neutral-200 group-hover:scale-110 transition-transform">
                    <Github className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded-md">
                    Code Repositories
                  </span>
                </div>

                <div className="text-xs font-bold text-neutral-500 uppercase tracking-wider">GitHub Profile</div>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-base font-bold text-neutral-950 hover:text-blue-700 transition-colors truncate"
                >
                  {personalInfo.githubDisplay}
                </a>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 translate-z-12">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-900 hover:text-blue-700"
                >
                  <span>Explore GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
