import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Car,
  Users,
  Fuel,
  Gauge,
  Snowflake,
  ShieldCheck,
  Check,
  MapPin,
  Sparkles,
  BadgeCheck,
  Clock,
  Plane,
  Heart,
  Route,
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { CtaBand } from '@/components/cta-band'
import { WhatsAppFloat } from '@/components/whatsapp-float'
import { SectionHeading } from '@/components/ornament'
import { ReviewSlider } from '@/components/review-slider'

export const metadata: Metadata = {
  title: 'Swift Car Rental in Jodhpur & Rajasthan',
  description:
    'Book chauffeur-driven Maruti Suzuki Swift cars in Jodhpur for weddings, city rides, airport transfers and Rajasthan outstation trips.',
  alternates: { canonical: '/car-rental' },
  openGraph: { url: '/car-rental', images: ['/swift-hero.png'] },
}

const cars = [
  {
    name: 'Swift City Ride',
    img: '/swift-city.png',
    tag: 'Clean & Comfortable',
    price: 'Custom quote',
    seats: '5',
    fuel: 'Petrol',
    ac: true,
    desc: 'City pickup, local events aur everyday travel ke liye clean, comfortable Swift.',
  },
  {
    name: 'Swift Chauffeur Ride',
    img: '/swift-chauffeur.png',
    tag: 'Chauffeur Driven',
    price: 'Custom quote',
    seats: '5',
    fuel: 'Petrol',
    ac: true,
    desc: 'Experienced chauffeur ke saath airport pickup, guest travel aur event movement.',
  },
  {
    name: 'Swift Outstation',
    img: '/swift-outstation.png',
    tag: 'Family & Outstation',
    price: 'Custom quote',
    seats: '5',
    fuel: 'Petrol',
    ac: true,
    desc: 'Rajasthan ke outstation trips ke liye economical aur comfortable Swift ride.',
  },
  {
    name: 'Decorated Wedding Swift',
    img: '/swift-wedding.png',
    tag: 'Wedding Ready',
    price: 'Custom quote',
    seats: '5',
    fuel: 'Petrol',
    ac: true,
    desc: 'Taaza phoolon se saji gaadi — bidaai ho ya baraat, yaadgaar ban jaaye.',
  },
]

const useCases = [
  { icon: Heart, title: 'Wedding & Baraat', desc: 'Decorated cars for dulha entry, bidaai aur mehmaan pickup.' },
  { icon: Plane, title: 'Airport Transfers', desc: 'Time ke pakke pickup & drop, poore Rajasthan me.' },
  { icon: Route, title: 'Outstation Trips', desc: 'Udaipur, Jaisalmer, Mount Abu — comfortable long drives.' },
  { icon: Users, title: 'Corporate & Events', desc: 'Guest movement aur VIP travel for events & shoots.' },
]

const included = [
  'Well-maintained, sanitized cars',
  'Experienced, uniformed chauffeurs',
  'On-time pickup guarantee',
  'Fuel within city limits',
  'Basic floral decoration on request',
  '24x7 support during booking',
]

const process = [
  { n: '01', t: 'Choose Your Ride', d: 'Fleet me se apni pasand ki car select karo.' },
  { n: '02', t: 'Share Details', d: 'Date, time, pickup aur route batao.' },
  { n: '03', t: 'Confirm Booking', d: 'Chhota advance dekar date reserve.' },
  { n: '04', t: 'Enjoy the Ride', d: 'Chauffeur time par haazir — aap bas baitho.' },
]

const addons = [
  { icon: Sparkles, title: 'Premium Flower Decor', price: '₹3,000+' },
  { icon: MapPin, title: 'Extra Kilometers', price: '₹18/km' },
  { icon: Clock, title: 'Extra Hours', price: '₹800/hr' },
  { icon: Users, title: 'Additional Car', price: 'On request' },
]

const rentalReviews = [
  { name: 'Rathore Family', place: 'Jodhpur', text: 'Swift bilkul saaf aur time par pahunchi. Driver professional tha aur booking bahut aasaan rahi.' },
  { name: 'Neha Sharma', place: 'Jaipur', text: 'Airport pickup se outstation drop tak ride comfortable rahi. Driver ne route aur timing dono achhe se manage kiye.' },
  { name: 'Aman & Family', place: 'Udaipur', text: 'Wedding ke liye decorated Swift li thi. Car presentation clean thi aur team coordination me responsive rahi.' },
]

const faqs = [
  { q: 'Kya driver ke saath car milti hai?', a: 'Haan, saari cars experienced chauffeur ke saath aati hain. Self-drive filhaal available nahi hai.' },
  { q: 'Advance kitna dena padta hai?', a: 'Date confirm karne ke liye 25% advance. Baaki delivery ke waqt.' },
  { q: 'Kya car decorate karke milegi?', a: 'Basic decoration included hai; premium floral decor add-on ke roop me available hai.' },
  { q: 'Outstation ke liye rate alag hai?', a: 'Haan, outstation par per-km + driver allowance lagta hai. Custom quote mil jayega.' },
]

export default function CarRentalPage() {
  return (
    <main className="bg-background">
      <SiteHeader />
      <PageHero
        image="/swift-hero.png"
        eyebrow="Car Rental"
        title="Swift Rides for Every Occasion"
        description="City ride, wedding ya outstation safar — hamari Swift cars clean, comfortable aur chauffeur ke saath ready hain."
      />

      {/* Quick highlights */}
      <section className="bg-maroon">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            { icon: Car, t: 'Swift Fleet' },
            { icon: BadgeCheck, t: 'Verified Drivers' },
            { icon: ShieldCheck, t: 'Fully Insured' },
            { icon: Clock, t: 'On-Time Promise' },
          ].map((h) => (
            <div key={h.t} className="flex items-center justify-center gap-3 text-cream">
              <h.icon className="h-6 w-6 text-accent" />
              <span className="font-medium">{h.t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Fleet grid */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Our Fleet" title="Apni Sawari Chuniye" description="Har gaadi saaf, stylish aur ready. Rate per-day base par, custom package pe discount." />
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {cars.map((car) => (
            <div key={car.name} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg">
              <div className="relative h-60 overflow-hidden">
                <Image src={car.img} alt={car.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-maroon-dark/80 px-3 py-1 text-xs font-semibold text-accent backdrop-blur">{car.tag}</span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-serif text-2xl font-bold text-foreground">{car.name}</h3>
                  <div className="text-right">
                    <p className="font-serif text-xl font-bold text-primary">{car.price}</p>
                    <p className="text-xs text-muted-foreground">per day</p>
                  </div>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{car.desc}</p>
                <div className="mt-5 flex flex-wrap gap-4 border-t border-border pt-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Users className="h-4 w-4 text-accent" /> {car.seats} seats</span>
                  <span className="flex items-center gap-1.5"><Fuel className="h-4 w-4 text-accent" /> {car.fuel}</span>
                  <span className="flex items-center gap-1.5"><Snowflake className="h-4 w-4 text-accent" /> AC</span>
                  <span className="flex items-center gap-1.5"><Gauge className="h-4 w-4 text-accent" /> Chauffeur</span>
                </div>
                <Link href="/contact" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]">
                  Book This Car
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Use cases */}
      <section className="bg-secondary/60">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Occasions" title="Har Mauke Ke Liye" description="Shaadi ho ya safar, business ho ya airport — hamari gaadiyan har zaroorat poori karti hain." />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((u) => (
              <div key={u.title} className="rounded-2xl border border-border bg-card p-6">
                <u.icon className="h-9 w-9 text-accent" />
                <h3 className="mt-4 font-serif text-xl font-bold text-foreground">{u.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl">
            <Image src="/swift-wedding.png" alt="Decorated Maruti Suzuki Swift wedding car" width={800} height={600} className="h-full w-full object-cover" />
          </div>
          <div>
            <SectionHeading align="left" eyebrow="Included" title="Booking Me Kya Kya Milta Hai" description="Koi chhupa hua charge nahi — jo dikhta hai, wahi milta hai." />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {included.map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm text-foreground">{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Booking process */}
      <section className="relative overflow-hidden">
        <Image src="/palace-bg.png" alt="" fill className="object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-maroon-dark/90" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Process" title="4 Steps Me Booking" invert />
          <div className="mt-14 grid gap-8 md:grid-cols-4">
            {process.map((s) => (
              <div key={s.n} className="rounded-2xl border border-accent/25 bg-maroon-dark/40 p-6 backdrop-blur">
                <span className="font-serif text-4xl font-bold text-accent/60">{s.n}</span>
                <h3 className="mt-3 font-serif text-xl font-bold text-cream">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/75">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Add-ons" title="Apni Booking Custom Banao" description="Zaroorat ke hisaab se extra services jodo — sab transparent." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {addons.map((a) => (
            <div key={a.title} className="flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center">
              <a.icon className="h-8 w-8 text-accent" />
              <h3 className="mt-4 font-serif text-lg font-bold text-foreground">{a.title}</h3>
              <p className="mt-1 text-sm font-semibold text-primary">{a.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Combo offer */}
      <section className="bg-secondary/60">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Special" title="Car + Photography = Best Deal" description="Dono services ek saath book karo aur paao special combined discount. Ek team, dubara-dubara coordination ka jhanjhat nahi." />
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 font-semibold text-primary-foreground transition-transform hover:scale-[1.03]">
            <Sparkles className="h-5 w-5" /> Get Combo Quote
          </Link>
        </div>
      </section>

      {/* Car rental reviews */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Rental Reviews" title="Swift Rental Experiences" description="Demo reviews — asli customer feedback milne ke baad yahan update karein." />
        <ReviewSlider reviews={rentalReviews} label="Car rental customer reviews" />
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Car Rental — Sawaal Jawaab" />
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

      <CtaBand title="Apni Royal Ride Book Karo" subtitle="Ek call, aur aapki gaadi taiyaar. Baraat ho ya safar — shaan ke saath." />
      <SiteFooter />
      <WhatsAppFloat />
    </main>
  )
}
