import React from 'react';
import { Compass, Users, HeartHandshake, ShieldCheck, MapPin } from 'lucide-react';
import { BRAND_CONFIG } from '../data/brandConfig';

export const BeyondTheProduct: React.FC = () => {
  return (
    <section id="beyond-product" className="py-16 md:py-24 bg-[#EAE3D2] border-b border-[#C5A35A]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCFAF4] border border-[#C5A35A]/30 text-xs text-[#5F7657] font-bold uppercase tracking-widest">
              <Compass className="w-3.5 h-3.5" />
              <span>Community & Roots</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#24483A] leading-tight">
              Beyond the Product
            </h2>

            <div className="space-y-4 text-[#687067] text-base sm:text-lg leading-relaxed font-normal">
              <p>
                Our journey has taken us closer to rural communities and the everyday realities that shape food, farming, and livelihoods across North Coastal Andhra Pradesh.
              </p>

              <p>
                We believe meaningful food businesses must do more than sell packaged goods. They should foster stronger connections between traditional agricultural knowledge, local regional cultivation, and modern urban consumers seeking genuine nourishment.
              </p>

              <p>
                As Grama Mudra grows, our commitment remains grounded in transparency, fair relationships with small cultivators, and the preservation of native seed varieties.
              </p>
            </div>

            {/* Honest Metric Framework */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#C5A35A]/30">
              <div className="bg-[#FCFAF4] p-3.5 rounded-lg border border-[#C5A35A]/30">
                <div className="text-xl sm:text-2xl font-serif font-bold text-[#24483A]">Srikakulam</div>
                <div className="text-[11px] text-[#687067] font-medium mt-0.5">Native Region of Origin</div>
              </div>

              <div className="bg-[#FCFAF4] p-3.5 rounded-lg border border-[#C5A35A]/30">
                <div className="text-xl sm:text-2xl font-serif font-bold text-[#24483A]">100%</div>
                <div className="text-[11px] text-[#687067] font-medium mt-0.5">Dryland-Adapted Grains</div>
              </div>

              <div className="bg-[#FCFAF4] p-3.5 rounded-lg border border-[#C5A35A]/30">
                <div className="text-xl sm:text-2xl font-serif font-bold text-[#24483A]">Direct</div>
                <div className="text-[11px] text-[#687067] font-medium mt-0.5">Producer-to-Consumer</div>
              </div>
            </div>

            <div className="text-xs text-[#687067]/80 italic">
              *Impact note: We report verified community facts honestly. All partnership data is maintained transparently without exaggerated marketing statistics.
            </div>

          </div>

          {/* Right Visual Composition (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#C5A35A]/30 bg-[#F5F0E3]">
              <img
                src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=900&q=80"
                alt="Traditional village grain collection and authentic agricultural landscape"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="text-xs font-mono text-[#C5A35A] uppercase tracking-widest">
                  Amadalavalasa • Srikakulam
                </div>
                <div className="text-base font-serif font-bold mt-1">
                  &ldquo;A bridge between the village and contemporary kitchens.&rdquo;
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
