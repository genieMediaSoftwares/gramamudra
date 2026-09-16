import React from 'react';
import { useCart } from '../context/CartContext';
import { BRAND_CONFIG } from '../data/brandConfig';
import { ShoppingBag, ShoppingCart, MessageCircle, Home } from 'lucide-react';

interface MobileBottomBarProps {
  onShopClick: () => void;
  onHomeClick: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onShopClick, onHomeClick }) => {
  const { totalItems, openCart } = useCart();

  return (
    <div 
      id="mobile-bottom-bar"
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-[#F5F0E3]/95 backdrop-blur-md border-t border-[#C5A35A]/30 shadow-lg py-2 px-4 flex items-center justify-around"
    >
      {/* Home */}
      <button
        onClick={onHomeClick}
        className="flex flex-col items-center gap-0.5 text-[#687067] hover:text-[#24483A] text-[11px] font-medium py-1 px-3 cursor-pointer transition-colors"
        aria-label="Home"
      >
        <Home className="w-4 h-4" />
        <span>Home</span>
      </button>

      {/* Shop */}
      <button
        id="mobile-bar-shop-btn"
        onClick={onShopClick}
        className="flex flex-col items-center gap-0.5 text-[#687067] hover:text-[#24483A] text-[11px] font-medium py-1 px-3 cursor-pointer transition-colors"
        aria-label="Shop"
      >
        <ShoppingBag className="w-4 h-4 text-[#5F7657]" />
        <span>Shop</span>
      </button>

      {/* Cart with badge */}
      <button
        id="mobile-bar-cart-btn"
        onClick={openCart}
        className="relative flex flex-col items-center gap-0.5 text-[#687067] hover:text-[#24483A] text-[11px] font-medium py-1 px-3 cursor-pointer transition-colors"
        aria-label="Cart"
      >
        <ShoppingCart className="w-4 h-4 text-[#24483A]" />
        <span>Cart</span>
        {totalItems > 0 && (
          <span className="absolute top-0 right-2 w-4 h-4 rounded-full bg-[#5F7657] text-[#FCFAF4] text-[9px] font-bold flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>

      {/* WhatsApp Quick Order */}
      <a
        id="mobile-bar-whatsapp-btn"
        href={`https://wa.me/${BRAND_CONFIG.contact.whatsappNumber}?text=Namaste%20Grama%20Mudra%2C%20I%20would%20like%20to%20order%20traditional%20millet%20products.`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-0.5 text-[#24483A] hover:text-[#5F7657] text-[11px] font-semibold py-1 px-3 transition-colors"
        aria-label="Order on WhatsApp"
      >
        <MessageCircle className="w-4 h-4 text-[#24483A]" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
};
