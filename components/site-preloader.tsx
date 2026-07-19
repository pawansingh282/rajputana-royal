'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { site } from '@/lib/site'

export function SitePreloader() {
  const [visible, setVisible] = useState(true)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const leaveTimer = window.setTimeout(() => setLeaving(true), 1100)
    const hideTimer = window.setTimeout(() => setVisible(false), 1550)

    return () => {
      window.clearTimeout(leaveTimer)
      window.clearTimeout(hideTimer)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className={`site-preloader ${leaving ? 'site-preloader--leaving' : ''}`}
      role="status"
      aria-label="Group of Infinity website loading"
    >
      <div className="site-preloader__card">
        <span className="relative h-20 w-20 overflow-hidden rounded-full ring-2 ring-accent/60">
          <Image src="/logo.png" alt="Group of Infinity logo" fill priority className="object-cover" />
        </span>
        <p className="mt-4 font-serif text-2xl font-bold text-cream">Group of Infinity</p>
        <p className="mt-1 text-[11px] uppercase tracking-[0.3em] text-accent">{site.domain}</p>
        <span className="site-preloader__line" aria-hidden="true" />
      </div>
    </div>
  )
}
