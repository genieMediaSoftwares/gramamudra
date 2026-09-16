import React from 'react';
import { JOURNEY_MILESTONES } from '../data/journey';
import { X, Calendar, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

interface JourneyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShopClick: () => void;
}

export const JourneyModal: React.FC<JourneyModalProps> = ({ isOpen, onClose, onShopClick }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div 
        id="journey-modal-container"
        className="relative w-full max-w-3xl bg-[#F5F0E3] rounded-2xl shadow-2xl border border-[#C5A35A]/30 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-[#FCFAF4] border-b border-[#C5A35A]/30 flex items-center justify-between">
          <div>
            <span className="text-xs font-serif uppercase tracking-widest text-[#5F7657] font-bold">
              Company Chronicle
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#24483A]">
              The Grama Mudra Journey
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-gray-400 hover:text-[#1D2923] hover:bg-[#EAE3D2] transition-colors cursor-pointer"
            aria-label="Close journey"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Timeline Content */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
          <p className="text-sm text-[#687067] leading-relaxed italic border-l-2 border-[#C5A35A] pl-3">
            A chronological reflection of how a deep respect for rural grain traditions developed into Grama Mudra in Amadalavalasa, Srikakulam.
          </p>

          <div className="relative border-l-2 border-[#C5A35A]/30 ml-4 space-y-8 pl-6">
            {JOURNEY_MILESTONES.map((item, idx) => (
              <div key={idx} className="relative">
                {/* Milestone Node */}
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#5F7657] ring-4 ring-[#EAE3D2]" />

                <div className="bg-[#FCFAF4] p-5 rounded-xl border border-[#C5A35A]/30 shadow-2xs space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#5F7657]">
                      {item.phase}
                    </span>
                    <span className="text-[11px] font-mono text-[#24483A] bg-[#EAE3D2] px-2 py-0.5 rounded border border-[#C5A35A]/30">
                      {item.status}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-xl text-[#24483A]">
                    {item.title}
                  </h3>

                  <div className="text-xs font-serif italic text-[#687067]">
                    &ldquo;{item.tagline}&rdquo;
                  </div>

                  <p className="text-xs sm:text-sm text-[#687067] leading-relaxed pt-1">
                    {item.narrative}
                  </p>

                  <div className="pt-2 flex items-center gap-1.5 text-[11px] text-[#687067]">
                    <MapPin className="w-3.5 h-3.5 text-[#5F7657]" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 flex justify-end">
            <button
              onClick={() => {
                onClose();
                onShopClick();
              }}
              className="px-6 py-3 bg-[#24483A] hover:bg-[#5F7657] text-[#FCFAF4] font-semibold text-xs uppercase tracking-wider rounded-md transition-colors cursor-pointer flex items-center gap-2 shadow-xs"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-4 h-4 text-[#C5A35A]" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
