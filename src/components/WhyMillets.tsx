import React from 'react';
import { Sprout, Sun, Droplets, Utensils, Feather, CheckCircle2 } from 'lucide-react';

export const WhyMillets: React.FC = () => {
  const safePillars = [
    {
      icon: Sun,
      title: "Hardy & Sun-Nurtured",
      desc: "Millets are climate-resilient native crops that flourish under warm Indian sunshine with minimal groundwater dependence."
    },
    {
      icon: Feather,
      title: "Naturally Wholesome",
      desc: "Valued for their fiber-rich whole-grain architecture, gentle natural flavors, and wholesome balance of minerals."
    },
    {
      icon: Droplets,
      title: "Ecologically Mindful",
      desc: "Requires a fraction of the irrigation needed by polished commercial crops, nurturing soil health and biodiversity."
    },
    {
      icon: Utensils,
      title: "Culinary Versatility",
      desc: "Effortlessly adapted into warming breakfast malts, soft earthen rotis, fluffy morning upma, or hearty whole grain bowls."
    }
  ];

  return (
    <section id="why-millets" className="py-16 md:py-20 bg-[#EAE3D2] border-b border-[#C5A35A]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCFAF4] border border-[#C5A35A]/40 text-xs text-[#5F7657] font-bold uppercase tracking-widest">
            <Sprout className="w-3.5 h-3.5 text-[#5F7657]" />
            <span>Wisdom of the Soil</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#24483A] leading-tight">
            Ancient Grains.<br className="sm:hidden" /> Modern Tables.
          </h2>

          <p className="text-base sm:text-lg text-[#687067] leading-relaxed font-normal">
            For centuries across the Deccan plateau and Andhra plains, millets formed the quiet foundation of Indian kitchen wisdom. Millets are traditional grains valued for their versatility, earthy satisfaction, and natural nutritional qualities.
          </p>

          <p className="text-xs text-[#687067]/80 italic pt-1">
            *Safe traditional food knowledge: We celebrate millets as wholesome, time-honored whole foods as part of a varied, balanced daily lifestyle.
          </p>
        </div>

        {/* 4 Balanced Qualities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {safePillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#FCFAF4] p-6 rounded-xl border border-[#C5A35A]/30 shadow-2xs hover:shadow-xs transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-[#EAE3D2] text-[#5F7657] flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-lg text-[#24483A] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#687067] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
