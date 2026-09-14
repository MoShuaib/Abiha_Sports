'use client'

import { useState } from 'react'
import { ProductCard } from '@/components/product-card'
import { ProductDetailsModal } from '@/components/product-details-modal'
import { Reveal } from '@/components/reveal'
import { products, type Product } from '@/lib/products'

export function FeaturedProducts() {
  const [selected, setSelected] = useState<Product | null>(null)
  const [open, setOpen] = useState(false)
  const featured = products.filter((product) => product.featured)

  return (
    <>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {featured.map((product, index) => (
          <Reveal key={product.slug} delay={index * 90}>
            <ProductCard
              product={product}
              onClick={() => {
                setSelected(product)
                setOpen(true)
              }}
            />
          </Reveal>
        ))}
      </div>
      <ProductDetailsModal
        product={selected}
        isOpen={open}
        onClose={() => {
          setOpen(false)
          setTimeout(() => setSelected(null), 280)
        }}
      />
    </>
  )
}
