import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import {
  Camera,
  Car,
  Award,
  Users,
  Heart,
  Star,
  ShieldCheck,
  Clock,
  MapPin,
  Sparkles,
  ArrowRight,
  Quote,
  Check,
  Phone,
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SplitHero } from '@/components/home/split-hero'
import { CtaBand } from '@/components/cta-band'
import { WhatsAppFloat } from '@/components/whatsapp-float'
import { SectionHeading, OrnateDivider } from '@/components/ornament'

export const metadata: Metadata = {
  title: 'Swift Car Rental & Wedding Photography in Rajasthan',
  description: 'Book chauffeur-driven Swift cars, decorated wedding Swift rentals and candid wedding photography in Jodhpur and across Rajasthan.',
  alternates: { canonical: '/' },
}

const stats = [
  { icon: Heart, value: '350+', label: 'Weddings Shot' },
  { icon: Car, value: 'Swift', label: 'Our Car Fleet' },
  { icon: Users, value: '10k+', label: 'Happy Guests' },
  { icon: Award, value: '9 Yrs', label: 'Of Experience' },
]

const fleet = [
  { name: 'Swift City Ride', img: '/swift-city.png', tag: 'Clean & Comfortable', price: 'Custom quote' },
  { name: 'Swift Chauffeur Ride', img: '/swift-chauffeur.png', tag: 'Chauffeur Driven', price: 'Custom quote' },
  { name: 'Swift Outstation', img: '/swift-outstation.png', tag: 'Family & Outstation', price: 'Custom quote' },
  { name: 'Decorated Wedding Swift', img: '/swift-wedding.png', tag: 'Wedding Ready', price: 'Custom quote' },
]

const gallery = [
  { src: '/photo-bride.png', alt: 'Rajasthani bride portrait' },
  { src: '/photo-couple.png', alt: 'Royal couple portrait' },
  { src: '/photo-groom.png', alt: 'Groom on horse during baraat' },
  { src: '/photo-haldi.png', alt: 'Haldi ceremony candid' },
  { src: '/photo-mandap.png', alt: 'Decorated wedding mandap' },
  { src: '/photo-prewedding.png', alt: 'Desert pre-wedding shoot' },
]

const features = [
  { icon: ShieldCheck, title: 'Trusted & Local', desc: 'Rajasthan ke apne log — har venue, har rasta hamein pata hai.' },
  { icon: Sparkles, title: 'Two Services, One Team', desc: 'Car aur camera dono ka intezaam ek hi jagah, bina tension.' },
  { icon: Clock, title: 'Always On Time', desc: 'Muhurat ka waqt keemti hai — hum hamesha time se pehle pahunchte hain.' },
  { icon: Award, title: 'Award-Grade Work', desc: 'Editorial quality frames aur spotless, well-maintained cars.' },
]

const steps = [
  { n: '01', title: 'Baat-cheet', desc: 'Call ya WhatsApp par apni date, venue aur zaroorat batao.' },
  { n: '02', title: 'Custom Plan', desc: 'Car + photography ka package aapke budget ke hisaab se banate hain.' },
  { n: '03', title: 'Date Reserve', desc: 'Chhota sa advance dekar apni date lock kar lo.' },
  { n: '04', title: 'Royal Day', desc: 'Baaki sab hum sambhaal lenge — aap bas apne pal jiyo.' },
]

const packages = [
  {
    name: 'Baraat Ride',
    price: '₹15,000',
    unit: 'onwards',
    points: ['Decorated Swift car', 'Uniformed chauffeur', 'Fuel within city', '4 hours booking'],
    popular: false,
  },
  {
    name: 'Wedding Signature',
    price: '₹85,000',
    unit: 'onwards',
    points: ['2 photographers + 1 cinematographer', 'Full-day coverage', 'Decorated car included', 'Edited album + highlight film'],
    popular: true,
  },
  {
    name: 'Pre-Wedding Shoot',
    price: '₹35,000',
    unit: 'onwards',
    points: ['Half-day desert/palace shoot', 'Car for location travel', '60+ edited photos', 'Cinematic teaser reel'],
    popular: false,
  },
]

const testimonials = [
  { name: 'Priya & Vikram', place: 'Udaipur', text: 'Camera bhi unka, gaadi bhi unki — poori shaadi tension-free rahi. Photos to filmy lagti hain!' },
  { name: 'Rathore Family', place: 'Jodhpur', text: 'Swift bilkul saaf aur time par thi. Service professional aur safar comfortable raha.' },
  { name: 'Aditi & Sameer', place: 'Jaipur', text: 'Pre-wedding shoot desert me karvaya — har frame ek painting jaisa. Highly recommended.' },
]

const trustDetails = [
  { icon: Star, title: 'Separate Customer Reviews', desc: 'Car rental aur photography feedback unke respective service pages par alag dikhaya gaya hai.' },
  { icon: Camera, title: 'Booking Photo Gallery', desc: 'Abhi sample photos hain; baad me actual delivery, decoration aur event photos se replace karein.' },
  { icon: ShieldCheck, title: 'Driver Verification', desc: 'Sample policy: booking se pehle assigned driver ki identity aur licence verification complete ki jayegi.' },
  { icon: Sparkles, title: 'Clean & Maintained Cars', desc: 'Sample policy: har booking se pehle Swift ki cleaning, basic safety aur maintenance check hoga.' },
  { icon: Clock, title: 'Cancellation Policy', desc: 'Sample terms: cancellation aur refund booking date aur notice period ke hisaab se confirm honge.' },
  { icon: Check, title: 'Payment & Advance', desc: 'Sample terms: date reserve karne ke liye advance; final amount aur due date written quote me rahenge.' },
]

const faqs = [
  { q: 'Kya aap car aur photography dono ek saath book kar sakte hain?', a: 'Bilkul! Yahi hamari khaasiyat hai. Dono services ka combined package aapko behtar rate par milta hai.' },
  { q: 'Kaunse sheher me service available hai?', a: 'Jodhpur base hai, lekin poore Rajasthan — Udaipur, Jaipur, Jaisalmer — me travel karte hain.' },
  { q: 'Booking ke liye kitna advance lagta hai?', a: 'Date confirm karne ke liye 25% advance, baaki event ke din. Custom terms baat-cheet me tay ho jate hain.' },
  { q: 'Photos aur film delivery me kitna time lagta hai?', a: 'Highlight reel 7 din me, poora edited album aur film 3-4 hafton me deliver ho jata hai.' },
]

export default function HomePage() {
  return (
    <main className="bg-background">
      <SiteHeader />
      <SplitHero />

      {/* Stats bar */}
      <section className="bg-maroon">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center">
              <s.icon className="h-7 w-7 text-accent" />
              <span className="mt-3 font-serif text-3xl font-bold text-cream sm:text-4xl">{s.value}</span>
              <span className="mt-1 text-sm uppercase tracking-wide text-cream/70">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Welcome / intro */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Khamma Ghani"
          title="Ek Chhat Ke Neeche — Shaan Bhi, Shoot Bhi"
          description="Group of Infinity Rajasthan ka woh naam hai jahan aapko milti hain shaandaar gaadiyan aur dil chhoo lene wali wedding photography. Dono ka intezaam, ek hi bharose ke saath."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <Link href="/car-rental" className="group relative overflow-hidden rounded-2xl">
            <Image src="/swift-hero.png" alt="Maruti Suzuki Swift car rental" width={800} height={500} className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark to-transparent" />
            <div className="absolute bottom-0 p-8">
              <Car className="h-8 w-8 text-accent" />
              <h3 className="mt-3 font-serif text-2xl font-bold text-cream">Car Rental</h3>
              <p className="mt-1 text-cream/80">Swift · Chauffeur · Outstation</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent">Explore Fleet <ArrowRight className="h-4 w-4" /></span>
            </div>
          </Link>
          <Link href="/photography" className="group relative overflow-hidden rounded-2xl">
            <Image src="/photo-couple.png" alt="Wedding photography" width={800} height={500} className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark to-transparent" />
            <div className="absolute bottom-0 p-8">
              <Camera className="h-8 w-8 text-accent" />
              <h3 className="mt-3 font-serif text-2xl font-bold text-cream">Wedding Photography</h3>
              <p className="mt-1 text-cream/80">Candid · Cinematic · Royal</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent">View Portfolio <ArrowRight className="h-4 w-4" /></span>
            </div>
          </Link>
        </div>
      </section>

      {/* Featured fleet */}
      <section className="bg-secondary/60">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our Fleet" title="Gaadiyan Jo Shaan Badha De" description="Har gaadi saaf-suthri, well-maintained aur ready-to-roll. Baraat se lekar airport tak." />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {fleet.map((car) => (
              <div key={car.name} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
                <div className="relative h-44 overflow-hidden">
                  <Image src={car.img} alt={car.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute left-3 top-3 rounded-full bg-maroon-dark/80 px-3 py-1 text-xs font-semibold text-accent backdrop-blur">{car.tag}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-bold text-foreground">{car.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-primary">{car.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/car-rental" className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
              See All Cars <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Photography gallery preview */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Portfolio" title="Yaadein Jo Bolti Hain" description="Ek jhalak hamare kaam ki — har frame me Rajasthan ka rang aur pyaar." />
        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {gallery.map((g, i) => (
            <div key={g.src} className={`relative overflow-hidden rounded-xl ${i === 0 ? 'col-span-2 row-span-2 md:col-span-1 md:row-span-2' : ''}`}>
              <Image src={g.src} alt={g.alt} width={600} height={600} className={`w-full object-cover transition-transform duration-500 hover:scale-105 ${i === 0 ? 'h-full min-h-64' : 'h-44 sm:h-52'}`} />
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/photography" className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
            View Full Gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Why choose us */}
      <section className="relative overflow-hidden">
        <Image src="/palace-bg.png" alt="" fill className="object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-maroon-dark/90" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Why Us" title="Hum Kyun?" invert description="Kyunki hum sirf service nahi dete — hum aapke sabse khaas din ka hissa bante hain." />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-accent/25 bg-maroon-dark/40 p-6 backdrop-blur">
                <f.icon className="h-9 w-9 text-accent" />
                <h3 className="mt-4 font-serif text-xl font-bold text-cream">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/75">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="How It Works" title="Booking Bilkul Aasaan" description="Chaar simple steps — aur aapka royal event ready." />
        <div className="mt-14 grid gap-8 md:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="relative rounded-2xl border border-border bg-card p-6">
              <span className="font-serif text-4xl font-bold text-accent/50">{s.n}</span>
              <h3 className="mt-3 font-serif text-xl font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section className="bg-secondary/60">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Packages" title="Har Budget Ke Liye" description="Combined car + photography packages par special rate. Custom bhi ho jayega." />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {packages.map((p) => (
              <div key={p.name} className={`relative flex flex-col rounded-2xl border p-8 ${p.popular ? 'border-accent bg-maroon-dark text-cream shadow-lg' : 'border-border bg-card'}`}>
                {p.popular ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold uppercase tracking-wide text-accent-foreground">Most Loved</span>
                ) : null}
                <h3 className={`font-serif text-2xl font-bold ${p.popular ? 'text-cream' : 'text-foreground'}`}>{p.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className={`font-serif text-3xl font-bold ${p.popular ? 'text-accent' : 'text-primary'}`}>{p.price}</span>
                  <span className={`text-sm ${p.popular ? 'text-cream/70' : 'text-muted-foreground'}`}>{p.unit}</span>
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
                  Enquire Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust and booking information */}
      <section className="bg-secondary/60">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Trust & Transparency" title="Booking Se Pehle Sab Clear" description="Neeche demo information hai. Actual policies, documents aur booking photos milne ke baad update karein." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {trustDetails.map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <span className="rounded-full bg-secondary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Sample</span>
                </div>
                <h3 className="mt-5 font-serif text-xl font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <figure className="overflow-hidden rounded-2xl border border-border bg-card">
              <div className="relative h-64">
                <Image src="/swift-wedding.png" alt="Sample decorated Swift booking" fill className="object-cover" />
              </div>
              <figcaption className="flex items-center justify-between gap-3 p-5 text-sm">
                <span className="font-semibold text-foreground">Car Rental Booking Photo</span>
                <span className="text-muted-foreground">Sample</span>
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-2xl border border-border bg-card">
              <div className="relative h-64">
                <Image src="/photo-couple.png" alt="Sample wedding photography booking" fill className="object-cover" />
              </div>
              <figcaption className="flex items-center justify-between gap-3 p-5 text-sm">
                <span className="font-semibold text-foreground">Photography Booking Photo</span>
                <span className="text-muted-foreground">Sample</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Love Notes" title="Hamare Parivaar Kya Kehte Hain" description="Sample reviews — real customer feedback milne ke baad update karein." />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-border bg-card p-8">
              <span className="float-right rounded-full bg-secondary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Sample</span>
              <Quote className="h-8 w-8 text-accent" />
              <div className="mt-3 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mt-4 text-pretty leading-relaxed text-foreground">{t.text}</blockquote>
              <figcaption className="mt-5 flex items-center gap-2 text-sm">
                <span className="font-semibold text-foreground">{t.name}</span>
                <span className="text-muted-foreground">· {t.place}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Coverage / area */}
      <section className="bg-secondary/60">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Coverage" title="Poore Rajasthan Me, Aapke Saath" description="Jodhpur se lekar registan tak — jahan aapki shaadi, wahan hum." />
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {['Jodhpur', 'Udaipur', 'Jaipur', 'Jaisalmer', 'Bikaner', 'Mount Abu', 'Pushkar', 'Ajmer', 'Kumbhalgarh'].map((c) => (
              <span key={c} className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card px-5 py-2.5 text-sm font-medium text-foreground">
                <MapPin className="h-4 w-4 text-accent" /> {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Aksar Pooche Jane Wale Sawaal" />
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

      <CtaBand />
      <SiteFooter />
      <WhatsAppFloat />
    </main>
  )
}
