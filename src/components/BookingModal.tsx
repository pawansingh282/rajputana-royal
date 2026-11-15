import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, Phone, MessageSquare, Car, Camera, Compass, Send } from 'lucide-react';
import { FLEET_VEHICLES } from '../data/travelData';
import { PHOTOGRAPHY_CATEGORIES } from '../data/photographyData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: 'travel' | 'photography';
  initialItemTitle?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialType = 'travel',
  initialItemTitle = '',
}) => {
  const [bookingType, setBookingType] = useState<'travel' | 'photography' | 'custom'>(initialType);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    pickupLocation: 'Jodhpur',
    destination: initialItemTitle || '',
    selectedVehicle: '',
    photographyCategory: '',
    passengersOrCrew: '2',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    let msg = `*New Booking Inquiry - Group of Infinity*\n\n`;
    msg += `*Name:* ${formData.name || 'Valued Guest'}\n`;
    msg += `*Phone:* ${formData.phone || 'Not provided'}\n`;
    msg += `*Service:* ${bookingType.toUpperCase()}\n`;
    if (bookingType === 'travel') {
      msg += `*Vehicle/Package:* ${formData.selectedVehicle || formData.destination || 'General Inquire'}\n`;
      msg += `*Date:* ${formData.date || 'Flexible'}\n`;
      msg += `*From / To:* ${formData.pickupLocation} to ${formData.destination}\n`;
    } else if (bookingType === 'photography') {
      msg += `*Photography Type:* ${formData.photographyCategory || 'Wedding / Pre-Wedding'}\n`;
      msg += `*Shoot Date:* ${formData.date || 'Flexible'}\n`;
      msg += `*Location:* ${formData.destination || 'Jodhpur'}\n`;
    }
    if (formData.notes) {
      msg += `*Notes:* ${formData.notes}\n`;
    }

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/917726057101?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#121318] border border-[#d4af37]/40 rounded-2xl p-6 sm:p-8 shadow-[0_0_50px_rgba(212,175,55,0.15)] max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-neutral-900 border border-[#d4af37]/20 text-neutral-400 hover:text-white hover:border-[#d4af37] transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center mx-auto text-[#d4af37] animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif-luxury text-2xl text-white font-bold">
              Booking Request Received!
            </h3>
            <p className="text-sm text-neutral-300 max-w-md mx-auto">
              Thank you, <span className="text-[#f3e5ab] font-semibold">{formData.name}</span>. Our Infinity concierge team will reach out to you on <span className="text-[#f3e5ab] font-semibold">{formData.phone}</span> within 30 minutes with a customized quote.
            </p>

            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleWhatsAppDirect}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#25D366] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-90 shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Instantly on WhatsApp</span>
              </button>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl border border-neutral-700 text-neutral-300 text-xs font-semibold uppercase hover:bg-neutral-800"
              >
                Done & Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-center mb-6">
              <span className="text-[10px] tracking-[0.3em] text-[#d4af37] uppercase font-bold block mb-1">
                RESERVE YOUR EXPERIENCE
              </span>
              <h2 className="font-serif-luxury text-2xl sm:text-3xl text-white font-bold">
                Book with <span className="text-[#d4af37]">Group of Infinity</span>
              </h2>
              <p className="text-xs text-neutral-400 mt-1">
                Luxury Car Rental • Holiday Tours • Production House Photography
              </p>
            </div>

            {/* Service Type Switcher */}
            <div className="grid grid-cols-3 gap-2 p-1.5 bg-[#0b0c10] border border-[#d4af37]/20 rounded-xl mb-6">
              <button
                type="button"
                onClick={() => setBookingType('travel')}
                className={`py-2.5 px-3 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all ${
                  bookingType === 'travel'
                    ? 'bg-[#d4af37] text-black shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Car className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Travels & Cars</span>
                <span className="sm:hidden">Travel</span>
              </button>

              <button
                type="button"
                onClick={() => setBookingType('photography')}
                className={`py-2.5 px-3 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all ${
                  bookingType === 'photography'
                    ? 'bg-[#d4af37] text-black shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Camera className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Photography</span>
                <span className="sm:hidden">Photo</span>
              </button>

              <button
                type="button"
                onClick={() => setBookingType('custom')}
                className={`py-2.5 px-3 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all ${
                  bookingType === 'custom'
                    ? 'bg-[#d4af37] text-black shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Custom</span>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-neutral-300 font-semibold mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0b0c10] border border-[#d4af37]/30 text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <div>
                  <label className="block text-neutral-300 font-semibold mb-1">Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0b0c10] border border-[#d4af37]/30 text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-neutral-300 font-semibold mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0b0c10] border border-[#d4af37]/30 text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <div>
                  <label className="block text-neutral-300 font-semibold mb-1">Preferred Date *</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0b0c10] border border-[#d4af37]/30 text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              {/* Dynamic Service Specific Selectors */}
              {bookingType === 'travel' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-neutral-300 font-semibold mb-1">Select Luxury Vehicle</label>
                    <select
                      value={formData.selectedVehicle}
                      onChange={(e) => setFormData({ ...formData, selectedVehicle: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0b0c10] border border-[#d4af37]/30 text-white focus:outline-none focus:border-[#d4af37]"
                    >
                      <option value="">-- Choose a Vehicle --</option>
                      {FLEET_VEHICLES.map((v) => (
                        <option key={v.id} value={v.name}>
                          {v.name} (from ₹{v.ratePerKm}/km)
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-neutral-300 font-semibold mb-1">Destination / Route</label>
                    <input
                      type="text"
                      placeholder="e.g. Jodhpur to Jaisalmer Desert"
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0b0c10] border border-[#d4af37]/30 text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </div>
              )}

              {bookingType === 'photography' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-neutral-300 font-semibold mb-1">Photography Shoot Type</label>
                    <select
                      value={formData.photographyCategory}
                      onChange={(e) => setFormData({ ...formData, photographyCategory: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0b0c10] border border-[#d4af37]/30 text-white focus:outline-none focus:border-[#d4af37]"
                    >
                      <option value="">-- Select Shoot Category --</option>
                      {PHOTOGRAPHY_CATEGORIES.map((c) => (
                        <option key={c.id} value={c.name}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-neutral-300 font-semibold mb-1">Shoot Location / Venue</label>
                    <input
                      type="text"
                      placeholder="e.g. Mehrangarh Fort / Studio / Resort"
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0b0c10] border border-[#d4af37]/30 text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-neutral-300 font-semibold mb-1">Special Requirements / Message</label>
                <textarea
                  rows={2}
                  placeholder="Tell us any specific requirements, timing, hotel stay preferences or drone coverage..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#0b0c10] border border-[#d4af37]/30 text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37]"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa8c2c] text-black font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 hover:opacity-95 shadow-lg shadow-[#d4af37]/20 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Booking Request</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto py-3 px-5 rounded-xl border border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10 font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Inquiry</span>
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
