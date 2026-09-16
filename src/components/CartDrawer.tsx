import React from 'react';
import { useCart } from '../context/CartContext';
import { generateWhatsAppOrderUrl } from '../utils/whatsapp';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  MessageCircle, 
  ArrowRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const { 
    isCartOpen, 
    closeCart, 
    cart, 
    updateQuantity, 
    removeFromCart, 
    clearCart, 
    subtotal, 
    totalItems,
    openCheckout 
  } = useCart();

  if (!isCartOpen) return null;

  const handleInstantWhatsAppOrder = () => {
    if (cart.length === 0) return;
    const url = generateWhatsAppOrderUrl(cart);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-2xs transition-opacity"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div 
          id="cart-drawer-panel"
          className="w-screen max-w-md bg-[#F5F0E3] shadow-2xl flex flex-col justify-between border-l border-[#C5A35A]/30"
        >
          
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-[#C5A35A]/30 bg-[#FCFAF4] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#5F7657]" />
              <h2 className="font-serif font-bold text-xl text-[#24483A]">
                Your Traditional Basket
              </h2>
              <span className="text-xs font-mono bg-[#EAE3D2] text-[#24483A] px-2 py-0.5 rounded-full font-bold">
                {totalItems}
              </span>
            </div>

            <button
              id="close-cart-drawer-btn"
              onClick={closeCart}
              className="p-1.5 rounded-full text-gray-400 hover:text-[#1D2923] hover:bg-[#EAE3D2] transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#EAE3D2] text-[#5F7657] flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-8 h-8 opacity-70" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#24483A]">
                  Your basket is empty
                </h3>
                <p className="text-xs text-[#687067] max-w-xs mx-auto">
                  Explore our authentic Herbal Millet Drink, sprouted ragi flours, and traditional grains from Srikakulam.
                </p>
                <button
                  onClick={closeCart}
                  className="px-5 py-2.5 bg-[#24483A] hover:bg-[#5F7657] text-[#FCFAF4] text-xs font-semibold rounded-md uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between text-xs text-[#687067] pb-1 border-b border-[#EAE3D2]">
                  <span>Selected Products</span>
                  <button
                    onClick={clearCart}
                    className="text-red-700 hover:underline cursor-pointer flex items-center gap-1"
                  >
                    <Trash2 className="w-3 h-3" /> Clear Cart
                  </button>
                </div>

                <div className="space-y-3.5">
                  {cart.map((item) => (
                    <div
                      key={item.product.id}
                      className="bg-[#FCFAF4] p-3.5 rounded-xl border border-[#C5A35A]/30 flex gap-3.5 shadow-2xs"
                    >
                      <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-[#EAE3D2]">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-serif font-bold text-sm text-[#1D2923] truncate">
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-gray-400 hover:text-red-600 transition-colors cursor-pointer"
                            aria-label={`Remove ${item.product.name}`}
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="text-[11px] text-[#687067]">
                          {item.product.weight} • ₹{item.product.price} each
                        </div>

                        <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#EAE3D2]">
                          {/* Qty Controls */}
                          <div className="flex items-center border border-[#C5A35A]/30 rounded-md bg-[#F5F0E3]">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="px-2 py-0.5 text-xs text-[#1D2923] hover:bg-[#EAE3D2] transition-colors cursor-pointer"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2 text-xs font-mono font-bold text-[#1D2923]">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="px-2 py-0.5 text-xs text-[#1D2923] hover:bg-[#EAE3D2] transition-colors cursor-pointer"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <div className="font-serif font-bold text-sm text-[#24483A]">
                            ₹{item.product.price * item.quantity}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Footer Subtotal & Action CTAs */}
          {cart.length > 0 && (
            <div className="p-5 sm:p-6 bg-[#FCFAF4] border-t border-[#C5A35A]/30 space-y-4">
              <div className="space-y-1.5 text-sm">
                <div className="flex items-center justify-between text-[#687067]">
                  <span>Subtotal</span>
                  <span className="font-serif font-bold text-base text-[#24483A]">
                    ₹{subtotal}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-[#5F7657]">
                  <span>Direct Delivery from Srikakulam</span>
                  <span>Calculated on confirm</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                {/* Instant WhatsApp Order */}
                <button
                  id="cart-drawer-whatsapp-btn"
                  onClick={handleInstantWhatsAppOrder}
                  className="w-full py-3 px-4 bg-[#24483A] hover:bg-[#5F7657] text-[#FCFAF4] font-semibold text-xs sm:text-sm rounded-md flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#C5A35A]" />
                  <span>Order on WhatsApp (₹{subtotal})</span>
                </button>

                {/* Full Checkout */}
                <button
                  id="cart-drawer-checkout-btn"
                  onClick={openCheckout}
                  className="w-full py-3 px-4 bg-[#FCFAF4] hover:bg-[#24483A] text-[#24483A] hover:text-[#FCFAF4] border border-[#24483A] font-semibold text-xs sm:text-sm tracking-wider uppercase rounded-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-[11px] text-center text-[#687067] flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#5F7657]" />
                <span>Verified WhatsApp Direct Commerce • No Fake Payment Gateways</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
