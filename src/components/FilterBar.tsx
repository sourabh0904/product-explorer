'use client'

import { Heart } from 'lucide-react'

interface FilterBarProps {
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
  showFavoritesOnly: boolean
  onToggleFavorites: () => void
  favoritesCount: number
}

export function FilterBar({
  categories,
  selectedCategory,
  onCategoryChange,
  showFavoritesOnly,
  onToggleFavorites,
  favoritesCount,
}: FilterBarProps) {
  return (
    <div className="flex flex-col gap-3 w-full">
      {/* Category Filters - Horizontal Scroll on Mobile */}
      <div className="relative">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory">
          <button
            onClick={() => onCategoryChange('all')}
            className={`flex-shrink-0 snap-start px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-sm sm:text-base font-medium transition-all ${
              selectedCategory === 'all'
                ? 'bg-purple-600 text-white shadow-md'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            All Products
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`flex-shrink-0 snap-start px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-sm sm:text-base font-medium capitalize transition-all whitespace-nowrap ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Favorites Toggle */}
      <button
        onClick={onToggleFavorites}
        className={`w-40 sm:w-48 flex items-center justify-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-sm sm:text-base font-medium transition-all ${
          showFavoritesOnly
            ? 'bg-red-500 text-white shadow-md'
            : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
        }`}
        aria-label="Toggle favorites filter"
      >
        <Heart
          className={`w-4 h-4 sm:w-5 sm:h-5 ${showFavoritesOnly ? 'fill-white' : ''}`}
        />
        <span>Favorites {favoritesCount > 0 && `(${favoritesCount})`}</span>
      </button>
    </div>
  )
}
