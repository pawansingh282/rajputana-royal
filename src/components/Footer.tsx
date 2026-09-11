import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react';
import { PageId, PhotographyCategory } from '../types';

interface FooterProps {
  onNavigate: (page: PageId, category?: PhotographyCategory) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-black border-t border-[#d4af37]/20 pt-16 pb-8 text-neutral-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Brand & Mission Column */}
          <div className="space-y-4">
            <button
              onClick={() => {
                onNavigate('home');
                scrollToTop();
              }}
              className="flex items-center gap-3 text-left group"
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <svg
                  className="w-9 h-9 text-[#d4af37] drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]"
                  viewBox="0 0 100 50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M30 10 C 15 10, 10 25, 25 38 C 38 48, 62 2, 75 12 C 90 25, 85 40, 70 40 C 55 40, 45 25, 30 10 Z" />
                </svg>
              </div>
              <div>
                <span className="font-serif-luxury text-base font-bold tracking-[0.2em] text-white block">
                  GROUP OF <span className="text-[#d4af37]">INFINITY</span>
                </span>
                <span className="text-[9px] tracking-[0.25em] text-neutral-400 uppercase block font-medium">
                  EXPERIENCE BEYOND LIMITS
                </span>
              </div>
            </button>

            <p className="text-xs leading-relaxed text-neutral-300 max-w-sm">
              Travel to explore, photography to inspire. We create experiences you'll always remember.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-serif-luxury text-white text-xs uppercase tracking-[0.2em] mb-4 pb-2 border-b border-neutral-800">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    scrollToTop();
                  }}
                  className="text-neutral-300 hover:text-[#d4af37] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('about');
                    scrollToTop();
                  }}
                  className="text-neutral-300 hover:text-[#d4af37] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('travels');
                    scrollToTop();
                  }}
                  className="text-neutral-300 hover:text-[#d4af37] transition-colors"
                >
                  Travel
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('photography');
                    scrollToTop();
                  }}
                  className="text-neutral-300 hover:text-[#d4af37] transition-colors"
                >
                  Photography
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('gallery');
                    scrollToTop();
                  }}
                  className="text-neutral-300 hover:text-[#d4af37] transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('contact');
                    scrollToTop();
                  }}
                  className="text-neutral-300 hover:text-[#d4af37] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Us Column */}
          <div>
            <h4 className="font-serif-luxury text-white text-xs uppercase tracking-[0.2em] mb-4 pb-2 border-b border-neutral-800">
              CONTACT US
            </h4>
            <ul className="space-y-3.5 text-xs">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+911234567890" className="text-neutral-200 hover:text-[#d4af37] transition-colors block">
                    +91 12345 67890
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <a href="mailto:info@groupofinfinity.art" className="text-neutral-200 hover:text-[#d4af37] transition-colors">
                  info@groupofinfinity.art
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span className="text-neutral-200">
                  Jodhpur, Rajasthan, India
                </span>
              </li>
            </ul>
          </div>

          {/* Socials & Connect */}
          <div>
            <h4 className="font-serif-luxury text-white text-xs uppercase tracking-[0.2em] mb-4 pb-2 border-b border-neutral-800">
              FOLLOW US
            </h4>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-neutral-800 bg-[#0d0d10] flex items-center justify-center text-neutral-300 hover:text-[#d4af37] hover:border-[#d4af37] transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-neutral-800 bg-[#0d0d10] flex items-center justify-center text-neutral-300 hover:text-[#d4af37] hover:border-[#d4af37] transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-neutral-800 bg-[#0d0d10] flex items-center justify-center text-neutral-300 hover:text-[#d4af37] hover:border-[#d4af37] transition-all hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/911234567890?text=Hello%20Group%20of%20Infinity,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-neutral-800 bg-[#0d0d10] flex items-center justify-center text-neutral-300 hover:text-[#25D366] hover:border-[#25D366] transition-all hover:scale-110"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 text-center text-xs text-neutral-400">
          © 2025 Group of Infinity. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};
