import React from 'react';
import { Instagram, MessageCircle, MoveRight, Youtube } from 'lucide-react';
import { PageId, PhotographyCategory } from '../types';

interface FooterProps {
  onNavigate: (page: PageId, category?: PhotographyCategory) => void;
}

const whatsappUrl = 'https://wa.me/917726057101?text=Hello%20Group%20of%20Infinity%2C%20I%27d%20like%20to%20plan%20a%20journey.';

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const navigateTo = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="relative overflow-hidden bg-[#101315] text-white">
      <section
        className="relative flex min-h-[280px] items-center bg-cover bg-[center_48%] px-6 py-12 sm:min-h-[320px] sm:px-10 lg:min-h-[360px] lg:px-[6.25%]"
        style={{ backgroundImage: "linear-gradient(90deg, rgba(13,17,20,.62) 0%, rgba(13,17,20,.34) 38%, rgba(13,17,20,.02) 100%), url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E0%A4%AE%E0%A5%87%E0%A4%B9%E0%A4%B0%E0%A4%BE%E0%A4%A8%E0%A4%97%E0%A4%A2%E0%A4%BC%20%E0%A4%95%E0%A4%BF%E0%A4%B2%E0%A5%87%20%E0%A4%95%E0%A5%80%20%E0%A4%B8%E0%A4%BE%E0%A4%82%E0%A4%9D%E0%A5%80%20%E0%A4%B0%E0%A5%8B%E0%A4%B6%E0%A4%A8%E0%A5%80-TVkDEr70JMj4uX1J7bBu0ha2YjcnZW.png')" }}
      >
        <div className="relative z-10 max-w-xl">
          <h2 className="font-serif-luxury text-4xl leading-[.98] tracking-tight sm:text-5xl">
            Your Next Journey<br />
            <span className="italic text-[#d5a45d]">Starts Here.</span>
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/90 sm:text-base">
            Book a Swift for your city travel, outstation trip or wedding and experience a smooth, comfortable ride across Rajasthan.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex min-h-11 items-center gap-3 rounded-md bg-[#a97936] px-5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-[#bd914f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <MessageCircle aria-hidden="true" className="h-4 w-4" />
            Enquire on WhatsApp
            <MoveRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
      </section>

      <div className="border-t border-white/10 bg-[#101315]/95 px-5 sm:px-8 lg:px-[5%]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 py-5 md:flex-row md:items-center md:justify-between">
          <button onClick={() => navigateTo('home')} className="flex items-center gap-3 text-left" aria-label="Group of Infinity home">
            <svg className="h-9 w-12 shrink-0 text-[#d5a45d]" viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
              <path d="M30 10 C 15 10, 10 25, 25 38 C 38 48, 62 2, 75 12 C 90 25, 85 40, 70 40 C 55 40, 45 25, 30 10 Z" />
            </svg>
            <span className="font-serif-luxury text-sm leading-tight tracking-[0.14em] text-white sm:text-base">GROUP OF<br />INFINITY</span>
          </button>

          <p className="max-w-xs text-xs leading-relaxed text-neutral-300 md:border-l md:border-[#d5a45d]/60 md:pl-5">
            Wedding Photography &amp; Travel Cars<br />in Jodhpur and across Rajasthan.
          </p>

          <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/90">
            <button onClick={() => navigateTo('home')} className="transition-colors hover:text-[#d5a45d]">Home</button>
            <button onClick={() => navigateTo('travels')} className="transition-colors hover:text-[#d5a45d]">Travel Cars</button>
            <button onClick={() => navigateTo('photography')} className="transition-colors hover:text-[#d5a45d]">Photography</button>
            <button onClick={() => navigateTo('about')} className="transition-colors hover:text-[#d5a45d]">About</button>
            <button onClick={() => navigateTo('contact')} className="transition-colors hover:text-[#d5a45d]">Contact</button>
          </nav>

          <div className="flex items-center gap-4 text-white">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="transition-colors hover:text-[#d5a45d]"><Instagram className="h-4 w-4" /></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="transition-colors hover:text-[#d5a45d]"><Youtube className="h-4 w-4" /></a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="transition-colors hover:text-[#d5a45d]"><MessageCircle className="h-4 w-4" /></a>
          </div>
        </div>

        <div className="mx-auto flex max-w-[1440px] items-center gap-4 pb-5" aria-hidden="true">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#b88c4b]/80 to-[#b88c4b]/80" />
          <svg className="h-8 w-48 shrink-0 text-[#b88c4b]" viewBox="0 0 192 36" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 31h188M8 28h12v-8l8-6 8 6v8h8V17l11-9 11 9v11h7V20l8-6 8 6v8h7V18l9-8 10 8v10h8V22l13-4 13 4v6M27 20h2m25-1h2m26 4h2m34-2h2m26-1h2M21 31V19m14 12V19m18 12V11m22 20V19m13 12V18m20 13V13m18 18V23" />
            <path d="M48 8V4h8v4m-5-4V1m25 13v-4h8v4m23 0V6h7v7m24 5v-5h8v5" />
          </svg>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#b88c4b]/80 to-[#b88c4b]/80" />
        </div>
      </div>
    </footer>
  );
};
