import React, { useState } from 'react';
import { RECIPES } from '../data/journal';
import { Recipe } from '../types';
import { BookOpen, Clock, Users, Utensils, X, ArrowRight } from 'lucide-react';

export const JournalSection: React.FC = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  return (
    <section id="recipes" className="py-16 md:py-24 bg-[#F5F0E3] border-b border-[#C5A35A]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCFAF4] border border-[#C5A35A]/30 text-xs text-[#5F7657] font-bold uppercase tracking-widest">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Culinary Journal</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#24483A]">
            From Our Kitchen
          </h2>
          <p className="text-base sm:text-lg text-[#687067]">
            Authentic preparations, cooling summer ambali recipes, and simple methods to bring native grains to your table.
          </p>
        </div>

        {/* Recipe Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RECIPES.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-[#FCFAF4] rounded-xl border border-[#C5A35A]/30 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 sm:h-52 overflow-hidden bg-[#EAE3D2]">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/60 backdrop-blur-xs text-white text-[11px] font-mono">
                    {recipe.grain}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-xs text-[#687067]">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#5F7657]" />
                      {recipe.cookTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-[#5F7657]" />
                      {recipe.servings}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-xl text-[#24483A] group-hover:text-[#5F7657] transition-colors leading-snug">
                    {recipe.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#687067] leading-relaxed line-clamp-2">
                    {recipe.subtitle}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  id={`view-recipe-${recipe.id}`}
                  onClick={() => setSelectedRecipe(recipe)}
                  className="w-full py-2.5 px-4 bg-[#FCFAF4] hover:bg-[#EAE3D2] text-[#24483A] border border-[#C5A35A]/30 text-xs font-semibold rounded-md flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>View Traditional Recipe</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#5F7657]" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Recipe Modal */}
      {selectedRecipe && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-2xl bg-[#F5F0E3] rounded-2xl shadow-2xl border border-[#C5A35A]/30 overflow-hidden my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedRecipe(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#FCFAF4] hover:bg-[#EAE3D2] text-[#1D2923] shadow-xs cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-56 bg-[#EAE3D2]">
              <img
                src={selectedRecipe.image}
                alt={selectedRecipe.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-xs font-mono text-[#C5A35A] uppercase tracking-wider">
                  Traditional Grain: {selectedRecipe.grain}
                </span>
                <h3 className="font-serif text-2xl font-bold mt-1">
                  {selectedRecipe.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
              <div className="flex items-center gap-6 text-xs text-[#687067] bg-[#FCFAF4] p-3.5 rounded-lg border border-[#C5A35A]/30">
                <div><strong>Prep:</strong> {selectedRecipe.prepTime}</div>
                <div><strong>Cooking:</strong> {selectedRecipe.cookTime}</div>
                <div><strong>Serves:</strong> {selectedRecipe.servings}</div>
              </div>

              <div>
                <h4 className="font-serif font-bold text-lg text-[#24483A] mb-3">
                  Ingredients Needed:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#687067]">
                  {selectedRecipe.ingredients.map((ing, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5F7657]" />
                      <span className="text-[#1D2923]">{ing}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-serif font-bold text-lg text-[#24483A] mb-3">
                  Preparation Method:
                </h4>
                <ol className="space-y-2.5 text-sm text-[#687067]">
                  {selectedRecipe.instructions.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="shrink-0 w-5 h-5 rounded-full bg-[#EAE3D2] text-[#24483A] font-bold text-xs flex items-center justify-center font-mono">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="p-4 bg-[#EAE3D2] rounded-xl border border-[#C5A35A]/30 text-xs text-[#687067] italic">
                <strong className="text-[#24483A]">Regional Memory:</strong> {selectedRecipe.traditionalNotes}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
