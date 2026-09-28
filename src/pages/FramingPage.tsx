import React, { useState } from 'react';
import { Frame, Bell, CheckCircle2, Sparkles, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import { FRAMING_TEASERS } from '../data/framingData';
import { ImageWithFallback } from '../components/ImageWithFallback';

interface FramingPageProps {
  onOpenBooking: () => void;
}

export const FramingPage: React.FC<FramingPageProps> = ({ onOpenBooking }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <div className="pt-28 pb-20 space-y-16">
      
      {/* Hero Coming Soon Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121318] border border-[#d4af37]/40 text-xs text-[#d4af37] font-bold tracking-widest uppercase">
          <Frame className="w-4 h-4" />
          <span>INFINITY FRAMING STUDIO</span>
        </div>

        <h1 className="font-serif-luxury text-4xl sm:text-6xl text-white font-extrabold tracking-wide leading-tight">
          PREMIUM FRAMES FOR <span className="text-gold-gradient">YOUR MEMORIES</span>
        </h1>

        <p className="font-display-sub italic text-xl sm:text-2xl text-[#f3e5ab]">
          "Because every moment deserves a frame."
        </p>

        <p className="text-sm text-neutral-300 max-w-xl mx-auto font-light leading-relaxed">
          We are handcrafting an exclusive bespoke framing collection right here in Jodhpur. Custom teakwood, Italian museum acrylics, and floating fine-art canvases.
        </p>

        {/* Big Coming Soon Badge with Countdown */}
        <div className="pt-4 max-w-md mx-auto">
          <div className="bg-[#121318] border-2 border-[#d4af37]/50 rounded-2xl p-6 shadow-[0_0_40px_rgba(212,175,55,0.2)]">
            <div className="text-[11px] uppercase tracking-[0.3em] text-[#d4af37] font-bold mb-3">
              OFFICIAL LAUNCHING IN
            </div>

            <div className="grid grid-cols-4 gap-2 text-center">
              <div className="bg-[#0b0c10] p-3 rounded-xl border border-neutral-800">
                <div className="font-serif-luxury text-2xl sm:text-3xl text-white font-bold">24</div>
                <div className="text-[9px] uppercase text-neutral-400">Days</div>
              </div>
              <div className="bg-[#0b0c10] p-3 rounded-xl border border-neutral-800">
                <div className="font-serif-luxury text-2xl sm:text-3xl text-white font-bold">14</div>
                <div className="text-[9px] uppercase text-neutral-400">Hours</div>
              </div>
              <div className="bg-[#0b0c10] p-3 rounded-xl border border-neutral-800">
                <div className="font-serif-luxury text-2xl sm:text-3xl text-white font-bold">48</div>
                <div className="text-[9px] uppercase text-neutral-400">Mins</div>
              </div>
              <div className="bg-[#0b0c10] p-3 rounded-xl border border-neutral-800">
                <div className="font-serif-luxury text-2xl sm:text-3xl text-[#d4af37] font-bold">59</div>
                <div className="text-[9px] uppercase text-neutral-400">Secs</div>
              </div>
            </div>

            {/* VIP Early Bird Notify Form */}
            <div className="mt-6 pt-5 border-t border-neutral-800 text-left">
              {subscribed ? (
                <div className="text-center space-y-2 p-3 bg-[#0b0c10] border border-[#d4af37]/40 rounded-xl">
                  <CheckCircle2 className="w-6 h-6 text-[#d4af37] mx-auto" />
                  <div className="text-xs font-bold text-white">You're on the VIP Launch List!</div>
                  <div className="text-[11px] text-[#f3e5ab]">
                    Use code <span className="font-mono font-bold bg-[#d4af37]/20 px-1.5 py-0.5 rounded">INFINITY20</span> for flat 20% off on your first framed art piece.
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="text-xs text-neutral-300 font-semibold">
                    Get notified & receive an early-bird 20% off voucher:
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 px-3.5 py-2.5 rounded-xl bg-[#0b0c10] border border-[#d4af37]/30 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37]"
                    />
                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-xl bg-[#d4af37] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#e5c07b] transition-colors flex items-center gap-1.5"
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

      {/* Preview Teaser of Custom Framing Materials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#d4af37] font-bold block">
            SNEAK PEEK PREVIEW
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-white font-bold">
            Artisan Handcrafted Collections
          </h2>
          <p className="text-xs text-neutral-400 max-w-lg mx-auto">
            From vintage wedding portraits to modern panoramic landscape art.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FRAMING_TEASERS.map((item) => (
            <div
              key={item.id}
              className="bg-[#121318] border border-[#d4af37]/20 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#d4af37]/50 transition-all group shadow-xl"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121318] via-transparent to-transparent"></div>
                  <span className="absolute bottom-2.5 left-3 text-[10px] text-[#f3e5ab] font-mono bg-black/70 px-2 py-0.5 rounded border border-[#d4af37]/30">
                    Est. From {item.startingPrice}
                  </span>
                </div>

                <div className="p-5 space-y-2.5">
                  <h3 className="font-serif-luxury text-base font-bold text-white group-hover:text-[#f3e5ab] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-400">
                    {item.tagline}
                  </p>

                  <div className="pt-2">
                    <div className="text-[10px] uppercase font-bold text-[#d4af37] tracking-wider mb-1.5">
                      Specifications:
                    </div>
                    <ul className="space-y-1 text-[11px] text-neutral-300">
                      {item.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <Sparkles className="w-3 h-3 text-[#d4af37] shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-2.5 rounded-lg border border-[#d4af37]/40 text-[#f3e5ab] hover:bg-[#d4af37] hover:text-black font-bold uppercase tracking-wider text-xs transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Pre-Order Inquiry</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
