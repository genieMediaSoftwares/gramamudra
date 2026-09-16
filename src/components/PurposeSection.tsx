import React from 'react';
import { ArrowRight, Heart, Sparkles, Sprout } from 'lucide-react';

interface PurposeSectionProps {
  onDiscoverJourney: () => void;
}

export const PurposeSection: React.FC<PurposeSectionProps> = ({ onDiscoverJourney }) => {
  return (
    <section id="purpose" className="py-16 md:py-24 bg-[#24483A] text-[#FCFAF4] relative overflow-hidden dark-grain-overlay">
      {/* Subtle harvest gold ambient light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C5A35A]/15 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Narrative (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5F7657]/40 border border-[#C5A35A]/40 text-xs text-[#C5A35A] font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A35A]" />
              <span>Our Purpose</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] text-[#FCFAF4]">
              Food Should Carry a Story.
            </h2>

            <div className="space-y-4 text-[#FCFAF4]/80 text-base sm:text-lg leading-relaxed font-light">
              <p className="text-xl sm:text-2xl font-serif italic text-[#C5A35A] border-l-2 border-[#C5A35A] pl-4">
                &ldquo;Every grain carries a story — of land, seasons, knowledge and people.&rdquo;
              </p>

              <p>
                In an era dominated by hyper-processed convenience and nameless commodity ingredients, the connection between what sustains us and where it was grown has frayed.
              </p>

              <p>
                Grama Mudra is our attempt to bring those stories into contemporary homes without losing their roots. We believe food is not merely an intake of nutrients — it is living cultural heritage, a relationship with village soils, and a tribute to the resilient hands that nurture native grains.
              </p>
            </div>

            <div className="pt-2">
              <button
                id="discover-journey-btn"
                onClick={onDiscoverJourney}
                className="px-6 py-3.5 bg-[#C5A35A] hover:bg-[#A66A4C] text-[#1D2923] hover:text-white font-semibold text-sm tracking-wider uppercase rounded-md transition-all shadow-sm flex items-center gap-2.5 cursor-pointer group"
              >
                <span>DISCOVER OUR JOURNEY</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Documentary Image Frame (6 cols) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#5F7657]/40 shadow-2xl bg-[#1C362B]">
              <img
                src="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1000&q=80"
                alt="Traditional Indian hands cleaning and grinding grains with care and respect"
                className="w-full h-[400px] sm:h-[460px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C362B]/90 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-sm text-[#FCFAF4] font-serif italic">
                &ldquo;Respecting the rhythm of nature, honoring traditional food wisdom.&rdquo;
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
