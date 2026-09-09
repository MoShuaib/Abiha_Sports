'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
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
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image src="/logo.png" alt="Abiha Sports Industries" width={80} height={80} className="h-14 w-auto object-contain" />
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {links.map((link) => <Link key={link.href} href={link.href} className={cn('text-sm font-medium transition-colors hover:text-primary', pathname === link.href ? 'text-primary' : 'text-muted-foreground')}>{link.label}</Link>)}
        </nav>
        <Link href="/contact" className="hidden items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5 md:flex">Request a quote <ArrowUpRight className="size-4" /></Link>
        <button className="rounded-full p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}><Menu className="size-6" /></button>
      </div>
      {open && <nav className="flex flex-col gap-1 border-t border-border px-5 py-4 md:hidden" aria-label="Mobile navigation">{links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className={cn('rounded-lg px-3 py-3 text-sm font-medium', pathname === link.href ? 'bg-secondary text-primary' : 'text-muted-foreground')}>{link.label}</Link>)}<Link href="/contact" onClick={() => setOpen(false)} className="mt-2 rounded-lg bg-accent px-3 py-3 text-center text-sm font-semibold text-accent-foreground">Request a quote</Link></nav>}
    </header>
  )
}
