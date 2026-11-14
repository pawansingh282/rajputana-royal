import React, { useState } from 'react';
import { 
  Car, 
  Compass, 
  MapPin, 
  Users, 
  Briefcase, 
  ShieldCheck, 
  Fuel, 
  Check, 
  Calculator, 
  ArrowRight,
  Route
} from 'lucide-react';
import { TravelPackage, Vehicle } from '../types';
import { FLEET_VEHICLES, TRAVEL_PACKAGES, POPULAR_ROUTES } from '../data/travelData';
import { ImageWithFallback } from '../components/ImageWithFallback';

interface TravelsPageProps {
  onSelectPackage: (pkg: TravelPackage) => void;
  onSelectVehicle: (vehicle: Vehicle) => void;
  onOpenBooking: (prefillType?: 'travel', itemTitle?: string) => void;
}

export const TravelsPage: React.FC<TravelsPageProps> = ({
  onSelectPackage,
  onSelectVehicle,
  onOpenBooking,
}) => {
  const [activeTab, setActiveTab] = useState<'fleet' | 'packages' | 'calculator'>('fleet');
  
  // Interactive Fare Calculator State
  const [calcVehicle, setCalcVehicle] = useState<string>(FLEET_VEHICLES[0].id);
  const [calcTripType, setCalcTripType] = useState<'outstation' | 'local'>('outstation');
  const [calcDays, setCalcDays] = useState<number>(2);
  const [calcEstKm, setCalcEstKm] = useState<number>(600);

  const selectedVehicleObj = FLEET_VEHICLES.find((v) => v.id === calcVehicle) || FLEET_VEHICLES[0];
  
  const estimatedCost = calcTripType === 'outstation'
    ? Math.max(calcEstKm, selectedVehicleObj.minKmPerDay * calcDays) * selectedVehicleObj.ratePerKm + (calcDays * 500) // driver allowance
    : selectedVehicleObj.local8hr80km * calcDays;

  return (
    <div className="pt-28 pb-20 space-y-16">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121318] border border-[#d4af37]/40 text-xs text-[#f3e5ab] font-bold tracking-widest uppercase mb-2">
          <Car className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>INFINITY TRAVELS & FLEET</span>
        </div>
        <h1 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl text-white font-extrabold tracking-wide">
          TRAVELS & <span className="text-gold-gradient">CAR RENTAL</span>
        </h1>
        <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed">
          Premium sanitized fleet for comfortable Rajasthan travel, with professional chauffeur service for city rides, outstation trips, sightseeing, and airport transfers.
        </p>
      </section>

      {/* Navigation Switcher Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setActiveTab('fleet')}
            className={`px-6 py-3 rounded-xl font-bold uppercase tracking-wider text-xs flex items-center gap-2 transition-all ${
              activeTab === 'fleet'
                ? 'bg-[#d4af37] text-black shadow-lg shadow-[#d4af37]/30 scale-105'
                : 'bg-[#121318] text-neutral-300 border border-neutral-800 hover:border-[#d4af37]/40'
            }`}
          >
            <Car className="w-4 h-4" />
            <span>Luxury Car Fleet & Tariffs</span>
          </button>

          <button
            onClick={() => setActiveTab('packages')}
            className={`px-6 py-3 rounded-xl font-bold uppercase tracking-wider text-xs flex items-center gap-2 transition-all ${
              activeTab === 'packages'
                ? 'bg-[#d4af37] text-black shadow-lg shadow-[#d4af37]/30 scale-105'
                : 'bg-[#121318] text-neutral-300 border border-neutral-800 hover:border-[#d4af37]/40'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Curated Tour Packages</span>
          </button>

          <button
            onClick={() => setActiveTab('calculator')}
            className={`px-6 py-3 rounded-xl font-bold uppercase tracking-wider text-xs flex items-center gap-2 transition-all ${
              activeTab === 'calculator'
                ? 'bg-[#d4af37] text-black shadow-lg shadow-[#d4af37]/30 scale-105'
                : 'bg-[#121318] text-neutral-300 border border-neutral-800 hover:border-[#d4af37]/40'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>Instant Fare Calculator</span>
          </button>
        </div>
      </section>

      {/* 1. FLEET SECTION */}
      {activeTab === 'fleet' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 animate-fadeIn">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {FLEET_VEHICLES.map((vehicle) => (
              <button
                key={vehicle.id}
                type="button"
                onClick={() => onSelectVehicle(vehicle)}
                aria-label={`View details for ${vehicle.name}`}
                className="w-full text-left bg-[#121318] border border-[#d4af37]/40 rounded-2xl overflow-hidden hover:border-[#d4af37] hover:shadow-[0_18px_60px_rgba(212,175,55,0.12)] transition-all flex flex-col shadow-xl group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
              >
                {/* Vehicle Image */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                  <ImageWithFallback
                    src={vehicle.imageUrl}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded bg-black/80 backdrop-blur-md text-[10px] text-[#f3e5ab] font-bold uppercase tracking-wider border border-[#d4af37]/30">
                    {vehicle.category}
                  </div>
                  {vehicle.popular && (
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-[#d4af37] text-black text-[9px] font-extrabold uppercase tracking-wider">
                      Popular Choice
                    </div>
                  )}
                </div>

                {/* Specs & Pricing */}
                <div className="p-5 sm:p-6 w-full flex flex-col justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="font-serif-luxury text-xl font-bold text-white group-hover:text-[#f3e5ab] transition-colors">
                      {vehicle.name}
                    </h3>
                    <p className="text-[11px] text-[#d4af37] font-medium">
                      Ideal for: {vehicle.idealFor}
                    </p>

                    {/* Quick Specs Grid */}
                    <div className="grid grid-cols-2 gap-2 py-2 text-[11px] text-neutral-300">
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#d4af37]" />
                        <span>{vehicle.capacity}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-[#d4af37]" />
                        <span>{vehicle.luggage}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Fuel className="w-3.5 h-3.5 text-[#d4af37]" />
                        <span>{vehicle.fuelType} • {vehicle.transmission}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                        <span>Sanitized & AC</span>
                      </div>
                    </div>

                    {/* Pricing Pill */}
                    <div className="grid grid-cols-2 rounded-xl bg-[#0b0c10] border border-[#d4af37]/50 divide-x divide-white/15 text-xs">
                      <div className="p-3">
                        <span className="text-[10px] text-neutral-400 block uppercase">Outstation rate</span>
                        <span className="font-serif-luxury text-lg font-bold text-[#d4af37]">
                          ₹{vehicle.ratePerKm}/KM
                        </span>
                      </div>
                      <div className="p-3 text-right">
                        <span className="text-[10px] text-neutral-400 block uppercase">Local 8Hr/80KM</span>
                        <span className="font-serif-luxury text-lg font-bold text-white">
                          ₹{vehicle.local8hr80km.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#f3e5ab] group-hover:text-[#d4af37]">
                    View vehicle details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Popular Intercity Routes Table */}
          <div className="bg-[#121318] border border-[#d4af37]/25 rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-bold block">
                  TRANSPARENT OUTSTATION TARIFFS
                </span>
                <h3 className="font-serif-luxury text-xl text-white font-bold">
                  Popular Routes from Jodhpur (Rajasthan)
                </h3>
              </div>
              <Route className="w-6 h-6 text-[#d4af37]" />
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-neutral-800 text-neutral-400 uppercase tracking-wider text-[10px]">
                    <th className="py-3 px-4">Route</th>
                    <th className="py-3 px-4">Distance</th>
                    <th className="py-3 px-4">Est. Time</th>
                    <th className="py-3 px-4">One-Way Sedan</th>
                    <th className="py-3 px-4 text-right">Round-Trip SUV</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800/60 text-neutral-300">
                  {POPULAR_ROUTES.map((r, i) => (
                    <tr key={i} className="hover:bg-[#181a24] transition-colors">
                      <td className="py-3.5 px-4 font-semibold text-white">
                        {r.from} ➔ {r.to}
                      </td>
                      <td className="py-3.5 px-4 font-mono">{r.distance}</td>
                      <td className="py-3.5 px-4 text-neutral-400">{r.duration}</td>
                      <td className="py-3.5 px-4 text-[#f3e5ab] font-bold">{r.oneWayStarting}</td>
                      <td className="py-3.5 px-4 text-[#d4af37] font-bold text-right">{r.roundTripStarting}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <section className="rounded-2xl border border-[#d4af37]/40 bg-[#121318] px-5 py-7 sm:px-8">
            <h2 className="mb-6 text-center text-2xl font-bold text-white">
              Why Choose <span className="text-[#d4af37]">Group of Infinity</span>
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Users, title: 'Professional chauffeurs', description: 'Experienced, courteous Rajasthan route experts.' },
                { icon: ShieldCheck, title: 'Sanitized cars', description: 'Hygienic, well-maintained and AC-equipped fleet.' },
                { icon: Check, title: 'Transparent pricing', description: 'Clear and fair fares with no hidden charges.' },
                { icon: MapPin, title: 'Local expertise', description: 'Curated travel support and on-ground assistance.' },
              ].map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex items-start gap-3 border-white/10 sm:border-r sm:pr-4 last:border-0">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#d4af37]/50 bg-black/30 text-[#d4af37]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-white">{title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-neutral-400">{description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-7 text-center">
              <button
                type="button"
                onClick={() => onOpenBooking('travel', 'Fleet Booking')}
                className="rounded-xl border border-[#d4af37] px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#f3e5ab] transition hover:bg-[#d4af37] hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
              >
                Plan your ride
              </button>
            </div>
          </section>
        </section>
      )}

      {/* 2. TOUR PACKAGES SECTION */}
      {activeTab === 'packages' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRAVEL_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-[#121318] border border-[#d4af37]/25 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#d4af37]/60 transition-all group shadow-xl"
              >
                <div>
                  <div className="relative h-52 overflow-hidden">
                    <ImageWithFallback
                      src={pkg.imageUrl}
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-[#d4af37]/30 text-[10px] text-[#f3e5ab] font-bold">
                      {pkg.duration}
                    </div>
                  </div>

                  <div className="p-5 space-y-2.5">
                    <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                      <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span className="truncate">{pkg.location}</span>
                    </div>

                    <h3 className="font-serif-luxury text-base font-bold text-white group-hover:text-[#f3e5ab] transition-colors">
                      {pkg.title}
                    </h3>

                    <p className="text-xs text-neutral-400 line-clamp-2">
                      {pkg.subtitle}
                    </p>

                    <div className="pt-2 flex items-baseline gap-2">
                      <span className="font-serif-luxury text-xl font-extrabold text-[#d4af37]">
                        ₹{pkg.price.toLocaleString()}/-
                      </span>
                      {pkg.originalPrice && (
                        <span className="text-xs text-neutral-500 line-through">
                          ₹{pkg.originalPrice.toLocaleString()}/-
                        </span>
                      )}
                      <span className="text-[10px] text-neutral-400">/ person</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 space-y-2">
                  <button
                    onClick={() => onSelectPackage(pkg)}
                    className="w-full py-2.5 rounded-xl border border-[#c9974c] text-[#f3e5ab] hover:bg-[#c9974c] hover:text-black font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-md transition-all"
                  >
                    <span>View Itinerary Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 3. INSTANT FARE CALCULATOR SECTION */}
      {activeTab === 'calculator' && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-fadeIn">
          <div className="bg-[#121318] border border-[#d4af37]/40 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
            <div className="text-center space-y-2">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37] font-bold block">
                TRANSPARENT TARIFF ESTIMATOR
              </span>
              <h2 className="font-serif-luxury text-2xl sm:text-3xl text-white font-bold">
                Calculate Your Travel & Rental Fare
              </h2>
              <p className="text-xs text-neutral-400">
                No hidden costs. Rates include vehicle rent, fuel, driver fee and sanitized air-conditioned cabin.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
              
              {/* Select Car */}
              <div>
                <label className="block text-neutral-300 font-semibold mb-2">1. Select Vehicle</label>
                <select
                  value={calcVehicle}
                  onChange={(e) => setCalcVehicle(e.target.value)}
                  className="w-full p-3 rounded-xl bg-[#0b0c10] border border-[#d4af37]/30 text-white focus:outline-none focus:border-[#d4af37]"
                >
                  {FLEET_VEHICLES.map((v) => (
                    <option key={v.id} value={v.id}>
                      {v.name} (₹{v.ratePerKm}/km)
                    </option>
                  ))}
                </select>
              </div>

              {/* Trip Type */}
              <div>
                <label className="block text-neutral-300 font-semibold mb-2">2. Trip Type</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setCalcTripType('outstation')}
                    className={`py-3 rounded-xl font-bold uppercase text-xs transition-all ${
                      calcTripType === 'outstation'
                        ? 'bg-[#d4af37] text-black shadow-md'
                        : 'bg-[#0b0c10] border border-neutral-800 text-neutral-400'
                    }`}
                  >
                    Outstation (Per KM)
                  </button>
                  <button
                    type="button"
                    onClick={() => setCalcTripType('local')}
                    className={`py-3 rounded-xl font-bold uppercase text-xs transition-all ${
                      calcTripType === 'local'
                        ? 'bg-[#d4af37] text-black shadow-md'
                        : 'bg-[#0b0c10] border border-neutral-800 text-neutral-400'
                    }`}
                  >
                    Local 8hr/80km
                  </button>
                </div>
              </div>

              {/* Days */}
              <div>
                <label className="block text-neutral-300 font-semibold mb-2">
                  3. Total Duration: <span className="text-[#f3e5ab] font-bold">{calcDays} Days</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="15"
                  value={calcDays}
                  onChange={(e) => setCalcDays(Number(e.target.value))}
                  className="w-full accent-[#d4af37]"
                />
              </div>

              {/* Estimated Distance (for outstation) */}
              {calcTripType === 'outstation' && (
                <div>
                  <label className="block text-neutral-300 font-semibold mb-2">
                    4. Estimated Total KM: <span className="text-[#f3e5ab] font-bold">{calcEstKm} KM</span>
                  </label>
                  <input
                    type="range"
                    min="250"
                    max="3000"
                    step="50"
                    value={calcEstKm}
                    onChange={(e) => setCalcEstKm(Number(e.target.value))}
                    className="w-full accent-[#d4af37]"
                  />
                  <span className="text-[10px] text-neutral-500">Min 250 KM/day applicable</span>
                </div>
              )}
            </div>

            {/* Calculated Output Box */}
            <div className="bg-[#0b0c10] border border-[#d4af37]/40 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-neutral-400 block">
                  Estimated Total Fare
                </span>
                <div className="font-serif-luxury text-3xl sm:text-4xl text-[#d4af37] font-extrabold">
                  ₹{estimatedCost.toLocaleString()}*
                </div>
                <div className="text-[10px] text-neutral-400 mt-1">
                  Includes {selectedVehicleObj.name}, fuel, sanitized AC and driver allowance.
                </div>
              </div>

              <div className="text-right text-xs text-neutral-400">
                <span className="text-[#c9974c] font-semibold">Toll taxes & state border permits</span> calculated at actuals.
              </div>
            </div>
          </div>
        </section>
      )}

    </div>
  );
};
