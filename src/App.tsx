import React, { useState, useEffect } from 'react';
import { PageId, PhotographyCategory, PhotoItem, TravelPackage } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { LightboxModal } from './components/LightboxModal';
import { PackageDetailModal } from './components/PackageDetailModal';
import { HomePage } from './pages/HomePage';
import { PhotographyPage } from './pages/PhotographyPage';
import { TravelsPage } from './pages/TravelsPage';
import { FarmingPage } from './pages/FarmingPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { PHOTO_ITEMS } from './data/photographyData';
import { MessageCircle, Phone } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [activePhotoCategory, setActivePhotoCategory] = useState<PhotographyCategory>('highlights');
  
  // Modals state
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingPrefillType, setBookingPrefillType] = useState<'travel' | 'photography'>('travel');
  const [bookingPrefillTitle, setBookingPrefillTitle] = useState<string>('');

  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const [selectedPackage, setSelectedPackage] = useState<TravelPackage | null>(null);
  const [packageModalOpen, setPackageModalOpen] = useState(false);

  // Navigation handler
  const handleNavigate = (page: PageId, category?: PhotographyCategory) => {
    setCurrentPage(page);
    if (category) {
      setActivePhotoCategory(category);
    }
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
      
      {/* Top Navbar */}
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
          <TravelsPage
            onSelectPackage={handleSelectPackage}
            onOpenBooking={handleOpenBooking}
          />
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
        <a
          href="https://wa.me/911234567890?text=Hello%20Group%20of%20Infinity,%20I%20would%20like%20to%20inquire%20about%20Travel%20or%20Photography%20services."
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
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

    </div>
  );
}
