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
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onCategoryChange('all')}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
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
            className={`px-4 py-2 rounded-lg font-medium capitalize transition-all ${
              selectedCategory === category
                ? 'bg-purple-600 text-white shadow-md'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Favorites Toggle */}
      <button
        onClick={onToggleFavorites}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
          showFavoritesOnly
            ? 'bg-red-500 text-white shadow-md'
            : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
        }`}
        aria-label="Toggle favorites filter"
      >
        <Heart
          className={`w-5 h-5 ${showFavoritesOnly ? 'fill-white' : ''}`}
        />
        <span>Favorites {favoritesCount > 0 && `(${favoritesCount})`}</span>
      </button>
    </div>
  )
}
