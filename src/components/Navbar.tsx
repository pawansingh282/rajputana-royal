import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Menu, 
  X, 
  ChevronDown, 
  Camera, 
  Car, 
  Sparkles, 
  Heart, 
  Crown, 
  Baby, 
  Briefcase, 
  Frame,
  Phone,
  Compass,
  Landmark
} from 'lucide-react';
import { PageId, PhotographyCategory } from '../types';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId, category?: PhotographyCategory) => void;
  onOpenBooking: (prefillType?: 'travel' | 'photography') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [photoDropdownOpen, setPhotoDropdownOpen] = useState(false);
  const [travelDropdownOpen, setTravelDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: PageId, category?: PhotographyCategory) => {
    onNavigate(page, category);
    setMobileMenuOpen(false);
    setPhotoDropdownOpen(false);
    setTravelDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0c10]/95 backdrop-blur-md border-b border-[#d4af37]/20 shadow-2xl py-3'
          : 'bg-gradient-to-b from-[#0b0c10]/90 via-[#0b0c10]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo matching Figma */}
        <button
          id="nav-logo-btn"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group text-left transition-transform hover:scale-[1.02]"
        >
          {/* Custom Gold Infinity Logo */}
          <div className="relative w-10 h-10 flex items-center justify-center">
            <svg
              className="w-9 h-9 text-[#d4af37] drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]"
              viewBox="0 0 100 50"
              fill="none"
              stroke="currentColor"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M30 10 C 15 10, 10 25, 25 38 C 38 48, 62 2, 75 12 C 90 25, 85 40, 70 40 C 55 40, 45 25, 30 10 Z" />
            </svg>
          </div>
          <div>
            <span className="font-sans-brand text-base sm:text-lg tracking-[0.16em] font-bold text-white block group-hover:text-[#f3e5ab] transition-colors leading-tight">
              GROUP OF <span className="text-[#d4af37]">INFINITY</span>
            </span>
            <span className="font-sans-brand text-[9px] tracking-[0.22em] text-[#a0a5b5] uppercase block font-medium">
              EXPERIENCE BEYOND LIMITS
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-medium font-sans-brand">
          <button
            id="nav-link-home"
            onClick={() => handleNavClick('home')}
            className={`px-3 py-2 rounded-md tracking-wider uppercase text-xs transition-colors ${
              currentPage === 'home'
                ? 'text-[#f3e5ab] font-bold border-b-2 border-[#d4af37]'
                : 'text-neutral-300 hover:text-[#d4af37]'
            }`}
          >
            HOME
          </button>

          <button
            id="nav-link-about"
            onClick={() => handleNavClick('about')}
            className={`px-3 py-2 rounded-md tracking-wider uppercase text-xs transition-colors ${
              currentPage === 'about'
                ? 'text-[#f3e5ab] font-bold border-b-2 border-[#d4af37]'
                : 'text-neutral-300 hover:text-[#d4af37]'
            }`}
          >
            ABOUT US
          </button>

          {/* TRAVEL & CAR RENTAL DROPDOWN */}
          <div className="relative group">
            <button
              id="nav-link-travels"
              onClick={() => handleNavClick('travels')}
              onMouseEnter={() => setTravelDropdownOpen(true)}
              className={`px-3 py-2 rounded-md tracking-wider uppercase text-xs transition-colors flex items-center gap-1 ${
                currentPage === 'travels'
                  ? 'text-[#f3e5ab] font-bold border-b-2 border-[#d4af37]'
                  : 'text-neutral-300 hover:text-[#d4af37]'
              }`}
            >
              TRAVEL & CARS
              <ChevronDown className="w-3.5 h-3.5 text-[#d4af37]" />
            </button>

            <div 
              onMouseLeave={() => setTravelDropdownOpen(false)}
              className={`absolute top-full left-0 w-64 pt-2 transition-all duration-200 ${
                travelDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}
            >
              <div className="bg-[#121318] border border-[#d4af37]/30 rounded-xl p-3 shadow-2xl backdrop-blur-xl">
                <button
                  onClick={() => handleNavClick('travels')}
                  className="w-full flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#1f212a] text-left transition-colors group/item"
                >
                  <div className="p-2 rounded-lg bg-[#d4af37]/10 text-[#d4af37] group-hover/item:bg-[#d4af37] group-hover/item:text-black transition-colors">
                    <Car className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-white text-xs font-semibold">Car Rental & Fleet</div>
                    <div className="text-[11px] text-neutral-400">Innova, Fortuner, Sedans, Outstation</div>
                  </div>
                </button>
                <button
                  onClick={() => handleNavClick('travels')}
                  className="w-full flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#1f212a] text-left transition-colors group/item mt-1"
                >
                  <div className="p-2 rounded-lg bg-[#d4af37]/10 text-[#d4af37] group-hover/item:bg-[#d4af37] group-hover/item:text-black transition-colors">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-white text-xs font-semibold">Tour Packages</div>
                    <div className="text-[11px] text-neutral-400">Himachal, Rajasthan, Goa, Uttarakhand</div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* PHOTOGRAPHY WITH FOLDERS DROPDOWN */}
          <div className="relative group">
            <button
              id="nav-link-photography"
              onClick={() => handleNavClick('photography')}
              onMouseEnter={() => setPhotoDropdownOpen(true)}
              className={`px-3 py-2 rounded-md tracking-wider uppercase text-xs transition-colors flex items-center gap-1 ${
                currentPage === 'photography'
                  ? 'text-[#f3e5ab] font-bold border-b-2 border-[#d4af37]'
                  : 'text-neutral-300 hover:text-[#d4af37]'
              }`}
            >
              PHOTOGRAPHY
              <ChevronDown className="w-3.5 h-3.5 text-[#d4af37]" />
            </button>

            <div 
              onMouseLeave={() => setPhotoDropdownOpen(false)}
              className={`absolute top-full left-0 w-72 pt-2 transition-all duration-200 ${
                photoDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}
            >
              <div className="bg-[#121318] border border-[#d4af37]/30 rounded-xl p-2.5 shadow-2xl backdrop-blur-xl space-y-1">
                <div className="px-3 py-1.5 text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold border-b border-[#d4af37]/15">
                  Infinity Production Folders
                </div>

                <button
                  onClick={() => handleNavClick('photography', 'highlights')}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-[#1f212a] text-left text-xs text-neutral-200 hover:text-[#f3e5ab] transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-[#d4af37]" />
                  <span>Highlights & Bests</span>
                </button>
                <button
                  onClick={() => handleNavClick('photography', 'antique-india')}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-[#1f212a] text-left text-xs text-neutral-200 hover:text-[#f3e5ab] transition-colors"
                >
                  <Landmark className="w-4 h-4 text-[#d4af37]" />
                  <span>Antique India</span>
                  <span className="ml-auto text-[9px] px-1.5 py-0.5 rounded bg-[#d4af37]/20 text-[#d4af37] font-semibold">NEW</span>
                </button>
                <button
                  onClick={() => handleNavClick('photography', 'pre-wedding')}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-[#1f212a] text-left text-xs text-neutral-200 hover:text-[#f3e5ab] transition-colors"
                >
                  <Heart className="w-4 h-4 text-[#d4af37]" />
                  <span>Pre-Wedding Shoots</span>
                </button>
                <button
                  onClick={() => handleNavClick('photography', 'wedding')}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-[#1f212a] text-left text-xs text-neutral-200 hover:text-[#f3e5ab] transition-colors"
                >
                  <Crown className="w-4 h-4 text-[#d4af37]" />
                  <span>Royal Indian Weddings</span>
                </button>
                <button
                  onClick={() => handleNavClick('photography', 'baby-shoot')}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-[#1f212a] text-left text-xs text-neutral-200 hover:text-[#f3e5ab] transition-colors"
                >
                  <Baby className="w-4 h-4 text-[#d4af37]" />
                  <span>Baby & Kids Shoots</span>
                </button>
                <button
                  onClick={() => handleNavClick('photography', 'commercial')}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-[#1f212a] text-left text-xs text-neutral-200 hover:text-[#f3e5ab] transition-colors"
                >
                  <Briefcase className="w-4 h-4 text-[#d4af37]" />
                  <span>Commercial & Brand Work</span>
                </button>
              </div>
            </div>
          </div>

          {/* FARMING */}
          <button
            id="nav-link-farming"
            onClick={() => handleNavClick('farming')}
            className={`px-3 py-2 rounded-md tracking-wider uppercase text-xs transition-colors ${
              currentPage === 'farming' || currentPage === 'framing'
                ? 'text-[#f3e5ab] font-bold border-b-2 border-[#d4af37]'
                : 'text-neutral-300 hover:text-[#d4af37]'
            }`}
          >
            FARMING
          </button>

          <button
            id="nav-link-gallery"
            onClick={() => handleNavClick('gallery')}
            className={`px-3 py-2 rounded-md tracking-wider uppercase text-xs transition-colors ${
              currentPage === 'gallery'
                ? 'text-[#f3e5ab] font-bold border-b-2 border-[#d4af37]'
                : 'text-neutral-300 hover:text-[#d4af37]'
            }`}
          >
            GALLERY
          </button>

          <button
            id="nav-link-contact"
            onClick={() => handleNavClick('contact')}
            className={`px-3 py-2 rounded-md tracking-wider uppercase text-xs transition-colors ${
              currentPage === 'contact'
                ? 'text-[#f3e5ab] font-bold border-b-2 border-[#d4af37]'
                : 'text-neutral-300 hover:text-[#d4af37]'
            }`}
          >
            CONTACT
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#121318] border border-[#c9974c]/30 text-[#c9974c]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0b0c10]/98 border-b border-[#d4af37]/30 px-6 py-6 space-y-4 max-h-[85vh] overflow-y-auto">
          <button
            onClick={() => handleNavClick('home')}
            className="block w-full text-left py-2 text-sm uppercase tracking-wider text-neutral-200 font-semibold border-b border-neutral-800"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className="block w-full text-left py-2 text-sm uppercase tracking-wider text-neutral-200 font-semibold border-b border-neutral-800"
          >
            About Us
          </button>
          <button
            onClick={() => handleNavClick('travels')}
            className="block w-full text-left py-2 text-sm uppercase tracking-wider text-neutral-200 font-semibold border-b border-neutral-800"
          >
            Travels & Car Rental
          </button>

          {/* Photography Folders in Mobile */}
          <div className="py-2 border-b border-neutral-800">
            <button
              onClick={() => handleNavClick('photography')}
              className="flex items-center justify-between w-full text-left text-sm uppercase tracking-wider text-[#d4af37] font-semibold mb-2"
            >
              <span>Explore Photography</span>
              <Camera className="w-4 h-4" />
            </button>
            <div className="pl-3 space-y-2 text-xs text-neutral-300">
              <button onClick={() => handleNavClick('photography', 'highlights')} className="block py-1">
                ✦ Highlights & Master Captures
              </button>
              <button onClick={() => handleNavClick('photography', 'antique-india')} className="block py-1 text-[#f3e5ab] font-medium">
                ✦ Antique India (Heritage & Artifacts)
              </button>
              <button onClick={() => handleNavClick('photography', 'pre-wedding')} className="block py-1">
                ✦ Pre-Wedding Shoots
              </button>
              <button onClick={() => handleNavClick('photography', 'wedding')} className="block py-1">
                ✦ Royal Indian Weddings
              </button>
              <button onClick={() => handleNavClick('photography', 'baby-shoot')} className="block py-1">
                ✦ Baby & Kids Shoots
              </button>
              <button onClick={() => handleNavClick('photography', 'commercial')} className="block py-1">
                ✦ Commercial & Brand Films
              </button>
            </div>
          </div>

          <button
            onClick={() => handleNavClick('farming')}
            className="block w-full text-left py-2 text-sm uppercase tracking-wider text-neutral-200 font-semibold border-b border-neutral-800 hover:text-[#d4af37] transition-colors"
          >
            Infinity Farming
          </button>

          <button
            onClick={() => handleNavClick('gallery')}
            className="block w-full text-left py-2 text-sm uppercase tracking-wider text-neutral-200 font-semibold border-b border-neutral-800"
          >
            Master Gallery
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className="block w-full text-left py-2 text-sm uppercase tracking-wider text-neutral-200 font-semibold"
          >
            Contact & Location
          </button>
        </div>
      )}
    </header>
  );
};
