export type PhotographyCategory = 'highlights' | 'pre-wedding' | 'wedding' | 'antique-india' | 'commercial' | 'baby-shoot';

export interface PhotoItem {
  id: string;
  title: string;
  category: PhotographyCategory;
  imageUrl: string;
  location: string;
  date?: string;
  description: string;
  tags: string[];
  equipment?: string;
  orientation?: 'landscape' | 'portrait' | 'square';
  featured?: boolean;
  driveId?: string;
  subfolder?: string;
  isVideo?: boolean;
  videoUrl?: string;
}

export interface PhotographyPackage {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  category: PhotographyCategory | 'all';
  duration: string;
  features: string[];
  deliverables: string[];
  badge?: string;
  popular?: boolean;
}

export interface TravelPackage {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  price: number;
  originalPrice?: number;
  location: string;
  category: 'heritage' | 'mountain' | 'beach' | 'pilgrimage' | 'desert';
  imageUrl: string;
  highlights: string[];
  itinerary: { day: number; title: string; description: string }[];
  inclusions: string[];
  exclusions: string[];
  rating: number;
  reviewsCount: number;
  featured?: boolean;
}

export interface Vehicle {
  id: string;
  name: string;
  category: 'Hatchback' | 'MPV' | 'Luxury SUV' | 'Premium Sedan' | 'Tempo Traveller' | 'Royal Wedding Car';
  capacity: string;
  luggage: string;
  ac: boolean;
  ratePerKm: number;
  minKmPerDay: number;
  local8hr80km: number;
  outstationRatePerDay: number;
  fuelType: 'Diesel' | 'Petrol' | 'Hybrid';
  transmission: 'Automatic' | 'Manual';
  imageUrl: string;
  features: string[];
  idealFor: string;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  service: 'Travels' | 'Wedding Photography' | 'Pre-Wedding' | 'Car Rental' | 'Commercial Shoot';
  rating: number;
  review: string;
  date: string;
  avatar: string;
}

export interface FramingProductTeaser {
  id: string;
  title: string;
  tagline: string;
  material: string;
  imageUrl: string;
  startingPrice: string;
  features: string[];
}

export type PageId = 'home' | 'photography' | 'travels' | 'farming' | 'framing' | 'about' | 'gallery' | 'contact';
