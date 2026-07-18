import Link from 'next/link'
import { Phone, MessageCircle } from 'lucide-react'
import { site } from '@/lib/site'

export function CtaBand({
  title = 'Chalo, kuch royal banate hain',
  subtitle = 'Car booking ho ya wedding shoot — ek call par sab set. Aaj hi apni date reserve karein.',
}: {
  title?: string
  subtitle?: string
}) {
  return (
    <section className="bg-maroon-dark">
      <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
          Padharo Sa
        </p>
        <h2 className="text-balance font-serif text-3xl font-bold text-cream sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-cream/80">{subtitle}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={`tel:${site.phone.replace(/\s/g, '')}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 font-semibold text-accent-foreground transition-transform hover:scale-[1.03] sm:w-auto"
          >
            <Phone className="h-5 w-5" />
            Call {site.phone}
          </a>
          <a
            href={`https://wa.me/${site.whatsapp.replace(/[^0-9]/g, '')}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-accent/60 px-8 py-3.5 font-semibold text-cream transition-colors hover:bg-accent/10 sm:w-auto"
          >
            <MessageCircle className="h-5 w-5 text-accent" />
            WhatsApp Us
          </a>
          <Link
            href="/contact"
            className="text-sm font-medium text-cream/80 underline-offset-4 hover:text-accent hover:underline"
          >
            Or send an enquiry →
          </Link>
        </div>
      </div>
    </section>
  )
}
