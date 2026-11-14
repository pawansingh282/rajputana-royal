import React from 'react';
import { ArrowLeft, ArrowRight, Briefcase, Car, Check, Fuel, MapPin, ShieldCheck, Users } from 'lucide-react';
import { Vehicle } from '../types';
import { ImageWithFallback } from '../components/ImageWithFallback';

interface VehicleDetailPageProps {
  vehicle: Vehicle;
  onBack: () => void;
  onBook: () => void;
}

export const VehicleDetailPage: React.FC<VehicleDetailPageProps> = ({ vehicle, onBack, onBook }) => (
  <div className="min-h-screen bg-[#0b0c10] pb-20 pt-28 text-white">
    <section className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-300 transition hover:border-[#d4af37] hover:text-[#f3e5ab] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
      >
        <ArrowLeft className="h-4 w-4" /> Back to fleet
      </button>

      <div className="grid gap-8 lg:grid-cols-[1.35fr_0.85fr]">
        <div className="overflow-hidden rounded-3xl border border-[#d4af37]/50 bg-[#121318] shadow-2xl">
          <div className="relative h-72 sm:h-[440px]">
            <ImageWithFallback src={vehicle.imageUrl} alt={vehicle.name} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />
            <span className="absolute left-5 top-5 rounded-full border border-[#d4af37]/50 bg-black/75 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#f3e5ab]">
              {vehicle.category}
            </span>
            {vehicle.popular && (
              <span className="absolute right-5 top-5 rounded-full bg-[#d4af37] px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-black">
                Popular choice
              </span>
            )}
            <div className="absolute bottom-6 left-6 right-6">
              <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#f3e5ab]">
                <Car className="h-4 w-4" /> Infinity travels & fleet
              </p>
              <h1 className="max-w-3xl text-3xl font-extrabold leading-tight sm:text-5xl">{vehicle.name}</h1>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-px bg-white/10 sm:grid-cols-4">
            {[
              { icon: Users, label: 'Capacity', value: vehicle.capacity },
              { icon: Briefcase, label: 'Luggage', value: vehicle.luggage },
              { icon: Fuel, label: 'Fuel & gear', value: `${vehicle.fuelType} · ${vehicle.transmission}` },
              { icon: ShieldCheck, label: 'Comfort', value: vehicle.ac ? 'Sanitized AC' : 'Sanitized' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-[#121318] p-4 sm:p-5">
                <Icon className="mb-3 h-5 w-5 text-[#d4af37]" />
                <p className="text-[10px] uppercase tracking-wider text-neutral-500">{label}</p>
                <p className="mt-1 text-xs font-medium leading-relaxed text-neutral-200">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="flex flex-col rounded-3xl border border-[#d4af37]/40 bg-[#121318] p-6 shadow-xl sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d4af37]">Your Rajasthan ride</p>
          <h2 className="mt-3 text-2xl font-bold">Comfort, care, and a local expert behind the wheel.</h2>
          <p className="mt-4 text-sm leading-7 text-neutral-400">{vehicle.idealFor}. Enjoy a professionally chauffeured, sanitized ride with transparent rates and support from our local team.</p>

          <div className="mt-7 space-y-3 border-y border-white/10 py-6">
            {vehicle.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 text-sm text-neutral-200">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#d4af37]" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-[#d4af37]/50 bg-black/30 p-4">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500">Outstation</p>
              <p className="mt-1 text-xl font-extrabold text-[#f3e5ab]">₹{vehicle.ratePerKm}<span className="text-xs font-medium text-neutral-400"> / km</span></p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500">Local · 8hr / 80km</p>
              <p className="mt-1 text-xl font-extrabold">₹{vehicle.local8hr80km.toLocaleString()}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onBook}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#d4af37] px-5 py-4 text-xs font-extrabold uppercase tracking-wider text-black transition hover:bg-[#f0d46a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Request this vehicle <ArrowRight className="h-4 w-4" />
          </button>
          <p className="mt-3 flex items-center justify-center gap-2 text-center text-xs text-neutral-500">
            <MapPin className="h-3.5 w-3.5 text-[#d4af37]" /> Jodhpur, Rajasthan · chauffeur included
          </p>
        </aside>
      </div>
    </section>
  </div>
);
