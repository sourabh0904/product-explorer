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
    return []
  }
}

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  
  try {
    const product = await getProduct(id)
    if (!product) {
      notFound()
    }
    return <ProductDetailClient product={product} />
  } catch (error) {
    console.error('Failed to fetch product:', error)
    notFound()
  }
}
