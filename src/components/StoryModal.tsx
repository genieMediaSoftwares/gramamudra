import React from 'react';
import { X, ArrowRight, Compass, Heart, Sprout, Sparkles } from 'lucide-react';
import { BRAND_CONFIG } from '../data/brandConfig';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShopClick: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({ isOpen, onClose, onShopClick }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div 
        id="full-story-modal"
        className="relative w-full max-w-3xl bg-[#F5F0E3] rounded-2xl shadow-2xl border border-[#C5A35A]/30 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-[#FCFAF4] border-b border-[#C5A35A]/30 flex items-center justify-between">
          <div>
            <span className="text-xs font-serif uppercase tracking-widest text-[#5F7657] font-bold">
              The Grama Mudra Narrative
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#24483A]">
              Rooted in the Village. Made for Today.
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-gray-400 hover:text-[#1D2923] hover:bg-[#EAE3D2] transition-colors cursor-pointer"
            aria-label="Close story"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Narrative Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto text-sm sm:text-base text-[#687067] leading-relaxed">
          
          <div className="relative rounded-xl overflow-hidden h-56 bg-[#EAE3D2]">
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80"
              alt="Rural Andhra landscape"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-6 right-6 text-white">
              <p className="font-serif italic text-lg sm:text-xl text-[#C5A35A]">
                &ldquo;We went beyond simply selling food. We wanted to understand where traditional food comes from, the people who preserve it, and the challenges surrounding rural communities.&rdquo;
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-serif font-bold text-xl text-[#24483A]">
              The Observation
            </h3>
            <p>
              Grama Mudra began with a simple observation — some of the most meaningful food traditions are deeply connected to the land, the seasons and the communities that have preserved them for generations.
            </p>
            <p>
              During journeys through rural communities across North Coastal Andhra Pradesh, our founders encountered stories of traditional food, changing lifestyles and the very real challenges surrounding access, livelihoods, and opportunity.
            </p>
          </div>

          <div className="space-y-4 border-t border-[#C5A35A]/30 pt-6">
            <h3 className="font-serif font-bold text-xl text-[#24483A]">
              The Bridge to Modern Tables
            </h3>
            <p>
              Instead of allowing these traditions to disappear into the background or be preserved merely as nostalgic folklore, we wanted to build a practical, respectful bridge between rural grain growers and modern Indian homes.
            </p>
            <p>
              We began exploring how traditional grains and millet-based foods could become part of everyday modern life — not as medicinal powders or complicated fasting regimes, but as delicious, comforting, daily staples.
            </p>
            <p className="font-serif font-semibold text-lg text-[#24483A]">
              That idea became Grama Mudra (గ్రామ ముద్ర).
            </p>
          </div>

          <div className="p-4 bg-[#EAE3D2] rounded-xl border border-[#C5A35A]/30 text-xs space-y-1">
            <div className="font-bold text-[#24483A]">Note on Authenticity:</div>
            <p className="text-[#687067]">
              This story framework captures the foundational ethos of Grama Mudra. As our company develops, further verified accounts, local village initiatives, and agricultural partnerships from Srikakulam will be shared transparently here.
            </p>
          </div>

          <div className="pt-2 flex justify-end gap-3">
            <button
              onClick={() => {
                onClose();
                onShopClick();
              }}
              className="px-6 py-3 bg-[#24483A] hover:bg-[#5F7657] text-[#FCFAF4] font-semibold text-xs uppercase tracking-wider rounded-md transition-colors cursor-pointer flex items-center gap-2 shadow-xs"
            >
              <span>Explore Our Traditional Blends</span>
              <ArrowRight className="w-4 h-4 text-[#C5A35A]" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
