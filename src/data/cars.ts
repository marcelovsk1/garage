import { Car } from '@/types/car';

export const cars: Car[] = [
  {
    id: '1',
    name: 'Honda Civic Sedan',
    brand: 'Honda',
    model: 'Civic',
    year: 2023,
    pricePerDay: 89,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Comfortable and economical sedan, perfect for urban and highway travel. Spacious interior with advanced technology.',
    category: 'compact',
    features: ['Air Conditioning', 'Bluetooth', 'Backup Camera', 'Cruise Control'],
    transmission: 'automatic',
    fuelType: 'gasoline',
    seats: 5,
    rating: 4.8,
    totalRentals: 156
  },
  {
    id: '2',
    name: 'BMW X3 xDrive',
    brand: 'BMW',
    model: 'X3',
    year: 2024,
    pricePerDay: 189,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Premium SUV with all-wheel drive, ideal for adventures and family trips. Luxurious design and exceptional performance.',
    category: 'luxury',
    features: ['Sunroof', 'Leather Seats', 'Premium Sound System', 'GPS Navigation', 'Parking Assistant'],
    transmission: 'automatic',
    fuelType: 'gasoline',
    seats: 5,
    rating: 4.9,
    totalRentals: 89
  },
  {
    id: '3',
    name: 'Toyota Corolla Hybrid',
    brand: 'Toyota',
    model: 'Corolla',
    year: 2023,
    pricePerDay: 75,
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Efficient hybrid with low fuel consumption. Toyota reliability with modern technology.',
    category: 'economy',
    features: ['Hybrid System', 'Air Conditioning', 'Bluetooth', 'Parking Sensors'],
    transmission: 'automatic',
    fuelType: 'hybrid',
    seats: 5,
    rating: 4.7,
    totalRentals: 203
  },
  {
    id: '4',
    name: 'Porsche 911 Carrera',
    brand: 'Porsche',
    model: '911',
    year: 2024,
    pricePerDay: 450,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Iconic sports car for unforgettable experiences. Track performance with daily comfort.',
    category: 'sport',
    features: ['Turbo Engine', 'Sport Suspension', 'Leather Interior', 'Bose Sound System'],
    transmission: 'automatic',
    fuelType: 'gasoline',
    seats: 2,
    rating: 5.0,
    totalRentals: 34
  },
  {
    id: '5',
    name: 'Jeep Compass Sport',
    brand: 'Jeep',
    model: 'Compass',
    year: 2023,
    pricePerDay: 120,
    image: 'https://images.unsplash.com/photo-1606016159991-0d27fc8b2c98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Rugged SUV for off-road adventures and urban use. Versatility and durability in one vehicle.',
    category: 'suv',
    features: ['4x4 Traction', 'Skid Plate Protection', 'Multimedia Center', 'Traction Control'],
    transmission: 'automatic',
    fuelType: 'gasoline',
    seats: 5,
    rating: 4.6,
    totalRentals: 127
  },
  {
    id: '6',
    name: 'Volkswagen Polo TSI',
    brand: 'Volkswagen',
    model: 'Polo',
    year: 2023,
    pricePerDay: 65,
    image: 'https://images.unsplash.com/photo-1610768764270-790fbec18178?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Compact hatchback ideal for the city. Economical, agile and with great value for money.',
    category: 'economy',
    features: ['Turbo Engine', 'Air Conditioning', 'Electric Steering', 'Trip Computer'],
    transmission: 'manual',
    fuelType: 'gasoline',
    seats: 5,
    rating: 4.5,
    totalRentals: 289
  },
  {
    id: '7',
    name: 'Mercedes-Benz C-Class',
    brand: 'Mercedes-Benz',
    model: 'C-Class',
    year: 2024,
    pricePerDay: 220,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Luxury sedan with elegance and cutting-edge technology. Premium comfort for executives and special occasions.',
    category: 'luxury',
    features: ['MBUX System', 'Massage Seats', 'Automatic Climate Control', 'Adaptive LED Headlights'],
    transmission: 'automatic',
    fuelType: 'gasoline',
    seats: 5,
    rating: 4.9,
    totalRentals: 67
  },
  {
    id: '8',
    name: 'Tesla Model 3',
    brand: 'Tesla',
    model: 'Model 3',
    year: 2024,
    pricePerDay: 150,
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Electric sedan with autonomous technology and zero emissions. The future of urban mobility.',
    category: 'electric',
    features: ['Autopilot', '15" Touchscreen', 'Supercharging', 'Over-the-air Updates'],
    transmission: 'automatic',
    fuelType: 'electric',
    seats: 5,
    rating: 4.8,
    totalRentals: 95
  }
];

export const getCarById = (id: string): Car | undefined => {
  return cars.find(car => car.id === id);
};

export const getCarsByCategory = (category: string): Car[] => {
  if (category === 'all') return cars;
  return cars.filter(car => car.category === category);
};

export const filterCars = (filters: {
  category?: string;
  priceRange?: [number, number];
  searchTerm?: string;
}): Car[] => {
  let filteredCars = [...cars];

  if (filters.category && filters.category !== 'all') {
    filteredCars = filteredCars.filter(car => car.category === filters.category);
  }

  if (filters.priceRange) {
    filteredCars = filteredCars.filter(
      car => car.pricePerDay >= filters.priceRange![0] && car.pricePerDay <= filters.priceRange![1]
    );
  }

  if (filters.searchTerm) {
    const term = filters.searchTerm.toLowerCase();
    filteredCars = filteredCars.filter(
      car =>
        car.name.toLowerCase().includes(term) ||
        car.brand.toLowerCase().includes(term) ||
        car.model.toLowerCase().includes(term)
    );
  }

  return filteredCars;
}; 