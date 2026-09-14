'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, ArrowUpRight, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const links = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'Our story' },
  { href: '/contact', label: 'Contact' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b transition-all duration-300',
        scrolled
          ? 'border-border/80 bg-background/85 shadow-[0_12px_40px_-24px_rgba(20,30,50,0.45)] backdrop-blur-xl'
          : 'border-transparent bg-background/70 backdrop-blur-md',
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="flex items-center transition-transform duration-300 hover:scale-[1.03]" onClick={() => setOpen(false)}>
          <Image src="/logo.png" alt="Abiha Sports Industries" width={80} height={80} priority className="h-14 w-auto object-contain" />
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'nav-link text-sm font-medium transition-colors hover:text-primary',
                pathname === link.href ? 'is-active text-primary' : 'text-muted-foreground',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="btn-lift hidden items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground md:flex"
        >
          Request a quote <ArrowUpRight className="size-4" />
        </Link>
        <button
          className="rounded-full p-2 transition-colors hover:bg-secondary md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>
      <nav
        className={cn(
          'grid overflow-hidden border-t border-border transition-[grid-template-rows] duration-300 md:hidden',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr] border-transparent',
        )}
        aria-label="Mobile navigation"
      >
        <div className="min-h-0">
          <div className="flex flex-col gap-1 px-5 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'rounded-lg px-3 py-3 text-sm font-medium transition-colors',
                  pathname === link.href ? 'bg-secondary text-primary' : 'text-muted-foreground hover:bg-secondary/70',
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-accent px-3 py-3 text-center text-sm font-semibold text-accent-foreground"
            >
              Request a quote
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
