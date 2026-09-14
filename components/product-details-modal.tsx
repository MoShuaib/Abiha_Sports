'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { X, MessageCircle } from 'lucide-react'
import type { Product } from '@/lib/products'
import { whatsappUrl } from '@/lib/products'

interface ProductDetailsModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

export function ProductDetailsModal({ product, isOpen, onClose }: ProductDetailsModalProps) {
  useEffect(() => {
    if (!isOpen) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen, onClose])

  if (!isOpen || !product) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      style={{ animation: 'overlay-in 0.25s ease both' }}
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-background shadow-2xl"
        style={{ animation: 'modal-in 0.35s cubic-bezier(0.22, 1, 0.36, 1) both' }}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="sticky top-0 right-0 z-10 float-right m-4 rounded-full bg-primary p-2 text-primary-foreground transition-transform hover:scale-110"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-6 lg:p-8">
          <div className="relative mb-6 aspect-4/3 overflow-hidden rounded-2xl bg-secondary">
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

          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-4xl font-semibold text-foreground">{product.name}</h2>
              {product.price && <p className="mt-3 text-2xl font-bold text-primary">{product.price}</p>}
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-foreground">About this product</h3>
              <p className="leading-7 text-muted-foreground">{product.description}</p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-foreground">Best for</h3>
              <p className="leading-7 text-muted-foreground">{product.use}</p>
            </div>

            <div>
              <h3 className="mb-4 font-semibold text-foreground">Specifications</h3>
              <div className="space-y-3">
                {product.specs.map((spec, index) => (
                  <div
                    key={spec.label}
                    className="flex items-center justify-between rounded-lg border border-border bg-secondary/50 px-4 py-3"
                    style={{ animation: `modal-in 0.4s ease both ${index * 40}ms` }}
                  >
                    <dt className="text-sm font-medium tracking-wide text-muted-foreground uppercase">{spec.label}</dt>
                    <dd className="text-right text-sm font-medium text-foreground">{spec.value}</dd>
                  </div>
                ))}
              </div>
            </div>

            {product.weights.length > 0 && (
              <div>
                <h3 className="mb-3 font-semibold text-foreground">Available weights</h3>
                <div className="flex flex-wrap gap-2">
                  {product.weights.map((weight) => (
                    <span
                      key={weight}
                      className="rounded-full border border-primary bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-transform hover:-translate-y-0.5"
                    >
                      {weight}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-3 pt-4">
              <Link
                href="/contact"
                className="btn-lift flex-1 rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-primary-foreground"
              >
                Get in touch
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-primary bg-background px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
