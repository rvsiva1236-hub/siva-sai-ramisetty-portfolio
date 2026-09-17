import { useState, useMemo } from 'react';
import { skillCategories } from '../data/portfolioData';
import { Search, Layers, Check, Sparkles } from 'lucide-react';
import { TiltCard } from './TiltCard';

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = useMemo(() => {
    return ['All', ...skillCategories.map((c) => c.name)];
  }, []);

  const filteredCategories = useMemo(() => {
    return skillCategories
      .map((cat) => {
        // Filter by category selection
        if (selectedCategory !== 'All' && cat.name !== selectedCategory) {
          return null;
        }

        // Filter by search query
        const matchingSkills = cat.skills.filter((skill) =>
          skill.toLowerCase().includes(searchQuery.toLowerCase().trim())
        );

        if (searchQuery.trim() && matchingSkills.length === 0) {
          return null;
        }

        return {
          ...cat,
          skills: matchingSkills,
        };
      })
      .filter((c): c is (typeof skillCategories)[0] => c !== null);
  }, [selectedCategory, searchQuery]);

  const totalSkillsCount = useMemo(() => {
    return skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);
  }, []);

  return (
    <section id="skills" className="py-16 sm:py-24 border-b border-neutral-200/80 bg-stone-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full uppercase tracking-wider mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Technical Capabilities</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-neutral-950">
              Verified Technical Stack
            </h2>
            <p className="mt-1 text-sm sm:text-base text-neutral-600">
              Interactive skill matrix covering AI/ML, backend architecture, databases, and foundational computer science.
            </p>
          </div>

          {/* Quick Stat */}
          <div className="text-xs sm:text-sm text-neutral-700 bg-white px-3.5 py-2 rounded-xl border border-neutral-200 self-start sm:self-auto shadow-2xs flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span><strong className="text-neutral-950 font-bold">{totalSkillsCount}</strong> Verified Proficiencies</span>
          </div>
        </div>

        {/* Interactive Filter and Search Controls */}
        <div className="space-y-4 mb-8">
          {/* Search Input */}
          <div className="relative max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              id="skill-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by technology (e.g. Python, Docker, LLMs, SQL)..."
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 placeholder:text-neutral-400 text-neutral-900 shadow-2xs transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-neutral-700 font-semibold cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  id={`skill-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-neutral-950 text-white shadow-xs scale-102'
                      : 'bg-white text-neutral-700 border border-neutral-200 hover:bg-neutral-100 hover:text-neutral-950'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skill Cards Grid with 3D Tilt */}
        {filteredCategories.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-neutral-300 p-6">
            <p className="text-sm font-medium text-neutral-600">
              No skills found matching &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-3 text-xs font-semibold text-blue-700 underline underline-offset-4 cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredCategories.map((category) => (
              <TiltCard
                key={category.name}
                maxTilt={6}
                scale={1.02}
                className="h-full"
              >
                <div
                  id={`skill-card-${category.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  className="group h-full bg-white border border-neutral-200/90 hover:border-blue-200 rounded-2xl p-5 sm:p-6 shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between preserve-3d"
                >
                  <div className="translate-z-20">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-bold text-neutral-950 tracking-tight group-hover:text-blue-900 transition-colors">
                        {category.name}
                      </h3>
                      <span className="text-[11px] font-bold text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded-md">
                        {category.skills.length} skills
                      </span>
                    </div>

                    {/* Skills tags */}
                    <div className="flex flex-wrap gap-1.5 translate-z-12">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-neutral-50/80 border border-neutral-200/80 text-neutral-800 hover:bg-blue-50 hover:text-blue-900 hover:border-blue-200 transition-colors"
                        >
                          <Check className="w-3 h-3 text-blue-600 shrink-0" />
                          <span>{skill}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-neutral-100 text-[11px] text-neutral-400 font-medium translate-z-12">
                    Verified Competency
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
