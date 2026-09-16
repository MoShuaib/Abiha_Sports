'use client'

import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import type { Product } from '@/lib/products'

interface ProductCardProps {
  product: Product
  onClick?: () => void
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <article
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-card shadow-[0_1px_0_rgba(20,30,50,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_24px_50px_-28px_rgba(20,30,50,0.45)]"
    >
      <div className="relative aspect-4/3 overflow-hidden bg-secondary">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain transition-transform duration-700 ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* <span className="absolute left-4 top-4 rounded-full bg-background/95 px-3 py-1.5 text-xs font-semibold text-foreground shadow-md backdrop-blur">
          {product.category}
        </span> */}
        <div className="absolute inset-0 flex items-center justify-center bg-primary/0 transition-colors duration-500 group-hover:bg-primary/25">
          <div className="flex translate-y-2 items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            View details
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 p-5">
        <h3 className="line-clamp-2 font-serif text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
          {product.name}
        </h3>
        {product.price && <p className="text-lg font-bold text-primary">{product.price}</p>}
      </div>
    </article>
  )
}
