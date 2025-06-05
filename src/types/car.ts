export interface Car {
  id: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  pricePerDay: number;
  image: string;
  description: string;
  category: 'economy' | 'compact' | 'luxury' | 'suv' | 'sport' | 'electric';
  features: string[];
  transmission: 'manual' | 'automatic';
  fuelType: 'gasoline' | 'diesel' | 'electric' | 'hybrid';
  seats: number;
  rating: number;
  totalRentals: number;
}

export interface CarFilters {
  priceRange: [number, number];
  category: string;
  searchTerm: string;
}

export interface Reservation {
  id: string;
  carId: string;
  startDate: Date;
  endDate: Date;
  totalDays: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled';
} 