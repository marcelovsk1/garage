'use client';

import { motion } from 'framer-motion';
import { useCarStore } from '@/stores/carStore';
import CarCard from '@/components/CarCard';
import FilterBar from '@/components/FilterBar';
import { Search, MapPin, Shield, Clock } from 'lucide-react';

export default function HomePage() {
  const { filteredCars, filters } = useCarStore();

  const features = [
    {
      icon: Search,
      title: 'Easy to Find',
      description: 'Discover the perfect vehicle with our intelligent filters'
    },
    {
      icon: Shield,
      title: 'Safe & Reliable',
      description: 'All vehicles are verified and fully insured'
    },
    {
      icon: Clock,
      title: 'Available 24/7',
      description: 'Rent when you want, where you want'
    },
    {
      icon: MapPin,
      title: 'Flexible Pickup',
      description: 'Convenient pickup and return locations'
    }
  ];

  return (
    <div>
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-luxury-sports-car-close-up-21084-large.mp4"
              type="video/mp4"
            />
            {/* Fallback for browsers that don't support video */}
            <div className="w-full h-full bg-gray-900"></div>
          </video>
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* Content */}
        <div className="relative z-20 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-6xl md:text-9xl heading-ultra-light tracking-wider"
          >
            PREMIUM LUXURY RENTALS
          </motion.h1>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="w-px h-16 bg-white/60 relative">
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1 bg-white rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl mx-auto"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-gray-700" />
                  </div>
                  <h3 className="text-medium text-gray-900 mb-3 text-sm uppercase">{feature.title}</h3>
                  <p className="text-sm text-gray-600 text-light leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <FilterBar />
      </motion.section>

      {/* Results Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl heading-light text-gray-900 mb-6">
              AVAILABLE VEHICLES
            </h2>
            <p className="text-gray-600 text-light text-lg">
              {filteredCars.length} {filteredCars.length === 1 ? 'vehicle' : 'vehicles'} found
              {filters.category !== 'all' && ` in ${filters.category.toUpperCase()} category`}
            </p>
          </motion.div>

          {/* Cars Grid */}
          {filteredCars.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20">
              {filteredCars.map((car, index) => (
                <CarCard
                  key={car.id}
                  car={car}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-center py-32"
            >
              <div className="w-28 h-28 mx-auto mb-10 flex items-center justify-center bg-gray-100">
                <Search className="w-14 h-14 text-gray-400" />
              </div>
              <h3 className="text-3xl heading-light text-gray-900 mb-6">
                NO VEHICLES FOUND
              </h3>
              <p className="text-gray-600 mb-10 max-w-md mx-auto text-light text-lg leading-relaxed">
                Try adjusting your filters to discover more options from our premium collection.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="bg-black text-white px-10 py-4 text-medium text-sm uppercase hover:bg-gray-800 transition-colors duration-300"
              >
                VIEW ALL VEHICLES
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
