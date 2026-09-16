import React from 'react';
import { Sprout, HeartHandshake, Mountain, Sparkles } from 'lucide-react';
import { BRAND_CONFIG } from '../data/brandConfig';

export const WhyGramaMudra: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Sprout: <Sprout className="w-7 h-7 text-[#5F7657]" />,
    HeartHandshake: <HeartHandshake className="w-7 h-7 text-[#5F7657]" />,
    Mountain: <Mountain className="w-7 h-7 text-[#5F7657]" />,
    Sparkles: <Sparkles className="w-7 h-7 text-[#5F7657]" />,
  };

  return (
    <section id="why-grama-mudra" className="py-16 md:py-24 bg-[#F5F0E3] border-b border-[#C5A35A]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCFAF4] border border-[#C5A35A]/30 text-xs text-[#5F7657] font-bold uppercase tracking-widest">
            <span>Our Foundation</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#24483A]">
            Why Grama Mudra
          </h2>
          <p className="text-base sm:text-lg text-[#687067]">
            Four core commitments guiding every recipe, harvest selection, and packaged blend we bring to your table.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRAND_CONFIG.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#FCFAF4] rounded-xl border border-[#C5A35A]/30 p-7 shadow-2xs hover:shadow-xs transition-all space-y-4"
            >
              <div className="w-14 h-14 rounded-xl bg-[#EAE3D2] flex items-center justify-center">
                {iconMap[pillar.icon] || <Sprout className="w-7 h-7 text-[#5F7657]" />}
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-mono text-[#5F7657] uppercase tracking-wider font-semibold">
                  {pillar.subtitle}
                </span>
                <h3 className="font-serif font-bold text-xl text-[#24483A]">
                  {pillar.title}
                </h3>
              </div>

              <p className="text-sm text-[#687067] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
