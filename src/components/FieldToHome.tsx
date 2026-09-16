import React, { useState } from 'react';
import { FIELD_TO_HOME_STAGES } from '../data/journey';
import { ArrowRight, ChevronRight } from 'lucide-react';

export const FieldToHome: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const currentStage = FIELD_TO_HOME_STAGES[activeStageIndex];

  return (
    <section id="field-to-home" className="py-16 md:py-24 bg-[#F5F0E3] border-b border-[#C5A35A]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE3D2] border border-[#C5A35A]/40 text-xs text-[#5F7657] font-bold uppercase tracking-widest">
            <span>The Product Journey</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#24483A]">
            From Field to Home
          </h2>
          <p className="text-base sm:text-lg text-[#687067]">
            Follow the path of traditional grains as they travel from the dryland soils of Andhra Pradesh to your breakfast table.
          </p>
        </div>

        {/* Step Navigation Bar */}
        <div className="flex items-center justify-between gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {FIELD_TO_HOME_STAGES.map((stg, index) => {
            const isActive = activeStageIndex === index;
            return (
              <button
                key={stg.stage}
                id={`field-to-home-step-${index}`}
                onClick={() => setActiveStageIndex(index)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#24483A] text-[#FCFAF4] shadow-xs'
                    : 'bg-[#FCFAF4] text-[#687067] border border-[#C5A35A]/30 hover:border-[#5F7657]'
                }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono font-bold ${
                  isActive ? 'bg-[#C5A35A] text-[#1D2923]' : 'bg-[#EAE3D2] text-[#24483A]'
                }`}>
                  {stg.stage}
                </span>
                <span>{stg.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Showcase Card */}
        <div className="bg-[#FCFAF4] rounded-2xl border border-[#C5A35A]/30 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Stage Visual (7 cols) */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[420px] bg-[#EAE3D2]">
              <img
                src={currentStage.image}
                alt={currentStage.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#142B22]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-[#FCFAF4]">
                <span className="text-[11px] font-mono text-[#C5A35A] tracking-widest uppercase">
                  Stage {currentStage.stage} of 06
                </span>
                <div className="text-xl sm:text-2xl font-serif font-bold">
                  {currentStage.name}
                </div>
              </div>
            </div>

            {/* Stage Narrative (5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="text-xs font-serif font-bold uppercase tracking-widest text-[#5F7657]">
                  {currentStage.tagline}
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#24483A] leading-snug">
                  {currentStage.name}
                </h3>

                <p className="text-sm sm:text-base text-[#687067] leading-relaxed">
                  {currentStage.description}
                </p>
              </div>

              {/* Next/Prev Navigation Controls */}
              <div className="flex items-center justify-between pt-6 border-t border-[#EAE3D2]">
                <button
                  onClick={() => setActiveStageIndex((prev) => Math.max(0, prev - 1))}
                  disabled={activeStageIndex === 0}
                  className="text-xs font-semibold text-[#687067] disabled:opacity-30 hover:text-[#24483A] cursor-pointer"
                >
                  ← Previous Stage
                </button>

                <div className="text-xs font-mono text-gray-400">
                  {activeStageIndex + 1} / {FIELD_TO_HOME_STAGES.length}
                </div>

                <button
                  onClick={() => setActiveStageIndex((prev) => Math.min(FIELD_TO_HOME_STAGES.length - 1, prev + 1))}
                  disabled={activeStageIndex === FIELD_TO_HOME_STAGES.length - 1}
                  className="text-xs font-semibold text-[#24483A] disabled:opacity-30 hover:text-[#5F7657] cursor-pointer flex items-center gap-1"
                >
                  <span>Next Stage</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
