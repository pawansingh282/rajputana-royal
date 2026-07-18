import { MessageCircle } from 'lucide-react'
import { site } from '@/lib/site'

export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${site.whatsapp.replace(/[^0-9]/g, '')}`}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg shadow-maroon-dark/30 transition-transform hover:scale-110"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  )
}
