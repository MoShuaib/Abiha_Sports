import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { whatsappUrl } from '@/lib/products'

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-accent/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-16 size-72 rounded-full bg-background/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
        <div>
          <div className="mb-5">
            <Image src="/logo.png" alt="Abiha Sports Industries" width={100} height={100} className="h-20 w-auto object-contain" />
          </div>
          <p className="max-w-sm text-sm leading-6 text-primary-foreground/70">
            Traditional strength, made for modern training. Handcrafted akhaada equipment from Meerut, made to move with you.
          </p>
        </div>
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/50">Explore</p>
          <div className="flex flex-col items-start gap-3 text-sm text-primary-foreground/75">
            <Link href="/products" className="transition-colors hover:text-accent">All products</Link>
            <Link href="/about" className="transition-colors hover:text-accent">Our story</Link>
            <Link href="/contact" className="transition-colors hover:text-accent">Get in touch</Link>
          </div>
        </div>
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/50">Visit the workshop</p>
          <div className="flex flex-col gap-4 text-sm leading-6 text-primary-foreground/75">
            <span className="flex gap-3">
              <MapPin className="mt-1 size-4 shrink-0 text-accent" />
              Meerut, Uttar Pradesh
              <br />
              India
            </span>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-semibold text-accent transition-transform hover:translate-x-1">
              Talk to our team on WhatsApp <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="relative mx-auto flex max-w-7xl flex-col gap-3 border-t border-primary-foreground/15 px-5 py-6 text-xs text-primary-foreground/50 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <span>© 2026 Abiha Sports. Built with purpose.</span>
        <span>Manufactured & distributed from Meerut</span>
      </div>
    </footer>
  )
}
