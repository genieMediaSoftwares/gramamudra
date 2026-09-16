import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { generateSingleProductWhatsAppUrl } from '../utils/whatsapp';
import { 
  X, 
  Minus, 
  Plus, 
  ShoppingBag, 
  MessageCircle, 
  ShieldCheck, 
  Sparkles,
  Info,
  Truck,
  CheckCircle,
  Clock,
  Heart
} from 'lucide-react';

export const ProductDetailModal: React.FC = () => {
  const { 
    selectedProductForDetail: product, 
    closeProductDetail, 
    addToCart, 
    openCheckout 
  } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'ingredients' | 'how-to-use' | 'storage' | 'shipping'>('ingredients');

  if (!product) return null;

  const allImages = [product.image, ...(product.secondaryImages || [])];
  const currentImage = allImages[activeImageIndex] || product.image;

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    closeProductDetail();
    openCheckout();
  };

  const handleWhatsAppOrder = () => {
    const url = generateSingleProductWhatsAppUrl(product, quantity);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div 
        id="product-detail-modal"
        className="relative w-full max-w-4xl bg-[#F5F0E3] rounded-2xl shadow-2xl border border-[#C5A35A]/30 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-product-detail-btn"
          onClick={closeProductDetail}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#FCFAF4] hover:bg-[#EAE3D2] text-[#1D2923] shadow-xs cursor-pointer transition-colors"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          
          {/* Left Column: Image Gallery (5 cols) */}
          <div className="md:col-span-5 p-6 bg-[#EAE3D2] flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#C5A35A]/30">
            <div>
              {/* Big Main Image */}
              <div className="relative aspect-square w-full rounded-xl overflow-hidden shadow-sm bg-[#FCFAF4] border border-[#C5A35A]/30">
                <img
                  src={currentImage}
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                />

                {product.isVerifiedListing && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#24483A] text-[#FCFAF4] text-[10px] font-bold tracking-wider uppercase shadow-xs">
                    Online Verified
                  </span>
                )}
              </div>

              {/* Thumbnails */}
              {allImages.length > 1 && (
                <div className="flex items-center gap-2.5 mt-3">
                  {allImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-16 h-16 rounded-lg overflow-hidden border-2 cursor-pointer transition-all ${
                        activeImageIndex === idx
                          ? 'border-[#24483A] ring-1 ring-[#24483A]'
                          : 'border-[#C5A35A]/40 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Origin Callout */}
            <div className="mt-6 p-3.5 bg-[#FCFAF4] rounded-lg border border-[#C5A35A]/30 text-xs text-[#687067] space-y-1">
              <div className="font-bold text-[#24483A] font-serif flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-[#5F7657]" />
                Traditional Andhra Craftsmanship
              </div>
              <p>Milled and blended in Amadalavalasa, Srikakulam District, Andhra Pradesh - 532185.</p>
            </div>
          </div>

          {/* Right Column: Details & Actions (7 cols) */}
          <div className="md:col-span-7 p-6 sm:p-8 space-y-6">
            
            {/* Header info */}
            <div>
              <div className="flex items-center justify-between gap-2 text-xs text-[#5F7657] font-semibold uppercase tracking-wider">
                <span>{product.category}</span>
                <span className="font-mono text-[#24483A] bg-[#EAE3D2] px-2.5 py-0.5 rounded text-[11px]">
                  Net Wt: {product.weight}
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#24483A] mt-1.5 leading-tight">
                {product.name}
              </h2>

              {product.teluguName && (
                <p className="text-sm text-[#5F7657] font-medium mt-1">
                  తెలుగు: {product.teluguName}
                </p>
              )}

              {/* Pricing */}
              <div className="flex items-baseline gap-3 mt-3">
                <span className="font-serif text-3xl font-bold text-[#24483A]">
                  ₹{product.price}
                </span>
                {product.mrp && product.mrp > product.price && (
                  <span className="text-sm text-gray-400 line-through">
                    MRP ₹{product.mrp}
                  </span>
                )}
                <span className="text-xs text-[#5F7657] font-medium">
                  (Inclusive of all taxes)
                </span>
              </div>
            </div>

            {/* Short Description */}
            <p className="text-sm sm:text-base text-[#687067] leading-relaxed">
              {product.description}
            </p>

            {/* Quantity Selector & Buy CTAs */}
            <div className="p-4 bg-[#FCFAF4] rounded-xl border border-[#C5A35A]/30 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#24483A] font-serif">
                  Select Quantity:
                </span>
                <div className="flex items-center border border-[#C5A35A]/30 rounded-lg bg-[#F5F0E3]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 text-[#1D2923] hover:bg-[#EAE3D2] rounded-l-lg transition-colors cursor-pointer"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-10 text-center text-sm font-bold font-mono text-[#1D2923]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 text-[#1D2923] hover:bg-[#EAE3D2] rounded-r-lg transition-colors cursor-pointer"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Buttons: Add to Cart + Buy Now */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  id="detail-add-to-cart-btn"
                  onClick={handleAddToCart}
                  className="py-3 px-4 bg-[#FCFAF4] hover:bg-[#24483A] text-[#24483A] hover:text-[#FCFAF4] border border-[#24483A] font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-md flex items-center justify-center gap-2 transition-all cursor-pointer group/btn"
                >
                  <ShoppingBag className="w-4 h-4 text-[#5F7657] group-hover/btn:text-[#FCFAF4]" />
                  <span>Add to Cart</span>
                </button>

                <button
                  id="detail-buy-now-btn"
                  onClick={handleBuyNow}
                  className="py-3 px-4 bg-[#24483A] hover:bg-[#5F7657] text-[#FCFAF4] font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-md flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
                >
                  <span>Buy Now</span>
                </button>
              </div>

              {/* Direct WhatsApp Instant Order Button */}
              <button
                id="detail-whatsapp-order-btn"
                onClick={handleWhatsAppOrder}
                className="w-full py-2.5 px-4 bg-[#5F7657] hover:bg-[#24483A] text-[#FCFAF4] font-semibold text-xs sm:text-sm rounded-md flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#C5A35A]" />
                <span>Order {quantity} Pack{quantity > 1 ? 's' : ''} via WhatsApp</span>
              </button>
            </div>

            {/* Detailed Tabs: Ingredients, Preparation, Storage, Shipping */}
            <div className="border-t border-[#C5A35A]/30 pt-4">
              <div className="flex border-b border-[#C5A35A]/30 text-xs font-semibold gap-4 overflow-x-auto scrollbar-none">
                <button
                  onClick={() => setActiveTab('ingredients')}
                  className={`pb-2 transition-colors cursor-pointer ${
                    activeTab === 'ingredients'
                      ? 'border-b-2 border-[#24483A] text-[#24483A]'
                      : 'text-[#687067] hover:text-[#24483A]'
                  }`}
                >
                  Ingredients
                </button>
                <button
                  onClick={() => setActiveTab('how-to-use')}
                  className={`pb-2 transition-colors cursor-pointer ${
                    activeTab === 'how-to-use'
                      ? 'border-b-2 border-[#24483A] text-[#24483A]'
                      : 'text-[#687067] hover:text-[#24483A]'
                  }`}
                >
                  Preparation
                </button>
                <button
                  onClick={() => setActiveTab('storage')}
                  className={`pb-2 transition-colors cursor-pointer ${
                    activeTab === 'storage'
                      ? 'border-b-2 border-[#24483A] text-[#24483A]'
                      : 'text-[#687067] hover:text-[#24483A]'
                  }`}
                >
                  Storage & Allergens
                </button>
                <button
                  onClick={() => setActiveTab('shipping')}
                  className={`pb-2 transition-colors cursor-pointer ${
                    activeTab === 'shipping'
                      ? 'border-b-2 border-[#24483A] text-[#24483A]'
                      : 'text-[#687067] hover:text-[#24483A]'
                  }`}
                >
                  Delivery Info
                </button>
              </div>

              <div className="py-4 text-xs sm:text-sm text-[#687067] leading-relaxed">
                {activeTab === 'ingredients' && (
                  <div className="space-y-3">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {product.ingredients.map((ing, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#5F7657]" />
                          <span className="text-[#1D2923]">{ing}</span>
                        </li>
                      ))}
                    </ul>
                    {product.isVerifiedListing && (
                      <p className="text-[11px] text-gray-500 italic pt-1 border-t border-gray-100">
                        *Source: Online catalog listing; verify with physical pack at time of delivery.
                      </p>
                    )}
                  </div>
                )}

                {activeTab === 'how-to-use' && (
                  <p>{product.preparation}</p>
                )}

                {activeTab === 'storage' && (
                  <div className="space-y-2">
                    <p><strong>Storage:</strong> {product.storage}</p>
                    <p><strong>Allergens:</strong> {product.allergenInfo}</p>
                  </div>
                )}

                {activeTab === 'shipping' && (
                  <div className="space-y-2">
                    <p>{product.shippingInfo}</p>
                    <p className="text-[11px] text-[#5F7657]">Dispatched directly from Amadalavalasa, Srikakulam.</p>
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
