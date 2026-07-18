import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { navLinks, site } from '@/lib/site'
import { OrnateDivider, InstagramIcon, FacebookIcon, YoutubeIcon } from '@/components/ornament'

export function SiteFooter() {
  return (
    <footer className="bg-maroon-dark text-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <OrnateDivider className="mb-12" />
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="relative h-11 w-11 overflow-hidden rounded-full ring-1 ring-accent/50">
                <Image src="/logo.png" alt="Group of Infinity logo" fill className="object-cover" />
              </span>
              <span className="font-serif text-lg font-bold">Group of Infinity</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-cream/70">
              Rajasthan ki dharti se — royal car rentals aur heritage wedding photography. Aapki
              har rasm ko yaadgaar banate hain.
            </p>
            <div className="mt-5 flex gap-3">
              <a href={site.social.instagram} aria-label="Instagram" className="rounded-full border border-accent/40 p-2 text-accent transition-colors hover:bg-accent hover:text-accent-foreground">
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a href={site.social.facebook} aria-label="Facebook" className="rounded-full border border-accent/40 p-2 text-accent transition-colors hover:bg-accent hover:text-accent-foreground">
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a href={site.social.youtube} aria-label="YouTube" className="rounded-full border border-accent/40 p-2 text-accent transition-colors hover:bg-accent hover:text-accent-foreground">
                <YoutubeIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-accent">Explore</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-cream/75 transition-colors hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-accent">Services</h3>
            <ul className="mt-4 space-y-3 text-sm text-cream/75">
              <li>Vintage Wedding Cars</li>
              <li>Luxury Sedan & SUV Rental</li>
              <li>Outstation Trips</li>
              <li>Candid Wedding Photography</li>
              <li>Pre-Wedding Shoots</li>
              <li>Cinematic Wedding Films</li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-accent">Get in Touch</h3>
            <ul className="mt-4 space-y-4 text-sm text-cream/75">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="hover:text-accent">{site.phone}</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a href={`mailto:${site.email}`} className="hover:text-accent">{site.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{site.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{site.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-accent/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-cream/60 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {site.name} · {site.domain}. All rights reserved.</p>
          <p>Made with dil in {site.city}.</p>
        </div>
      </div>
    </footer>
  )
}
