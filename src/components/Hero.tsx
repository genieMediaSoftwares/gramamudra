import React from 'react';
import { ArrowRight, MapPin, Sparkles, ShoppingBag, ShieldCheck, Heart } from 'lucide-react';
import { BRAND_CONFIG } from '../data/brandConfig';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';

interface HeroProps {
  onShopClick: () => void;
  onStoryClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopClick, onStoryClick }) => {
  const { addToCart, openProductDetail } = useCart();
  const heroProduct = PRODUCTS[0]; // Grama Mudra Herbal Millet Drink (500g, ₹210)

  return (
    <section id="hero" className="relative overflow-hidden bg-[#F5F0E3] pt-6 pb-16 md:py-20 lg:py-24 grain-overlay border-b border-[#C5A35A]/30">
      {/* Soft warm sun and foliage ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A35A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#A8B69A]/15 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Editorial Copy Column (7 cols) */}
          <div className="lg:col-span-7 space-y-7">
            {/* Provenance Micro-Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE3D2] border border-[#C5A35A]/60 text-xs text-[#1D2923] font-medium tracking-wide">
              <MapPin className="w-3.5 h-3.5 text-[#A66A4C]" />
              <span>Rooted in Srikakulam, Andhra Pradesh</span>
              <span className="w-1 h-1 rounded-full bg-[#C5A35A]"></span>
              <span className="text-[#5F7657] font-semibold">Native Crop Wisdom</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-[#24483A] leading-[1.08]">
                From the Soil.<br />
                <span className="text-[#5F7657] italic font-normal">From Tradition.</span><br />
                To Your Table.
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-[#687067] max-w-2xl font-normal leading-relaxed">
              Rediscover the goodness of traditional grains and thoughtfully crafted millet foods, rooted in the wisdom of generations.
            </p>

            {/* Philosophy quote pill */}
            <div className="pl-4 border-l-2 border-[#C5A35A] text-sm text-[#1D2923]/90 italic max-w-xl">
              &ldquo;Rooted in the village. Inspired by tradition. Made for modern everyday life.&rdquo;
            </div>

            {/* Primary & Secondary Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="hero-shop-cta"
                onClick={onShopClick}
                className="px-7 py-3.5 bg-[#24483A] hover:bg-[#5F7657] text-[#FCFAF4] font-semibold text-sm sm:text-base tracking-wider uppercase rounded-md border border-[#24483A] transition-all shadow-sm hover:shadow-md flex items-center gap-2.5 cursor-pointer group"
              >
                <span>SHOP OUR PRODUCTS</span>
                <ArrowRight className="w-4 h-4 text-[#C5A35A] transition-transform group-hover:translate-x-1" />
              </button>

              <button
                id="hero-story-cta"
                onClick={onStoryClick}
                className="px-7 py-3.5 bg-[#FCFAF4] hover:bg-[#24483A] text-[#24483A] hover:text-[#FCFAF4] border border-[#24483A] font-semibold text-sm sm:text-base tracking-wider uppercase rounded-md transition-all flex items-center gap-2 cursor-pointer group"
              >
                <span>OUR STORY</span>
                <ArrowRight className="w-4 h-4 text-[#5F7657] group-hover:text-[#FCFAF4]" />
              </button>
            </div>

            {/* Fast Fact Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#EAE3D2] max-w-lg">
              <div>
                <div className="text-xl sm:text-2xl font-serif font-bold text-[#24483A]">100%</div>
                <div className="text-xs text-[#687067] font-medium">Native Andhra Grains</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-serif font-bold text-[#24483A]">Stone</div>
                <div className="text-xs text-[#687067] font-medium">Gentle Cold Milling</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-serif font-bold text-[#24483A]">Direct</div>
                <div className="text-xs text-[#687067] font-medium">WhatsApp Delivery</div>
              </div>
            </div>
          </div>

          {/* Right Hero Product Composition (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Rustic Heritage Photo Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-[#FCFAF4] bg-[#EAE3D2]">
                <img
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=80"
                  alt="Traditional Indian millets, grains in wooden bowls with natural earthenware"
                  className="w-full h-[400px] sm:h-[460px] object-cover object-center transform hover:scale-102 transition-transform duration-700"
                />
                
                {/* Natural Light Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#142B22]/85 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 text-[#FCFAF4]">
                  <div className="text-xs font-serif uppercase tracking-widest text-[#C5A35A]">
                    Signature Blend
                  </div>
                  <div className="text-lg font-serif font-bold">
                    Grama Mudra Herbal Millet Drink
                  </div>
                  <div className="text-xs text-[#FCFAF4]/85 mt-0.5">
                    Sprouted millets, roasted pulses & natural spices
                  </div>
                </div>
              </div>

              {/* Floating Verified Product Card */}
              <div 
                id="hero-featured-card"
                className="absolute -bottom-6 -left-4 sm:-left-8 bg-[#FCFAF4]/95 backdrop-blur-md rounded-xl p-4 shadow-xl border border-[#C5A35A]/40 max-w-[280px] sm:max-w-[300px] transition-all hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="inline-block px-2 py-0.5 bg-[#24483A] text-[#FCFAF4] text-[10px] font-bold tracking-wider rounded uppercase">
                      VERIFIED ONLINE LISTING
                    </span>
                    <h2 className="text-sm font-bold text-[#1D2923] mt-1 font-serif">
                      Herbal Millet Drink
                    </h2>
                    <div className="text-xs text-[#687067]">
                      500 g • Srikakulam Origin
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-base font-bold text-[#24483A]">
                      ₹210
                    </div>
                    <div className="text-[11px] text-gray-400 line-through">
                      ₹250
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => openProductDetail(heroProduct)}
                    className="text-xs text-[#687067] hover:text-[#24483A] font-medium underline underline-offset-2 cursor-pointer"
                  >
                    View Details
                  </button>

                  <button
                    id="hero-quick-add-btn"
                    onClick={() => addToCart(heroProduct, 1)}
                    className="px-3 py-1.5 bg-[#24483A] hover:bg-[#5F7657] text-[#FCFAF4] text-xs font-semibold rounded flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-[#C5A35A]" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>

              {/* Decorative Earth Seal Accent */}
              <div className="hidden sm:flex absolute -top-4 -right-4 w-20 h-20 rounded-full bg-[#FCFAF4] border-2 border-[#C5A35A] p-2 items-center justify-center text-center shadow-md rotate-12">
                <div className="text-[9px] font-serif font-bold text-[#24483A] uppercase tracking-wider leading-tight">
                  Andhra<br />Heritage<br />Foods
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
