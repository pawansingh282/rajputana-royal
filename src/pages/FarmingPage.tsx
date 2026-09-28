import React, { useState } from 'react';
import { Sprout, Bell, CheckCircle2, ShieldCheck, Heart, Sun, Leaf, Trees } from 'lucide-react';

interface FarmingPageProps {
  onOpenBooking: () => void;
}

export const FarmingPage: React.FC<FarmingPageProps> = ({ onOpenBooking }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <div className="pt-28 pb-20 space-y-16 bg-black text-white">
      
      {/* Hero Coming Soon Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121318] border border-[#d4af37]/40 text-xs text-[#d4af37] font-bold tracking-widest uppercase">
          <Sprout className="w-4 h-4" />
          <span>INFINITY FARMING</span>
        </div>

        <h1 className="font-serif-luxury text-4xl sm:text-6xl text-white font-extrabold tracking-wide leading-tight">
          PURE LIVING, ROOTED IN <span className="text-gold-gradient">NATURE</span>
        </h1>

        <p className="font-display-sub italic text-xl sm:text-2xl text-[#f3e5ab]">
          "Pure, organic & sustainable farming experiences close to nature."
        </p>

        <p className="text-sm text-neutral-300 max-w-xl mx-auto font-light leading-relaxed">
          Rooted in the fertile soils of Rajasthan, Infinity Farming is cultivating a revolutionary farm-to-table organic agriculture estate and tranquil agro-tourism eco-retreat.
        </p>

        {/* Big Coming Soon Badge with Countdown */}
        <div className="pt-4 max-w-md mx-auto">
          <div className="bg-[#121318] border-2 border-[#d4af37]/50 rounded-2xl p-6 shadow-[0_0_40px_rgba(212,175,55,0.2)]">
            <div className="text-[11px] uppercase tracking-[0.3em] text-[#d4af37] font-bold mb-3">
              OFFICIAL LAUNCHING IN
            </div>

            <div className="grid grid-cols-4 gap-2 text-center">
              <div className="bg-[#0b0c10] p-3 rounded-xl border border-neutral-800">
                <div className="font-serif-luxury text-2xl sm:text-3xl text-white font-bold">45</div>
                <div className="text-[9px] uppercase text-neutral-400">Days</div>
              </div>
              <div className="bg-[#0b0c10] p-3 rounded-xl border border-neutral-800">
                <div className="font-serif-luxury text-2xl sm:text-3xl text-white font-bold">18</div>
                <div className="text-[9px] uppercase text-neutral-400">Hours</div>
              </div>
              <div className="bg-[#0b0c10] p-3 rounded-xl border border-neutral-800">
                <div className="font-serif-luxury text-2xl sm:text-3xl text-white font-bold">32</div>
                <div className="text-[9px] uppercase text-neutral-400">Mins</div>
              </div>
              <div className="bg-[#0b0c10] p-3 rounded-xl border border-neutral-800">
                <div className="font-serif-luxury text-2xl sm:text-3xl text-white font-bold">10</div>
                <div className="text-[9px] uppercase text-neutral-400">Secs</div>
              </div>
            </div>

            {/* Email Notification Form */}
            <div className="mt-6 pt-5 border-t border-neutral-800">
              {subscribed ? (
                <div className="flex items-center justify-center gap-2 text-green-400 text-xs font-semibold py-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>You're on the VIP list! We will notify you on launch day.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="text-xs text-neutral-300">
                    Be the first to experience farm visits and reserve organic produce baskets.
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address..."
                      required
                      className="flex-1 px-3 py-2 text-xs rounded-xl bg-[#0b0c10] border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37]"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl bg-[#d4af37] text-black hover:bg-[#f3e5ab] transition-all flex items-center gap-1.5 shadow-lg"
                    >
                      <Bell className="w-3.5 h-3.5" />
                      <span>Notify Me</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Farm Image & Pillars */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-[#d4af37]/30 shadow-2xl mb-12">
          <img
            src="/images/card_farming_farm.jpg"
            alt="Infinity Organic Farming"
            className="w-full h-80 sm:h-96 md:h-[460px] object-cover filter brightness-95"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-10">
            <span className="text-[#d4af37] text-xs uppercase font-bold tracking-widest mb-1">
              SUSTAINABLE AGRO-ECOSYSTEM
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Cultivating Nature's Purest Essence
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl mt-2">
              From organic herbs and cold-pressed farm oils to open-air weekend agritourism stays, Infinity Farming reconnects modern life with mother earth.
            </p>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#0c0d12] border border-neutral-800 text-center space-y-3">
            <div className="w-12 h-12 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 flex items-center justify-center mx-auto text-[#d4af37]">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-white text-base">100% Certified Organic</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Zero synthetic chemicals, pure heirloom seeds, and ancient Vedic composting methods.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0c0d12] border border-neutral-800 text-center space-y-3">
            <div className="w-12 h-12 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 flex items-center justify-center mx-auto text-[#d4af37]">
              <Trees className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-white text-base">Agro-Tourism Retreats</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Escape the city noise. Enjoy fruit picking, organic dining, and peaceful rural farm stays.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0c0d12] border border-neutral-800 text-center space-y-3">
            <div className="w-12 h-12 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 flex items-center justify-center mx-auto text-[#d4af37]">
              <Sun className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-white text-base">Solar-Powered & Eco-Friendly</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Drip irrigation, solar-powered farm systems, and holistic soil-regeneration practices.
            </p>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="p-8 rounded-3xl bg-gradient-to-b from-[#161720] to-[#0c0d12] border border-[#d4af37]/30 space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Interested in Partnering or Early Farm Visit Access?
          </h3>
          <p className="text-xs text-neutral-400 max-w-lg mx-auto">
            Contact the Group of Infinity team directly to discuss agro-tourism partnerships and bulk organic orders.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-xl bg-[#d4af37] text-black hover:bg-[#f3e5ab] font-bold text-xs uppercase tracking-wider transition-all shadow-lg"
            >
              Contact Us About Farming
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
