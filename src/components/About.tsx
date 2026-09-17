import { aboutDetails } from '../data/portfolioData';
import { BookOpen, Award, School, Clock, CheckCircle2, User } from 'lucide-react';
import { TiltCard } from './TiltCard';

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 border-b border-neutral-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full uppercase tracking-wider mb-2">
            <User className="w-3.5 h-3.5" />
            <span>Profile & Academics</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-neutral-950">
            About Me & Education
          </h2>
          <p className="mt-1 text-sm sm:text-base text-neutral-600 max-w-2xl">
            Undergraduate background in Artificial Intelligence & Data Science with proven software foundations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Education Card with 3D Tilt */}
          <div className="lg:col-span-5">
            <TiltCard maxTilt={6} scale={1.02} className="h-full">
              <div className="h-full bg-white border border-neutral-200/90 hover:border-blue-200 rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between preserve-3d">
                <div className="translate-z-20">
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider mb-3">
                    <School className="w-4 h-4" />
                    <span>Academic Institution</span>
                  </div>

                  <h3 className="text-xl font-extrabold text-neutral-950 leading-snug">
                    {aboutDetails.degree}
                  </h3>

                  <p className="mt-1 text-sm font-semibold text-neutral-800">
                    {aboutDetails.university}
                  </p>

                  <div className="mt-6 space-y-3.5">
                    <div className="flex items-center justify-between py-2 border-b border-neutral-100 text-sm">
                      <span className="flex items-center gap-2 text-neutral-600">
                        <Clock className="w-4 h-4 text-blue-600" />
                        Duration
                      </span>
                      <span className="font-bold text-neutral-900">{aboutDetails.duration}</span>
                    </div>

                    <div className="flex items-center justify-between py-2 border-b border-neutral-100 text-sm">
                      <span className="flex items-center gap-2 text-neutral-600">
                        <Award className="w-4 h-4 text-blue-600" />
                        Cumulative Grade Point
                      </span>
                      <span className="inline-flex items-center px-3 py-0.5 rounded-full bg-blue-50 border border-blue-100 font-extrabold text-blue-700 text-sm">
                        {aboutDetails.cgpa}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 text-xs text-neutral-500 translate-z-12">
                  Foundational emphasis on computer science paradigms, data systems, and algorithmic analysis.
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Technical Foundations with 3D Tilt */}
          <div className="lg:col-span-7">
            <TiltCard maxTilt={5} scale={1.01} className="h-full">
              <div className="h-full bg-white border border-neutral-200/90 hover:border-blue-200 rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between preserve-3d">
                <div className="translate-z-20">
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider mb-3">
                    <BookOpen className="w-4 h-4" />
                    <span>Foundations & Engineering Pillars</span>
                  </div>

                  <p className="text-sm text-neutral-600 mb-5 leading-relaxed">
                    Formal coursework and practical execution center around core computing principles and application engineering:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 translate-z-12">
                    {aboutDetails.foundations.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2.5 p-3 rounded-xl bg-neutral-50/80 border border-neutral-200/80 hover:bg-blue-50/50 hover:border-blue-200 text-neutral-800 text-xs sm:text-sm font-medium transition-all"
                      >
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                        <span className="text-neutral-900">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 text-xs text-neutral-500 translate-z-12">
                  Equipped with foundational rigor across OOP, algorithmic paradigms, and web APIs.
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
