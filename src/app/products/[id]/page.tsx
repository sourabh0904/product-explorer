import { getProduct } from '@/lib/api'
import { ProductDetailClient } from './ProductDetailClient'
import { notFound } from 'next/navigation'

// Force dynamic rendering for this page
export const dynamic = 'force-dynamic'

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  
  try {
    const product = await getProduct(id)
    return <ProductDetailClient product={product} />
  } catch (error) {
    console.error('Failed to fetch product:', error)
    notFound()
  }
}
