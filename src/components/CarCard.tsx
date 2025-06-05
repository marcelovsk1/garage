'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Car } from '@/types/car';
import { ArrowRight } from 'lucide-react';

interface CarCardProps {
  car: Car;
  index: number;
}

export default function CarCard({ car, index }: CarCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  const getCategoryLabel = (category: string) => {
    const labels = {
      economy: 'ECONOMY',
      compact: 'COMPACT',
      luxury: 'LUXURY',
      suv: 'SUVS',
      sport: 'SPORT',
      electric: 'ELECTRIC',
    };
    return labels[category as keyof typeof labels] || category.toUpperCase();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="group cursor-pointer"
    >
      <div className="relative bg-gray-50 overflow-hidden mb-8">
        {/* Category Badge */}
        <div className="absolute top-8 left-8 z-10">
          <span className="bg-black/90 text-white text-xs text-medium px-4 py-2">
            {getCategoryLabel(car.category)}
          </span>
        </div>

        {/* Car Image */}
        <div className="relative h-80 overflow-hidden">
          <Image
            src={car.image}
            alt={car.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      {/* Car Details */}
      <div className="space-y-6">
        {/* Year and Name */}
        <div className="text-center">
          <div className="text-sm text-gray-500 text-light mb-2">
            {car.year}
          </div>
          <h3 className="text-2xl heading-light text-gray-900 mb-4">
            {car.name.toUpperCase()}
          </h3>
          <div className="text-lg text-gray-600 text-light mb-6">
            From: {formatPrice(car.pricePerDay)}
            <span className="text-sm text-gray-500 ml-2 text-light">per day</span>
          </div>
        </div>

        {/* Explore Button */}
        <div className="text-center">
          <Link
            href={`/car/${car.id}`}
            className="inline-flex items-center gap-3 text-sm text-medium text-gray-900 hover:text-gray-600 transition-colors duration-300 group/button"
          >
            <span className="text-xs uppercase">EXPLORE</span>
            <ArrowRight className="w-4 h-4 group-hover/button:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
} 