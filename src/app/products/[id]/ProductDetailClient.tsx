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
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mb-8 font-medium transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Products
        </Link>

        {/* Hero Section - Editorial Style */}
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 rounded-3xl overflow-hidden shadow-2xl mb-8">
          <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-0">
            {/* Product Image Section */}
            <div className="relative aspect-[5/4] lg:aspect-[16/9] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain p-4 md:p-6 lg:p-8"
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>

            {/* Price & Category Section */}
            <div className="relative bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 p-3 lg:p-4 flex flex-col justify-between min-h-[150px] lg:min-h-0">
              {/* Price - Large and Prominent */}
              <div className="flex-1 flex items-start justify-center lg:justify-end pt-2 lg:pt-3">
                <div className="text-right">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 leading-none tracking-tight">
                    ${Math.floor(product.price)}
                    <sup className="text-xl md:text-2xl lg:text-3xl align-top">
                      {(product.price % 1).toFixed(2).substring(1)}
                    </sup>
                  </div>
                </div>
              </div>

              {/* Category Label - Muted and Elegant */}
              <div className="flex-1 flex items-end justify-center lg:justify-start pb-2 lg:pb-3">
                <div className="text-center lg:text-left">
                  <p className="text-2xl md:text-3xl lg:text-4xl font-light text-purple-400 dark:text-purple-300 capitalize italic">
                    {product.category}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Title - Bottom Overlay */}
          <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-4 py-3 border-t border-gray-300 dark:border-gray-700">
            <h1 className="text-lg md:text-xl font-medium text-gray-900 dark:text-gray-100 tracking-wide">
              {product.title}
            </h1>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Rating Card */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-800">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Customer Rating
            </h2>
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < Math.round(product.rating.rate)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300 dark:text-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-1">
              {product.rating.rate.toFixed(1)}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Based on {product.rating.count} reviews
            </p>
          </div>

          {/* Category Info Card */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-800">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Product Category
            </h2>
            <span className="inline-block px-4 py-2 text-base font-medium text-purple-700 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 rounded-full capitalize">
              {product.category}
            </span>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
              Explore more products in this category
            </p>
          </div>

          {/* Quick Actions Card */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-800">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Quick Actions
            </h2>
            <button
              onClick={() => toggleFavorite(product.id)}
              className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all shadow-md ${
                favorite
                  ? 'bg-red-500 hover:bg-red-600 text-white'
                  : 'bg-purple-600 hover:bg-purple-700 text-white'
              }`}
              aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
            >
              <Heart className={`w-5 h-5 ${favorite ? 'fill-white' : ''}`} />
              {favorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </div>

        {/* Description Section */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Product Description
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            {product.description}
          </p>
        </div>
      </main>
    </div>
  )
}
