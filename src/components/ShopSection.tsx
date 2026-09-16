import React, { useState, useMemo } from 'react';
import { PRODUCTS, PRODUCT_CATEGORIES } from '../data/products';
import { ProductCard } from './ProductCard';
import { Product } from '../types';
import { 
  Search, 
  SlidersHorizontal, 
  Sparkles, 
  ArrowUpDown,
  CheckCircle2,
  Info
} from 'lucide-react';

export const ShopSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'popular' | 'price-low' | 'price-high' | 'newest'>('popular');

  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS];

    // Filter by Category
    if (activeCategory !== 'All') {
      list = list.filter((p) => p.category === activeCategory);
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          (p.teluguName && p.teluguName.includes(q)) ||
          p.ingredients.some((ing) => ing.toLowerCase().includes(q))
      );
    }

    // Sorting
    switch (sortBy) {
      case 'price-low':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        list.sort((a, b) => (b.badge === 'NEW' ? 1 : -1));
        break;
      case 'popular':
      default:
        list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return list;
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <section id="shop" className="py-16 md:py-24 bg-[#F5F0E3] border-b border-[#C5A35A]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE3D2] border border-[#C5A35A]/40 text-xs text-[#5F7657] font-bold uppercase tracking-widest">
            <span>Direct From Amadalavalasa</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#24483A]">
            Bring Tradition Home.
          </h2>
          <p className="text-base sm:text-lg text-[#687067]">
            Explore our range of millet-based foods and traditional blends.
          </p>

          {/* Transparent catalog status banner */}
          <div className="inline-flex items-center gap-2 text-xs text-[#687067] bg-[#EAE3D2]/70 px-4 py-1.5 rounded-full border border-[#C5A35A]/30">
            <Info className="w-3.5 h-3.5 text-[#5F7657]" />
            <span>
              <strong>Herbal Millet Drink (₹210)</strong> verified from online listing. Other catalog items serve as demo placeholders ready for official client catalogue updates.
            </span>
          </div>
        </div>

        {/* Filters and Controls Bar */}
        <div className="space-y-4 mb-8">
          
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                id={`cat-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#24483A] text-[#FCFAF4] shadow-xs'
                    : 'bg-[#FCFAF4] text-[#687067] border border-[#C5A35A]/30 hover:border-[#5F7657]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search and Sort Sub-Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-[#EAE3D2]">
            {/* Search Box */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-[#687067] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                id="shop-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search ragi, jowar, foxtail..."
                className="w-full pl-9 pr-4 py-2 bg-[#FCFAF4] border border-[#C5A35A]/30 rounded-md text-xs sm:text-sm text-[#1D2923] placeholder-[#687067]/60 focus:outline-none focus:border-[#24483A]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-[#1D2923]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Sort Controls */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end text-xs text-[#687067]">
              <span className="flex items-center gap-1 font-medium">
                <ArrowUpDown className="w-3.5 h-3.5 text-[#5F7657]" />
                Sort By:
              </span>
              <select
                id="shop-sort-select"
                value={sortBy}
                onChange={(e: any) => setSortBy(e.target.value)}
                className="bg-[#FCFAF4] border border-[#C5A35A]/30 rounded-md px-3 py-2 text-xs text-[#1D2923] focus:outline-none focus:border-[#24483A] cursor-pointer"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest Additions</option>
              </select>

              <span className="text-[11px] text-[#687067] ml-2 hidden sm:inline">
                {filteredProducts.length} items
              </span>
            </div>
          </div>

        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#FCFAF4] rounded-xl border border-[#C5A35A]/30 p-8 space-y-3">
            <p className="text-base text-[#1D2923] font-serif">
              No products found matching &ldquo;{searchQuery}&rdquo;
            </p>
            <p className="text-xs text-[#687067]">
              Try adjusting your search query or selecting &lsquo;All&rsquo; categories.
            </p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-[#24483A] hover:bg-[#5F7657] text-[#FCFAF4] text-xs font-semibold rounded-md transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
