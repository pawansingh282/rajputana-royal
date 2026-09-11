import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Camera, Sparkles, Heart, Tag, Film, FolderOpen, Play } from 'lucide-react';
import { PhotoItem } from '../types';

interface LightboxModalProps {
  photo: PhotoItem | null;
  allPhotos: PhotoItem[];
  isOpen: boolean;
  onClose: () => void;
  onSelectPhoto: (photo: PhotoItem) => void;
  onBookShoot: (photo: PhotoItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  photo,
  allPhotos,
  isOpen,
  onClose,
  onSelectPhoto,
  onBookShoot,
}) => {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  if (!isOpen || !photo) return null;

  const currentIndex = allPhotos.findIndex((p) => p.id === photo.id);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlayingVideo(false);
    if (currentIndex > 0) {
      onSelectPhoto(allPhotos[currentIndex - 1]);
    } else {
      onSelectPhoto(allPhotos[allPhotos.length - 1]);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlayingVideo(false);
    if (currentIndex < allPhotos.length - 1) {
      onSelectPhoto(allPhotos[currentIndex + 1]);
    } else {
      onSelectPhoto(allPhotos[0]);
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-xl animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl bg-[#121318] border border-[#d4af37]/40 rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[92vh]"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 border border-[#d4af37]/30 text-white hover:text-[#d4af37] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image / Video Display Area with Nav Controls */}
        <div className="relative flex-1 bg-black flex items-center justify-center min-h-[340px] sm:min-h-[480px] p-2 overflow-hidden">
          {photo.isVideo && isPlayingVideo && photo.videoUrl ? (
            <div className="relative w-full h-full min-h-[360px] sm:min-h-[460px] flex items-center justify-center bg-black">
              <iframe
                src={photo.videoUrl}
                title={photo.title}
                className="w-full h-full min-h-[380px] rounded-lg border-0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
              <button
                onClick={() => setIsPlayingVideo(false)}
                className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/80 border border-[#d4af37]/40 text-xs text-[#d4af37] font-semibold"
              >
                ← Back to Cover
              </button>
            </div>
          ) : (
            <div className="relative flex items-center justify-center w-full h-full">
              <img
                src={photo.imageUrl}
                alt={photo.title}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl transition-all duration-300"
              />

              {/* Play Button Overlay for Videos */}
              {photo.isVideo && (
                <button
                  onClick={() => setIsPlayingVideo(true)}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 hover:bg-black/25 transition-all group/play cursor-pointer"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/70 border-2 border-[#d4af37] flex items-center justify-center text-[#d4af37] shadow-2xl backdrop-blur-sm group-hover/play:scale-110 group-hover/play:bg-[#d4af37] group-hover/play:text-black transition-all">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                  <span className="mt-3 px-3 py-1 rounded-full bg-black/80 border border-[#d4af37]/40 text-xs text-[#f3e5ab] font-bold uppercase tracking-wider">
                    Play 4K Teaser Video
                  </span>
                </button>
              )}
            </div>
          )}

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 border border-[#d4af37]/30 text-white hover:text-[#d4af37] hover:scale-110 transition-all z-20"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 border border-[#d4af37]/30 text-white hover:text-[#d4af37] hover:scale-110 transition-all z-20"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Index Counter */}
          <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-black/70 border border-[#d4af37]/20 text-[11px] text-[#f3e5ab] font-mono z-20">
            {currentIndex + 1} / {allPhotos.length}
          </div>
        </div>

        {/* Sidebar Info Panel */}
        <div className="w-full lg:w-80 p-6 flex flex-col justify-between bg-[#121318] border-t lg:border-t-0 lg:border-l border-[#d4af37]/20 overflow-y-auto">
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#d4af37] font-bold block">
                  {photo.category.replace('-', ' ')}
                </span>
                {photo.isVideo && (
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/30 font-semibold uppercase flex items-center gap-1">
                    <Film className="w-2.5 h-2.5" /> Video
                  </span>
                )}
              </div>
              <h3 className="font-serif-luxury text-xl text-white font-bold leading-snug">
                {photo.title}
              </h3>
              {photo.subfolder && (
                <div className="mt-1 flex items-center gap-1.5 text-xs text-[#f3e5ab]">
                  <FolderOpen className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Folder: {photo.subfolder}</span>
                </div>
              )}
            </div>

            <p className="text-xs text-neutral-300 leading-relaxed">
              {photo.description}
            </p>

            <div className="space-y-2 pt-2 border-t border-neutral-800 text-xs">
              <div className="flex items-center gap-2 text-neutral-400">
                <MapPin className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                <span className="text-white">{photo.location}</span>
              </div>

              {photo.equipment && (
                <div className="flex items-center gap-2 text-neutral-400">
                  <Camera className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                  <span className="text-neutral-300 font-mono text-[11px]">{photo.equipment}</span>
                </div>
              )}
            </div>

            {/* Tags */}
            <div className="pt-2">
              <div className="flex flex-wrap gap-1.5">
                {photo.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded-md bg-[#0b0c10] border border-[#d4af37]/20 text-[10px] text-neutral-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-neutral-800 text-center">
            <p className="text-[11px] text-neutral-400">
              Shot on location in Rajasthan • Ultra HD Master Color Graded
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
