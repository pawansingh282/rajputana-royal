'use client'

import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'

export type Review = {
  name: string
  place: string
  text: string
}

type ReviewSliderProps = {
  reviews: Review[]
  label: string
}

export function ReviewSlider({ reviews, label }: ReviewSliderProps) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || reviews.length < 2) return
    const timer = window.setInterval(() => setActive((current) => (current + 1) % reviews.length), 5000)
    return () => window.clearInterval(timer)
  }, [paused, reviews.length])

  const showPrevious = () => setActive((current) => (current - 1 + reviews.length) % reviews.length)
  const showNext = () => setActive((current) => (current + 1) % reviews.length)
  const review = reviews[active]

  return (
    <div
      className="mx-auto mt-12 max-w-4xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label={label}
    >
      <figure className="relative overflow-hidden rounded-2xl border border-border bg-card px-7 py-10 text-center shadow-sm sm:px-14">
        <span className="absolute right-5 top-5 rounded-full bg-secondary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
          Sample review
        </span>
        <Quote className="mx-auto h-9 w-9 text-accent" />
        <div className="mt-4 flex justify-center gap-1" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} className="h-4 w-4 fill-accent text-accent" />
          ))}
        </div>
        <blockquote className="mx-auto mt-6 max-w-2xl text-pretty font-serif text-xl leading-relaxed text-foreground sm:text-2xl">
          &ldquo;{review.text}&rdquo;
        </blockquote>
        <figcaption className="mt-6 text-sm">
          <span className="font-semibold text-foreground">{review.name}</span>
          <span className="text-muted-foreground"> · {review.place}</span>
        </figcaption>
      </figure>

      <div className="mt-5 flex items-center justify-center gap-4">
        <button type="button" onClick={showPrevious} className="rounded-full border border-border bg-card p-2.5 text-foreground transition-colors hover:border-primary hover:text-primary" aria-label="Previous review">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-2" aria-label="Choose review">
          {reviews.map((item, index) => (
            <button
              key={`${item.name}-${index}`}
              type="button"
              onClick={() => setActive(index)}
              className={`h-2.5 rounded-full transition-all ${index === active ? 'w-7 bg-primary' : 'w-2.5 bg-border hover:bg-primary/50'}`}
              aria-label={`Show review ${index + 1}`}
              aria-current={index === active ? 'true' : undefined}
            />
          ))}
        </div>
        <button type="button" onClick={showNext} className="rounded-full border border-border bg-card p-2.5 text-foreground transition-colors hover:border-primary hover:text-primary" aria-label="Next review">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
