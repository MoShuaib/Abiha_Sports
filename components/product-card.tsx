'use client'

import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import type { Product } from '@/lib/products'

interface ProductCardProps {
  product: Product
  onClick: () => void
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <article
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/50"
    >
      {/* Image Container */}
      <div className="relative aspect-4/3 overflow-hidden bg-secondary">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* Category Badge */}
        <span className="absolute left-4 top-4 rounded-full bg-background/95 backdrop-blur px-3 py-1.5 text-xs font-semibold text-foreground shadow-md">
          {product.category}
        </span>

        {/* Hover Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
          <div className="flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            View details
            <ChevronRight className="h-4 w-4" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-5">
        <h3 className="font-serif text-xl font-semibold text-foreground line-clamp-2 transition-colors group-hover:text-primary">
          {product.name}
        </h3>

        {product.price && (
          <p className="text-lg font-bold text-primary">{product.price}</p>
        )}
      </div>
    </article>
  )
}