import { cn } from '@/lib/utils'

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
