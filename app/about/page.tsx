import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Heart,
  Award,
  Users,
  Camera,
  Car,
  ShieldCheck,
  Sparkles,
  Target,
  Eye,
  Handshake,
  Star,
  MapPin,
  CheckCircle2,
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { CtaBand } from '@/components/cta-band'
import { WhatsAppFloat } from '@/components/whatsapp-float'
import { SectionHeading } from '@/components/ornament'

export const metadata: Metadata = {
  title: 'About — Group of Infinity | Rajasthan Ki Apni Team',
  description:
    'Group of Infinity ki kahani — ek Rajput parivaar jo car rental aur wedding photography ko dil se karta hai. Jodhpur se, poore Rajasthan ke liye.',
}

const values = [
  { icon: Heart, title: 'Dil Se Kaam', desc: 'Har booking hamare liye parivaar ka event hai, sirf transaction nahi.' },
  { icon: ShieldCheck, title: 'Bharosa', desc: 'Time, quality aur transparency — teenon par kabhi samjhauta nahi.' },
  { icon: Sparkles, title: 'Detail Par Dhyaan', desc: 'Chhoti se chhoti cheez — car ki chamak ho ya photo ki light.' },
  { icon: Handshake, title: 'Rishta, Sirf Deal Nahi', desc: 'Kaam ke baad bhi hamare clients parivaar ban jate hain.' },
]

const timeline = [
  { year: '2016', title: 'Shuruaat', desc: 'Ek camera aur ek gaadi se safar shuru hua — Jodhpur ki galiyon se.' },
  { year: '2018', title: 'Pehli 50 Shaadiyan', desc: 'Word-of-mouth se pehchaan bani. Log naam se bulane lage.' },
  { year: '2021', title: 'Fleet Badhi', desc: 'Vintage se luxury tak — 20+ gaadiyan fleet me shaamil.' },
  { year: '2023', title: 'Poora Rajasthan', desc: 'Udaipur, Jaipur, Jaisalmer — destination weddings shuru.' },
  { year: '2025', title: 'Group of Infinity', desc: 'Dono services ek brand ke neeche — groupofinfinity.art.' },
]

const stats = [
  { icon: Heart, v: '350+', l: 'Weddings Captured' },
  { icon: Car, v: '25+', l: 'Cars in Fleet' },
  { icon: Users, v: '10k+', l: 'Happy Guests' },
  { icon: Award, v: '9 Yrs', l: 'Experience' },
]

const whyUs = [
  'Ek hi team se car + photography — full coordination',
  'Rajasthan ke local, har venue se waaqif',
  'Well-maintained cars, verified chauffeurs',
  'Editorial-grade photography & cinematic films',
  'Transparent pricing, no hidden charges',
  'On-time delivery, hamesha',
]

const team = [
  { name: 'Founder & Lead Photographer', role: 'The eye behind every royal frame', img: '/founder.png' },
  { name: 'Fleet & Logistics', role: 'Cars ready, drivers on time', img: '/car-vintage.png' },
  { name: 'Cinematography Team', role: 'Filmy stories, frame by frame', img: '/photo-mandap.png' },
]

export default function AboutPage() {
  return (
    <main className="bg-background">
      <SiteHeader />
      <PageHero
        image="/palace-bg.png"
        eyebrow="About Us"
        title="Rajasthan Ki Apni Team"
        description="Ek Rajput parivaar, do junoon — shaandaar gaadiyan aur dil chhoo lene wali tasveerein. Yahi hai Group of Infinity."
      />

      {/* Founder story */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative h-96 overflow-hidden rounded-2xl lg:h-[30rem]">
            <Image src="/founder.png" alt="Founder of Group of Infinity" fill className="object-cover" />
          </div>
          <div>
            <SectionHeading align="left" eyebrow="Our Story" title="Junoon Se Judi Kahani" />
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Namaste! Main Rajasthan se hoon, ek Rajput — aur meri do cheezon se mohabbat hai:
                gaadiyan aur camera. Yahi do junoon milkar bane <span className="font-semibold text-foreground">Group of Infinity</span>.
              </p>
              <p>
                Ek chhoti si gaadi aur ek camera se shuru hua ye safar aaj poore Rajasthan tak
                pahunch chuka hai. Maine bahut saari Rajasthani royal weddings shoot ki hain, aur
                har baar ehsaas hota hai — ye sirf kaam nahi, dil ka rishta hai.
              </p>
              <p>
                Aaj hum dono services ek hi chhat ke neeche dete hain, taaki aapko alag-alag jagah
                bhaagna na pade. Ek call, aur baaki sab hum sambhaal lete hain.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/car-rental" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
                <Car className="h-4 w-4" /> Our Fleet
              </Link>
              <Link href="/photography" className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground">
                <Camera className="h-4 w-4" /> Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

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

      {/* Mission & Vision */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <Target className="h-10 w-10 text-accent" />
            <h3 className="mt-4 font-serif text-2xl font-bold text-foreground">Hamara Mission</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Har parivaar ko royal experience dena — bina tension, bina bhaag-daud. Ek jagah se
              gaadi bhi, aur photography bhi, dono world-class.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <Eye className="h-10 w-10 text-accent" />
            <h3 className="mt-4 font-serif text-2xl font-bold text-foreground">Hamara Vision</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Rajasthan ka sabse bharosemand naam banna jab baat ho royal weddings aur premium
              rides ki — Marwar se lekar poore desh tak.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary/60">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Values" title="Jin Baaton Par Hum Ateet Hain" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-6">
                <v.icon className="h-9 w-9 text-accent" />
                <h3 className="mt-4 font-serif text-xl font-bold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Journey" title="Hamara Safar" />
        <div className="mt-14 space-y-8">
          {timeline.map((t) => (
            <div key={t.year} className="flex gap-6">
              <div className="flex flex-col items-center">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-maroon-dark font-serif text-sm font-bold text-accent">{t.year}</span>
                <span className="mt-2 w-px flex-1 bg-border" />
              </div>
              <div className="pb-2">
                <h3 className="font-serif text-xl font-bold text-foreground">{t.title}</h3>
                <p className="mt-1 leading-relaxed text-muted-foreground">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="relative overflow-hidden">
        <Image src="/palace-bg.png" alt="" fill className="object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-maroon-dark/90" />
        <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Why Choose Us" title="Hum Par Bharosa Kyun" invert />
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {whyUs.map((w) => (
              <div key={w} className="flex items-start gap-3 rounded-xl border border-accent/25 bg-maroon-dark/40 p-4 backdrop-blur">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-cream/90">{w}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="The Team" title="Log Jo Isse Khaas Banate Hain" />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {team.map((m) => (
            <div key={m.name} className="overflow-hidden rounded-2xl border border-border bg-card">
              <div className="relative h-64">
                <Image src={m.img} alt={m.name} fill className="object-cover" />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-serif text-lg font-bold text-foreground">{m.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Coverage */}
      <section className="bg-secondary/60">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Where We Work" title="Poore Rajasthan Me" />
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {['Jodhpur', 'Udaipur', 'Jaipur', 'Jaisalmer', 'Bikaner', 'Mount Abu', 'Pushkar', 'Ajmer', 'Kumbhalgarh', 'Nagaur'].map((c) => (
              <span key={c} className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card px-5 py-2.5 text-sm font-medium text-foreground">
                <MapPin className="h-4 w-4 text-accent" /> {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="flex justify-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-6 w-6 fill-accent text-accent" />
          ))}
        </div>
        <blockquote className="mt-6 text-balance font-serif text-2xl font-medium leading-relaxed text-foreground sm:text-3xl">
          &ldquo;Inhone hamari shaadi ko itna easy bana diya — gaadi bhi, photos bhi. Ekdum apne log lage.&rdquo;
        </blockquote>
        <p className="mt-4 text-muted-foreground">— Priya & Vikram, Udaipur</p>
      </section>

      <CtaBand title="Aaiye, Hamare Parivaar Ka Hissa Baniye" subtitle="Aapki agli royal event ki taiyaari abhi se shuru karte hain." />
      <SiteFooter />
      <WhatsAppFloat />
    </main>
  )
}
