import React, { useState } from 'react';
import { 
  Sparkles, 
  Heart, 
  Crown, 
  Baby, 
  Briefcase, 
  Folder, 
  Grid, 
  Search, 
  Camera, 
  MapPin, 
  Check, 
  Star, 
  Calendar, 
  Film,
  SlidersHorizontal,
  ChevronRight,
  Landmark,
  Play,
  FolderOpen
} from 'lucide-react';
import { PhotographyCategory, PhotoItem, PhotographyPackage } from '../types';
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
  const [activeCategory, setActiveCategory] = useState<PhotographyCategory | 'all'>(initialCategory);
  const [activeSubfolder, setActiveSubfolder] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Extract all unique tags
  const allTags = Array.from(
    new Set(PHOTO_ITEMS.flatMap((item) => item.tags))
  );

  // Extract available subfolders for current category
  const availableSubfolders = Array.from(
    new Set(
      PHOTO_ITEMS
        .filter((item) => (activeCategory === 'all' || item.category === activeCategory) && item.subfolder)
        .map((item) => item.subfolder as string)
    )
  );

  const filteredPhotos = PHOTO_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSubfolder = !activeSubfolder || item.subfolder === activeSubfolder;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.subfolder && item.subfolder.toLowerCase().includes(searchQuery.toLowerCase())) ||
      item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesTag = !selectedTag || item.tags.includes(selectedTag);
    return matchesCategory && matchesSubfolder && matchesSearch && matchesTag;
  });

  const getCategoryIcon = (catId: string) => {
    switch (catId) {
      case 'highlights':
        return <Sparkles className="w-4 h-4" />;
      case 'antique-india':
        return <Landmark className="w-4 h-4" />;
      case 'pre-wedding':
        return <Heart className="w-4 h-4" />;
      case 'wedding':
        return <Crown className="w-4 h-4" />;
      case 'baby-shoot':
        return <Baby className="w-4 h-4" />;
      case 'commercial':
        return <Briefcase className="w-4 h-4" />;
      default:
        return <Folder className="w-4 h-4" />;
    }
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
          High-end cinematography, drone aerials and timeless portraiture categorized into dedicated folders. Click any image to view in 4K resolution.
        </p>
      </section>

      {/* 5 DEDICATED FOLDER NAVIGATION BUTTONS (As requested by user) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#121318] border border-[#d4af37]/30 rounded-2xl p-4 sm:p-6 shadow-2xl">
          <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-neutral-800">
            <div className="flex items-center gap-2">
              <Folder className="w-5 h-5 text-[#d4af37]" />
              <span className="font-serif-luxury text-sm text-white font-bold uppercase tracking-wider">
                Select Photography Folder
              </span>
            </div>
            <span className="text-xs text-neutral-400">
              Showing {filteredPhotos.length} captures
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
            
            {/* All Photos Folder */}
            <button
              onClick={() => {
                setActiveCategory('all');
                setActiveSubfolder(null);
                setSelectedTag(null);
              }}
              className={`p-3 rounded-xl border flex flex-col items-center justify-center text-center gap-2 transition-all ${
                activeCategory === 'all'
                  ? 'bg-[#d4af37] text-black border-[#d4af37] font-bold shadow-lg shadow-[#d4af37]/30 scale-[1.02]'
                  : 'bg-[#0b0c10] border-neutral-800 text-neutral-300 hover:border-[#d4af37]/50 hover:text-white'
              }`}
            >
              <Grid className="w-5 h-5" />
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider">All Folders</div>
                <div className={`text-[10px] ${activeCategory === 'all' ? 'text-black/80' : 'text-neutral-500'}`}>
                  {PHOTO_ITEMS.length} Photos
                </div>
              </div>
            </button>

            {/* Specific Folders */}
            {PHOTOGRAPHY_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setActiveSubfolder(null);
                    setSelectedTag(null);
                  }}
                  className={`p-3 rounded-xl border flex flex-col items-center justify-center text-center gap-2 transition-all ${
                    isActive
                      ? 'bg-[#d4af37] text-black border-[#d4af37] font-bold shadow-lg shadow-[#d4af37]/30 scale-[1.02]'
                      : 'bg-[#0b0c10] border-neutral-800 text-neutral-300 hover:border-[#d4af37]/50 hover:text-white'
                  }`}
                >
                  <div className={isActive ? 'text-black' : 'text-[#d4af37]'}>
                    {getCategoryIcon(cat.id)}
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider truncate max-w-[120px]">
                      {cat.name.split('&')[0]}
                    </div>
                    <div className={`text-[10px] ${isActive ? 'text-black/80' : 'text-neutral-500'}`}>
                      {PHOTO_ITEMS.filter((p) => p.category === cat.id).length} Shoots
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Subfolder Chips (if available) */}
          {availableSubfolders.length > 0 && (
            <div className="mt-4 pt-3.5 border-t border-neutral-800/80 flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-semibold text-[#f3e5ab] flex items-center gap-1.5 mr-1">
                <FolderOpen className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Sub-Folders:</span>
              </span>
              <button
                onClick={() => setActiveSubfolder(null)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  activeSubfolder === null
                    ? 'bg-[#d4af37] text-black font-bold shadow-md'
                    : 'bg-[#181a22] text-neutral-300 hover:text-white border border-neutral-800'
                }`}
              >
                All ({PHOTO_ITEMS.filter((p) => activeCategory === 'all' || p.category === activeCategory).length})
              </button>
              {availableSubfolders.map((sub) => {
                const count = PHOTO_ITEMS.filter((p) => p.subfolder === sub).length;
                return (
                  <button
                    key={sub}
                    onClick={() => setActiveSubfolder(activeSubfolder === sub ? null : sub)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                      activeSubfolder === sub
                        ? 'bg-[#d4af37] text-black font-bold shadow-md'
                        : 'bg-[#181a22] text-neutral-300 hover:text-white border border-neutral-800'
                    }`}
                  >
                    <span>{sub}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded ${activeSubfolder === sub ? 'bg-black/20 text-black' : 'bg-neutral-800 text-neutral-400'}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {/* Search & Tag Filter Bar */}
          <div className="mt-5 pt-4 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search shoots, Mehrangarh, Desert, Wedding..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-[#0b0c10] border border-neutral-800 rounded-xl text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37]"
              />
            </div>

            {/* Filter Tags */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1">
              <span className="text-[10px] uppercase font-bold text-neutral-500 shrink-0 mr-1">
                Tags:
              </span>
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-2.5 py-1 rounded-md text-[10px] font-semibold whitespace-nowrap transition-colors ${
                  selectedTag === null
                    ? 'bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/40'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white'
                }`}
              >
                All
              </button>
              {allTags.slice(0, 7).map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                  className={`px-2.5 py-1 rounded-md text-[10px] font-semibold whitespace-nowrap transition-colors ${
                    selectedTag === tag
                      ? 'bg-[#d4af37] text-black font-bold'
                      : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
                  }`}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Active Folder Header Banner */}
      {activeCategory !== 'all' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#181a22] via-[#121318] to-[#181a22] border-l-4 border-[#d4af37] p-5 rounded-r-2xl">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#d4af37]/20 text-[#d4af37]">
                {getCategoryIcon(activeCategory)}
              </div>
              <div>
                <h3 className="font-serif-luxury text-lg font-bold text-white uppercase tracking-wider">
                  {PHOTOGRAPHY_CATEGORIES.find((c) => c.id === activeCategory)?.name}
                </h3>
                <p className="text-xs text-neutral-300">
                  {PHOTOGRAPHY_CATEGORIES.find((c) => c.id === activeCategory)?.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PHOTOS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredPhotos.length === 0 ? (
          <div className="text-center py-20 bg-[#121318] border border-neutral-800 rounded-2xl space-y-3">
            <Camera className="w-10 h-10 text-neutral-600 mx-auto" />
            <div className="font-serif-luxury text-lg text-white">No photos found in this filter</div>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
                setSelectedTag(null);
              }}
              className="text-xs text-[#d4af37] underline"
            >
              Reset all filters
            </button>
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
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-[#d4af37]/30 text-[10px] font-bold text-[#f3e5ab] uppercase tracking-wider flex items-center gap-1.5 z-10">
                    {getCategoryIcon(photo.category)}
                    <span>{photo.category.replace('-', ' ')}</span>
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
                  {photo.subfolder && (
                    <div className="flex items-center gap-1 text-[10px] text-[#d4af37] font-semibold tracking-wide">
                      <FolderOpen className="w-3 h-3" />
                      <span>{photo.subfolder}</span>
                    </div>
                  )}

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
            TRANSPARENT PACKAGES & PRICING
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

      {/* Production Standards Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0b0c10] border border-[#d4af37]/30 rounded-3xl p-8 sm:p-12 text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37] font-bold">
              INDUSTRY GRADE CINEMA STANDARDS
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white font-bold">
              Sony FX6 Cinema • Canon R5 • DJI Mavic 3 Cine
            </h3>
            <p className="text-xs text-neutral-400">
              We shoot strictly in Apple ProRes 4K/6K Raw with specialized anamorphic glass, Profoto lighting kits, and professional gimbal stabilizers for Hollywood-level quality.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
