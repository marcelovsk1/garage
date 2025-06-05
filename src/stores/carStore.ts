import { create } from 'zustand';
import { Car, CarFilters, Reservation } from '@/types/car';
import { cars, filterCars } from '@/data/cars';

interface CarState {
  cars: Car[];
  filteredCars: Car[];
  filters: CarFilters;
  reservations: Reservation[];
  isLoading: boolean;
  
  // Actions
  setFilters: (filters: Partial<CarFilters>) => void;
  resetFilters: () => void;
  addReservation: (reservation: Omit<Reservation, 'id'>) => void;
  removeReservation: (id: string) => void;
  searchCars: (searchTerm: string) => void;
}

const initialFilters: CarFilters = {
  priceRange: [0, 500],
  category: 'all',
  searchTerm: '',
};

export const useCarStore = create<CarState>((set, get) => ({
  cars,
  filteredCars: cars,
  filters: initialFilters,
  reservations: [],
  isLoading: false,

  setFilters: (newFilters) => {
    const updatedFilters = { ...get().filters, ...newFilters };
    const filtered = filterCars({
      category: updatedFilters.category === 'all' ? undefined : updatedFilters.category,
      priceRange: updatedFilters.priceRange,
      searchTerm: updatedFilters.searchTerm || undefined,
    });
    
    set({
      filters: updatedFilters,
      filteredCars: filtered,
    });
  },

  resetFilters: () => {
    set({
      filters: initialFilters,
      filteredCars: cars,
    });
  },

  addReservation: (reservationData) => {
    const newReservation: Reservation = {
      ...reservationData,
      id: Date.now().toString(),
    };
    
    set((state) => ({
      reservations: [...state.reservations, newReservation],
    }));
  },

  removeReservation: (id) => {
    set((state) => ({
      reservations: state.reservations.filter(r => r.id !== id),
    }));
  },

  searchCars: (searchTerm) => {
    get().setFilters({ searchTerm });
  },
})); 