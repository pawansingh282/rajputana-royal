import React, { useState } from 'react';
import { Camera, MapPin, Eye } from 'lucide-react';
import { PhotoItem, PhotographyCategory } from '../types';
import { PHOTO_ITEMS } from '../data/photographyData';
import { ImageWithFallback } from '../components/ImageWithFallback';

interface GalleryPageProps {
  onSelectPhoto: (photo: PhotoItem) => void;
  onOpenBooking: () => void;
}

const GALLERY_CATEGORIES: { id: PhotographyCategory; label: string }[] = [
  { id: 'highlights', label: 'Highlights' },
  { id: 'pre-wedding', label: 'Pre-Wedding' },
  { id: 'wedding', label: 'Weddings' },
  { id: 'baby-shoot', label: 'Baby & Kids' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'antique-india', label: 'Antique India' },
];

export const GalleryPage: React.FC<GalleryPageProps> = ({ onSelectPhoto, onOpenBooking }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filteredItems = PHOTO_ITEMS
    .filter((item) => selectedFilter === 'all' || item.category === selectedFilter)
    .sort((first, second) => {
      const firstOrder = GALLERY_CATEGORIES.findIndex((category) => category.id === first.category);
      const secondOrder = GALLERY_CATEGORIES.findIndex((category) => category.id === second.category);
      return firstOrder - secondOrder;
    });

  return (
    <div className="pt-28 pb-20 space-y-16">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121318] border border-[#d4af37]/40 text-xs text-[#d4af37] font-bold tracking-widest uppercase mb-2">
          <Camera className="w-3.5 h-3.5" />
          <span>VISUAL ARCHIVE</span>
        </div>
        <h1 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl text-white font-extrabold tracking-wide">
          MASTER <span className="text-gold-gradient">GALLERY</span>
        </h1>
        <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed">
          A showcase of our travel expeditions, royal wedding rituals, desert pre-weddings, joyful kid portraits, and brand campaigns.
        </p>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2.5 bg-[#121318] border border-[#d4af37]/20 p-2.5 rounded-2xl max-w-3xl mx-auto shadow-xl">
          <button
            type="button"
            aria-pressed={selectedFilter === 'all'}
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              selectedFilter === 'all'
                ? 'bg-[#d4af37] text-black shadow-md'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            All Works ({PHOTO_ITEMS.length})
          </button>

          {GALLERY_CATEGORIES.map((category) => (
            <button
              key={category.id}
              type="button"
              aria-pressed={selectedFilter === category.id}
              onClick={() => setSelectedFilter(category.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                selectedFilter === category.id
                  ? 'bg-[#d4af37] text-black shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((photo) => (
            <div
              key={photo.id}
              onClick={() => onSelectPhoto(photo)}
              className="group relative bg-[#121318] border border-[#d4af37]/20 hover:border-[#d4af37]/60 rounded-2xl overflow-hidden cursor-pointer shadow-xl transition-all duration-300 hover:-translate-y-1.5"
            >
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <ImageWithFallback
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121318] via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
                
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#d4af37]/30 text-[10px] font-bold text-[#f3e5ab] uppercase tracking-wider">
                  {photo.category.replace('-', ' ')}
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-[#d4af37] text-black flex items-center justify-center shadow-2xl transform scale-90 group-hover:scale-100 transition-transform">
                    <Eye className="w-6 h-6" />
                  </div>
                </div>
              </div>

              <div className="p-5 space-y-1.5">
                <h3 className="font-serif-luxury text-base font-bold text-white group-hover:text-[#f3e5ab] transition-colors line-clamp-1">
                  {photo.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                  <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>{photo.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#121318] border border-[#d4af37]/30 rounded-3xl p-8 sm:p-12 space-y-4 shadow-2xl">
          <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white font-bold">
            Ready to Create Your Own Timeless Memories?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-lg mx-auto">
            High-end cinematography crew and luxury car rentals for your next adventure across Rajasthan and beyond.
          </p>
        </div>
      </section>

    </div>
  );
};
