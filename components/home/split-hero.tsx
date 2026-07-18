import Link from 'next/link'
import Image from 'next/image'
import { Camera, Car, ArrowRight } from 'lucide-react'
import { site } from '@/lib/site'

export function SplitHero() {
  return (
    <section className="relative">
      <div className="grid min-h-[88vh] grid-cols-1 md:grid-cols-2">
        {/* Wedding Photography half */}
        <div className="group relative flex items-end overflow-hidden">
          <Image
            src="/hero-wedding.png"
            alt="Rajasthani royal wedding couple in a palace"
            fill
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark via-maroon-dark/50 to-maroon-dark/10" />
          <div className="relative z-10 w-full p-8 pb-16 sm:p-12 md:pb-20 lg:p-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/50 bg-maroon-dark/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent backdrop-blur">
              <Camera className="h-4 w-4" />
              Wedding Photography
            </span>
            <h2 className="mt-5 max-w-md text-balance font-serif text-3xl font-bold leading-tight text-cream sm:text-4xl lg:text-5xl">
              Timeless Rajasthani Wedding Stories
            </h2>
            <p className="mt-4 max-w-sm text-pretty leading-relaxed text-cream/85">
              Candid moments, royal frames aur cinematic films — aapki shaadi ki har rasm hamesha
              ke liye kaid.
            </p>
            <Link
              href="/photography"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
            >
              View Portfolio
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Car Rental half */}
        <div className="group relative flex items-end overflow-hidden">
          <Image
            src="/hero-car.png"
            alt="Luxury vintage wedding car outside a Rajasthani palace"
            fill
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark via-maroon-dark/50 to-maroon-dark/10" />
          <div className="relative z-10 w-full p-8 pb-16 sm:p-12 md:pb-20 lg:p-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/50 bg-maroon-dark/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent backdrop-blur">
              <Car className="h-4 w-4" />
              Car Rental
            </span>
            <h2 className="mt-5 max-w-md text-balance font-serif text-3xl font-bold leading-tight text-cream sm:text-4xl lg:text-5xl">
              Royal Rides for Every Occasion
            </h2>
            <p className="mt-4 max-w-sm text-pretty leading-relaxed text-cream/85">
              Vintage baraat cars, luxury sedans aur SUVs — shaadi ho ya safar, shaan ke saath
              chaliye.
            </p>
            <Link
              href="/car-rental"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
            >
              Explore Fleet
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Center brand emblem */}
      <div className="pointer-events-none absolute left-1/2 top-8 z-20 -translate-x-1/2 text-center md:top-1/2 md:-translate-y-1/2">
        <div className="pointer-events-auto mx-auto flex flex-col items-center rounded-2xl border border-accent/40 bg-maroon-dark/70 px-6 py-5 backdrop-blur-md">
          <span className="relative h-16 w-16 overflow-hidden rounded-full ring-2 ring-accent/60">
            <Image src="/logo.png" alt="Group of Infinity logo" fill className="object-cover" />
          </span>
          <p className="mt-3 font-serif text-xl font-bold text-cream">Group of Infinity</p>
          <p className="text-[11px] uppercase tracking-[0.3em] text-accent">{site.domain}</p>
        </div>
      </div>
    </section>
  )
}
