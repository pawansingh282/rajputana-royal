import React, { useState } from 'react';
import { Camera, MapPin, Check, Film, Play } from 'lucide-react';
import { PhotographyCategory, PhotoItem } from '../types';
import { PHOTOGRAPHY_CATEGORIES, PHOTO_ITEMS, PHOTOGRAPHY_PACKAGES } from '../data/photographyData';
import { ImageWithFallback } from '../components/ImageWithFallback';

interface PhotographyPageProps {
  initialCategory?: PhotographyCategory;
  onSelectPhoto: (photo: PhotoItem) => void;
  onOpenBooking: (prefillType?: 'photography', itemTitle?: string) => void;
}

export const PhotographyPage: React.FC<PhotographyPageProps> = ({
  initialCategory = 'highlights',
  onSelectPhoto,
  onOpenBooking,
}) => {
  const [activeCategory, setActiveCategory] = useState<PhotographyCategory>(initialCategory);
  const filteredPhotos = PHOTO_ITEMS.filter((item) => item.category === activeCategory);

  const selectCategory = (category: PhotographyCategory) => {
    setActiveCategory(category);
    window.history.replaceState({}, '', `/photography/${category}`);
    window.setTimeout(() => document.getElementById('photography-gallery')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
  };

  return (
    <div className="pt-28 pb-20 space-y-16">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121318] border border-[#d4af37]/40 text-xs text-[#f3e5ab] font-bold tracking-widest uppercase mb-2">
          <Camera className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>INFINITY PRODUCTION HOUSE</span>
        </div>
        <h1 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl text-white font-extrabold tracking-wide">
          EXPLORE <span className="text-gold-gradient">PHOTOGRAPHY</span>
        </h1>
        <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed">
          A selection of weddings, portraits, heritage stories and brand films. Choose a collection to explore the photographs.
        </p>
      </section>

      <section aria-labelledby="photography-categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#d4af37]">The collection</p>
            <h2 id="photography-categories" className="mt-2 font-serif-luxury text-2xl font-bold text-white sm:text-3xl">Explore by category</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-neutral-400">Choose a collection to explore its photographs and films.</p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PHOTOGRAPHY_CATEGORIES.map((category) => {
            const cover = PHOTO_ITEMS.find((photo) => photo.category === category.id);
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => selectCategory(category.id)}
                className={`group relative isolate min-h-[270px] overflow-hidden rounded-xl border text-left transition-all duration-500 sm:min-h-[320px] ${isActive ? 'border-[#d4af37]' : 'border-white/10 hover:border-[#d4af37]/70'}`}
              >
                {cover && <ImageWithFallback src={cover.imageUrl} alt={`${category.name} collection cover`} className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />}
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/35 to-black/5" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="rounded-full border border-[#d4af37]/50 bg-black/50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#f3e5ab]">{PHOTO_ITEMS.filter((photo) => photo.category === category.id).length} photographs</span>
                    {isActive && <span className="text-[10px] font-bold uppercase tracking-widest text-[#f3e5ab]">Selected</span>}
                  </div>
                  <h3 className="font-serif-luxury text-xl font-bold text-white sm:text-2xl">{category.name}</h3>
                  <p className="mt-2 line-clamp-2 max-w-lg text-xs leading-5 text-white/75">{category.desc}</p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <section id="photography-gallery" aria-labelledby="active-collection-heading" className="scroll-mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-7 flex items-end justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#d4af37]">Selected collection</p>
            <h2 id="active-collection-heading" className="mt-2 font-serif-luxury text-2xl font-bold text-white sm:text-3xl">{PHOTOGRAPHY_CATEGORIES.find((category) => category.id === activeCategory)?.name}</h2>
          </div>
          <span className="shrink-0 text-xs text-neutral-400">{filteredPhotos.length} photographs</span>
        </div>
        {filteredPhotos.length === 0 ? (
          <div className="rounded-xl border border-white/10 bg-[#121318] py-16 text-center">
            <Camera className="mx-auto h-9 w-9 text-neutral-600" />
            <p className="mt-4 text-sm text-neutral-300">This collection is being prepared.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => onSelectPhoto(photo)}
                className="group relative bg-[#121318] border border-[#d4af37]/20 hover:border-[#d4af37]/60 rounded-2xl overflow-hidden cursor-pointer shadow-xl transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Photo Image Container */}
                <div className="relative h-72 sm:h-80 overflow-hidden">
                  <ImageWithFallback
                    src={photo.imageUrl}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121318] via-transparent to-black/30 opacity-70 group-hover:opacity-90 transition-opacity"></div>
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-[#d4af37]/30 text-[10px] font-bold text-[#f3e5ab] uppercase tracking-wider z-10">
                    <span>{PHOTOGRAPHY_CATEGORIES.find((category) => category.id === photo.category)?.name}</span>
                  </div>

                  {photo.isVideo ? (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#d4af37] text-black text-[9px] font-extrabold uppercase tracking-wider shadow-md flex items-center gap-1 z-10">
                      <Film className="w-3 h-3" />
                      <span>Teaser Film</span>
                    </div>
                  ) : photo.featured ? (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#d4af37] text-black text-[9px] font-extrabold uppercase tracking-wider shadow-md z-10">
                      Featured
                    </div>
                  ) : null}

                  {/* Play button overlay for video */}
                  {photo.isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-black/60 border-2 border-[#d4af37] flex items-center justify-center text-[#d4af37] shadow-2xl backdrop-blur-sm group-hover:scale-110 group-hover:bg-[#d4af37] group-hover:text-black transition-all">
                        <Play className="w-6 h-6 fill-current ml-0.5" />
                      </div>
                    </div>
                  )}

                  {/* Gear Tag on hover */}
                  {photo.equipment && (
                    <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-[9px] text-neutral-300 font-mono opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      {photo.equipment}
                    </div>
                  )}
                </div>

                {/* Card Meta Content */}
                <div className="p-5 space-y-2">
                  <h3 className="font-serif-luxury text-base font-bold text-white group-hover:text-[#f3e5ab] transition-colors line-clamp-1">
                    {photo.title}
                  </h3>

                  <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                    {photo.description}
                  </p>

                  <div className="pt-2 flex items-center justify-between text-xs text-neutral-400 border-t border-neutral-800/80">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span className="truncate max-w-[170px] text-neutral-300">{photo.location}</span>
                    </div>
                    <span className="text-[11px] text-[#d4af37] font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-0.5">
                      {photo.isVideo ? 'Play Video →' : 'View 4K →'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* PHOTOGRAPHY PACKAGES & PRICING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#d4af37] font-bold block">
            PACKAGES & PRICING
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-white font-bold">
            Tailored Photography Experiences
          </h2>
          <p className="text-xs text-neutral-400 max-w-lg mx-auto">
            From intimate pre-wedding sand dune romance to royal 3-day multi-camera destination wedding films.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PHOTOGRAPHY_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`bg-[#121318] border rounded-2xl p-6 flex flex-col justify-between space-y-6 transition-all relative ${
                pkg.popular
                  ? 'border-[#d4af37] shadow-[0_0_30px_rgba(212,175,55,0.15)] bg-gradient-to-b from-[#181a24] to-[#121318]'
                  : 'border-neutral-800 hover:border-[#d4af37]/40'
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-[#d4af37] text-black text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                  {pkg.badge}
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className="font-serif-luxury text-lg font-bold text-white">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1 min-h-[32px]">
                    {pkg.subtitle}
                  </p>
                </div>

                <div className="pt-2 pb-3 border-y border-neutral-800">
                  <div className="font-serif-luxury text-3xl font-extrabold text-[#d4af37]">
                    {pkg.price}
                  </div>
                  <span className="text-[11px] text-neutral-400">{pkg.duration}</span>
                </div>

                <div className="space-y-2">
                  <div className="text-[11px] font-bold text-neutral-300 uppercase tracking-wider">
                    Inclusions:
                  </div>
                  <ul className="space-y-2 text-xs text-neutral-300">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800 space-y-2">
                <div className="text-[10px] text-neutral-400">
                  <span className="text-[#d4af37] font-semibold">Deliverables:</span> {pkg.deliverables.join(' • ')}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
