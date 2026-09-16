import React from 'react';
import { MapPin, Sprout, ShieldCheck, Truck, MessageCircle } from 'lucide-react';
import { BRAND_CONFIG } from '../data/brandConfig';

export const BrandStrip: React.FC = () => {
  const points = [
    {
      icon: MapPin,
      title: "Amadalavalasa Roots",
      desc: "Proudly based in Srikakulam, Andhra Pradesh",
    },
    {
      icon: Sprout,
      title: "Native Heritage Grains",
      desc: "Naturally grown dryland millets & pulses",
    },
    {
      icon: ShieldCheck,
      title: "Pure & Unadulterated",
      desc: "No artificial chemicals, flavors or additives",
    },
    {
      icon: MessageCircle,
      title: "Direct WhatsApp Ordering",
      desc: "Fast, personal service directly from the makers",
    },
    {
      icon: Truck,
      title: "Pan-India Shipping",
      desc: "Safe moisture-barrier kraft packing to your door",
    }
  ];

  return (
    <div id="brand-strip" className="bg-[#EAE3D2] border-b border-[#C5A35A]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {points.map((pt, index) => {
            const IconComponent = pt.icon;
            return (
              <div key={index} className="flex items-start gap-3 group">
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#FCFAF4] text-[#5F7657] border border-[#C5A35A]/30 flex items-center justify-center transition-colors group-hover:bg-[#24483A] group-hover:text-[#FCFAF4]">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#24483A] uppercase tracking-wider font-serif">
                    {pt.title}
                  </h3>
                  <p className="text-xs text-[#687067] mt-0.5 leading-snug">
                    {pt.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
