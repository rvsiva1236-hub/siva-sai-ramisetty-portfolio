import { certifications } from '../data/portfolioData';
import { Award, ShieldCheck, CheckCircle } from 'lucide-react';
import { TiltCard } from './TiltCard';

export function Certifications() {
  return (
    <section id="certifications" className="py-16 sm:py-24 border-b border-neutral-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full uppercase tracking-wider mb-2">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-neutral-950">
            Professional Certifications
          </h2>
          <p className="mt-1 text-sm sm:text-base text-neutral-600">
            Industry and vendor-validated credentials in Artificial Intelligence, Cloud, and Software Foundations.
          </p>
        </div>

        {/* Certifications Cards with 3D Tilt */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {certifications.map((cert) => (
            <TiltCard
              key={cert.name}
              maxTilt={8}
              scale={1.03}
              className="h-full"
            >
              <div
                id={`cert-card-${cert.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                className="group h-full bg-white border border-neutral-200/90 hover:border-blue-300 rounded-2xl p-6 shadow-2xs hover:shadow-xl transition-all flex flex-col justify-between preserve-3d"
              >
                <div className="translate-z-20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-blue-50 text-blue-700 border border-blue-100 group-hover:scale-110 transition-transform">
                      <ShieldCheck className="w-5 h-5 text-blue-700" />
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                      <CheckCircle className="w-3 h-3" />
                      Verified
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-neutral-950 leading-snug group-hover:text-blue-900 transition-colors">
                    {cert.name}
                  </h3>
                </div>

                <div className="mt-6 pt-3.5 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500 translate-z-12">
                  <span className="font-medium text-neutral-600">Official Certification</span>
                  <span className="font-bold text-blue-700">Completed</span>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
