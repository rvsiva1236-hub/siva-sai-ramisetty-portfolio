import { activities } from '../data/portfolioData';
import { Users, Calendar, CheckCircle2 } from 'lucide-react';
import { TiltCard } from './TiltCard';

export function Activities() {
  return (
    <section id="activities" className="py-16 sm:py-24 border-b border-neutral-200/80 bg-stone-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full uppercase tracking-wider mb-2">
            <Users className="w-3.5 h-3.5" />
            <span>Campus Community & Leadership</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-neutral-950">
            Leadership & Activities
          </h2>
          <p className="mt-1 text-sm sm:text-base text-neutral-600">
            University initiatives, student leadership, and collaborative team execution.
          </p>
        </div>

        {/* Activity Card with 3D Tilt */}
        {activities.map((activity) => (
          <TiltCard
            key={activity.title}
            maxTilt={5}
            scale={1.01}
            className="max-w-4xl"
          >
            <div
              id="activity-nss-card"
              className="bg-white border border-neutral-200/90 hover:border-blue-200 rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-xl transition-all preserve-3d"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-neutral-100 translate-z-20">
                <div>
                  <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                    Student Leadership
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-neutral-950 mt-0.5">
                    {activity.title}
                  </h3>
                </div>

                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-neutral-800 bg-neutral-100 px-3 py-1.5 rounded-xl self-start sm:self-auto">
                  <Calendar className="w-4 h-4 text-blue-600" />
                  <span>{activity.period}</span>
                </div>
              </div>

              {/* Quantified Metrics Highlight with 3D depth */}
              {activity.stats && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6 translate-z-30">
                  {activity.stats.map((s) => (
                    <div
                      key={s.label}
                      className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/80 hover:bg-blue-50/40 hover:border-blue-200 transition-colors text-center"
                    >
                      <div className="text-2xl font-black text-neutral-950">{s.value}</div>
                      <div className="text-xs font-medium text-neutral-600 mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Bullets with 3D depth */}
              <div className="space-y-3 translate-z-12">
                {activity.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{bullet}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 text-xs text-neutral-500 translate-z-12">
                Note: Activity experience represented accurately as collegiate volunteer coordination without professional employment characterization.
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
