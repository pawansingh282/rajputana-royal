import type { Metadata } from "next"
import Link from "next/link"
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Car,
  Camera,
  IndianRupee,
  CalendarCheck,
  ShieldCheck,
  Star,
} from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { SectionHeading, OrnateDivider, InstagramIcon, FacebookIcon, YoutubeIcon } from "@/components/ornament"
import { ContactForm } from "@/components/contact-form"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact for Swift Rental & Wedding Photography",
  description:
    "Contact Group of Infinity to book a Swift car rental, decorated wedding car or wedding photography service in Jodhpur and Rajasthan.",
  alternates: { canonical: '/contact' },
}

const contactCards = [
  {
    icon: Phone,
    label: "Call Us",
    value: site.phone,
    href: `tel:${site.phone.replace(/\s/g, "")}`,
    note: "8 AM – 9 PM, daily",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: site.whatsapp,
    href: `https://wa.me/${site.whatsapp.replace(/[^0-9]/g, "")}`,
    note: "Fastest reply",
  },
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    note: "For detailed quotes",
  },
  {
    icon: MapPin,
    label: "Visit Studio",
    value: site.city,
    href: "#map",
    note: "By appointment",
  },
]

const services = [
  { icon: Camera, title: "Wedding Photography", desc: "Full-day & multi-day royal coverage." },
  { icon: Car, title: "Car Rental", desc: "Self-drive & chauffeur-driven fleet." },
  { icon: Star, title: "Pre-Wedding Shoots", desc: "Desert, palace & haveli locations." },
  { icon: CalendarCheck, title: "Combo Packages", desc: "Car + photography, one booking." },
]

const steps = [
  { step: "01", title: "Enquiry Bhejein", desc: "Form bharein ya WhatsApp par message karein apni date ke saath." },
  { step: "02", title: "Consultation", desc: "Hum aapki requirement samajhkar best package suggest karte hain." },
  { step: "03", title: "Booking Confirm", desc: "Advance ke saath date lock, aur planning shuru." },
  { step: "04", title: "Big Day Magic", desc: "Royal ride aur timeless photos — sab handled by us." },
]

const faqs = [
  {
    q: "Advance booking kitne pehle karni chahiye?",
    a: "Peak wedding season (Nov–Feb) me 2–3 mahine pehle booking karein. Car rental ke liye 1 week pehle bhi ho jata hai.",
  },
  {
    q: "Kya aap Rajasthan ke bahar travel karte hain?",
    a: "Ji haan. Destination weddings ke liye hum poore India me travel karte hain. Travel & stay charges alag se apply hote hain.",
  },
  {
    q: "Payment kaise hota hai?",
    a: "Date confirm karne ke liye ek chhota advance, aur baaki event se pehle. Cash, UPI aur bank transfer — sab accept hai.",
  },
  {
    q: "Kya car ke saath driver milta hai?",
    a: "Dono options hain — self-drive aur experienced chauffeur. Wedding cars ke saath decoration bhi karwa sakte hain.",
  },
  {
    q: "Photos delivery me kitna time lagta hai?",
    a: "Teaser 48 ghante me, full edited gallery 3–4 hafte me. Album aur video timeline package par depend karti hai.",
  },
]

const promises = [
  { icon: ShieldCheck, text: "No hidden charges — transparent pricing" },
  { icon: CalendarCheck, text: "On-time arrival, guaranteed" },
  { icon: IndianRupee, text: "Flexible packages for every budget" },
  { icon: Star, text: "500+ happy families across Rajasthan" },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        image="/palace-bg.png"
        eyebrow="Padharo Sa"
        title="Let's Plan Something Royal"
        description="Car booking ho ya wedding shoot — humse baat karein. Hum 24 ghante ke andar reply karte hain."
      />

      {/* 1. Quick contact cards */}
      <section className="bg-background py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="group flex flex-col items-center rounded-lg border border-border bg-card p-6 text-center transition-colors hover:border-primary/50"
              >
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <c.icon className="h-5 w-5" />
                </span>
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">{c.label}</p>
                <p className="mt-1 font-medium text-foreground">{c.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{c.note}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Form + info */}
      <section className="bg-secondary/40 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Send Enquiry"
              title="Bataiye, aapko kya chahiye?"
              description="Form bharein — hum aapki date, location aur requirement ke hisaab se best royal package taiyaar karenge."
            />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-serif text-xl text-primary">Studio Details</h3>
              <OrnateDivider className="my-4 justify-start" />
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-muted-foreground">{site.address}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-muted-foreground">{site.hours}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-muted-foreground">{site.phone}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-muted-foreground">{site.email}</span>
                </li>
              </ul>
              <div className="mt-6 flex gap-3">
                <a
                  href={site.social.instagram}
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
                <a
                  href={site.social.facebook}
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <FacebookIcon className="h-5 w-5" />
                </a>
                <a
                  href={site.social.youtube}
                  aria-label="YouTube"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <YoutubeIcon className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="rounded-lg border border-primary/30 bg-maroon-dark p-6">
              <h3 className="font-serif text-xl text-cream">Prefer talking?</h3>
              <p className="mt-2 text-sm text-cream/80">
                WhatsApp par turant reply. Apni requirement bhejein, hum quote de denge.
              </p>
              <a
                href={`https://wa.me/${site.whatsapp.replace(/[^0-9]/g, "")}`}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services quick pick */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="What We Offer" title="Kis service ke liye baat karni hai?" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="rounded-lg border border-border bg-card p-6 text-center">
                <s.icon className="mx-auto h-8 w-8 text-primary" />
                <h3 className="mt-4 font-serif text-lg text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How it works */}
      <section className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Simple Process" title="Booking kaise hoti hai" />
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {steps.map((s) => (
              <div key={s.step} className="relative rounded-lg border border-border bg-card p-6">
                <span className="font-serif text-4xl font-bold text-primary/20">{s.step}</span>
                <h3 className="mt-2 font-serif text-lg text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our promise */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Bharosa" title="Humara Vaada" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {promises.map((p) => (
              <div key={p.text} className="flex items-center gap-3 rounded-lg border border-border bg-card p-5">
                <p.icon className="h-6 w-6 shrink-0 text-accent" />
                <span className="text-sm text-foreground">{p.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Map */}
      <section id="map" className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Find Us" title="Jodhpur Studio" description="Old City ke dil me, Clock Tower ke paas." />
          <div className="mt-10 overflow-hidden rounded-lg border border-border">
            <iframe
              title="Group of Infinity Studio Location"
              src="https://www.google.com/maps?q=Jodhpur+Clock+Tower&output=embed"
              width="100%"
              height="420"
              loading="lazy"
              className="block"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Sawaal Jawaab" title="Frequently Asked" />
          <div className="mt-10 space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-lg border border-border bg-card p-5 [&_svg]:open:rotate-45"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-foreground">
                  {f.q}
                  <span className="text-2xl leading-none text-primary transition-transform">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Service areas */}
      <section className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Coverage" title="Jahan Jahan Hum Pahunchte Hain" />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {[
              "Jodhpur",
              "Udaipur",
              "Jaipur",
              "Jaisalmer",
              "Bikaner",
              "Pushkar",
              "Mount Abu",
              "Ajmer",
              "Nagaur",
              "Pali",
              "Destination Weddings",
            ].map((area) => (
              <span
                key={area}
                className="rounded-full border border-primary/30 bg-card px-5 py-2 text-sm font-medium text-foreground"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Testimonial */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-4 flex justify-center gap-1 text-accent">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <p className="text-balance font-serif text-2xl leading-relaxed text-foreground sm:text-3xl">
            &ldquo;Car bhi royal thi aur photos toh aur bhi royal. Ek hi jagah dono ka intezaam — bahut hassle-free
            raha. Dil se shukriya, Group of Infinity!&rdquo;
          </p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-accent">
            Rathore Family — Udaipur Wedding
          </p>
        </div>
      </section>

      {/* 10. Final CTA */}
      <section className="bg-maroon-dark">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">Ready When You Are</p>
          <h2 className="text-balance font-serif text-3xl font-bold text-cream sm:text-4xl">
            Aapki date, humari zimmedari
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-cream/80">
            Aaj hi apni booking confirm karein. Season me dates jaldi bhar jaati hain.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 font-semibold text-accent-foreground transition-transform hover:scale-[1.03] sm:w-auto"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </a>
            <Link
              href="/car-rental"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-accent/60 px-8 py-3.5 font-semibold text-cream transition-colors hover:bg-accent/10 sm:w-auto"
            >
              <Car className="h-5 w-5 text-accent" />
              View Fleet
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
