'use client'

import Image from 'next/image'
import Link from 'next/link'
import { X, Phone } from 'lucide-react'
import type { Product } from '@/lib/products'
import { phoneNumber } from '@/lib/products'

interface ProductDetailsModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

export function ProductDetailsModal({
  product,
  isOpen,
  onClose,
}: ProductDetailsModalProps) {
  if (!isOpen || !product) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-background shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-0 right-0 z-10 float-right m-4 rounded-full bg-primary p-2 text-primary-foreground transition-transform hover:scale-110"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-6 lg:p-8">
          {/* Product Image */}
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-secondary mb-6">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 500px"
            />
            <span className="absolute left-4 top-4 rounded-full bg-background/90 px-4 py-2 text-sm font-semibold text-foreground">
              {product.category}
            </span>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Name and Price */}
            <div>
              <h2 className="font-serif text-4xl font-semibold text-foreground">
                {product.name}
              </h2>
              {product.price && (
                <p className="mt-3 text-2xl font-bold text-primary">
                  {product.price}
                </p>
              )}
            </div>

            {/* Description */}
            <div>
              <h3 className="font-semibold text-foreground mb-2">About this product</h3>
              <p className="leading-7 text-muted-foreground">
                {product.description}
              </p>
            </div>

            {/* Use Cases */}
            <div>
              <h3 className="font-semibold text-foreground mb-2">Best for</h3>
              <p className="leading-7 text-muted-foreground">
                {product.use}
              </p>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Specifications</h3>
              <div className="space-y-3">
                {product.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-center justify-between rounded-lg border border-border bg-secondary/50 px-4 py-3"
                  >
                    <dt className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                      {spec.label}
                    </dt>
                    <dd className="text-right text-sm font-medium text-foreground">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </div>
            </div>

            {/* Available Weights */}
            {product.weights.length > 0 && (
              <div>
                <h3 className="font-semibold text-foreground mb-3">Available weights</h3>
                <div className="flex flex-wrap gap-2">
                  {product.weights.map((weight) => (
                    <span
                      key={weight}
                      className="rounded-full border border-primary bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
                    >
                      {weight}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex gap-3 pt-4">
              <Link
                href="/contact"
                className="flex-1 rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-primary-foreground transition-all hover:bg-accent hover:text-accent-foreground"
              >
                Get in touch
              </Link>
              <a
                href={`https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=Hi, I'm interested in ${product.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 rounded-full border-2 border-primary bg-background px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
              >
                <Phone className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
