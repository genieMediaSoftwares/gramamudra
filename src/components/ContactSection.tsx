import React, { useState } from 'react';
import { BRAND_CONFIG } from '../data/brandConfig';
import { BrandLogo } from './BrandLogo';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Mail, 
  Clock, 
  ExternalLink,
  Send,
  CheckCircle,
  Copy
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSendWhatsAppInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const number = BRAND_CONFIG.contact.whatsappNumber;
    const text = `Namaste Grama Mudra,\n\nName: ${inquiryName || 'Website Visitor'}\nContact: ${inquiryPhone || 'Not provided'}\n\nInquiry:\n${inquiryMessage || 'I would like to inquire about your traditional millet products and bulk/retail availability.'}`;
    const url = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText(BRAND_CONFIG.contact.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#EAE3D2] border-b border-[#C5A35A]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCFAF4] border border-[#C5A35A]/40 text-xs text-[#5F7657] font-bold uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5 text-[#5F7657]" />
            <span>Connect with Us</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#24483A]">
            Contact Grama Mudra
          </h2>
          <p className="text-base sm:text-lg text-[#687067]">
            We are based in Amadalavalasa, Srikakulam. Reach out directly for personal orders, trade inquiries, or grain questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Official Visiting Card Coordinates (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Visiting Card Physical Replica Frame */}
            <div className="bg-[#FCFAF4] rounded-2xl border-2 border-[#C5A35A]/40 p-6 sm:p-8 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A35A]/10 rounded-bl-full pointer-events-none" />
              
              <div className="flex items-start justify-between gap-4 mb-6">
                <BrandLogo size="lg" />
                <span className="text-[10px] font-mono uppercase bg-[#EAE3D2] px-2.5 py-1 rounded text-[#687067] border border-[#C5A35A]/30">
                  Official Contact Card
                </span>
              </div>

              <div className="space-y-4 text-sm text-[#1D2923]">
                
                {/* Address on Visiting Card */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#EAE3D2] text-[#5F7657] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#5F7657] font-serif">
                      Registered Location (From Visiting Card)
                    </div>
                    <div className="font-medium text-base text-[#24483A] mt-0.5">
                      AMADALAVALASA
                    </div>
                    <div className="text-sm text-[#687067]">
                      SRIKAKULAM, ANDHRA PRADESH
                    </div>
                    <div className="text-sm font-mono text-[#5F7657] font-semibold mt-0.5">
                      PIN: 532185 • INDIA
                    </div>
                  </div>
                </div>

                {/* Verified Phone on Visiting Card */}
                <div className="flex items-start gap-3 pt-3 border-t border-[#EAE3D2]">
                  <div className="w-9 h-9 rounded-full bg-[#EAE3D2] text-[#24483A] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#5F7657] font-serif">
                      Direct Telephone Line
                    </div>
                    <div className="flex items-center gap-3 mt-1">
                      <a
                        href={`tel:${BRAND_CONFIG.contact.phone}`}
                        className="text-xl font-bold font-mono text-[#24483A] hover:text-[#5F7657] transition-colors"
                      >
                        {BRAND_CONFIG.contact.phone}
                      </a>
                      <button
                        onClick={copyPhoneNumber}
                        className="p-1.5 rounded hover:bg-[#EAE3D2] text-[#687067] text-xs flex items-center gap-1 cursor-pointer"
                        title="Copy phone number"
                      >
                        {copiedPhone ? (
                          <CheckCircle className="w-3.5 h-3.5 text-[#5F7657]" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                        <span className="text-[11px]">{copiedPhone ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-4">
                  <a
                    id="contact-call-btn"
                    href={`tel:${BRAND_CONFIG.contact.phone}`}
                    className="py-3 px-4 bg-[#FCFAF4] hover:bg-[#24483A] text-[#24483A] hover:text-[#FCFAF4] border border-[#24483A] text-xs font-bold rounded-lg flex items-center justify-center gap-2 transition-all uppercase tracking-wider group/call"
                  >
                    <Phone className="w-4 h-4 text-[#5F7657] group-hover/call:text-[#FCFAF4]" />
                    <span>Call Now</span>
                  </a>

                  <a
                    id="contact-whatsapp-btn"
                    href={`https://wa.me/${BRAND_CONFIG.contact.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 bg-[#24483A] hover:bg-[#5F7657] text-[#FCFAF4] text-xs font-bold rounded-lg flex items-center justify-center gap-2 transition-colors uppercase tracking-wider shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4 text-[#C5A35A]" />
                    <span>WhatsApp</span>
                  </a>
                </div>

              </div>
            </div>

            {/* Google Maps Locator Link Card */}
            <div className="bg-[#FCFAF4] p-5 rounded-xl border border-[#C5A35A]/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-[#5F7657] shrink-0" />
                <div>
                  <div className="text-sm font-bold text-[#24483A] font-serif">
                    Google Maps Locator
                  </div>
                  <div className="text-xs text-[#687067]">
                    Amadalavalasa, Srikakulam District, Andhra Pradesh
                  </div>
                </div>
              </div>
              <a
                href={BRAND_CONFIG.contact.mapsQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 bg-[#EAE3D2] hover:bg-[#EAE3D2]/80 text-[#24483A] border border-[#C5A35A]/30 text-xs font-semibold rounded-md flex items-center gap-1.5 transition-colors shadow-2xs"
              >
                <span>View Map</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#5F7657]" />
              </a>
            </div>

          </div>

          {/* Right Column: Direct Message & Inquiry Form (6 cols) */}
          <div className="lg:col-span-6 bg-[#FCFAF4] rounded-2xl border border-[#C5A35A]/30 p-6 sm:p-8 shadow-xs">
            <h3 className="font-serif font-bold text-2xl text-[#24483A] mb-1">
              Send an Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-[#687067] mb-6">
              Have questions about our Herbal Millet Drink, retail packs, or delivery? Send a message directly to our WhatsApp support.
            </p>

            <form onSubmit={handleSendWhatsAppInquiry} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#24483A] mb-1 font-serif">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={inquiryName}
                  onChange={(e) => setInquiryName(e.target.value)}
                  placeholder="e.g. Ramesh Kumar"
                  className="w-full px-3.5 py-2.5 bg-[#F5F0E3] border border-[#C5A35A]/30 rounded-lg text-sm text-[#1D2923] placeholder-[#687067]/60 focus:outline-none focus:border-[#24483A]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#24483A] mb-1 font-serif">
                  Phone / WhatsApp Number
                </label>
                <input
                  type="tel"
                  required
                  value={inquiryPhone}
                  onChange={(e) => setInquiryPhone(e.target.value)}
                  placeholder="e.g. 9876543210"
                  className="w-full px-3.5 py-2.5 bg-[#F5F0E3] border border-[#C5A35A]/30 rounded-lg text-sm text-[#1D2923] placeholder-[#687067]/60 focus:outline-none focus:border-[#24483A]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#24483A] mb-1 font-serif">
                  Message / Order Details
                </label>
                <textarea
                  rows={4}
                  required
                  value={inquiryMessage}
                  onChange={(e) => setInquiryMessage(e.target.value)}
                  placeholder="I would like to order 2 packs of Herbal Millet Drink to Visakhapatnam..."
                  className="w-full px-3.5 py-2.5 bg-[#F5F0E3] border border-[#C5A35A]/30 rounded-lg text-sm text-[#1D2923] placeholder-[#687067]/60 focus:outline-none focus:border-[#24483A]"
                />
              </div>

              <button
                type="submit"
                id="send-inquiry-whatsapp-btn"
                className="w-full py-3.5 px-6 bg-[#24483A] hover:bg-[#5F7657] text-[#FCFAF4] font-semibold text-xs sm:text-sm tracking-wider uppercase rounded-lg flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#C5A35A]" />
                <span>Send Direct via WhatsApp</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
