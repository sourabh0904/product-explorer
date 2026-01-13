'use client'

import Link from 'next/link'
import { ShoppingBag, Heart } from 'lucide-react'
import { useFavorites } from '@/contexts/FavoritesContext'
import { DarkModeToggle } from './DarkModeToggle'

export function Header() {
  const { favorites } = useFavorites()

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg group-hover:scale-110 transition-transform">
              <ShoppingBag className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Product Explorer
              </h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Discover Amazing Products
              </p>
            </div>
          </Link>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <DarkModeToggle />
            
            {/* Favorites Badge */}
            <Link 
              href="/?favorites=true"
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer"
            >
              <Heart className="w-5 h-5 text-red-500 fill-red-500" />
              <span className="font-semibold text-gray-900 dark:text-gray-100">
                {favorites.length}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
