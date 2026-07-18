import Image from 'next/image'
import { OrnateDivider } from '@/components/ornament'

export function PageHero({
  image,
  eyebrow,
  title,
  description,
}: {
  image: string
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <section className="relative flex min-h-[52vh] items-center overflow-hidden">
      <Image src={image} alt="" fill priority className="object-cover" aria-hidden="true" />
      <div className="absolute inset-0 bg-maroon-dark/80" />
      <div className="relative mx-auto w-full max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
        <h1 className="text-balance font-serif text-4xl font-bold leading-tight text-cream sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <OrnateDivider className="mt-6" />
        {description ? (
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-cream/85">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  )
}
