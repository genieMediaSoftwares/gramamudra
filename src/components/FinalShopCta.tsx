import React from 'react';
import { ArrowRight, ShoppingBag, Sprout, HeartHandshake } from 'lucide-react';

interface FinalShopCtaProps {
  onShopClick: () => void;
  onStoryClick: () => void;
}

export const FinalShopCta: React.FC<FinalShopCtaProps> = ({ onShopClick, onStoryClick }) => {
  return (
    <section id="final-cta" className="py-20 md:py-28 bg-[#24483A] text-[#FCFAF4] relative overflow-hidden dark-grain-overlay border-b border-[#5F7657]/30">
      {/* Subtle harvest gold circular glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C5A35A]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5F7657]/40 border border-[#C5A35A]/40 text-xs text-[#C5A35A] font-semibold tracking-wider uppercase">
          <Sprout className="w-3.5 h-3.5 text-[#C5A35A]" />
          <span>Tradition for Every Morning</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold leading-tight text-[#FCFAF4]">
          Bring a Little More Tradition to Your Table.
        </h2>

        <p className="text-base sm:text-xl text-[#FCFAF4]/80 max-w-2xl mx-auto font-light leading-relaxed">
          Explore millet-based foods inspired by traditional Indian food culture. Thoughtfully sourced, gently milled, and dispatched straight to your home.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            id="final-shop-cta-btn"
            onClick={onShopClick}
            className="px-8 py-4 bg-[#FCFAF4] hover:bg-[#EAE3D2] text-[#24483A] font-bold text-sm sm:text-base tracking-wider uppercase rounded-md transition-all shadow-lg hover:shadow-xl flex items-center gap-2.5 cursor-pointer group"
          >
            <ShoppingBag className="w-4 h-4 text-[#5F7657]" />
            <span>SHOP GRAMA MUDRA</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#24483A]" />
          </button>

          <button
            id="final-story-cta-btn"
            onClick={onStoryClick}
            className="px-8 py-4 bg-transparent hover:bg-white/10 text-[#FCFAF4] border border-[#C5A35A]/60 font-semibold text-sm sm:text-base tracking-wider uppercase rounded-md transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>OUR STORY</span>
            <ArrowRight className="w-4 h-4 text-[#C5A35A]" />
          </button>
        </div>

        {/* Small reassurance line */}
        <p className="text-xs text-[#FCFAF4]/70 pt-4">
          Fast WhatsApp Ordering • Sourced from Amadalavalasa, Srikakulam • Pure Whole Grains
        </p>

      </div>
    </section>
  );
};
