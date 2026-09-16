import React from 'react';
import { Package, Shield, Sun, Feather, Sparkles } from 'lucide-react';

export const PackagingShowcase: React.FC = () => {
  return (
    <section id="packaging" className="py-16 md:py-24 bg-[#EAE3D2] border-b border-[#C5A35A]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Gallery (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden shadow-sm h-48 sm:h-56 bg-[#FCFAF4] border border-[#C5A35A]/30">
                <img
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80"
                  alt="Traditional grain pouches resting on raw wooden plank"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-sm h-60 sm:h-72 bg-[#FCFAF4] border border-[#C5A35A]/30">
                <img
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80"
                  alt="Natural kraft packaging with raw woven cotton cloth and earthenware"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="rounded-xl overflow-hidden shadow-sm h-60 sm:h-72 bg-[#FCFAF4] border border-[#C5A35A]/30">
                <img
                  src="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80"
                  alt="Stone grinding and earthen mortar holding fresh grain flour"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-sm h-48 sm:h-56 bg-[#FCFAF4] border border-[#C5A35A]/30">
                <img
                  src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80"
                  alt="Warm morning sunlight illuminating traditional Indian kitchen bowls"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Narrative (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCFAF4] border border-[#C5A35A]/40 text-xs text-[#5F7657] font-bold uppercase tracking-widest">
              <Package className="w-3.5 h-3.5 text-[#5F7657]" />
              <span>Thoughtful Packaging</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#24483A] leading-tight">
              Natural Materials.<br />Freshness Protected.
            </h2>

            <p className="text-base sm:text-lg text-[#687067] leading-relaxed">
              We design our packaging to honor the earth it came from. Presented in kraft-inspired aesthetic pouches with an inner food-grade aroma barrier, every package keeps the subtle, sweet scent of freshly milled millets uncompromised.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 bg-[#FCFAF4] rounded-lg border border-[#C5A35A]/30">
                <Sun className="w-5 h-5 text-[#5F7657] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#24483A] font-serif">
                    Moisture & Sun Protection
                  </h4>
                  <p className="text-xs text-[#687067] mt-0.5">
                    Sealed multi-layer barrier shields delicate grain oils from oxidation and humidity.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-[#FCFAF4] rounded-lg border border-[#C5A35A]/30">
                <Feather className="w-5 h-5 text-[#5F7657] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#24483A] font-serif">
                    Minimal, Honest Presentation
                  </h4>
                  <p className="text-xs text-[#687067] mt-0.5">
                    No false marketing buzzwords or plastic gloss. Just transparent ingredient labeling and preparation guides.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
