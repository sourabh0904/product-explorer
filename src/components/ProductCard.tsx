'use client'

import { Product } from '@/types/product'
import { useFavorites } from '@/contexts/FavoritesContext'
import Image from 'next/image'
import Link from 'next/link'
import { Heart } from 'lucide-react'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites()
  const favorite = isFavorite(product.id)

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    toggleFavorite(product.id)
  }

  return (
    <Link href={`/products/${product.id}`}>
      <div className="group relative bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-800 h-full flex flex-col">
        {/* Favorite Button */}
        <button
          onClick={handleFavoriteClick}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-md hover:scale-110 transition-transform"
          aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart
            className={`w-5 h-5 ${
              favorite
                ? 'fill-red-500 text-red-500'
                : 'text-gray-600 dark:text-gray-400'
            }`}
          />
        </button>

        {/* Product Image */}
        <div className="relative w-full aspect-square bg-gray-100 dark:bg-gray-800 overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Product Info */}
        <div className="p-4 flex-1 flex flex-col">
          {/* Category Badge */}
          <span className="inline-block px-2 py-1 text-xs font-medium text-purple-700 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-2 w-fit capitalize">
            {product.category}
          </span>

          {/* Title */}
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 line-clamp-2 flex-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            {product.title}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            <span className="text-yellow-500">★</span>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {product.rating.rate.toFixed(1)} ({product.rating.count})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              ${product.price.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
