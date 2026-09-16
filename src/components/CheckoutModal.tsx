import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { generateWhatsAppOrderUrl } from '../utils/whatsapp';
import { CheckoutForm } from '../types';
import { BRAND_CONFIG } from '../data/brandConfig';
import { 
  X, 
  MessageCircle, 
  CreditCard, 
  ShieldCheck, 
  MapPin, 
  Truck, 
  CheckCircle,
  Info
} from 'lucide-react';

export const CheckoutModal: React.FC = () => {
  const { isCheckoutOpen, closeCheckout, cart, subtotal, clearCart } = useCart();

  const [formData, setFormData] = useState<CheckoutForm>({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: 'Andhra Pradesh',
    pincode: '',
    notes: '',
  });

  const [activePaymentMode, setActivePaymentMode] = useState<'whatsapp' | 'online-info'>('whatsapp');
  const [orderSent, setOrderSent] = useState(false);

  if (!isCheckoutOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    const url = generateWhatsAppOrderUrl(cart, formData);
    window.open(url, '_blank', 'noopener,noreferrer');
    setOrderSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div 
        id="checkout-modal-container"
        className="relative w-full max-w-3xl bg-[#F5F0E3] rounded-2xl shadow-2xl border border-[#C5A35A]/30 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-[#FCFAF4] border-b border-[#C5A35A]/30 flex items-center justify-between">
          <div>
            <span className="text-xs font-serif uppercase tracking-widest text-[#5F7657] font-bold">
              Direct Order Checkout
            </span>
            <h2 className="font-serif font-bold text-2xl text-[#24483A]">
              Complete Your Traditional Order
            </h2>
          </div>

          <button
            onClick={closeCheckout}
            className="p-1.5 rounded-full text-gray-400 hover:text-[#1D2923] hover:bg-[#EAE3D2] transition-colors cursor-pointer"
            aria-label="Close checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {orderSent ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#5F7657]/20 text-[#5F7657] flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#24483A]">
              WhatsApp Order Drafted & Opened!
            </h3>
            <p className="text-sm text-[#687067] max-w-md mx-auto leading-relaxed">
              Your order items and delivery details have been formatted into WhatsApp. Simply tap send in WhatsApp to connect with the Grama Mudra team in Srikakulam.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => {
                  clearCart();
                  closeCheckout();
                  setOrderSent(false);
                }}
                className="px-6 py-2.5 bg-[#24483A] hover:bg-[#5F7657] text-[#FCFAF4] text-xs font-semibold rounded-md uppercase tracking-wider cursor-pointer transition-colors"
              >
                Clear Cart & Return Home
              </button>
              <button
                onClick={() => setOrderSent(false)}
                className="px-5 py-2.5 bg-[#EAE3D2] text-[#24483A] text-xs font-semibold rounded-md border border-[#C5A35A]/30 cursor-pointer hover:bg-[#EAE3D2]/80"
              >
                Edit Order Details
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Column: Form Details (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Payment Option Tabs */}
                <div className="flex border-b border-[#C5A35A]/30">
                  <button
                    type="button"
                    onClick={() => setActivePaymentMode('whatsapp')}
                    className={`pb-3 px-3 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer ${
                      activePaymentMode === 'whatsapp'
                        ? 'border-b-2 border-[#24483A] text-[#24483A]'
                        : 'text-gray-400 hover:text-[#1D2923]'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 text-[#C5A35A]" />
                    <span>WhatsApp Order (Official)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActivePaymentMode('online-info')}
                    className={`pb-3 px-3 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer ${
                      activePaymentMode === 'online-info'
                        ? 'border-b-2 border-[#5F7657] text-[#5F7657]'
                        : 'text-gray-400 hover:text-[#1D2923]'
                    }`}
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Pay Online (Architecture Ready)</span>
                  </button>
                </div>

                {activePaymentMode === 'online-info' ? (
                  <div className="p-6 bg-[#FCFAF4] rounded-xl border border-[#C5A35A]/30 space-y-4 text-xs text-[#687067]">
                    <div className="flex items-center gap-2 text-sm font-bold text-[#24483A] font-serif">
                      <Info className="w-4 h-4 text-[#5F7657]" />
                      Payment Gateway Integration Architecture
                    </div>
                    <p className="leading-relaxed">
                      To guarantee maximum security and transparency, Grama Mudra processes orders via <strong>Direct WhatsApp Commerce</strong>.
                    </p>
                    <p className="leading-relaxed">
                      Our system architecture includes standard webhooks and API endpoints ready for <strong>Razorpay / Cashfree</strong> integration as soon as the merchant account credentials are configured.
                    </p>
                    <div className="p-3 bg-[#EAE3D2] rounded-md text-[11px] text-[#24483A]">
                      Please use the <strong>WhatsApp Order</strong> tab to confirm your order instantly with the Srikakulam facility.
                    </div>
                    <button
                      type="button"
                      onClick={() => setActivePaymentMode('whatsapp')}
                      className="w-full py-2.5 bg-[#24483A] hover:bg-[#5F7657] text-[#FCFAF4] font-semibold rounded-md flex items-center justify-center gap-2 cursor-pointer transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 text-[#C5A35A]" />
                      <span>Switch to WhatsApp Order</span>
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleWhatsAppCheckout} className="space-y-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#24483A] font-serif flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#5F7657]" />
                      Delivery Address
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-[#687067] mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="e.g. Anand Rao"
                          className="w-full px-3 py-2 bg-[#FCFAF4] border border-[#C5A35A]/30 rounded-md text-xs text-[#1D2923] focus:outline-none focus:border-[#24483A]"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-[#687067] mb-1">
                          Phone Number (WhatsApp) *
                        </label>
                        <input
                          type="tel"
                          required
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="e.g. 9876543210"
                          className="w-full px-3 py-2 bg-[#FCFAF4] border border-[#C5A35A]/30 rounded-md text-xs text-[#1D2923] focus:outline-none focus:border-[#24483A]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#687067] mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="youremail@example.com"
                        className="w-full px-3 py-2 bg-[#FCFAF4] border border-[#C5A35A]/30 rounded-md text-xs text-[#1D2923] focus:outline-none focus:border-[#24483A]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#687067] mb-1">
                        Door / Flat / Street Address *
                      </label>
                      <textarea
                        rows={2}
                        required
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="House / Flat No., Street, Landmark"
                        className="w-full px-3 py-2 bg-[#FCFAF4] border border-[#C5A35A]/30 rounded-md text-xs text-[#1D2923] focus:outline-none focus:border-[#24483A]"
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div>
                        <label className="block text-[11px] font-semibold text-[#687067] mb-1">
                          City / Town *
                        </label>
                        <input
                          type="text"
                          required
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          placeholder="e.g. Srikakulam"
                          className="w-full px-3 py-2 bg-[#FCFAF4] border border-[#C5A35A]/30 rounded-md text-xs text-[#1D2923] focus:outline-none focus:border-[#24483A]"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-[#687067] mb-1">
                          State *
                        </label>
                        <select
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          className="w-full px-2 py-2 bg-[#FCFAF4] border border-[#C5A35A]/30 rounded-md text-xs text-[#1D2923] focus:outline-none focus:border-[#24483A]"
                        >
                          <option value="Andhra Pradesh">Andhra Pradesh</option>
                          <option value="Telangana">Telangana</option>
                          <option value="Karnataka">Karnataka</option>
                          <option value="Tamil Nadu">Tamil Nadu</option>
                          <option value="Maharashtra">Maharashtra</option>
                          <option value="Odisha">Odisha</option>
                          <option value="Other Indian State">Other State</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-[#687067] mb-1">
                          PIN Code *
                        </label>
                        <input
                          type="text"
                          required
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleInputChange}
                          placeholder="e.g. 532185"
                          className="w-full px-3 py-2 bg-[#FCFAF4] border border-[#C5A35A]/30 rounded-md text-xs text-[#1D2923] focus:outline-none focus:border-[#24483A]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#687067] mb-1">
                        Order Notes / Preferences
                      </label>
                      <input
                        type="text"
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        placeholder="e.g. Please deliver on weekday mornings"
                        className="w-full px-3 py-2 bg-[#FCFAF4] border border-[#C5A35A]/30 rounded-md text-xs text-[#1D2923] focus:outline-none focus:border-[#24483A]"
                      />
                    </div>

                    {/* Primary Button */}
                    <button
                      type="submit"
                      id="submit-order-whatsapp-btn"
                      className="w-full py-3.5 px-4 bg-[#24483A] hover:bg-[#5F7657] text-[#FCFAF4] font-semibold text-xs sm:text-sm tracking-wider uppercase rounded-md flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4 text-[#C5A35A]" />
                      <span>ORDER ON WHATSAPP (₹{subtotal})</span>
                    </button>
                  </form>
                )}

              </div>

              {/* Right Column: Order Summary (5 cols) */}
              <div className="lg:col-span-5 bg-[#FCFAF4] p-5 rounded-xl border border-[#C5A35A]/30 space-y-4">
                <h4 className="font-serif font-bold text-base text-[#24483A] border-b border-[#EAE3D2] pb-2">
                  Order Summary
                </h4>

                <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
                  {cart.map((item) => (
                    <div key={item.product.id} className="flex items-center justify-between text-xs text-[#687067]">
                      <div className="truncate pr-2">
                        <span className="font-semibold text-[#1D2923]">{item.quantity}× </span>
                        <span>{item.product.name}</span>
                        <span className="text-[10px] text-gray-400 block">{item.product.weight}</span>
                      </div>
                      <span className="font-mono font-semibold text-[#24483A] shrink-0">
                        ₹{item.product.price * item.quantity}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-[#EAE3D2] space-y-2 text-xs">
                  <div className="flex justify-between text-[#687067]">
                    <span>Items Subtotal</span>
                    <span className="font-mono font-bold text-[#24483A]">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-[#5F7657]">
                    <span>Shipping</span>
                    <span>Direct from Srikakulam</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-[#24483A] pt-2 border-t border-[#EAE3D2] font-serif">
                    <span>Estimated Total</span>
                    <span>₹{subtotal}</span>
                  </div>
                </div>

                <div className="p-3 bg-[#EAE3D2] rounded-lg border border-[#C5A35A]/30 text-[11px] text-[#687067] space-y-1">
                  <div className="font-bold text-[#24483A] flex items-center gap-1">
                    <Truck className="w-3.5 h-3.5 text-[#5F7657]" />
                    Safe Delivery Guarantee
                  </div>
                  <p>Packaged in food-grade sealed pouches. Team confirms stock and dispatch details directly via WhatsApp message.</p>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
