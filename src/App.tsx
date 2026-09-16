import React, { useState } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandStrip } from './components/BrandStrip';
import { OurStory } from './components/OurStory';
import { WhyMillets } from './components/WhyMillets';
import { GrainShowcase } from './components/GrainShowcase';
import { ShopSection } from './components/ShopSection';
import { PurposeSection } from './components/PurposeSection';
import { FieldToHome } from './components/FieldToHome';
import { ProcessSection } from './components/ProcessSection';
import { BeyondTheProduct } from './components/BeyondTheProduct';
import { WhyGramaMudra } from './components/WhyGramaMudra';
import { PackagingShowcase } from './components/PackagingShowcase';
import { JournalSection } from './components/JournalSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FinalShopCta } from './components/FinalShopCta';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { StoryModal } from './components/StoryModal';
import { JourneyModal } from './components/JourneyModal';
import { SearchOverlay } from './components/SearchOverlay';
import { MobileBottomBar } from './components/MobileBottomBar';
import { CheckCircle } from 'lucide-react';

const MainApp: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const [isJourneyModalOpen, setIsJourneyModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const { notificationMessage } = useCart();

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToShop = () => {
    handleNavigate('shop');
  };

  const scrollToStory = () => {
    handleNavigate('story');
  };

  return (
    <div className="min-h-screen bg-[#F5F0E3] text-[#1D2923] flex flex-col selection:bg-[#C5A35A]/30 pb-16 lg:pb-0">
      
      {/* 01. Sticky Header Navigation */}
      <Navbar 
        onNavigate={handleNavigate} 
        activeSection={activeSection} 
        onOpenSearch={() => setIsSearchOpen(true)} 
      />

      <main className="flex-1">
        {/* 02. Hero Section */}
        <Hero 
          onShopClick={scrollToShop} 
          onStoryClick={scrollToStory} 
        />

        {/* 03. Trust / Brand Strip */}
        <BrandStrip />

        {/* 04. Our Story: "Where the Story Began" */}
        <OurStory 
          onReadFullStory={() => setIsStoryModalOpen(true)} 
        />

        {/* 05. Why Millets: "Ancient Grains. Modern Tables." */}
        <WhyMillets />

        {/* 06. Millet Grain Visualization Showcase */}
        <GrainShowcase />

        {/* 07 & 08. Shop Section with Categories, Sorting & Filters */}
        <ShopSection />

        {/* 09. Purpose: "Food Should Carry a Story." */}
        <PurposeSection 
          onDiscoverJourney={() => setIsJourneyModalOpen(true)} 
        />

        {/* 10. From Field to Home: Interactive Process Flow */}
        <FieldToHome />

        {/* 11. Traditional Process: "Rooted in the Way Food Was Meant to Be." */}
        <ProcessSection />

        {/* 12. Community Connection: "Beyond the Product" */}
        <BeyondTheProduct />

        {/* 13. "Why Grama Mudra": Four Pillars */}
        <WhyGramaMudra />

        {/* 14. Packaging Showcase */}
        <PackagingShowcase />

        {/* 15. Journal / Recipes: "From Our Kitchen" */}
        <JournalSection />

        {/* 16. Testimonials: "What Our Customers Say" */}
        <TestimonialsSection />

        {/* 17. Final Shop Call To Action */}
        <FinalShopCta 
          onShopClick={scrollToShop} 
          onStoryClick={scrollToStory} 
        />

        {/* 18. Contact Section (Amadalavalasa, Srikakulam) */}
        <ContactSection />
      </main>

      {/* 19. Rich Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Slide-over Cart Drawer */}
      <CartDrawer />

      {/* Direct Order / WhatsApp Checkout Modal */}
      <CheckoutModal />

      {/* Rich Product Detail Modal */}
      <ProductDetailModal />

      {/* Full Brand Story Modal */}
      <StoryModal 
        isOpen={isStoryModalOpen} 
        onClose={() => setIsStoryModalOpen(false)} 
        onShopClick={scrollToShop} 
      />

      {/* Full Journey Timeline Modal */}
      <JourneyModal 
        isOpen={isJourneyModalOpen} 
        onClose={() => setIsJourneyModalOpen(false)} 
        onShopClick={scrollToShop} 
      />

      {/* Global Search Dialog */}
      <SearchOverlay 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
        onNavigate={handleNavigate} 
      />

      {/* Mobile Sticky Bottom Commerce Bar */}
      <MobileBottomBar 
        onShopClick={scrollToShop} 
        onHomeClick={() => handleNavigate('hero')} 
      />

      {/* Floating Cart Toast Notification */}
      {notificationMessage && (
        <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-50 bg-[#24483A] text-white px-4 py-2.5 rounded-lg shadow-xl text-xs font-semibold flex items-center gap-2 border border-[#5F7657] animate-in slide-in-from-bottom-3 duration-200">
          <CheckCircle className="w-4 h-4 text-[#C5A35A]" />
          <span>{notificationMessage}</span>
        </div>
      )}

    </div>
  );
};

export default function App() {
  return (
    <CartProvider>
      <MainApp />
    </CartProvider>
  );
}
