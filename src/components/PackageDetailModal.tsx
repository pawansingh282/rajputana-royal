import React from 'react';
import { X, Clock, MapPin, Check, Star, ShieldCheck, Calendar, Phone, ArrowRight } from 'lucide-react';
import { TravelPackage } from '../types';

interface PackageDetailModalProps {
  pkg: TravelPackage | null;
  isOpen: boolean;
  onClose: () => void;
  onBookNow: (pkg: TravelPackage) => void;
}

export const PackageDetailModal: React.FC<PackageDetailModalProps> = ({
  pkg,
  isOpen,
  onClose,
  onBookNow,
}) => {
  if (!isOpen || !pkg) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl bg-[#121318] border border-[#d4af37]/40 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
      >
        {/* Header Hero Banner */}
        <div className="relative h-56 sm:h-64 w-full shrink-0 overflow-hidden">
          <img
            src={pkg.imageUrl}
            alt={pkg.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121318] via-[#121318]/50 to-transparent"></div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-black/70 border border-[#d4af37]/30 text-white hover:text-[#d4af37] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full bg-[#d4af37] text-black text-[10px] font-bold uppercase tracking-wider">
                  {pkg.duration}
                </span>
                <span className="flex items-center gap-1 text-[#f3e5ab] text-xs font-semibold">
                  <Star className="w-3.5 h-3.5 fill-[#d4af37] text-[#d4af37]" />
                  {pkg.rating} ({pkg.reviewsCount} reviews)
                </span>
              </div>
              <h2 className="font-serif-luxury text-2xl sm:text-3xl text-white font-bold">
                {pkg.title}
              </h2>
              <div className="flex items-center gap-1.5 text-xs text-neutral-300">
                <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>{pkg.location}</span>
              </div>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-[10px] uppercase tracking-wider text-neutral-400 block">Starting from</span>
              <div className="flex items-baseline gap-2">
                <span className="font-serif-luxury text-2xl sm:text-3xl text-[#d4af37] font-bold">
                  ₹{pkg.price.toLocaleString()}
                </span>
                {pkg.originalPrice && (
                  <span className="text-xs text-neutral-500 line-through">
                    ₹{pkg.originalPrice.toLocaleString()}
                  </span>
                )}
                <span className="text-[11px] text-neutral-400">/ person</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-neutral-300">
          
          {/* Highlights */}
          <div>
            <h4 className="font-serif-luxury text-white text-sm font-bold uppercase tracking-wider mb-3 flex items-center gap-2 text-[#f3e5ab]">
              <span>Key Highlights</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {pkg.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 bg-[#0b0c10] p-2.5 rounded-lg border border-neutral-800">
                  <Check className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <span className="text-neutral-200">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Day-by-Day Itinerary */}
          <div>
            <h4 className="font-serif-luxury text-white text-sm font-bold uppercase tracking-wider mb-3 text-[#f3e5ab]">
              Day-by-Day Experience Itinerary
            </h4>
            <div className="space-y-3 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#d4af37]/30">
              {pkg.itinerary.map((item) => (
                <div key={item.day} className="relative pl-9">
                  <div className="absolute left-1.5 top-0.5 w-4 h-4 rounded-full bg-[#d4af37] border-2 border-[#121318] flex items-center justify-center text-[9px] text-black font-bold">
                    {item.day}
                  </div>
                  <div className="bg-[#0b0c10] p-3 rounded-xl border border-neutral-800">
                    <div className="font-semibold text-white text-xs mb-1">
                      Day {item.day}: {item.title}
                    </div>
                    <p className="text-neutral-400 leading-relaxed text-[11px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inclusions & Exclusions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-[#0b0c10] p-4 rounded-xl border border-[#d4af37]/20">
              <div className="font-bold text-[#d4af37] uppercase tracking-wider text-[11px] mb-2.5">
                Included in Package
              </div>
              <ul className="space-y-1.5 text-neutral-300">
                {pkg.inclusions.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#0b0c10] p-4 rounded-xl border border-neutral-800">
              <div className="font-bold text-neutral-400 uppercase tracking-wider text-[11px] mb-2.5">
                Exclusions
              </div>
              <ul className="space-y-1.5 text-neutral-400">
                {pkg.exclusions.map((exc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <X className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                    <span>{exc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-[#0b0c10] border-t border-[#d4af37]/20 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
            <span>100% Verified Chauffeurs & Sanitized Fleet</span>
          </div>

          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl border border-[#d4af37]/50 text-[#f3e5ab] hover:bg-[#d4af37] hover:text-black font-bold uppercase tracking-wider text-xs transition-all"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};
