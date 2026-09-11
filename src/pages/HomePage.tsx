import React from 'react';
import { Camera, Image as ImageIcon, Luggage } from 'lucide-react';
import { PageId, PhotographyCategory, TravelPackage, PhotoItem } from '../types';

interface HomePageProps {
  onNavigate: (page: PageId, category?: PhotographyCategory) => void;
  onOpenBooking?: (prefillType?: 'travel' | 'photography', itemTitle?: string) => void;
  onSelectPackage?: (pkg: TravelPackage) => void;
  onSelectPhoto?: (photo: PhotoItem) => void;
}

const experiences = [
  {
    title: 'TRAVELS',
    icon: Luggage,
    copy: 'Comfortable rides, experienced drivers and unforgettable journeys across India.',
    image: '/images/card_travels_car.jpg',
    alt: 'Luxury car ready for an Infinity Travels journey',
    action: 'EXPLORE TRAVELS',
    page: 'travels' as PageId,
  },
  {
    title: 'PRODUCTION HOUSE',
    icon: Camera,
    copy: 'Photography & Cinematography services to capture your special moments.',
    image: '/images/card_camera_dslr.jpg',
    alt: 'Professional camera for Infinity Production House',
    action: 'EXPLORE PHOTOGRAPHY',
    page: 'photography' as PageId,
  },
  {
    title: 'FRAMING',
    icon: ImageIcon,
    copy: 'Premium frames for your memories, because every moment deserves a frame.',
    image: '/images/card_framing_wall.jpg',
    alt: 'Framed artwork displayed on a gallery wall',
    action: 'COMING SOON',
    page: 'framing' as PageId,
  },
];

function Divider() {
  return (
    <div className="flex items-center justify-center gap-3 w-44 mx-auto" aria-hidden="true">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#c9974c]" />
      <span className="text-[10px] text-[#d4af37]">◆</span>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#c9974c]" />
    </div>
  );
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <main className="min-h-screen bg-[#07080b] text-white">
      <section className="relative isolate min-h-[820px] overflow-hidden px-4 pb-10 pt-24 sm:px-8 lg:min-h-[820px] lg:px-12">
        <img
          src="/images/infinity_hero_balanced.png"
          alt="Mountain road with a luxury car and photographer at sunset"
          className="absolute left-0 right-0 top-[-30%] -z-20 h-[140%] w-full object-fill object-center"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(3,5,8,.42)_0%,rgba(3,5,8,.08)_30%,rgba(3,5,8,.62)_74%,#07080b_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_25%,rgba(0,0,0,.12),rgba(0,0,0,.58)_78%)]" />
        <img src="/images/card_travels_car.jpg" alt="Luxury car for Infinity Travels" className="absolute bottom-[28%] left-[-2%] z-0 hidden w-[29%] rounded-xl object-cover opacity-90 drop-shadow-[0_12px_20px_rgba(0,0,0,.8)] sm:block" />

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
          <p className="font-script text-4xl leading-none text-[#d4af37] drop-shadow-[0_3px_10px_rgba(0,0,0,.9)] sm:text-5xl">Welcome to</p>
          <Divider />
          <p className="mt-5 text-sm font-semibold uppercase tracking-[.42em] text-white drop-shadow-[0_3px_8px_rgba(0,0,0,.95)] sm:text-base">GROUP OF</p>
          <h1 className="mt-1 text-6xl font-black uppercase leading-[.9] tracking-[.11em] text-white drop-shadow-[0_6px_22px_rgba(0,0,0,.98)] sm:text-8xl lg:text-9xl">INFINITY</h1>
          <p className="mt-6 text-[10px] font-medium uppercase tracking-[.3em] text-white drop-shadow-[0_3px_8px_rgba(0,0,0,.95)] sm:text-sm">ONE DESTINATION, ENDLESS EXPERIENCES.</p>
          <div className="mt-5"><Divider /></div>
          <p className="mt-5 text-sm font-semibold uppercase tracking-[.22em] text-[#d4af37] drop-shadow-[0_3px_8px_rgba(0,0,0,.95)]">CHOOSE YOUR EXPERIENCE</p>
        </div>

        <div className="relative z-10 mx-auto mt-7 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-7">
          {experiences.map(({ title, icon: Icon, copy, image, alt, action, page }) => (
            <article key={title} className="group flex min-h-[450px] flex-col overflow-hidden rounded-2xl border border-[#c9974c]/45 bg-[#090b0f]/90 p-5 shadow-[0_18px_45px_rgba(0,0,0,.75)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1.5 sm:p-6">
              <div className="flex flex-1 flex-col">
                <div className="flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#d4af37] text-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,.12)]">
                    <Icon className="h-7 w-7" strokeWidth={1.4} aria-hidden="true" />
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h2 className="text-xl font-semibold uppercase tracking-[.18em] text-white">INFINITY</h2>
                  <p className="mt-1 text-lg font-semibold uppercase tracking-[.12em] text-[#d4af37]">{title}</p>
                  {title === 'FRAMING' && <span className="mt-2 inline-flex rounded-full border border-[#d4af37]/70 px-3 py-1 text-[9px] font-semibold uppercase tracking-widest text-[#d4af37]">COMING SOON</span>}
                  <p className="mx-auto mt-4 max-w-[250px] text-sm leading-6 text-neutral-200">{copy}</p>
                </div>
                <div className="relative mt-5 aspect-[1.7] overflow-hidden rounded-xl border border-white/10">
                  <img src={image} alt={alt} className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                </div>
              </div>
              <button onClick={() => onNavigate(page)} className="mt-5 flex w-full items-center justify-center gap-3 rounded-md border border-[#c9974c] bg-black/50 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[#f3e5ab] transition-colors hover:bg-[#d4af37] hover:text-black">
                {action}<span className="text-base" aria-hidden="true">→</span>
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
