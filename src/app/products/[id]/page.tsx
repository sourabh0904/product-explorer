import { getProduct, getProducts } from '@/lib/api'
import { ProductDetailClient } from './ProductDetailClient'
import { notFound } from 'next/navigation'

// Allow dynamic params to be fetched on demand if not generated at build time
export const dynamicParams = true

export async function generateStaticParams() {
  try {
    const products = await getProducts()
    return products.map((product) => ({
      id: product.id.toString(),
    }))
  } catch (error) {
    console.error('Failed to generate static params:', error)
    // Fallback: Generate params for first 20 products if API fails during build
    return Array.from({ length: 20 }, (_, i) => ({
      id: (i + 1).toString(),
    }))
  }
}

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  
  // Note: We don't try/catch here so that errors bubble up to error.tsx
  // This helps debug actual API failures instead of hiding them as 404s
  const product = await getProduct(id)
  
  if (!product) {
    notFound()
  }
  
  return <ProductDetailClient product={product} />
}
