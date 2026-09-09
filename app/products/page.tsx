'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Search } from 'lucide-react'
import { SiteHeader } from '@/components/site-header' 
import { SiteFooter } from '@/components/site-footer'
import { ProductCard } from '@/components/product-card'
import { categories, products } from '@/lib/products'
import type { Product } from '@/lib/products'
import { ProductDetailsModal } from '@/components/product-details-modal'

export default function ProductsPage() {
  const [category, setCategory] = useState('All equipment')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const visible = products.filter((p) => {
    const matchesCategory = category === 'All equipment' || p.category === category
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProduct(null), 300)
  }

  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero Section */}
        <section className="mx-auto max-w-7xl px-5 pb-14 pt-16 lg:px-8 lg:pb-20 lg:pt-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-foreground">
                The Abiha collection
              </p>
              <h1 className="mt-4 font-serif text-5xl font-semibold leading-tight tracking-tight sm:text-7xl">
                Equipment for the{' '}
                <span className="text-primary">long haul.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                From the first swing to the thousandth, our wooden training tools
                are made to feel good in the hand and hold up under real practice —
                whether you train in a gym, studio, home, or traditional space.
              </p>
            </div>
            <div className="relative h-[350px] w-full overflow-hidden rounded-3xl sm:h-[450px] lg:h-[500px]">
              <Image src="/products-hero.jpg" alt="Traditional Indian wooden training equipment collection" fill className="object-cover transition-transform duration-700 hover:scale-105" priority />
            </div>
          </div>
        </section>

        {/* Category Filter and Search */}
        <section className="border-y border-border bg-secondary">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div className="flex flex-wrap gap-2" aria-label="Filter products">
              {categories.map((item) => (
                <button
                  key={item}
                  onClick={() => setCategory(item)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    category === item
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:bg-background hover:text-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="relative w-full lg:w-72">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="size-4 text-muted-foreground" />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full rounded-full border border-input bg-background py-2 pl-10 pr-4 text-sm outline-none ring-offset-background focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-20">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing {visible.length} pieces
            </p>
            <p className="hidden text-sm text-muted-foreground sm:block">
              Made in Meerut · Ships across India · Bulk orders welcome
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((product) => (
              <ProductCard
                key={product.slug}
                product={product}
                onClick={() => handleProductClick(product)}
              />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border bg-secondary">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 py-12 sm:grid-cols-3 lg:px-8">
            <div>
              <p className="text-sm font-bold text-foreground">Need a different weight?</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Ask Abiha Sports Industries about your training level or custom requirement.
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">Buying in quantity?</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                We support akhaadas, gyms, retailers, and institutional enquiries.
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">Not sure what to choose?</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Share your use case and we&apos;ll recommend a practical starting point.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Product Details Modal */}
      <ProductDetailsModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      <SiteFooter />
    </>
  )
}
