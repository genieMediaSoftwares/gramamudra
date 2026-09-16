import React from 'react';
import { ArrowRight, Compass, Heart, Sparkles } from 'lucide-react';
import { BRAND_CONFIG } from '../data/brandConfig';

interface OurStoryProps {
  onReadFullStory: () => void;
}

export const OurStory: React.FC<OurStoryProps> = ({ onReadFullStory }) => {
  return (
    <section id="story" className="py-16 md:py-24 bg-[#F5F0E3] relative overflow-hidden border-b border-[#C5A35A]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Eyebrow */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-8 h-px bg-[#C5A35A]"></span>
          <span className="text-xs font-serif uppercase tracking-widest text-[#5F7657] font-bold">
            The Origin & Ethos
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Documentary-Style Authentic Rural Image Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-md bg-[#EAE3D2] border-2 border-[#C5A35A]/40">
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1100&q=80"
                alt="Documentary rural landscape in Andhra Pradesh with agrarian fields and warm sunlight"
                className="w-full h-[440px] sm:h-[500px] object-cover object-center"
              />

              {/* Documentary Caption Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#142B22]/85 backdrop-blur-md p-4 rounded-xl text-[#FCFAF4] border border-[#355D4D]">
                <p className="text-xs font-serif italic text-[#C5A35A]">
                  &ldquo;Listening to the land, the seasons, and the communities who keep ancient grains alive.&rdquo;
                </p>
                <div className="text-[11px] text-[#A8B69A] mt-1">
                  Amadalavalasa & Srikakulam Rural Hinterlands, Andhra Pradesh
                </div>
              </div>
            </div>

            {/* Subtle decorative background block */}
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-[#A8B69A]/20 rounded-2xl -z-10 hidden sm:block" />
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#24483A] leading-[1.15]">
              Where the Story Began
            </h2>

            <div className="space-y-4 text-[#687067] text-base sm:text-lg leading-relaxed font-normal">
              <p className="text-[#24483A] font-serif italic text-xl border-l-3 border-[#C5A35A] pl-4">
                &ldquo;We went beyond simply selling food. We wanted to understand where traditional food comes from, the people who preserve it, and the challenges surrounding rural communities.&rdquo;
              </p>

              <p>
                Grama Mudra began with a simple observation — some of the most meaningful food traditions are deeply connected to the land, the seasons, and the communities that have preserved them for generations.
              </p>

              <p>
                During our journey through rural communities, we encountered stories of traditional food, changing lifestyles, and the challenges surrounding access, livelihoods, and opportunity.
              </p>

              <p>
                Instead of allowing these traditions to disappear into the background, we wanted to create a bridge between them and today&apos;s homes. We began exploring how traditional grains and millet-based foods could become a natural part of everyday modern life.
              </p>

              <p className="font-serif font-semibold text-[#24483A] text-xl pt-2">
                That idea became Grama Mudra.
              </p>
            </div>

            {/* Framework Note: Transparent & Truthful */}
            <div className="p-4 bg-[#EAE3D2]/70 rounded-lg border border-[#C5A35A]/40 text-xs text-[#687067] flex items-start gap-3">
              <Compass className="w-5 h-5 text-[#5F7657] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#24483A]">Our Promise:</span> Honest, unpretentious food rooted in genuine observation. We honor the rural hands that sow and harvest without commercial hyperbole or manufactured claims.
              </div>
            </div>

            {/* Read Full Story Button */}
            <div className="pt-2">
              <button
                id="read-full-story-btn"
                onClick={onReadFullStory}
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#24483A] hover:bg-[#5F7657] text-[#FCFAF4] text-sm font-semibold tracking-wider uppercase rounded-md border border-[#24483A] transition-all shadow-xs cursor-pointer group"
              >
                <span>READ OUR FULL STORY</span>
                <ArrowRight className="w-4 h-4 text-[#C5A35A] transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
