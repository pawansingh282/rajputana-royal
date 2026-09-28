import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PageId, PhotographyCategory } from './types';
import { Camera, Car, Frame, ArrowRight } from 'lucide-react';

export default function App() {
  const [page, setPage] = useState<PageId>('home');
  const navigate = (next: PageId, _category?: PhotographyCategory) => setPage(next);
  return <div className="min-h-screen bg-[#07080b] text-white">
    <Navbar currentPage={page} onNavigate={navigate} onOpenBooking={() => undefined} />
    <main>
      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden px-6 py-24 text-center">
        <img src="/images/infinity_hero_banner.jpg" alt="Mountain road with car and photographer" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative mx-auto max-w-5xl pt-10">
          <p className="mb-5 font-serif text-4xl italic text-[#d4af37]">Welcome to</p>
          <h1 className="text-6xl font-light tracking-[0.22em] sm:text-8xl">GROUP OF<br /><span className="font-semibold">INFINITY</span></h1>
          <p className="mt-7 tracking-[0.3em] text-white/90">ONE DESTINATION, ENDLESS EXPERIENCES.</p>
          <p className="mt-14 text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">Choose your experience</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[{icon: Car,title:'INFINITY',accent:'TRAVELS',copy:'Comfortable rides, experienced drivers and unforgettable journeys across India.',image:'/images/card_travels_car.jpg'}, {icon: Camera,title:'INFINITY',accent:'PRODUCTION HOUSE',copy:'Photography & Cinematography services to capture your special moments.',image:'/images/card_framing_wall.jpg'}, {icon: Frame,title:'INFINITY',accent:'FRAMING',copy:'Premium frames for your memories, because every moment deserves a frame.',image:'/images/card_framing_wall.jpg'}].map(({icon:Icon,title,accent,copy,image}) => <article key={accent} className="overflow-hidden rounded-2xl border border-[#c9974c]/50 bg-black/75 p-6 shadow-2xl backdrop-blur-sm">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#d4af37] text-[#d4af37]"><Icon className="h-7 w-7" /></div><h2 className="mt-5 text-2xl tracking-[0.16em]">{title}</h2><h3 className="text-xl tracking-[0.1em] text-[#d4af37]">{accent}</h3><p className="mt-5 min-h-20 text-sm leading-7 text-white/85">{copy}</p><img src={image} alt="" className="mt-4 h-32 w-full object-cover opacity-80" /><button onClick={() => undefined} className="mt-5 flex w-full items-center justify-center gap-2 rounded border border-[#d4af37] py-3 text-xs uppercase tracking-widest text-[#f3e5ab]">Explore <ArrowRight className="h-4 w-4" /></button>
            </article>)}
          </div>
        </div>
      </section>
    </main>
    <Footer onNavigate={navigate} onOpenBooking={() => undefined} />
  </div>;
}
