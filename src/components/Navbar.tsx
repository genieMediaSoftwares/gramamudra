import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { useCart } from '../context/CartContext';
import { BRAND_CONFIG } from '../data/brandConfig';
import { 
  ShoppingBag, 
  Menu, 
  X, 
  Search, 
  Phone, 
  MessageCircle, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection?: string;
  onOpenSearch?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onNavigate, 
  activeSection = 'home',
  onOpenSearch 
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'story', label: 'Our Story' },
    { id: 'grains', label: 'Our Ingredients' },
    { id: 'shop', label: 'Shop' },
    { id: 'field-to-home', label: 'Our Journey' },
    { id: 'recipes', label: 'Journal' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Heritage Notice Bar */}
      <div className="bg-[#19342A] text-[#EAE3D2] text-xs py-1.5 px-4 text-center border-b border-[#24483A] flex items-center justify-center gap-2 font-medium">
        <span className="inline-block w-2 h-2 rounded-full bg-[#C5A35A] animate-pulse"></span>
        <span>Rooted in Amadalavalasa, Srikakulam, Andhra Pradesh • Direct Farm-to-Kitchen WhatsApp Commerce</span>
        <a 
          href={`https://wa.me/${BRAND_CONFIG.contact.whatsappNumber}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-1 text-[#C5A35A] hover:underline font-semibold ml-2"
        >
          <MessageCircle className="w-3.5 h-3.5" /> Direct Line: +91 {BRAND_CONFIG.contact.phone}
        </a>
      </div>

      {/* Main Sticky Navbar in Deep Forest Olive */}
      <header
        id="main-navbar"
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#24483A]/98 backdrop-blur-md shadow-md py-2.5 border-b border-[#355D4D]'
            : 'bg-[#24483A] py-3.5 border-b border-[#355D4D]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo with Visiting Card Identity */}
          <button
            id="brand-logo-button"
            onClick={() => handleLinkClick('hero')}
            className="focus:outline-none text-left cursor-pointer group"
            aria-label="Grama Mudra Home"
          >
            <BrandLogo size={scrolled ? 'sm' : 'md'} theme="dark" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className={`text-sm font-medium transition-colors tracking-wide relative py-1 cursor-pointer ${
                  activeSection === link.id
                    ? 'text-[#FCFAF4] font-semibold'
                    : 'text-[#EAE3D2]/90 hover:text-[#C5A35A]'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C5A35A] rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Right Action Icons & Primary Button */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            {/* Search Button */}
            <button
              id="navbar-search-btn"
              onClick={onOpenSearch}
              className="p-2 text-[#EAE3D2] hover:text-[#FCFAF4] hover:bg-[#19342A] rounded-full transition-colors cursor-pointer"
              title="Search products and traditional grains"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Direct WhatsApp Quick Connect */}
            <a
              id="navbar-whatsapp-link"
              href={`https://wa.me/${BRAND_CONFIG.contact.whatsappNumber}?text=Namaste%20Grama%20Mudra%2C%20I%20would%20like%20to%20inquire%20about%20your%20traditional%20millet%20products.`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center justify-center p-2 text-[#A8B69A] hover:text-[#FCFAF4] hover:bg-[#19342A] rounded-full transition-colors"
              title="Chat with us on WhatsApp"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            {/* Cart Button with Count Badge */}
            <button
              id="navbar-cart-btn"
              onClick={openCart}
              className="relative p-2 text-[#FCFAF4] hover:bg-[#19342A] rounded-full transition-colors cursor-pointer"
              aria-label={`Cart with ${totalItems} items`}
            >
              <ShoppingBag className="w-5 h-5 text-[#C5A35A]" />
              {totalItems > 0 && (
                <span
                  id="navbar-cart-badge"
                  className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-[#C5A35A] text-[#1D2923] text-[11px] font-bold rounded-full flex items-center justify-center shadow-xs"
                >
                  {totalItems}
                </span>
              )}
            </button>

            {/* Primary CTA: SHOP NOW */}
            <button
              id="navbar-shop-now-btn"
              onClick={() => handleLinkClick('shop')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-[#5F7657] hover:bg-[#4E6247] text-[#FCFAF4] text-xs font-semibold tracking-wider uppercase rounded-md border border-[#A8B69A]/30 transition-all shadow-xs cursor-pointer"
            >
              <span>SHOP NOW</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C5A35A]" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              id="navbar-mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#FCFAF4] hover:bg-[#19342A] rounded-md transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-menu"
            className="lg:hidden bg-[#19342A] border-b border-[#355D4D] px-5 py-5 space-y-3 shadow-md animate-in slide-in-from-top-2 duration-200"
          >
            <div className="text-xs font-serif uppercase tracking-widest text-[#C5A35A] mb-2">
              Navigation
            </div>
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`mobile-link-${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className="w-full text-left py-2 text-base font-medium text-[#EAE3D2] hover:text-[#FCFAF4] flex items-center justify-between border-b border-[#355D4D] cursor-pointer"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-[#A8B69A]" />
              </button>
            ))}

            <div className="pt-3 space-y-2.5">
              <button
                id="mobile-menu-shop-btn"
                onClick={() => handleLinkClick('shop')}
                className="w-full py-3 bg-[#5F7657] hover:bg-[#4E6247] text-[#FCFAF4] font-semibold text-center rounded-md text-sm tracking-wide uppercase shadow-xs flex items-center justify-center gap-2 cursor-pointer border border-[#A8B69A]/30"
              >
                <span>Explore Shop & Products</span>
                <ArrowRight className="w-4 h-4 text-[#C5A35A]" />
              </button>

              <a
                id="mobile-menu-call-btn"
                href={`tel:${BRAND_CONFIG.contact.phone}`}
                className="w-full py-2.5 bg-[#24483A] text-[#FCFAF4] font-medium text-center rounded-md text-sm flex items-center justify-center gap-2 border border-[#355D4D]"
              >
                <Phone className="w-4 h-4 text-[#C5A35A]" />
                <span>Call Us: +91 {BRAND_CONFIG.contact.phone}</span>
              </a>

              <a
                id="mobile-menu-whatsapp-btn"
                href={`https://wa.me/${BRAND_CONFIG.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-[#24483A] hover:bg-[#1E3C30] text-[#FCFAF4] font-medium text-center rounded-md text-sm flex items-center justify-center gap-2 border border-[#5F7657]"
              >
                <MessageCircle className="w-4 h-4 text-[#C5A35A]" />
                <span>Order via WhatsApp (+91 {BRAND_CONFIG.contact.phone})</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
