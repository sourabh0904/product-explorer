'use client'

import { Product } from '@/types/product'
import { useFavorites } from '@/contexts/FavoritesContext'
import { Header } from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, ArrowLeft, Star } from 'lucide-react'

interface ProductDetailClientProps {
  product: Product
}

export function ProductDetailClient({ product }: ProductDetailClientProps) {
  const { isFavorite, toggleFavorite } = useFavorites()
  const favorite = isFavorite(product.id)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mb-6 font-medium transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Products
        </Link>

        {/* Product Detail Card */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-800">
          <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8">
            {/* Product Image */}
            <div className="relative aspect-square bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain p-8"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Product Information */}
            <div className="flex flex-col">
              {/* Category Badge */}
              <span className="inline-block px-3 py-1 text-sm font-medium text-purple-700 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4 w-fit capitalize">
                {product.category}
              </span>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                {product.title}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.round(product.rating.rate)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300 dark:text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600 dark:text-gray-400">
                  {product.rating.rate.toFixed(1)} ({product.rating.count} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                  ${product.price.toFixed(2)}
                </span>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Description
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-auto">
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    favorite
                      ? 'bg-red-500 hover:bg-red-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100'
                  }`}
                  aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
                >
                  <Heart className={`w-5 h-5 ${favorite ? 'fill-white' : ''}`} />
                  {favorite ? 'Remove from Favorites' : 'Add to Favorites'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
