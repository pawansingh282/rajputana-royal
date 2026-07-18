import { cn } from '@/lib/utils'

type IconProps = { className?: string }

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M14 8.5V7c0-.83.67-1 1.5-1H17V3h-2.5A3.5 3.5 0 0 0 11 6.5V8.5H9v3h2V21h3v-9.5h2.2l.3-3H14z" />
    </svg>
  )
}

export function YoutubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="5" width="20" height="14" rx="4" />
      <path d="M10 9l5 3-5 3V9z" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function OrnateDivider({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center justify-center gap-3', className)}>
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-accent sm:w-20" />
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        className="text-accent"
        aria-hidden="true"
      >
        <path
          d="M12 2l2.4 5.6L20 8l-4 4 1 6-5-2.8L7 18l1-6-4-4 5.6-.4L12 2z"
          fill="currentColor"
          opacity="0.9"
        />
      </svg>
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-accent sm:w-20" />
    </div>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  invert = false,
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: 'center' | 'left'
  invert?: boolean
}) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            'mb-3 text-sm font-semibold uppercase tracking-[0.25em]',
            invert ? 'text-accent' : 'text-accent',
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          'text-balance text-3xl font-bold leading-tight sm:text-4xl md:text-5xl',
          invert ? 'text-cream' : 'text-foreground',
        )}
      >
        {title}
      </h2>
      {align === 'center' ? <OrnateDivider className="mt-5" /> : null}
      {description ? (
        <p
          className={cn(
            'mt-5 text-pretty text-base leading-relaxed sm:text-lg',
            invert ? 'text-cream/80' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
