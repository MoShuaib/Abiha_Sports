import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Check, Hammer, Heart, Leaf, Ruler } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'

export const metadata = { title: 'Our story | Abiha Sports Industries', description: 'Learn how Abiha Sports Industries manufactures and distributes traditional Indian akhaada equipment from Meerut.' }

const values = [
  { icon: Hammer, title: 'Shape with intention', text: 'We select solid, seasoned wood and turn every club for balance, not just appearance.' },
  { icon: Ruler, title: 'Finish for feel', text: 'Edges are softened, grips are smoothed, and each piece is checked before it leaves us.' },
  { icon: Leaf, title: 'Respect the material', text: 'We make the most of each piece of hardwood, creating durable tools with a natural character.' },
  { icon: Heart, title: 'Serve the practice', text: 'Our advice starts with your goals, whether you need one pair or a full training setup.' },
]

const steps = [
  { title: 'Straightforward guidance', text: 'Tell us your experience, training goal, and preferred weight. We help you choose with practical advice.' },
  { title: 'Careful finishing', text: 'Each piece is checked for finish, grip, and balance before it is prepared for dispatch.' },
  { title: 'Made for real orders', text: 'From individual pieces to akhaada and reseller requirements, we discuss quantities openly.' },
  { title: 'Reliable communication', text: 'You receive clear details on product selection, packing, and dispatch before we proceed.' },
]

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="mx-auto max-w-7xl px-5 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-foreground">Our story</p>
              <h1 className="mt-4 font-serif text-5xl font-semibold leading-tight tracking-tight sm:text-7xl">
                Strength is a <span className="text-primary">craft.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                Abiha Sports brings the honest, purposeful tools of the Indian akhaada to athletes, coaches, and homes across the country. We are a manufacturer and distributor, grounded in the belief that good equipment should disappear in your hand and let your practice speak.
              </p>
            </Reveal>
            <Reveal delay={120} className="relative h-[400px] overflow-hidden rounded-3xl shadow-[0_30px_70px_-40px_rgba(20,30,50,0.45)] sm:h-[500px] lg:h-[600px]">
              <Image src="/about-1.jpg" alt="Traditional Indian wooden club on workbench" fill className="object-cover transition-transform duration-700 hover:scale-105" priority />
            </Reveal>
          </div>
        </section>

        <section className="relative overflow-hidden bg-primary text-primary-foreground">
          <div className="pointer-events-none absolute -left-20 top-10 size-80 rounded-full bg-accent/15 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1fr_1.2fr] lg:gap-20 lg:px-8 lg:py-24">
            <Reveal className="relative h-[400px] overflow-hidden rounded-3xl sm:h-[500px] lg:h-auto">
              <Image src="/about-2.jpg" alt="Craftsman shaping a wooden club" fill className="object-cover" />
            </Reveal>
            <div className="flex flex-col justify-center">
              <Reveal>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">From Meerut</p>
                <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight sm:text-5xl">Where the work is still done by hand.</h2>
              </Reveal>
              <div className="mt-12 grid gap-8 sm:grid-cols-2">
                {values.map((item, index) => (
                  <Reveal key={item.title} delay={index * 80}>
                    <item.icon className="size-6 text-accent" />
                    <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-primary-foreground/65">{item.text}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:px-8 lg:py-28">
          <Reveal delay={80} className="order-2 flex flex-col gap-5 text-muted-foreground lg:order-1">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-foreground">Why customers return</p>
            <h2 className="mb-4 font-serif text-4xl font-semibold text-foreground">A relationship, not just a shipment.</h2>
            {[
              'Practical guidance on weights and equipment for your space.',
              'Consistent manufacturing for repeat orders and growing gyms.',
              'Direct access to a team that understands the tools we sell.',
            ].map((text) => (
              <p key={text} className="flex gap-4 leading-7">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent-foreground">
                  <Check className="size-4" />
                </span>
                <span>{text}</span>
              </p>
            ))}
            <Link href="/contact" className="btn-lift mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-foreground px-6 py-3 font-semibold text-background">
              Talk to Abiha Sports <ArrowRight className="size-4" />
            </Link>
          </Reveal>
          <Reveal className="relative order-1 h-[350px] overflow-hidden rounded-3xl shadow-[0_30px_70px_-40px_rgba(20,30,50,0.4)] sm:h-[450px] lg:order-2">
            <Image src="/about-3.jpg" alt="Collection of wooden clubs" fill className="object-cover transition-transform duration-700 hover:scale-105" />
          </Reveal>
        </section>

        <section className="bg-secondary/50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-foreground">What you can expect</p>
              <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl">A clear order, from first question to final swing.</h2>
            </Reveal>
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <Reveal key={step.title} delay={index * 90} className="rounded-2xl border border-border bg-background p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lg">
                  <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-accent/10 text-accent-foreground">
                    <span className="font-serif text-xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
