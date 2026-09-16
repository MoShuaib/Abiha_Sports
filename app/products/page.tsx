'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Search } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ProductCard } from '@/components/product-card'
import { Reveal } from '@/components/reveal'
import { categories, products } from '@/lib/products'
import type { Product } from '@/lib/products'
import { ProductDetailsModal } from '@/components/product-details-modal'

export default function ProductsPage() {
  const [category, setCategory] = useState('All equipment')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const visible = products.filter((p) => {
    const matchesCategory = category === 'All equipment' || p.shortName === category
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
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
        <section className="mx-auto max-w-7xl px-5 pb-14 pt-16 lg:px-8 lg:pb-20 lg:pt-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-foreground">The Abiha collection</p>
              <h1 className="mt-4 font-serif text-5xl font-semibold leading-tight tracking-tight sm:text-7xl">
                Equipment for the <span className="text-primary">long haul.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                From the first swing to the thousandth, our wooden training tools are made to feel good in the hand and hold up under real practice — whether you train in a gym, studio, home, or traditional space.
              </p>
            </Reveal>
            <Reveal delay={120} className="relative h-[350px] w-full overflow-hidden rounded-3xl shadow-[0_30px_70px_-40px_rgba(20,30,50,0.45)] sm:h-[450px] lg:h-[500px]">
              <Image
                src="/products-hero.jpg"
                alt="Traditional Indian wooden training equipment collection"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
            </Reveal>
          </div>
        </section>

        <section className="sticky top-20 z-30 border-y border-border bg-secondary/90 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div className="relative w-full lg:w-72" aria-label="Filter products">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full appearance-none rounded-full border border-input bg-background py-2 pl-4 pr-10 text-sm font-medium outline-none ring-offset-background transition-shadow focus:ring-2 focus:ring-ring cursor-pointer"
              >
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
            <div className="relative w-full lg:w-96">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="size-4 text-muted-foreground" />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full rounded-full border border-input bg-background py-2 pl-10 pr-4 text-sm outline-none ring-offset-background transition-shadow focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-20">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">Showing {visible.length} pieces</p>
            <p className="hidden text-sm text-muted-foreground sm:block">Made in Meerut · Ships across India · Bulk orders welcome</p>
          </div>
          {visible.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-border bg-secondary/40 px-6 py-16 text-center">
              <p className="font-serif text-2xl font-semibold">No pieces match that search.</p>
              <p className="mt-2 text-sm text-muted-foreground">Try another keyword or browse all equipment.</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visible.map((product, index) => (
                <Reveal key={product.slug} delay={index * 60}>
                  <ProductCard product={product} onClick={() => handleProductClick(product)} />
                </Reveal>
              ))}
            </div>
          )}
        </section>

        <section className="border-t border-border bg-secondary">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 py-12 sm:grid-cols-3 lg:px-8">
            {[
              { title: 'Need a different weight?', text: 'Ask Abiha Sports Industries about your training level or custom requirement.' },
              { title: 'Buying in quantity?', text: 'We support akhaadas, gyms, retailers, and institutional enquiries.' },
              { title: 'Not sure what to choose?', text: "Share your use case and we'll recommend a practical starting point." },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <p className="text-sm font-bold text-foreground">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      <ProductDetailsModal product={selectedProduct} isOpen={isModalOpen} onClose={handleCloseModal} />
      <SiteFooter />
    </>
  )
}
