import React from 'react';
import { 
  Compass, 
  Camera, 
  Sprout, 
  Award, 
  ShieldCheck, 
  Users, 
  Heart, 
  Sparkles,
  MapPin,
  CheckCircle2
} from 'lucide-react';
import { PageId } from '../types';
import { ImageWithFallback } from '../components/ImageWithFallback';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="pt-28 pb-20 space-y-20">
      
      {/* Header Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121318] border border-[#d4af37]/40 text-xs text-[#d4af37] font-bold tracking-widest uppercase mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>OUR STORY & PHILOSOPHY</span>
        </div>
        <h1 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl text-white font-extrabold tracking-wide">
          WE ARE STORYTELLERS, <span className="text-gold-gradient">TRAVELERS & CREATORS</span>
        </h1>
        <p className="text-sm sm:text-base text-neutral-300 max-w-3xl mx-auto font-light leading-relaxed">
          Rooted in the royal heritage of Jodhpur, Rajasthan, Group of Infinity bridges luxury travel experiences with the timeless art of high-definition photography and master framing.
        </p>
      </section>

      {/* Origin Story Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#121318] border border-[#d4af37]/25 rounded-3xl p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center shadow-2xl">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#d4af37] font-bold block">
                THE INFINITY JOURNEY
              </span>
              <h2 className="font-serif-luxury text-2xl sm:text-3xl text-white font-bold leading-snug">
                One Destination. Endless Experiences.
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
              Founded with the vision that every great journey deserves to be cherished forever, Group of Infinity started as a boutique travel service in the Sun City of Jodhpur. We realized that travelers and couples don't just want transportation — they want deep authentic experiences, seamless comfort, and breathtaking visual records of their most precious moments.
            </p>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
              Today, our brand encompasses three specialized wings: <span className="text-[#f3e5ab] font-semibold">Infinity Travels</span> (Luxury Car Rental & Outstation Tours), <span className="text-[#f3e5ab] font-semibold">Infinity Production House</span> (4K Cinema Wedding & Commercial Shoots), and <span className="text-[#f3e5ab] font-semibold">Infinity Farming</span> (Organic Agriculture & Agro-Tourism Retreats).
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 rounded-xl border border-[#d4af37] text-[#f3e5ab] hover:bg-[#d4af37] hover:text-black font-bold uppercase tracking-wider text-xs shadow-lg transition-all"
              >
                Contact Concierge
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden border border-[#d4af37]/20 h-48 sm:h-56">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=85"
                  alt="Rajasthan Heritage Architecture"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#d4af37]/20 h-40 sm:h-48">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=85"
                  alt="Professional Cinema Rig"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="rounded-2xl overflow-hidden border border-[#d4af37]/20 h-40 sm:h-48">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=85"
                  alt="Luxury Innova Crysta Travel Fleet"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#d4af37]/20 h-48 sm:h-56">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=85"
                  alt="Pre-Wedding Romance in Desert"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* The 3 Core Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#d4af37] font-bold block">
            OUR THREE PILLARS
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-white font-bold">
            The Infinity Ecosystem
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-[#121318] border border-[#d4af37]/25 rounded-2xl p-8 space-y-4 hover:border-[#d4af37]/60 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 text-[#d4af37] flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-serif-luxury text-xl font-bold text-white">
              01. Infinity Travels
            </h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Clean sanitized Innova Crysta, Fortuner 4x4, Swift Dzire, and 17-seater Tempo Travellers driven by courteous, verified local chauffeurs who double as your local cultural guides.
            </p>
            <ul className="space-y-1.5 text-xs text-neutral-400 pt-2 border-t border-neutral-800">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Zero hidden charges & upfront per-KM billing</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>24/7 on-road roadside assistance across India</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#121318] border border-[#d4af37]/25 rounded-2xl p-8 space-y-4 hover:border-[#d4af37]/60 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 text-[#d4af37] flex items-center justify-center">
              <Camera className="w-6 h-6" />
            </div>
            <h3 className="font-serif-luxury text-xl font-bold text-white">
              02. Infinity Production House
            </h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              From grand royal wedding ceremonies to intimate sand-dune pre-weddings, baby milestones, and commercial fashion shoots with Sony Cinema line & 4K drone cinematography.
            </p>
            <ul className="space-y-1.5 text-xs text-neutral-400 pt-2 border-t border-neutral-800">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Color-graded high dynamic range 4K deliverables</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Same-day edit teasers for reception screens</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#121318] border border-[#d4af37]/25 rounded-2xl p-8 space-y-4 hover:border-[#d4af37]/60 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 text-[#d4af37] flex items-center justify-center">
              <Sprout className="w-6 h-6" />
            </div>
            <h3 className="font-serif-luxury text-xl font-bold text-white">
              03. Infinity Farming
            </h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              100% certified organic cultivation, seasonal farm-to-table harvests, and tranquil agro-tourism retreats connecting you with nature.
            </p>
            <ul className="space-y-1.5 text-xs text-neutral-400 pt-2 border-t border-neutral-800">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Zero synthetic chemicals & Vedic soil rejuvenation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Weekend agritourism farm stays & organic picking</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* Quote Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-r from-[#121318] via-[#1a1c24] to-[#121318] border border-[#d4af37]/40 rounded-3xl p-10 sm:p-14 space-y-4 shadow-2xl">
          <p className="font-display-sub italic text-xl sm:text-2xl text-[#f3e5ab] leading-relaxed">
            “Travel to explore, photography to inspire. We don’t just deliver a service — we weave a lifelong relationship with every guest who travels with us or steps in front of our lenses.”
          </p>
          <div className="font-serif-luxury text-xs uppercase tracking-[0.25em] text-[#d4af37] font-bold">
            Group of Infinity Team • Jodhpur, Rajasthan
          </div>
        </div>
      </section>

    </div>
  );
};
