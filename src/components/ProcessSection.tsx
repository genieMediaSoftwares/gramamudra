import React from 'react';
import { PROCESS_STEPS } from '../data/journey';
import { CheckCircle2, Sprout } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section id="our-process" className="py-16 md:py-24 bg-[#EAE3D2] border-b border-[#C5A35A]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCFAF4] border border-[#C5A35A]/30 text-xs text-[#5F7657] font-bold uppercase tracking-widest">
            <Sprout className="w-3.5 h-3.5 text-[#5F7657]" />
            <span>Time-Honored Methods</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#24483A]">
            Rooted in the Way Food Was Meant to Be.
          </h2>
          <p className="text-base sm:text-lg text-[#687067]">
            We follow traditional, gentle preparation methods that preserve the natural fragrance, living enzymes, and coarse textures of native grains.
          </p>
        </div>

        {/* 6 Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-[#FCFAF4] rounded-xl border border-[#C5A35A]/30 p-6 shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 rounded-lg overflow-hidden mb-5 bg-[#F5F0E3]">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-[#24483A] text-[#FCFAF4] font-bold font-serif text-sm flex items-center justify-center shadow-xs">
                    0{step.step}
                  </div>
                </div>

                <h3 className="font-serif font-bold text-xl text-[#24483A] mb-2">
                  {step.title}
                </h3>

                <p className="text-sm text-[#687067] leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#C5A35A]/30 text-xs text-[#5F7657] font-medium flex items-start gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#5F7657] shrink-0 mt-0.5" />
                <span>{step.traditionalAspect}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
