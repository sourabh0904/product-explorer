'use client'

import { useState, useEffect, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { getProducts, getCategories } from '@/lib/api'
import { Product } from '@/types/product'
import { Header } from '@/components/Header'
import { SearchBar } from '@/components/SearchBar'
import { FilterBar } from '@/components/FilterBar'
import { ProductGrid } from '@/components/ProductGrid'
import { LoadingSkeleton } from '@/components/LoadingSkeleton'
import { ErrorMessage } from '@/components/ErrorMessage'
import { SortDropdown, SortOption } from '@/components/SortDropdown'
import { useFavorites } from '@/contexts/FavoritesContext'

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false)
  const [sortOption, setSortOption] = useState<SortOption>('default')
  
  const { favorites } = useFavorites()
  const searchParams = useSearchParams()

  // Check for favorites query parameter
  useEffect(() => {
    const favoritesParam = searchParams.get('favorites')
    if (favoritesParam === 'true') {
      setShowFavoritesOnly(true)
    }
  }, [searchParams])

  // Fetch products and categories
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        setError(null)
        const [productsData, categoriesData] = await Promise.all([
          getProducts(),
          getCategories(),
        ])
        setProducts(productsData)
        setCategories(categoriesData)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load products')
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  // Filter and search products
  const filteredProducts = useMemo(() => {
    let filtered = products

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((product) => product.category === selectedCategory)
    }

    // Filter by favorites
    if (showFavoritesOnly) {
      filtered = filtered.filter((product) => favorites.includes(product.id))
    }

    // Sort products
    if (sortOption === 'price-asc') {
      filtered = [...filtered].sort((a, b) => a.price - b.price)
    } else if (sortOption === 'price-desc') {
      filtered = [...filtered].sort((a, b) => b.price - a.price)
    }

    return filtered
  }, [products, searchQuery, selectedCategory, showFavoritesOnly, sortOption, favorites])

  const handleRetry = () => {
    window.location.reload()
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Search and Filter Section */}
        <div className="mb-8 space-y-6">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Discover Amazing Products
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Browse our curated collection of quality products
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search products..."
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <FilterBar
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              showFavoritesOnly={showFavoritesOnly}
              onToggleFavorites={() => setShowFavoritesOnly(!showFavoritesOnly)}
              favoritesCount={favorites.length}
            />
            
            <SortDropdown value={sortOption} onChange={setSortOption} />
          </div>
        </div>

        {/* Products Display */}
        {loading && <LoadingSkeleton />}
        {error && <ErrorMessage message={error} onRetry={handleRetry} />}
        {!loading && !error && <ProductGrid products={filteredProducts} />}
      </main>
    </div>
  )
}
