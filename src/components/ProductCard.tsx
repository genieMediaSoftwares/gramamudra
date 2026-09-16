import React from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { generateSingleProductWhatsAppUrl } from '../utils/whatsapp';
import { 
  ShoppingBag, 
  Eye, 
  MessageCircle, 
  Sparkles, 
  Star,
  CheckCircle
} from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { addToCart, openProductDetail, openCheckout } = useCart();

  const handleBuyNow = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
    openCheckout();
  };

  const handleWhatsAppOrder = (e: React.MouseEvent) => {
    e.stopPropagation();
    const url = generateSingleProductWhatsAppUrl(product, 1);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const discountPercent = product.mrp
    ? Math.round(((product.mrp - product.price) / product.mrp) * 100)
    : null;

  return (
    <div
      id={`product-card-${product.id}`}
      onClick={() => openProductDetail(product)}
      className="group relative bg-[#FCFAF4] rounded-xl border border-[#C5A35A]/30 hover:border-[#5F7657] shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
    >
      {/* Product Image Frame with Hover Zoom */}
      <div className="relative aspect-square w-full overflow-hidden bg-[#EAE3D2]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500"
        />

        {/* Floating Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10">
          {product.isVerifiedListing && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#24483A] text-[#FCFAF4] text-[10px] font-bold tracking-wider uppercase shadow-xs">
              <CheckCircle className="w-3 h-3 text-[#C5A35A]" />
              Verified Listing
            </span>
          )}

          {product.badge && (
            <span className="inline-block px-2 py-0.5 rounded bg-[#5F7657] text-[#FCFAF4] text-[10px] font-bold tracking-wider uppercase shadow-xs">
              {product.badge}
            </span>
          )}

          {!product.isVerifiedListing && (
            <span className="inline-block px-1.5 py-0.5 rounded bg-[#EAE3D2]/90 text-[#687067] text-[9px] font-mono border border-[#C5A35A]/30">
              Demo Catalogue
            </span>
          )}
        </div>

        {discountPercent && discountPercent > 0 && (
          <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-[#C5A35A] text-[#1D2923] text-[10px] font-bold shadow-xs">
            {discountPercent}% OFF
          </div>
        )}

        {/* Quick View Hover Pill */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            openProductDetail(product);
          }}
          className="absolute inset-x-4 bottom-3 py-2 bg-[#1D2923]/80 hover:bg-[#1D2923] text-[#FCFAF4] text-xs font-medium rounded-md backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 shadow-sm"
          aria-label={`View details of ${product.name}`}
        >
          <Eye className="w-3.5 h-3.5 text-[#C5A35A]" />
          <span>Quick View Details</span>
        </button>
      </div>

      {/* Product Content Details */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between space-y-3">
        <div>
          {/* Category & Weight Strip */}
          <div className="flex items-center justify-between text-xs text-[#687067]">
            <span className="uppercase tracking-wider text-[11px] font-semibold text-[#5F7657]">
              {product.category}
            </span>
            <span className="bg-[#FCFAF4] px-2 py-0.5 rounded border border-[#C5A35A]/30 text-[11px] font-mono text-[#687067]">
              {product.weight}
            </span>
          </div>

          {/* Product Title */}
          <h3 className="font-serif font-bold text-base sm:text-lg text-[#1D2923] group-hover:text-[#24483A] transition-colors mt-1.5 leading-snug line-clamp-1">
            {product.name}
          </h3>

          {product.teluguName && (
            <p className="text-xs text-[#5F7657] font-medium line-clamp-1">
              {product.teluguName}
            </p>
          )}

          {/* Short Description */}
          <p className="text-xs text-[#687067] mt-1.5 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Rating Placeholder */}
          <div className="flex items-center gap-1 mt-2 text-xs text-[#687067]">
            <div className="flex text-[#C5A35A]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="font-semibold text-[#1D2923]">
              {product.ratingPlaceholder.rating}
            </span>
            <span className="text-[11px] text-gray-400">
              ({product.ratingPlaceholder.count})
            </span>
          </div>
        </div>

        {/* Price & Action Row */}
        <div className="pt-3 border-t border-[#EAE3D2]">
          <div className="flex items-baseline justify-between mb-3">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold font-serif text-[#24483A]">
                ₹{product.price}
              </span>
              {product.mrp && product.mrp > product.price && (
                <span className="text-xs text-gray-400 line-through">
                  ₹{product.mrp}
                </span>
              )}
            </div>
            <span className="text-[11px] text-[#5F7657] font-medium">
              In Stock
            </span>
          </div>

          {/* Buttons: Add to Cart + WhatsApp Direct */}
          <div className="grid grid-cols-2 gap-2">
            <button
              id={`add-to-cart-${product.id}`}
              onClick={(e) => {
                e.stopPropagation();
                addToCart(product, 1);
              }}
              className="w-full py-2 px-2 bg-[#FCFAF4] hover:bg-[#24483A] text-[#24483A] hover:text-[#FCFAF4] border border-[#24483A] text-xs font-semibold rounded-md flex items-center justify-center gap-1.5 transition-all cursor-pointer group/btn"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#5F7657] group-hover/btn:text-[#FCFAF4]" />
              <span>Add to Cart</span>
            </button>

            <button
              id={`whatsapp-order-${product.id}`}
              onClick={handleWhatsAppOrder}
              className="w-full py-2 px-2 bg-[#24483A] hover:bg-[#5F7657] text-[#FCFAF4] text-xs font-semibold rounded-md flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              title="Order on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#C5A35A]" />
              <span>WhatsApp</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
