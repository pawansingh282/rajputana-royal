import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Clock, Send, CheckCircle2, ChevronDown } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Travels & Car Rental',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const msg = `*Contact Inquiry - Group of Infinity*\n*Name:* ${formData.name || 'Guest'}\n*Phone:* ${formData.phone}\n*Service:* ${formData.service}\n*Message:* ${formData.message}`;
    window.open(`https://wa.me/917726057101?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const faqs = [
    {
      q: 'How do I book a car rental or holiday package?',
      a: 'You can use our website booking form, call our 24/7 helpline at +91 12345 67890, or message us directly on WhatsApp with your travel dates and passenger count. We will send an instant confirmed voucher.',
    },
    {
      q: 'What are the deliverables and timeline for wedding photography?',
      a: 'We deliver a 1-minute Instagram teaser within 48 hours, a 3-4 minute 4K cinematic highlight film within 2 weeks, all high-res retouched digital stills within 3 weeks, and luxury physical photo albums within 30 days.',
    },
    {
      q: 'Are toll taxes and driver allowances included in outstation car rentals?',
      a: 'We offer fully transparent billing. You can choose either an all-inclusive rate (tolls, parking, fuel & driver allowance included) or a per-KM rate with actual receipts provided.',
    },
    {
      q: 'Do you provide photography services outside Rajasthan?',
      a: 'Yes, our Infinity Production House team regularly shoots destination weddings and campaigns across Goa, Himachal Pradesh, Uttarakhand, Kashmir, Dubai, and Mumbai.',
    },
  ];

  return (
    <div className="pt-28 pb-20 space-y-16">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121318] border border-[#d4af37]/40 text-xs text-[#d4af37] font-bold tracking-widest uppercase mb-2">
          <Phone className="w-3.5 h-3.5" />
          <span>CONNECT WITH INFINITY</span>
        </div>
        <h1 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl text-white font-extrabold tracking-wide">
          CONTACT & <span className="text-gold-gradient">RESERVATIONS</span>
        </h1>
        <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed">
          Have questions about luxury travel itineraries, car fleet availability, or booking a royal wedding photoshoot? We are here 24/7.
        </p>
      </section>

      {/* Main Grid: Contact Cards & Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#121318] border border-[#d4af37]/25 rounded-2xl p-6 space-y-6 shadow-xl">
              <h3 className="font-serif-luxury text-xl text-white font-bold pb-3 border-b border-neutral-800">
                Studio & Desk Details
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0b0c10] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-neutral-400 font-medium">Direct Helpline</div>
                    <a href="tel:+911234567890" className="text-sm font-bold text-white hover:text-[#d4af37] transition-colors">
                      +91 12345 67890
                    </a>
                    <div className="text-[10px] text-[#f3e5ab]">Available 24 Hours • 7 Days a week</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0b0c10] border border-[#d4af37]/30 flex items-center justify-center text-[#25D366] shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-neutral-400 font-medium">WhatsApp Concierge</div>
                    <a
                      href="https://wa.me/917726057101"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-bold text-white hover:text-[#25D366] transition-colors"
                    >
                      +91 77260 57101
                    </a>
                    <div className="text-[10px] text-neutral-400">Instant quote and itinerary sharing</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0b0c10] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-neutral-400 font-medium">Email Inquiries</div>
                    <a href="mailto:info@groupofinfinity.art" className="text-sm font-bold text-white hover:text-[#d4af37] transition-colors">
                      info@groupofinfinity.art
                    </a>
                    <div className="text-[10px] text-neutral-400">Response within 2 hours</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0b0c10] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-neutral-400 font-medium">Head Office & Creative Studio</div>
                    <div className="text-sm font-bold text-white">
                      Group of Infinity, Near Clock Tower / Airport Link, Jodhpur, Rajasthan, India - 342001
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0b0c10] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-neutral-400 font-medium">Studio Visiting Hours</div>
                    <div className="text-xs text-white font-semibold">
                      Monday – Saturday: 09:00 AM – 09:00 PM
                    </div>
                    <div className="text-[10px] text-neutral-400">Sunday: Prior Appointment Only</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Map preview card */}
            <div className="bg-[#121318] border border-[#d4af37]/20 rounded-2xl p-4 text-center space-y-2">
              <div className="h-36 rounded-xl bg-[#0b0c10] border border-neutral-800 flex items-center justify-center relative overflow-hidden">
                {/* Visual map representation */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <div className="relative z-10 text-center space-y-1">
                  <MapPin className="w-8 h-8 text-[#d4af37] mx-auto animate-bounce" />
                  <div className="text-xs font-bold text-white">Jodhpur, Rajasthan</div>
                  <div className="text-[10px] text-[#d4af37]">Blue City & Desert Gateway</div>
                </div>
              </div>
            </div>

          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="bg-[#121318] border border-[#d4af37]/30 rounded-3xl p-6 sm:p-10 shadow-2xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center mx-auto text-[#d4af37]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif-luxury text-2xl text-white font-bold">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-xs text-neutral-300 max-w-md mx-auto">
                    Thank you for reaching out to Group of Infinity. Our team will contact you promptly on your provided number.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl border border-[#d4af37] text-[#f3e5ab] text-xs font-bold uppercase hover:bg-[#d4af37] hover:text-black transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div>
                  <div className="mb-6">
                    <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-bold block mb-1">
                      GET IN TOUCH
                    </span>
                    <h3 className="font-serif-luxury text-2xl text-white font-bold">
                      Send Us an Inquiry
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-neutral-300 font-semibold mb-1">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ananya Rathore"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0c10] border border-[#d4af37]/30 text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37]"
                        />
                      </div>

                      <div>
                        <label className="block text-neutral-300 font-semibold mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. +91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0c10] border border-[#d4af37]/30 text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-neutral-300 font-semibold mb-1">Email Address</label>
                        <input
                          type="email"
                          placeholder="ananya@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0c10] border border-[#d4af37]/30 text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37]"
                        />
                      </div>

                      <div>
                        <label className="block text-neutral-300 font-semibold mb-1">Interested Service</label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0c10] border border-[#d4af37]/30 text-white focus:outline-none focus:border-[#d4af37]"
                        >
                          <option value="Travels & Car Rental">Infinity Travels & Car Rental</option>
                          <option value="Holiday Tour Package">Curated Holiday Tour Package</option>
                          <option value="Pre-Wedding Shoot">Pre-Wedding Shoot</option>
                          <option value="Wedding Photography">Royal Wedding Photography</option>
                          <option value="Baby & Kids Shoot">Baby & Kids Shoot</option>
                          <option value="Commercial & Brand Shoot">Commercial & Brand Film</option>
                          <option value="Infinity Farming Inquiry">Infinity Organic Farming & Retreats</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-neutral-300 font-semibold mb-1">Your Message or Requirements</label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Tell us dates, number of travelers/guests, preferred car model, shoot theme, etc..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b0c10] border border-[#d4af37]/30 text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37]"
                      ></textarea>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                      <button
                        type="submit"
                        className="w-full sm:flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa8c2c] text-black font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 hover:opacity-95 shadow-lg transition-all"
                      >
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleWhatsApp}
                        className="w-full sm:w-auto py-3 px-5 rounded-xl border border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10 font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-colors"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>WhatsApp Us</span>
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-8">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#d4af37] font-bold block">
            HELPFUL ANSWERS
          </span>
          <h2 className="font-serif-luxury text-2xl sm:text-3xl text-white font-bold">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-[#121318] border border-[#d4af37]/20 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full p-4 sm:p-5 flex items-center justify-between text-left text-xs sm:text-sm font-semibold text-white hover:text-[#f3e5ab] transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#d4af37] shrink-0 transition-transform duration-300 ${
                    openFaq === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === i && (
                <div className="px-5 pb-5 text-xs text-neutral-300 leading-relaxed border-t border-neutral-800/80 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
