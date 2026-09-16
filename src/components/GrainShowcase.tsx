import React, { useState } from 'react';
import { MILLET_GRAINS } from '../data/grains';
import { MilletGrain } from '../types';
import { Sparkles, Utensils, Info } from 'lucide-react';

export const GrainShowcase: React.FC = () => {
  const [selectedGrain, setSelectedGrain] = useState<MilletGrain>(MILLET_GRAINS[0]);

  return (
    <section id="grains" className="py-16 md:py-24 bg-[#F5F0E3] border-b border-[#C5A35A]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-px bg-[#C5A35A]"></span>
              <span className="text-xs font-serif uppercase tracking-widest text-[#5F7657] font-bold">
                The Grains of Our Soil
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#24483A]">
              The Traditional Millet Showcase
            </h2>
          </div>
          <p className="text-sm text-[#687067] max-w-md">
            Click on any grain to explore its traditional Andhra culinary role, regional names, and distinctive character.
          </p>
        </div>

        {/* Horizontal Scrollable / Responsive Grain Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {MILLET_GRAINS.map((grain) => {
            const isSelected = selectedGrain.id === grain.id;
            return (
              <button
                key={grain.id}
                id={`grain-card-${grain.id}`}
                onClick={() => setSelectedGrain(grain)}
                className={`text-left p-4 rounded-xl transition-all border cursor-pointer flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-[#EAE3D2] border-[#24483A] ring-2 ring-[#5F7657]/30 shadow-md'
                    : 'bg-[#FCFAF4] border-[#C5A35A]/30 hover:border-[#5F7657] hover:shadow-xs'
                }`}
              >
                <div>
                  {/* Grain Image Thumbnail */}
                  <div className="relative h-32 sm:h-36 rounded-lg overflow-hidden mb-3 bg-[#EAE3D2]">
                    <img
                      src={grain.image}
                      alt={grain.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-[#1D2923]/75 backdrop-blur-xs text-[10px] text-[#FCFAF4] font-medium">
                      {grain.teluguName}
                    </div>
                  </div>

                  <h3 className="font-serif font-bold text-base sm:text-lg text-[#1D2923] group-hover:text-[#24483A] transition-colors">
                    {grain.name}
                  </h3>

                  <p className="text-xs text-[#5F7657] font-medium mt-0.5 italic line-clamp-1">
                    {grain.tagline}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-[#EAE3D2] flex items-center justify-between text-[11px] text-[#687067]">
                  <span className="font-mono text-[10px] opacity-75">{grain.botanicalName}</span>
                  <span className="text-[#24483A] font-semibold group-hover:underline">
                    {isSelected ? 'Viewing' : 'Details →'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Grain Deep Dive Feature Card */}
        {selectedGrain && (
          <div className="mt-8 bg-[#EAE3D2]/70 rounded-2xl p-6 sm:p-8 border border-[#C5A35A]/40 shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              <div className="md:col-span-4 rounded-xl overflow-hidden shadow-sm h-52 sm:h-64 bg-[#EAE3D2]">
                <img
                  src={selectedGrain.image}
                  alt={selectedGrain.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="md:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full bg-[#24483A] text-[#FCFAF4] text-xs font-bold uppercase tracking-wider">
                    {selectedGrain.name}
                  </span>
                  <span className="text-sm font-semibold text-[#5F7657] bg-[#FCFAF4] px-3 py-1 rounded-full border border-[#C5A35A]/40">
                    తెలుగు: {selectedGrain.teluguName}
                  </span>
                  {selectedGrain.botanicalName && (
                    <span className="text-xs text-[#687067] italic">
                      Botanical: {selectedGrain.botanicalName}
                    </span>
                  )}
                </div>

                <div className="text-xl sm:text-2xl font-serif font-bold text-[#24483A]">
                  &ldquo;{selectedGrain.tagline}&rdquo;
                </div>

                <p className="text-sm sm:text-base text-[#687067] leading-relaxed">
                  {selectedGrain.description}
                </p>

                <div className="bg-[#FCFAF4] p-4 rounded-lg border border-[#C5A35A]/30 flex items-start gap-3">
                  <Utensils className="w-5 h-5 text-[#5F7657] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#24483A] font-serif">
                      Traditional Culinary Uses
                    </div>
                    <div className="text-xs sm:text-sm text-[#687067] mt-0.5">
                      {selectedGrain.traditionalUse}
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
