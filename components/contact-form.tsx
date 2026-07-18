"use client"

import { useState } from "react"
import { OrnateDivider } from "@/components/ornament"

const services = [
  "Wedding Photography",
  "Pre-Wedding Shoot",
  "Car Rental (Self / Chauffeur)",
  "Decorated Wedding Car",
  "Photography + Car (Combo)",
  "Other Enquiry",
]

export function ContactForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="rounded-lg border border-primary/30 bg-card p-10 text-center">
        <OrnateDivider className="mb-6" />
        <h3 className="font-serif text-2xl text-primary">Dhanyavaad!</h3>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Aapka enquiry mil gaya hai. Hamari team 24 ghante ke andar aapse sampark karegi.
          Turant baat karne ke liye WhatsApp par message karein.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-6 rounded-md border border-primary/40 px-6 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          Send Another Enquiry
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-border bg-card p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            required
            placeholder="Aapka naam"
            className="rounded-md border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            required
            placeholder="+91 XXXXX XXXXX"
            className="rounded-md border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            className="rounded-md border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="date" className="text-sm font-medium text-foreground">
            Event Date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            className="rounded-md border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
          />
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="service" className="text-sm font-medium text-foreground">
            Service Needed
          </label>
          <select
            id="service"
            name="service"
            className="rounded-md border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
          >
            {services.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="message" className="text-sm font-medium text-foreground">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Apne function, location aur requirements ke baare me batayein..."
            className="rounded-md border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-6 w-full rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
      >
        Send Enquiry
      </button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        We reply within 24 hours. Aapki details safe rehti hain.
      </p>
    </form>
  )
}
