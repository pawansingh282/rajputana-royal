'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navLinks, site } from '@/lib/site'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-colors duration-300',
        scrolled
          ? 'border-b border-accent/30 bg-maroon-dark/95 backdrop-blur'
          : 'bg-maroon-dark',
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative h-12 w-12 overflow-hidden rounded-full ring-1 ring-accent/50">
            <Image src="/logo.png" alt="Group of Infinity logo" fill className="object-cover" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-lg font-bold tracking-wide text-cream">
              Group of Infinity
            </span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent">
              Rides & Weddings
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative text-sm font-medium tracking-wide transition-colors',
                  active ? 'text-accent' : 'text-cream/85 hover:text-accent',
                )}
              >
                {link.label}
                {active ? (
                  <span className="absolute -bottom-2 left-0 h-px w-full bg-accent" />
                ) : null}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${site.phone.replace(/\s/g, '')}`}
            className="hidden items-center gap-2 rounded-full border border-accent/60 px-4 py-2 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-accent-foreground md:flex"
          >
            <Phone className="h-4 w-4" />
            Book Now
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 text-cream lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-accent/20 bg-maroon-dark lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4" aria-label="Mobile navigation">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'rounded-md px-3 py-3 text-base font-medium',
                    active ? 'bg-accent/15 text-accent' : 'text-cream/85',
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
            <a
              href={`tel:${site.phone.replace(/\s/g, '')}`}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground"
            >
              <Phone className="h-4 w-4" />
              Book Now — {site.phone}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
