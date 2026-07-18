import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Camera,
  Video,
  Heart,
  Star,
  Check,
  Aperture,
  Film,
  Album,
  Sparkles,
  MapPin,
  Quote,
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { CtaBand } from '@/components/cta-band'
import { WhatsAppFloat } from '@/components/whatsapp-float'
import { SectionHeading } from '@/components/ornament'

export const metadata: Metadata = {
  title: 'Wedding Photography — Group of Infinity | Rajasthani Wedding Photographer',
  description:
    'Heritage Rajasthani wedding photography — candid, cinematic aur royal. Pre-wedding shoots, full-day coverage, films & albums. Book Group of Infinity for timeless memories.',
}

const services = [
  { icon: Camera, title: 'Candid Photography', desc: 'Bina pose ke, dil se — asli emotions ki tasveerein.' },
  { icon: Film, title: 'Cinematic Films', desc: 'Filmy highlight reels aur full wedding films.' },
  { icon: Heart, title: 'Pre-Wedding Shoots', desc: 'Desert, palace ya haveli — aapki love story.' },
  { icon: Aperture, title: 'Traditional Coverage', desc: 'Har rasm — haldi, mehndi, phere — sab kaid.' },
  { icon: Video, title: 'Drone Coverage', desc: 'Aerial shots jo aapke venue ki shaan dikhaye.' },
  { icon: Album, title: 'Premium Albums', desc: 'Hand-crafted, heritage-style printed albums.' },
]

const gallery = [
  { src: '/photo-bride.png', alt: 'Rajasthani bride portrait', span: 'row-span-2' },
  { src: '/photo-couple.png', alt: 'Royal couple portrait', span: '' },
  { src: '/photo-haldi.png', alt: 'Haldi ceremony', span: '' },
  { src: '/photo-groom.png', alt: 'Groom on horse', span: 'row-span-2' },
  { src: '/photo-mandap.png', alt: 'Wedding mandap', span: '' },
  { src: '/photo-prewedding.png', alt: 'Pre-wedding desert shoot', span: '' },
  { src: '/photo-details.png', alt: 'Wedding detail flat lay', span: '' },
  { src: '/hero-wedding.png', alt: 'Palace wedding couple', span: '' },
]

const packages = [
  {
    name: 'Classic',
    price: '₹45,000',
    points: ['1 photographer', 'Single-day coverage', '150+ edited photos', 'Online gallery'],
    popular: false,
  },
  {
    name: 'Signature',
    price: '₹85,000',
    points: ['2 photographers + 1 cinematographer', 'Full wedding coverage', 'Highlight film + album', 'Decorated car included'],
    popular: true,
  },
  {
    name: 'Royal',
    price: '₹1,50,000',
    points: ['Full team + drone', 'Multi-day + pre-wedding', 'Cinematic film + luxury album', 'Two cars included'],
    popular: false,
  },
]

const process = [
  { n: '01', t: 'Consultation', d: 'Aapki story, style aur dates samajhte hain.' },
  { n: '02', t: 'Moodboard', d: 'Shoot ka look & feel plan karte hain.' },
  { n: '03', t: 'The Shoot', d: 'Event ke din poori team pooch-taach ke saath.' },
  { n: '04', t: 'Delivery', d: 'Edited photos, film aur album time par.' },
]

const stats = [
  { icon: Heart, v: '350+', l: 'Weddings' },
  { icon: Camera, v: '5 Lakh+', l: 'Frames Shot' },
  { icon: MapPin, v: '15+', l: 'Cities' },
  { icon: Star, v: '4.9/5', l: 'Rating' },
]

const testimonials = [
  { name: 'Aditi & Sameer', place: 'Jaipur', text: 'Har frame ek painting jaisi. Pre-wedding reel dekhkar rona aa gaya — itna khoobsurat!' },
  { name: 'Meera & Arjun', place: 'Udaipur', text: 'Candid team ne bina disturb kiye poori shaadi capture ki. Album to heirloom ban gaya.' },
  { name: 'Kunwar Family', place: 'Bikaner', text: 'Royal touch har photo me. Drone shots ne venue ki shaan chaar-guna kar di.' },
]

const faqs = [
  { q: 'Kya aap destination weddings cover karte hain?', a: 'Bilkul. Poore Rajasthan aur bahar bhi travel karte hain. Travel & stay package me add ho jata hai.' },
  { q: 'Delivery me kitna samay lagta hai?', a: 'Highlight reel 7 din me, poora album aur film 3-4 hafton me.' },
  { q: 'Kya raw photos milti hain?', a: 'Curated edited photos milti hain. Raw files special request par.' },
  { q: 'Car bhi saath me mil sakti hai?', a: 'Haan! Photography ke saath decorated car combined package me sasti pad jati hai.' },
]

export default function PhotographyPage() {
  return (
    <main className="bg-background">
      <SiteHeader />
      <PageHero
        image="/photo-couple.png"
        eyebrow="Wedding Photography"
        title="Timeless Rajasthani Wedding Stories"
        description="Candid muskaan se lekar royal portraits tak — aapki shaadi ki har rasm ko cinematic andaaz me sanjote hain."
      />

      {/* Stats */}
      <section className="bg-maroon">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div key={s.l} className="flex flex-col items-center text-center">
              <s.icon className="h-7 w-7 text-accent" />
              <span className="mt-3 font-serif text-3xl font-bold text-cream sm:text-4xl">{s.v}</span>
              <span className="mt-1 text-sm uppercase tracking-wide text-cream/70">{s.l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Craft"
          title="Har Tasveer Me Ek Kahani"
          description="9 saal se Rajasthan ki shaadiyon ko lens me kaid kar rahe hain. Hamare liye photography sirf kaam nahi — ye ehsaas hai."
        />
      </section>

      {/* Services */}
      <section className="bg-secondary/60">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Services" title="Hum Kya Kya Karte Hain" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl border border-border bg-card p-7">
                <s.icon className="h-9 w-9 text-accent" />
                <h3 className="mt-4 font-serif text-xl font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery masonry */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Portfolio" title="Hamara Kaam" description="Kuch pyaar bhare pal jo hamesha ke liye kaid ho gaye." />
        <div className="mt-14 grid auto-rows-[200px] grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {gallery.map((g) => (
            <div key={g.src} className={`group relative overflow-hidden rounded-xl ${g.span}`}>
              <Image src={g.src} alt={g.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-maroon-dark/0 transition-colors group-hover:bg-maroon-dark/30" />
            </div>
          ))}
        </div>
      </section>

      {/* Feature banner */}
      <section className="relative overflow-hidden">
        <Image src="/photo-mandap.png" alt="" fill className="object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-maroon-dark/85" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading align="left" invert eyebrow="Signature Style" title="Royal, Candid & Cinematic" description="Rajasthan ke rang, roshni aur riwaaz — sab kuch hamare frames me. Documentary bhi, art bhi." />
            <ul className="mt-8 space-y-4">
              {['True-to-moment candid coverage', 'Palace & heritage-inspired portraits', 'Cinematic teasers within a week', 'Discreet, respectful team'].map((p) => (
                <li key={p} className="flex items-start gap-3 text-cream/90">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-80 overflow-hidden rounded-2xl lg:h-96">
            <Image src="/photo-prewedding.png" alt="Pre-wedding shoot" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Process" title="Shoot Se Delivery Tak" />
        <div className="mt-14 grid gap-8 md:grid-cols-4">
          {process.map((s) => (
            <div key={s.n} className="rounded-2xl border border-border bg-card p-6">
              <span className="font-serif text-4xl font-bold text-accent/50">{s.n}</span>
              <h3 className="mt-3 font-serif text-xl font-bold text-foreground">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section className="bg-secondary/60">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Packages" title="Photography Packages" description="Har package me quality guaranteed. Car ke saath combine karo aur bachao." />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {packages.map((p) => (
              <div key={p.name} className={`relative flex flex-col rounded-2xl border p-8 ${p.popular ? 'border-accent bg-maroon-dark text-cream shadow-lg' : 'border-border bg-card'}`}>
                {p.popular ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold uppercase tracking-wide text-accent-foreground">Most Popular</span>
                ) : null}
                <h3 className={`font-serif text-2xl font-bold ${p.popular ? 'text-cream' : 'text-foreground'}`}>{p.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className={`font-serif text-3xl font-bold ${p.popular ? 'text-accent' : 'text-primary'}`}>{p.price}</span>
                  <span className={`text-sm ${p.popular ? 'text-cream/70' : 'text-muted-foreground'}`}>onwards</span>
                </div>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm">
                      <Check className={`mt-0.5 h-4 w-4 shrink-0 ${p.popular ? 'text-accent' : 'text-primary'}`} />
                      <span className={p.popular ? 'text-cream/85' : 'text-muted-foreground'}>{pt}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-[1.03] ${p.popular ? 'bg-accent text-accent-foreground' : 'bg-primary text-primary-foreground'}`}>
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Happy Couples" title="Pyaar Bhare Alfaaz" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-border bg-card p-8">
              <Quote className="h-8 w-8 text-accent" />
              <div className="mt-3 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mt-4 text-pretty leading-relaxed text-foreground">{t.text}</blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="font-semibold text-foreground">{t.name}</span>
                <span className="text-muted-foreground"> · {t.place}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Combo */}
      <section className="bg-secondary/60">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Best Value" title="Photography + Decorated Car" description="Ek hi team se dono services lo — coordination easy, aur jeb par halka." />
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 font-semibold text-primary-foreground transition-transform hover:scale-[1.03]">
            <Sparkles className="h-5 w-5" /> Get Combo Quote
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Photography — Sawaal Jawaab" />
        <div className="mt-12 space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-xl border border-border bg-card p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg font-semibold text-foreground">
                {f.q}
                <span className="text-accent transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <CtaBand title="Apni Shaadi Ko Amar Banao" subtitle="Dates jaldi book ho jati hain — abhi baat karke apni tareekh reserve karein." />
      <SiteFooter />
      <WhatsAppFloat />
    </main>
  )
}
