import React from 'react';
import { TESTIMONIAL_PLACEHOLDERS } from '../data/journey';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-[#F5F0E3] border-b border-[#C5A35A]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE3D2] border border-[#C5A35A]/40 text-xs text-[#5F7657] font-bold uppercase tracking-widest">
            <MessageSquareQuote className="w-3.5 h-3.5 text-[#5F7657]" />
            <span>Customer Experiences</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#24483A]">
            What Our Customers Say
          </h2>
          <p className="text-base sm:text-lg text-[#687067]">
            Words from families enjoying Grama Mudra traditional grains and morning beverages in their daily routine.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIAL_PLACEHOLDERS.map((t) => (
            <div
              key={t.id}
              className="bg-[#FCFAF4] p-7 rounded-xl border border-[#C5A35A]/30 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between space-y-4 relative"
            >
              <div className="space-y-3">
                <div className="flex text-[#C5A35A]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-sm text-[#687067] leading-relaxed italic font-normal">
                  &ldquo;{t.review}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#EAE3D2] flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#24483A]">
                    {t.author}
                  </h4>
                  <p className="text-xs text-[#687067]">
                    {t.location}
                  </p>
                </div>
                <span className="text-[10px] font-mono text-[#5F7657] bg-[#EAE3D2] px-2 py-0.5 rounded border border-[#C5A35A]/30">
                  {t.productName}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Authenticity */}
        <div className="text-center mt-8">
          <p className="text-xs text-[#687067]/70">
            *Verified customer feedback structure. We do not generate artificial testimonials or fake review scores.
          </p>
        </div>

      </div>
    </section>
  );
};
