import React from 'react';
import { 
  Car, 
  Camera, 
  Luggage,
  Image as ImageIcon,
  ShieldCheck, 
  Users, 
  Award, 
  Heart,
  Smile,
  MapPin
} from 'lucide-react';
import { PageId, PhotographyCategory, TravelPackage, PhotoItem } from '../types';
import { ImageWithFallback } from '../components/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: PageId, category?: PhotographyCategory) => void;
  onOpenBooking?: (prefillType?: 'travel' | 'photography', itemTitle?: string) => void;
  onSelectPackage?: (pkg: TravelPackage) => void;
  onSelectPhoto?: (photo: PhotoItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
}) => {
  return (
    <div className="pt-20 pb-20 space-y-20 bg-black text-white">
      
      {/* 1. HERO BANNER + EXPERIENCE CARDS (MATCHING USER MOCKUP EXACTLY) */}
      <section className="relative min-h-[92vh] flex flex-col justify-between pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image: Sunset mountain road with Innova Crysta on left & Photographer on right */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/infinity_hero_banner.jpg"
            alt="Group of Infinity - Travels & Production House"
            className="w-full h-full object-cover object-center filter brightness-100 contrast-105"
            referrerPolicy="no-referrer"
          />
          {/* Natural atmospheric lighting gradients matching mockup */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(0,0,0,0.3)_0%,transparent_70%)]"></div>
        </div>

        {/* Center Banner Typography matching exact mockup */}
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-2.5 sm:space-y-3 pt-6 pb-6 animate-fadeIn">
          
          {/* "Welcome to" - Cursive Calligraphy Script */}
          <div className="font-script text-4xl sm:text-5xl md:text-6xl text-[#d4af37] font-normal tracking-wide drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]">
            Welcome to
          </div>

          {/* Golden Divider Line with Diamond */}
          <div className="flex items-center justify-center gap-3 w-40 sm:w-48 mx-auto">
            <div className="h-[1px] bg-gradient-to-r from-transparent to-[#c9974c] flex-1"></div>
            <span className="text-[#c9974c] text-[10px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">◆</span>
            <div className="h-[1px] bg-gradient-to-l from-transparent to-[#c9974c] flex-1"></div>
          </div>

          {/* GROUP OF - Clean Spaced Sans-Serif */}
          <div className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.38em] text-neutral-100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
            GROUP OF
          </div>

          {/* Main Title: INFINITY - Bold, Prominent, Clean Modern Display Sans-Serif */}
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-[0.1em] text-white uppercase leading-none drop-shadow-[0_10px_35px_rgba(0,0,0,0.98)]">
            INFINITY
          </h1>

          {/* Subtitle: ONE DESTINATION, ENDLESS EXPERIENCES. */}
          <p className="text-xs sm:text-sm md:text-base text-neutral-100 font-semibold tracking-[0.25em] uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] pt-0.5">
            ONE DESTINATION, ENDLESS EXPERIENCES.
          </p>

          {/* Golden Divider Line with Diamond */}
          <div className="flex items-center justify-center gap-3 w-40 sm:w-48 mx-auto pt-0.5">
            <div className="h-[1px] bg-gradient-to-r from-transparent to-[#c9974c] flex-1"></div>
            <span className="text-[#c9974c] text-[10px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">◆</span>
            <div className="h-[1px] bg-gradient-to-l from-transparent to-[#c9974c] flex-1"></div>
          </div>

          {/* CHOOSE YOUR EXPERIENCE */}
          <div className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#d4af37] font-bold pt-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
            CHOOSE YOUR EXPERIENCE
          </div>

        </div>

        {/* 2. THE THREE EXPERIENCE CARDS SITTING OVER THE LOWER BANNER MATCHING USER IMAGE */}
        <div className="relative z-20 max-w-6xl mx-auto w-full pt-4 pb-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
            
            {/* Card 1: INFINITY TRAVELS */}
            <div className="rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1.5 bg-[#0c0d12]/85 backdrop-blur-md border border-[#c9974c]/30 hover:border-[#c9974c] shadow-[0_16px_40px_rgba(0,0,0,0.8)]">
              <div className="space-y-4">
                <div className="text-center space-y-1 pt-2">
                  <h3 className="text-lg sm:text-xl font-bold tracking-wider text-white">
                    INFINITY
                  </h3>
                  <div className="text-base sm:text-lg font-extrabold tracking-widest text-[#c9974c] uppercase">
                    TRAVELS
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed max-w-[260px] mx-auto pt-1">
                    Comfortable rides, experienced drivers and unforgettable journeys across India.
                  </p>
                </div>

                {/* Preview Image: Toyota Innova Crysta */}
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 my-4">
                  <img
                    src="/images/card_travels_car.jpg"
                    alt="Infinity Travels Innova Crysta"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('travels')}
                  className="w-full py-3 rounded-xl border border-[#c9974c]/70 hover:border-[#c9974c] bg-black/40 hover:bg-[#c9974c] text-white hover:text-black font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <span>EXPLORE TRAVELS</span>
                  <span>→</span>
                </button>
              </div>
            </div>

            {/* Card 2: INFINITY PRODUCTION HOUSE */}
            <div className="rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1.5 bg-[#0c0d12]/85 backdrop-blur-md border border-[#c9974c]/30 hover:border-[#c9974c] shadow-[0_16px_40px_rgba(0,0,0,0.8)]">
              <div className="space-y-4">
                <div className="text-center space-y-1 pt-2">
                  <h3 className="text-lg sm:text-xl font-bold tracking-wider text-white">
                    INFINITY
                  </h3>
                  <div className="text-base sm:text-lg font-extrabold tracking-widest text-[#c9974c] uppercase">
                    PRODUCTION HOUSE
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed max-w-[260px] mx-auto pt-1">
                    Photography & Cinematography services to capture your special moments.
                  </p>
                </div>

              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('photography')}
                  className="w-full py-3 rounded-xl border border-[#c9974c]/70 hover:border-[#c9974c] bg-black/40 hover:bg-[#c9974c] text-white hover:text-black font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <span>EXPLORE PHOTOGRAPHY</span>
                  <span>→</span>
                </button>
              </div>
            </div>

            {/* Card 3: INFINITY FRAMING */}
            <div className="rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1.5 bg-[#0c0d12]/85 backdrop-blur-md border border-[#c9974c]/30 hover:border-[#c9974c] shadow-[0_16px_40px_rgba(0,0,0,0.8)]">
              <div className="space-y-4">
                <div className="text-center space-y-1 pt-2">
                  <h3 className="text-lg sm:text-xl font-bold tracking-wider text-white">
                    INFINITY
                  </h3>
                  <div className="text-base sm:text-lg font-extrabold tracking-widest text-[#c9974c] uppercase">
                    FRAMING
                  </div>
                  <div className="pt-0.5">
                    <span className="px-3 py-0.5 rounded-full border border-[#c9974c]/60 text-[9px] uppercase font-bold tracking-wider text-[#c9974c] inline-block bg-black/60">
                      COMING SOON
                    </span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed max-w-[260px] mx-auto pt-1">
                    Premium frames for your memories, because every moment deserves a frame.
                  </p>
                </div>

                {/* Preview Image: Art Gallery Framed Wall */}
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 my-4">
                  <img
                    src="/images/card_framing_wall.jpg"
                    alt="Infinity Framing Artisan Wall"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('framing')}
                  className="w-full py-3 rounded-xl border border-[#c9974c]/40 hover:border-[#c9974c] bg-black/40 text-neutral-300 hover:text-white font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <span>COMING SOON</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. ABOUT US & ORIGIN STORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0d0d10] border border-[#d4af37]/30 rounded-3xl p-8 sm:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center shadow-2xl">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#d4af37] font-bold block">
                ABOUT US
              </span>
              <h2 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl text-white font-bold leading-tight">
                WE ARE STORYTELLERS, <span className="text-[#d4af37]">TRAVELERS & CREATORS</span>
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
              Group of Infinity is a passion-driven brand born in Jodhpur, Rajasthan that combines the luxury of seamless travel with the timeless craft of photography. We help you discover mesmerizing destinations and capture life's unforgettable memories in breathtaking detail.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('about')}
                className="px-6 py-3 rounded-xl bg-black border border-[#d4af37] hover:bg-[#d4af37] hover:text-black text-white font-bold uppercase tracking-wider text-xs transition-all shadow-md"
              >
                Read More About Us
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden border border-[#d4af37]/30 h-44 sm:h-52">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=85"
                  alt="Jodhpur Mehrangarh Palace"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#d4af37]/30 h-36 sm:h-44">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=85"
                  alt="Photography Camera Rig"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="rounded-2xl overflow-hidden border border-[#d4af37]/30 h-36 sm:h-44">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=85"
                  alt="Travel Fleet Innova"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#d4af37]/30 h-44 sm:h-52">
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

      {/* 4. WHY CHOOSE US (4 TRUST PILLARS MATCHING MOCKUP) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-12">
          <div className="flex items-center justify-center">
            <span className="text-[#c9974c] text-xs">◆</span>
          </div>
          <h2 className="font-sans-brand text-2xl sm:text-3xl md:text-4xl text-white font-extrabold tracking-[0.2em] uppercase">
            WHY CHOOSE US
          </h2>
          <div className="flex items-center justify-center pt-1">
            <span className="text-[#c9974c] text-xs">◆</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-[#0c0d11] border border-[#c9974c]/25 rounded-2xl p-6 text-center space-y-3 hover:border-[#c9974c] transition-all group shadow-lg">
            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full border border-[#c9974c] flex items-center justify-center text-[#c9974c] mx-auto group-hover:scale-105 transition-all">
              <ShieldCheck className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h4 className="font-sans-brand text-white text-sm sm:text-base font-bold uppercase tracking-wider">
              Trusted & Reliable
            </h4>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Your safety and trust are our priority.
            </p>
          </div>

          <div className="bg-[#0c0d11] border border-[#c9974c]/25 rounded-2xl p-6 text-center space-y-3 hover:border-[#c9974c] transition-all group shadow-lg">
            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full border border-[#c9974c] flex items-center justify-center text-[#c9974c] mx-auto group-hover:scale-105 transition-all">
              <Users className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h4 className="font-sans-brand text-white text-sm sm:text-base font-bold uppercase tracking-wider">
              Expert Team
            </h4>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Professional drivers & creative experts.
            </p>
          </div>

          <div className="bg-[#0c0d11] border border-[#c9974c]/25 rounded-2xl p-6 text-center space-y-3 hover:border-[#c9974c] transition-all group shadow-lg">
            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full border border-[#c9974c] flex items-center justify-center text-[#c9974c] mx-auto group-hover:scale-105 transition-all">
              <Award className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h4 className="font-sans-brand text-white text-sm sm:text-base font-bold uppercase tracking-wider">
              Quality Service
            </h4>
            <p className="text-xs text-neutral-300 leading-relaxed">
              We deliver the best experiences.
            </p>
          </div>

          <div className="bg-[#0c0d11] border border-[#c9974c]/25 rounded-2xl p-6 text-center space-y-3 hover:border-[#c9974c] transition-all group shadow-lg">
            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full border border-[#c9974c] flex items-center justify-center text-[#c9974c] mx-auto group-hover:scale-105 transition-all">
              <Heart className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h4 className="font-sans-brand text-white text-sm sm:text-base font-bold uppercase tracking-wider">
              Customer Satisfaction
            </h4>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Happiness is our ultimate goal.
            </p>
          </div>

        </div>
      </section>

      {/* 5. QUOTE BANNER & LIVE STATISTICS MATCHING MOCKUP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0c0d11] border border-[#c9974c]/35 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Quote on Left */}
            <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-neutral-800 pb-8 lg:pb-0 lg:pr-8 space-y-3">
              <span className="text-4xl sm:text-5xl text-[#c9974c] font-serif leading-none block">“</span>
              <p className="font-serif italic text-lg sm:text-xl text-neutral-200 leading-relaxed">
                We don't just plan journeys or capture moments, We create memories that last forever.
              </p>
              <span className="font-serif italic text-sm text-[#c9974c] block pt-2">
                - Group of Infinity
              </span>
            </div>

            {/* 4 Stats on Right */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              <div className="space-y-1.5">
                <Car className="w-7 h-7 text-[#c9974c] mx-auto mb-1 stroke-[1.5]" />
                <div className="font-sans-brand text-2xl sm:text-3xl font-extrabold text-white">
                  500+
                </div>
                <div className="font-sans-brand text-[11px] text-neutral-300 uppercase tracking-wider">
                  Trips Completed
                </div>
              </div>

              <div className="space-y-1.5">
                <Camera className="w-7 h-7 text-[#c9974c] mx-auto mb-1 stroke-[1.5]" />
                <div className="font-sans-brand text-2xl sm:text-3xl font-extrabold text-white">
                  1000+
                </div>
                <div className="font-sans-brand text-[11px] text-neutral-300 uppercase tracking-wider">
                  Events Captured
                </div>
              </div>

              <div className="space-y-1.5">
                <Smile className="w-7 h-7 text-[#c9974c] mx-auto mb-1 stroke-[1.5]" />
                <div className="font-sans-brand text-2xl sm:text-3xl font-extrabold text-white">
                  100%
                </div>
                <div className="font-sans-brand text-[11px] text-neutral-300 uppercase tracking-wider">
                  Happy Clients
                </div>
              </div>

              <div className="space-y-1.5">
                <MapPin className="w-7 h-7 text-[#c9974c] mx-auto mb-1 stroke-[1.5]" />
                <div className="font-sans-brand text-2xl sm:text-3xl font-extrabold text-white">
                  50+
                </div>
                <div className="font-sans-brand text-[11px] text-neutral-300 uppercase tracking-wider">
                  Destinations
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. READY TO PLAN CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#0d0d10] border border-[#d4af37]/45 rounded-3xl p-10 sm:p-14 space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.2)_0,transparent_70%)]"></div>
          
          <div className="relative z-10 space-y-3 max-w-xl mx-auto">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37] font-bold">
              START YOUR INFINITE JOURNEY
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-4xl text-white font-bold">
              Ready to Travel or Capture Your Dream Event?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-200 font-light">
              Connect directly with our concierge desk in Jodhpur for instant car booking or wedding cinematography quotes.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 rounded-xl bg-[#c9974c] hover:bg-[#b8863b] text-black font-bold uppercase tracking-wider text-xs shadow-lg transition-all"
            >
              Contact Studio Desk
            </button>
            <button
              onClick={() => onNavigate('gallery')}
              className="px-8 py-3.5 rounded-xl border border-[#c9974c] text-[#f3e5ab] hover:bg-[#c9974c] hover:text-black font-bold uppercase tracking-wider text-xs transition-all"
            >
              Explore Full Gallery
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
