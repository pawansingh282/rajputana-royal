import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppFloat } from '@/components/whatsapp-float'
import { PageHero } from '@/components/page-hero'

export type LegalSection = {
  title: string
  paragraphs?: string[]
  items?: string[]
}

export function LegalPage({ title, description, sections }: { title: string; description: string; sections: LegalSection[] }) {
  return (
    <main className="bg-background">
      <SiteHeader />
      <PageHero image="/palace-bg.png" eyebrow="Legal" title={title} description={description} />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 rounded-xl border border-accent/40 bg-secondary p-5 text-sm leading-relaxed text-secondary-foreground">
          <strong>Draft notice:</strong> Ye sample policy hai. Publish karne se pehle business owner ko contact details, charges, timelines aur legal terms verify karke update karne chahiye.
        </div>
        <p className="mb-10 text-sm text-muted-foreground">Last updated: 19 July 2026</p>
        <div className="space-y-10">
          {sections.map((section) => (
            <article key={section.title}>
              <h2 className="font-serif text-2xl font-bold text-foreground">{section.title}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="mt-4 leading-7 text-muted-foreground">{paragraph}</p>
              ))}
              {section.items ? (
                <ul className="mt-4 list-disc space-y-3 pl-6 leading-7 text-muted-foreground">
                  {section.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
      <WhatsAppFloat />
    </main>
  )
}
