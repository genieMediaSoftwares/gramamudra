import React from 'react';
import { BrandLogo } from './BrandLogo';
import { BRAND_CONFIG } from '../data/brandConfig';
import { MapPin, Phone, MessageCircle, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#1C362B] text-[#FCFAF4] border-t border-[#5F7657]/40 pt-16 pb-12 dark-grain-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#5F7657]/30">
          
          {/* Col 1: Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo size="lg" theme="dark" />
            
            <p className="text-sm text-[#FCFAF4]/80 leading-relaxed font-light max-w-sm">
              Rooted in the Village. Inspired by Tradition. Made for Modern Life. Bringing the timeless culinary wisdom of Srikakulam millets directly to your home.
            </p>

            <div className="pt-2 space-y-2 text-xs text-[#FCFAF4]/70">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C5A35A] shrink-0" />
                <span>Amadalavalasa, Srikakulam, Andhra Pradesh - 532185</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C5A35A] shrink-0" />
                <a href={`tel:${BRAND_CONFIG.contact.phone}`} className="hover:text-white font-mono">
                  +91 {BRAND_CONFIG.contact.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm tracking-widest uppercase text-[#C5A35A]">
              Discover
            </h4>
            <ul className="space-y-2 text-xs text-[#FCFAF4]/80">
              <li>
                <button onClick={() => onNavigate('hero')} className="hover:text-[#C5A35A] cursor-pointer transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('story')} className="hover:text-[#C5A35A] cursor-pointer transition-colors">
                  Where the Story Began
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('shop')} className="hover:text-[#C5A35A] cursor-pointer transition-colors">
                  Shop Traditional Blends
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('grains')} className="hover:text-[#C5A35A] cursor-pointer transition-colors">
                  Ancient Grains Showcase
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('field-to-home')} className="hover:text-[#C5A35A] cursor-pointer transition-colors">
                  From Field to Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('recipes')} className="hover:text-[#C5A35A] cursor-pointer transition-colors">
                  Traditional Recipes (Ambali & Malts)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Commerce & Ordering (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif font-bold text-sm tracking-widest uppercase text-[#C5A35A]">
              WhatsApp Direct Order
            </h4>
            <p className="text-xs text-[#FCFAF4]/80 leading-relaxed">
              Order individual packs or bulk household supplies directly with our production desk.
            </p>

            <a
              id="footer-whatsapp-btn"
              href={`https://wa.me/${BRAND_CONFIG.contact.whatsappNumber}?text=Namaste%20Grama%20Mudra%2C%20I%20would%20like%20to%20place%20an%20order.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#5F7657] hover:bg-[#24483A] text-[#FCFAF4] border border-[#C5A35A]/30 text-xs font-semibold rounded-md transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#C5A35A]" />
              <span>Connect on WhatsApp: +91 {BRAND_CONFIG.contact.phone}</span>
            </a>

            <div className="pt-1 text-[11px] text-[#FCFAF4]/60">
              Hours: Mon - Sat 9:00 AM - 7:00 PM IST
            </div>
          </div>

        </div>

        {/* Bottom Bar & Respectful Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#FCFAF4]/60">
          <p>
            © {new Date().getFullYear()} Grama Mudra (గ్రామ ముద్ర). All rights reserved. Amadalavalasa, Srikakulam.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[11px]">Crafted with traditional food reverence</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-[#24483A] hover:bg-[#5F7657] text-[#C5A35A] transition-colors cursor-pointer border border-[#5F7657]/40"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
