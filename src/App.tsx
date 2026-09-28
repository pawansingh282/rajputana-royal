import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PageId, PhotographyCategory } from './types';
import { RestoredPage } from './pages/RestoredPages';
import { Camera, Car, Frame, ArrowRight, ShieldCheck, Users, Award, Heart, MapPin, Mail, Phone, Instagram, Facebook, Youtube } from 'lucide-react';

export default function App() {
  const [page, setPage] = useState<PageId>('home');
  const navigate = (next: PageId, _category?: PhotographyCategory) => setPage(next);
  return <div className="min-h-screen bg-[#07080b] text-white">
    <Navbar currentPage={page} onNavigate={navigate} onOpenBooking={() => undefined} />
    {page !== 'home' ? <RestoredPage page={page} onNavigate={navigate} /> : <main>
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

      <section className="bg-black px-6 py-20">
        <div className="mx-auto grid max-w-5xl gap-10 rounded-2xl border border-[#c9974c]/40 bg-[#0c0d10] p-8 md:grid-cols-[1fr_1.1fr] md:p-12">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d4af37]">About us</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-wide sm:text-4xl">WE ARE STORYTELLERS,<br />TRAVELERS & CREATORS</h2>
            <p className="mt-6 text-sm leading-7 text-white/65">Group of Infinity is a passion-driven brand born in Rajasthan that combines memorable travel experiences with the art of photography. We help you discover meaningful destinations and capture life&apos;s unforgettable moments.</p>
            <button onClick={() => navigate('about')} className="mt-7 w-fit rounded border border-[#d4af37] px-5 py-3 text-xs font-semibold uppercase tracking-widest text-[#f3e5ab]">Read more about us</button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {['/images/card_farming_farm.jpg','/images/card_travels_car.jpg','/images/card_camera_dslr.jpg','/images/card_framing_wall.jpg'].map((image, index) => <img key={image} src={image} alt={['Rajasthan travel destination','Infinity Travels car','Photography camera','Framing gallery'][index]} className="h-36 w-full rounded-xl object-cover sm:h-44" />)}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center"><p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d4af37]">Why choose us</p><h2 className="mt-3 text-3xl font-bold tracking-[0.18em]">WHY CHOOSE US</h2></div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[['Trusted & Reliable','Your safety and trust are our priority.',ShieldCheck],['Expert Team','Professional drivers & creative experts.',Users],['Quality Service','We deliver the best experiences.',Award],['Customer Satisfaction','Happiness is our ultimate goal.',Heart]].map(([title,copy,Icon]) => <div key={title as string} className="rounded-xl border border-white/10 bg-[#101114] p-7 text-center"><Icon className="mx-auto h-8 w-8 text-[#d4af37]" strokeWidth={1.4} /><h3 className="mt-5 text-sm font-bold uppercase tracking-wide">{title as string}</h3><p className="mt-3 text-xs leading-6 text-white/55">{copy as string}</p></div>)}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-14">
        <div className="mx-auto grid max-w-5xl items-center gap-8 rounded-2xl border border-[#c9974c]/35 bg-[#0d0e11] p-8 md:grid-cols-[1fr_2fr] md:p-12">
          <blockquote className="border-r border-white/15 pr-8 text-base italic leading-8 text-white/80">“We don&apos;t just plan journeys or capture moments. We create memories that last forever.”<footer className="mt-4 text-sm not-italic text-[#d4af37]">- Group of Infinity</footer></blockquote>
          <div className="grid grid-cols-2 gap-8 text-center sm:grid-cols-4">{[['500+','Trips completed',Car],['1000+','Events captured',Camera],['100%','Happy clients',Heart],['50+','Destinations',MapPin]].map(([value,label,Icon]) => <div key={label as string}><Icon className="mx-auto h-6 w-6 text-[#d4af37]" strokeWidth={1.3} /><strong className="mt-2 block text-2xl text-[#f3e5ab]">{value as string}</strong><span className="text-[10px] uppercase tracking-wider text-white/55">{label as string}</span></div>)}</div>
        </div>
      </section>

      <section className="bg-black px-6 py-10 pb-24"><div className="mx-auto max-w-3xl rounded-2xl border border-[#c9974c]/50 bg-gradient-to-br from-[#1a1710] to-[#0c0d10] px-6 py-14 text-center"><p className="text-xs uppercase tracking-[0.3em] text-[#d4af37]">Start your infinite journey</p><h2 className="mt-4 text-3xl font-bold sm:text-4xl">Ready to Travel or Capture<br />Your Dream Event?</h2><p className="mx-auto mt-5 max-w-xl text-sm text-white/60">Connect directly with our concierge desk for instant car booking or wedding cinematography quotes.</p><div className="mt-8 flex flex-wrap justify-center gap-4"><button onClick={() => navigate('contact')} className="rounded bg-[#d4af37] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black">Contact studio desk</button><button onClick={() => navigate('gallery')} className="rounded border border-[#d4af37] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#f3e5ab]">Explore full gallery</button></div></div></section>
    </main>}
    <Footer onNavigate={navigate} onOpenBooking={() => undefined} />
  </div>;
}
