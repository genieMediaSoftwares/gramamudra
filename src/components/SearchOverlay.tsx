import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { MILLET_GRAINS } from '../data/grains';
import { RECIPES } from '../data/journal';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { Search, X, ShoppingBag, ArrowRight } from 'lucide-react';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

export const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');
  const { openProductDetail } = useCart();

  if (!isOpen) return null;

  const q = query.trim().toLowerCase();

  const matchingProducts = q
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          (p.teluguName && p.teluguName.includes(q))
      )
    : [];

  const matchingGrains = q
    ? MILLET_GRAINS.filter(
        (g) =>
          g.name.toLowerCase().includes(q) ||
          g.tagline.toLowerCase().includes(q) ||
          g.teluguName.includes(q)
      )
    : [];

  const matchingRecipes = q
    ? RECIPES.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.grain.toLowerCase().includes(q)
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        id="search-overlay-dialog"
        className="w-full max-w-2xl bg-[#F5F0E3] rounded-2xl shadow-2xl border border-[#C5A35A]/30 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header Input */}
        <div className="p-4 sm:p-5 bg-[#FCFAF4] border-b border-[#C5A35A]/30 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#5F7657] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search herbal millet drink, ragi flour, foxtail, recipes..."
            className="w-full text-base text-[#1D2923] placeholder-[#687067]/60 focus:outline-none bg-transparent"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#EAE3D2] text-gray-400 hover:text-[#1D2923] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="p-5 max-h-[65vh] overflow-y-auto space-y-6">
          {!q ? (
            <div className="space-y-3 text-xs text-[#687067]">
              <span className="font-bold uppercase tracking-wider text-[#24483A] font-serif block">
                Popular Searches
              </span>
              <div className="flex flex-wrap gap-2">
                {['Herbal Millet Drink', 'Sprouted Ragi Flour', 'Foxtail Millet', 'Jowar Flour', 'Ambali Recipe', 'Srikakulam'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1.5 bg-[#FCFAF4] rounded-full border border-[#C5A35A]/30 text-[#687067] hover:border-[#24483A] hover:text-[#24483A] transition-colors cursor-pointer"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Matching Products */}
              {matchingProducts.length > 0 && (
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#5F7657] font-serif">
                    Products ({matchingProducts.length})
                  </span>
                  <div className="space-y-2">
                    {matchingProducts.map((p) => (
                      <div
                        key={p.id}
                        onClick={() => {
                          onClose();
                          openProductDetail(p);
                        }}
                        className="p-2.5 bg-[#FCFAF4] rounded-lg border border-[#C5A35A]/30 hover:border-[#24483A] flex items-center justify-between gap-3 cursor-pointer group transition-colors"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <img
                            src={p.image}
                            alt={p.name}
                            className="w-12 h-12 rounded object-cover shrink-0"
                          />
                          <div className="truncate">
                            <h4 className="font-serif font-bold text-sm text-[#1D2923] group-hover:text-[#24483A] truncate">
                              {p.name}
                            </h4>
                            <p className="text-xs text-[#687067]">
                              {p.weight} • ₹{p.price}
                            </p>
                          </div>
                        </div>
                        <span className="text-xs font-semibold text-[#5F7657] shrink-0 group-hover:underline">
                          View Details →
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Matching Grains */}
              {matchingGrains.length > 0 && (
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#5F7657] font-serif">
                    Traditional Grains ({matchingGrains.length})
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {matchingGrains.map((g) => (
                      <div
                        key={g.id}
                        onClick={() => {
                          onClose();
                          onNavigate('grains');
                        }}
                        className="p-2.5 bg-[#FCFAF4] rounded-lg border border-[#C5A35A]/30 hover:border-[#5F7657] flex items-center gap-2.5 cursor-pointer transition-colors"
                      >
                        <img src={g.image} alt={g.name} className="w-10 h-10 rounded object-cover" />
                        <div>
                          <h4 className="font-serif font-bold text-xs text-[#1D2923]">{g.name}</h4>
                          <span className="text-[11px] text-[#5F7657]">{g.teluguName}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Matching Recipes */}
              {matchingRecipes.length > 0 && (
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C5A35A] font-serif">
                    Culinary Journal Recipes ({matchingRecipes.length})
                  </span>
                  <div className="space-y-1.5">
                    {matchingRecipes.map((r) => (
                      <div
                        key={r.id}
                        onClick={() => {
                          onClose();
                          onNavigate('recipes');
                        }}
                        className="p-2.5 bg-[#FCFAF4] rounded-lg border border-[#C5A35A]/30 hover:border-[#C5A35A] flex items-center justify-between cursor-pointer transition-colors"
                      >
                        <div>
                          <h4 className="font-serif font-bold text-xs text-[#1D2923]">{r.title}</h4>
                          <span className="text-[11px] text-[#687067]">{r.grain} • {r.cookTime}</span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-[#5F7657]" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {matchingProducts.length === 0 && matchingGrains.length === 0 && matchingRecipes.length === 0 && (
                <div className="text-center py-8 text-xs text-[#687067]">
                  No results found for &ldquo;{query}&rdquo;. Try another grain or recipe keyword.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
