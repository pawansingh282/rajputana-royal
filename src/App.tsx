import React, { useState, useEffect } from 'react';
import { PageId, PhotographyCategory, PhotoItem, TravelPackage, Vehicle } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { LightboxModal } from './components/LightboxModal';
import { PackageDetailModal } from './components/PackageDetailModal';
import { HomePage } from './pages/HomePage';
import { PhotographyPage } from './pages/PhotographyPage';
import { TravelsPage } from './pages/TravelsPage';
import { VehicleDetailPage } from './pages/VehicleDetailPage';
import { FarmingPage } from './pages/FarmingPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { PHOTO_ITEMS } from './data/photographyData';
import { FLEET_VEHICLES } from './data/travelData';
import { ArrowUp, MessageCircle, Phone } from 'lucide-react';
import { ThreePageAnimation } from './components/ThreePageAnimation';

const photographyCategories: PhotographyCategory[] = ['highlights', 'pre-wedding', 'wedding', 'antique-india', 'commercial', 'baby-shoot'];

function resolveRoute(pathname: string): { page: PageId; category: PhotographyCategory; vehicleId: string | null } {
  const segments = pathname.split('/').filter(Boolean);
  const route = segments[0]?.toLowerCase();
  const pageByRoute: Record<string, PageId> = {
    home: 'home',
    about: 'about',
    'about-us': 'about',
    travel: 'travels',
    travels: 'travels',
    'travel-cars': 'travels',
    photography: 'photography',
    farming: 'farming',
    framing: 'framing',
    gallery: 'gallery',
    contact: 'contact',
  };
  const page = pageByRoute[route ?? ''] ?? 'home';
  const category = page === 'photography' && photographyCategories.includes(segments[1] as PhotographyCategory)
    ? segments[1] as PhotographyCategory
    : 'highlights';

  const vehicleId = page === 'travels' && segments.length > 1 ? segments[1] : null;

  return { page, category, vehicleId };
}

function routeForPage(page: PageId, category?: PhotographyCategory): string {
  if (page === 'home') return '/';
  if (page === 'about') return '/about-us';
  if (page === 'travels') return '/travel-cars';
  if (page === 'photography') return `/photography${category ? `/${category}` : ''}`;
  return `/${page}`;
}

export default function App() {
  const initialRoute = resolveRoute(window.location.pathname);
  const [currentPage, setCurrentPage] = useState<PageId>(initialRoute.page);
  const [activePhotoCategory, setActivePhotoCategory] = useState<PhotographyCategory>(initialRoute.category);
  const [selectedVehicleId, setSelectedVehicleId] = useState<string | null>(initialRoute.vehicleId);
  const selectedVehicle = FLEET_VEHICLES.find((vehicle) => vehicle.id === selectedVehicleId) ?? null;
  
  // Modals state
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingPrefillType, setBookingPrefillType] = useState<'travel' | 'photography'>('travel');
  const [bookingPrefillTitle, setBookingPrefillTitle] = useState<string>('');

  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const [selectedPackage, setSelectedPackage] = useState<TravelPackage | null>(null);
  const [packageModalOpen, setPackageModalOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const updateBackToTopVisibility = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener('scroll', updateBackToTopVisibility, { passive: true });
    updateBackToTopVisibility();
    return () => window.removeEventListener('scroll', updateBackToTopVisibility);
  }, []);

  useEffect(() => {
    const syncRouteFromLocation = () => {
      const route = resolveRoute(window.location.pathname);
      setCurrentPage(route.page);
      setActivePhotoCategory(route.category);
      setSelectedVehicleId(route.vehicleId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', syncRouteFromLocation);
    return () => window.removeEventListener('popstate', syncRouteFromLocation);
  }, []);

  // Navigation updates the address bar so each section has a shareable, reloadable URL.
  const handleNavigate = (page: PageId, category?: PhotographyCategory) => {
    const nextPath = routeForPage(page, category);
    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, '', nextPath);
    }
    setCurrentPage(page);
    setSelectedVehicleId(null);
    if (page === 'photography') {
      setActivePhotoCategory(category ?? 'highlights');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectVehicle = (vehicle: Vehicle) => {
    const nextPath = `/travel-cars/${encodeURIComponent(vehicle.id)}`;
    window.history.pushState({}, '', nextPath);
    setCurrentPage('travels');
    setSelectedVehicleId(vehicle.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Open Booking with optional prefill
  const handleOpenBooking = (prefillType?: 'travel' | 'photography', itemTitle?: string) => {
    setBookingPrefillType(prefillType || 'travel');
    setBookingPrefillTitle(itemTitle || '');
    setBookingModalOpen(true);
  };

  // Select Photo for Lightbox
  const handleSelectPhoto = (photo: PhotoItem) => {
    setSelectedPhoto(photo);
    setLightboxOpen(true);
  };

  // Select Travel Package for Detail Modal
  const handleSelectPackage = (pkg: TravelPackage) => {
    setSelectedPackage(pkg);
    setPackageModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#e0e2ec] flex flex-col selection:bg-[#d4af37]/30 selection:text-[#f3e5ab] relative">
      
      <ThreePageAnimation page={currentPage} />

      {/* Top Navbar */}
      <div className="relative z-10">
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
            onSelectPackage={handleSelectPackage}
            onSelectPhoto={handleSelectPhoto}
          />
        )}

        {currentPage === 'photography' && (
          <PhotographyPage
            initialCategory={activePhotoCategory}
            onSelectPhoto={handleSelectPhoto}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentPage === 'travels' && (
          selectedVehicle ? (
            <VehicleDetailPage
              vehicle={selectedVehicle}
              onBack={() => handleNavigate('travels')}
              onBook={() => handleOpenBooking('travel', selectedVehicle.name)}
            />
          ) : (
            <TravelsPage
              onSelectPackage={handleSelectPackage}
              onSelectVehicle={handleSelectVehicle}
              onOpenBooking={handleOpenBooking}
            />
          )
        )}

        {(currentPage === 'farming' || currentPage === 'framing') && (
          <FarmingPage
            onOpenBooking={() => handleOpenBooking('travel', 'Infinity Farming Inquiry')}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentPage === 'gallery' && (
          <GalleryPage
            onSelectPhoto={handleSelectPhoto}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Floating Action Buttons (Quick WhatsApp & Call) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {showBackToTop && (
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d4af37]/60 bg-[#121318]/95 text-[#f3e5ab] shadow-lg backdrop-blur transition hover:bg-[#d4af37] hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        )}
        <a
          href="https://wa.me/917726057101?text=Hello%20Group%20of%20Infinity,%20I%20would%20like%20to%20inquire%20about%20Travel%20or%20Photography%20services."
          target="_blank"
          rel="noreferrer"
          className="w-13 h-13 rounded-full bg-[#25D366] text-black flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform p-3"
          title="Chat with Us on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 fill-current" />
        </a>
      </div>

      {/* Global Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialType={bookingPrefillType}
        initialItemTitle={bookingPrefillTitle}
      />

      {/* High-Res Photo Lightbox Modal */}
      <LightboxModal
        photo={selectedPhoto}
        allPhotos={PHOTO_ITEMS}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onSelectPhoto={(p) => setSelectedPhoto(p)}
        onBookShoot={(p) => handleOpenBooking('photography', `${p.title} (${p.category})`)}
      />

      {/* Travel Package Itinerary Detail Modal */}
      <PackageDetailModal
        pkg={selectedPackage}
        isOpen={packageModalOpen}
        onClose={() => setPackageModalOpen(false)}
        onBookNow={(pkg) => handleOpenBooking('travel', pkg.title)}
      />

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
      </div>

    </div>
  );
}
