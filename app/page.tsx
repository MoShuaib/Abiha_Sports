import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, Factory, Handshake, ShieldCheck, Sparkles } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { FeaturedProducts } from '@/components/featured-products'
import { Reveal } from '@/components/reveal'
import { products } from '@/lib/products'
import { faqItems } from '@/lib/faq'

const trainingSpaces = [
  { title: 'Modern gyms', text: 'Add versatile clubbell, mace, and mobility work to functional strength programming.', icon: Factory },
  { title: 'Fitness studios', text: 'Create engaging movement sessions with equipment that looks as good as it performs.', icon: Sparkles },
  { title: 'Home training', text: 'Build a compact practice with practical weights for conditioning, mobility, and grip work.', icon: ShieldCheck },
  { title: 'Akhaadas & institutions', text: 'Equip traditional spaces, schools, and training programs with dependable wooden tools.', icon: Handshake },
]

const process = ['Tell us your training goal', 'Choose your equipment and weight', 'We check, pack, and prepare your order', 'Train with confidence wherever you are']

const marqueeItems = ['Wooden Mugdar', 'Hanuman Gada', 'Indian Clubs', 'Parallettes', 'Danda', 'Made in Meerut', 'Sheesham hardwood', 'Hand-finished']

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative mx-auto grid max-w-7xl items-center gap-12 overflow-hidden px-5 pb-20 pt-12 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:pb-28 lg:pt-20">
          <div className="pointer-events-none absolute -left-24 top-10 size-64 rounded-full bg-accent/20 blur-3xl" />
          <div>
            <p className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-accent-foreground">
              <span className="pulse-dot size-2 rounded-full bg-accent" /> Strength for every arena
            </p>
            <h1 className="max-w-2xl font-serif text-5xl font-semibold leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-8xl">
              Train with <span className="text-primary">heritage.</span>
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-8 text-muted-foreground">
              Handcrafted wooden training equipment for serious practice — from modern gyms and fitness studios to home training spaces. Made in Meerut, India.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link href="/products" className="btn-lift inline-flex items-center gap-3 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground">
                Explore equipment <ArrowRight className="size-4" />
              </Link>
              <Link href="/about" className="text-sm font-semibold text-foreground underline decoration-border underline-offset-8 transition-colors hover:decoration-accent">
                Why Abiha Sports
              </Link>
            </div>
            <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><Check className="size-4 text-accent-foreground" /> Solid hardwood</span>
              <span className="flex items-center gap-2"><Check className="size-4 text-accent-foreground" /> Built to last</span>
              <span className="flex items-center gap-2"><Check className="size-4 text-accent-foreground" /> Packed with care</span>
            </div>
          </div>
          <div className="relative">
            <div className="relative min-h-[480px] overflow-hidden rounded-[2rem] bg-primary shadow-[0_40px_80px_-40px_rgba(20,30,50,0.55)] sm:min-h-[560px]">
              <Image
                src="/abiha-hero-training.png"
                alt="Handcrafted wooden clubbells and mace beside a modern gym bench"
                fill
                priority
                className="object-cover "
                sizes="(max-width: 1024px) 100vw, 48vw"
              />
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-border/60 bg-background/95 p-5 backdrop-blur sm:inset-x-8 sm:bottom-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Abiha Sports Industries</p>
                <p className="mt-2 font-serif text-2xl font-semibold text-foreground">Traditional craft. Contemporary movement.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden border-y border-border bg-primary py-4 text-primary-foreground">
          <div className="flex w-max marquee-track gap-10 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.22em] text-primary-foreground/75">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span key={`${item}-${index}`} className="flex items-center gap-10">
                {item}
                <span className="size-1.5 rounded-full bg-accent" />
              </span>
            ))}
          </div>
        </section>

        <section className="border-b border-border bg-secondary">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:grid-cols-3 lg:px-8">
            {[
              { title: 'Manufacturer + distributor', text: 'One team from workshop to dispatch, with direct guidance on every order.' },
              { title: 'Made in Meerut', text: "Rooted in the city's woodworking and Indian training heritage." },
              { title: 'Built around your practice', text: 'Choose regular weights or ask about a custom requirement.' },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <p className="text-sm font-bold text-foreground">{item.title}</p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-foreground">Find your fit</p>
              <h2 className="mt-4 max-w-xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">Equipment for the way you train.</h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="max-w-md text-base leading-7 text-muted-foreground">
                A thoughtful range of wooden tools for strength, mobility, coordination, and movement practice across every kind of training space.
              </p>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trainingSpaces.map(({ title, text, icon: Icon }, index) => (
              <Reveal key={title} delay={index * 90} as="article" className="group rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-xl">
                <div className="flex size-11 items-center justify-center rounded-full bg-secondary text-primary transition-transform duration-500 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-6 font-serif text-2xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden bg-primary text-primary-foreground">
          <div className="pointer-events-none absolute right-0 top-0 size-96 rounded-full bg-accent/15 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[.8fr_1.2fr] lg:px-8 lg:py-28">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">What we make</p>
              <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl">The right tool changes the whole session.</h2>
              <p className="mt-6 max-w-md text-base leading-7 text-primary-foreground/70">
                Abiha Sports Industries combines traditional Indian equipment forms with practical finishing for everyday strength and movement training.
              </p>
              <Link href="/products" className="btn-lift mt-8 inline-flex items-center gap-3 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground hover:bg-background">
                View the full range <ArrowRight className="size-4" />
              </Link>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {products.slice(0, 4).map((product, index) => (
                <Reveal key={product.slug} delay={index * 80} className="border-b border-primary-foreground/20 pb-5">
                  <p className="font-serif text-2xl font-semibold">{product.name}</p>
                  <p className="mt-2 text-sm leading-6 text-primary-foreground/65">{product.use}</p>
                  <p className="mt-3 text-xs font-bold uppercase tracking-wider text-accent">{product.weights.join(' · ')}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-foreground">Featured range</p>
              <h2 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">Start with the essentials.</h2>
            </Reveal>
            <Link href="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground underline decoration-border underline-offset-8 transition-colors hover:decoration-accent">
              Browse all equipment <ArrowRight className="size-4" />
            </Link>
          </div>
          <FeaturedProducts />
        </section>

        <section className="border-y border-border bg-secondary">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
              <Reveal>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-foreground">A simple buying journey</p>
                <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl">From your goal to your grip.</h2>
                <p className="mt-6 text-base leading-7 text-muted-foreground">
                  Whether you are placing one order or equipping a full facility, we keep the conversation practical and clear.
                </p>
              </Reveal>
              <div className="grid gap-0 sm:grid-cols-2">
                {process.map((step, index) => (
                  <Reveal key={step} delay={index * 70} className="border-t border-border py-6 sm:nth-[n+3]:border-b">
                    <span className="font-mono text-sm text-accent-foreground">0{index + 1}</span>
                    <p className="mt-3 font-serif text-2xl font-semibold text-foreground">{step}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[1fr_.9fr] lg:items-center lg:px-8 lg:py-28">
          <Reveal className="relative min-h-[360px] overflow-hidden rounded-[2rem] bg-secondary shadow-[0_30px_70px_-40px_rgba(20,30,50,0.4)]">
            <Image
              src="/abiha-gym-training.png"
              alt="Athletes training with handcrafted wooden equipment from Abiha Sports Industries"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-foreground">Made with intention</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl">Wood, weight, and a long view.</h2>
            <p className="mt-6 text-base leading-7 text-muted-foreground">
              Good equipment should invite consistency. That is why our range focuses on honest materials, comfortable handling, and useful weight options for progressive training.
            </p>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              As both manufacturer and distributor, Abiha Sports Industries can speak to the product from the inside out — and help you make a choice that suits your space and practice.
            </p>
            <Link href="/about" className="btn-lift mt-8 inline-flex items-center gap-3 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">
              Meet Abiha Sports Industries <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </section>

        <section className="border-y border-border bg-secondary">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[.75fr_1.25fr] lg:px-8 lg:py-28">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-foreground">Common questions</p>
              <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl">Before you place an order.</h2>
              <p className="mt-6 max-w-sm text-base leading-7 text-muted-foreground">
                A few helpful answers about equipment, weights, ordering, and training spaces. Still deciding? We are happy to talk it through.
              </p>
              <Link href="/contact" className="btn-lift mt-8 inline-flex items-center gap-3 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">
                Ask us directly <ArrowRight className="size-4" />
              </Link>
            </Reveal>
            <div className="flex flex-col border-t border-border">
              {faqItems.map((item) => (
                <details key={item.question} className="group border-b border-border">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-semibold text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
                    <span>{item.question}</span>
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-border text-xl font-normal leading-none text-primary transition-transform duration-300 group-open:rotate-45">+</span>
                  </summary>
                  <div className="faq-answer">
                    <p className="overflow-hidden max-w-2xl pb-6 pr-12 text-sm leading-7 text-muted-foreground">{item.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-accent">
          <div className="pointer-events-none absolute -right-10 -top-10 size-56 rounded-full bg-background/25 blur-2xl" />
          <div className="relative mx-auto flex max-w-7xl flex-col gap-7 px-5 py-16 sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-foreground">Let&apos;s build your setup</p>
              <h2 className="mt-3 max-w-2xl font-serif text-4xl font-semibold leading-tight text-accent-foreground sm:text-5xl">
                Have a weight, quantity, or training goal in mind?
              </h2>
            </Reveal>
            <Link href="/contact" className="btn-lift inline-flex shrink-0 items-center gap-3 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground">
              Start an enquiry <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
