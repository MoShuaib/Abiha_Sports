'use client'

import { FormEvent, useState } from 'react'
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { emailAddress, phoneNumber } from '@/lib/products'
import { supabase } from '@/lib/supabase'

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setError('')

    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const phone = formData.get('phone')
    const email = formData.get('email')
    const message = formData.get('message')

    const { error: supabaseError } = await supabase
      .from('contact_queries')
      .insert([
        { name, phone, email, message },
      ])

    setIsSubmitting(false)

    if (supabaseError) {
      setError('Something went wrong. Please try again later.')
      console.error(supabaseError)
    } else {
      setSent(true)
    }
  }

  return (
    <>
      <SiteHeader />
      <main>
        <section className="mx-auto grid max-w-7xl gap-14 px-5 pb-20 pt-16 lg:grid-cols-[.8fr_1.2fr] lg:px-8 lg:pb-28 lg:pt-24">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-foreground">Get in touch</p>
            <h1 className="mt-4 font-serif text-5xl font-semibold leading-tight tracking-tight sm:text-7xl">
              Let&apos;s build your <span className="text-primary">practice.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-8 text-muted-foreground">
              Whether you are setting up an akhaada, stocking a store, or starting at home, tell us what you need. We&apos;ll help you find the right fit.
            </p>
            <div className="mt-10 flex flex-col gap-5 text-sm">
              <a href={`tel:${phoneNumber}`} className="flex items-start gap-4 hover:text-accent-foreground">
                <Phone className="mt-0.5 size-5 text-accent-foreground" />
                <span>
                  <strong className="block text-foreground">Call us</strong>
                  <span className="text-muted-foreground">{phoneNumber}</span>
                </span>
              </a>
              <a href={`mailto:${emailAddress}`} className="flex items-start gap-4 hover:text-accent-foreground">
                <Mail className="mt-0.5 size-5 text-accent-foreground" />
                <span>
                  <strong className="block text-foreground">Email us</strong>
                  <span className="text-muted-foreground">{emailAddress}</span>
                </span>
              </a>
              <span className="flex items-start gap-4">
                <MapPin className="mt-0.5 size-5 text-accent-foreground" />
                <span>
                  <strong className="block text-foreground">Find us</strong>
                  <span className="text-muted-foreground">Hmayun Nagar, Merrut </span>
                </span>
              </span>
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-secondary p-6 sm:p-10">
            <h2 className="font-serif text-3xl font-semibold">Request a quote</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Share a few details and our team will get back to you. We can help with weight selection, bulk quantities, custom requirements, and safe dispatch planning.
            </p>
            {sent ? (
              <div className="mt-10 rounded-2xl bg-background p-8 text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <ArrowRight className="size-5" />
                </div>
                <h3 className="mt-5 font-serif text-2xl font-semibold">Message received.</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Thank you. We&apos;ll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-8 flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
                    Your name
                    <input required name="name" className="rounded-xl border border-input bg-background px-4 py-3 font-normal outline-none ring-offset-background focus:ring-2 focus:ring-ring" placeholder="Rahul Sharma" />
                  </label>
                  <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
                    Phone number
                    <input required type="tel" name="phone" className="rounded-xl border border-input bg-background px-4 py-3 font-normal outline-none ring-offset-background focus:ring-2 focus:ring-ring" placeholder="+91 98765 43210" />
                  </label>
                </div>
                <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
                  Email address
                  <input required type="email" name="email" className="rounded-xl border border-input bg-background px-4 py-3 font-normal outline-none ring-offset-background focus:ring-2 focus:ring-ring" placeholder="you@example.com" />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
                  What are you looking for?
                  <textarea required name="message" rows={5} className="resize-none rounded-xl border border-input bg-background px-4 py-3 font-normal outline-none ring-offset-background focus:ring-2 focus:ring-ring" placeholder="Tell us about the equipment, weights, and quantity you need..." />
                </label>
                
                {error && <p className="text-sm text-red-500">{error}</p>}

                <button disabled={isSubmitting} type="submit" className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-50">
                  {isSubmitting ? 'Sending...' : 'Send enquiry'} <ArrowRight className="size-4" />
                </button>
              </form>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
