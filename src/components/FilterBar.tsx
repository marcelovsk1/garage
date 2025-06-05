'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useCarStore } from '@/stores/carStore';
import { Search, SlidersHorizontal, X } from 'lucide-react';

export default function FilterBar() {
  const { filters, setFilters, resetFilters } = useCarStore();
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState(filters.searchTerm);

  const categories = [
    { value: 'all', label: 'ALL VEHICLES' },
    { value: 'electric', label: 'ELECTRIC' },
    { value: 'luxury', label: 'LUXURY' },
    { value: 'suv', label: 'SUVS' },
    { value: 'sport', label: 'SPORT' },
    { value: 'compact', label: 'COMPACT' },
  ];

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setFilters({ searchTerm: term });
  };

  const handlePriceChange = (values: number[]) => {
    setFilters({ priceRange: [values[0], values[1]] });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <div className="bg-white border-t border-b border-gray-200 py-12 mb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setFilters({ category: category.value })}
              className={`px-8 py-4 text-xs text-medium uppercase transition-all duration-300 ${
                filters.category === category.value
                  ? 'bg-black text-white'
                  : 'bg-transparent text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Search and Advanced Filters */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
          <div className="relative max-w-lg w-full">
            <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by brand, model or name..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-14 pr-5 py-4 border border-gray-300 focus:ring-1 focus:ring-black focus:border-black outline-none transition-all text-light"
            />
          </div>
          
          <button
            onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
            className="flex items-center gap-3 px-8 py-4 border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            <SlidersHorizontal className="w-5 h-5" />
            <span className="text-xs text-medium uppercase">ADVANCED FILTERS</span>
          </button>

          {(filters.category !== 'all' || filters.priceRange[0] > 0 || filters.priceRange[1] < 500 || filters.searchTerm) && (
            <button
              onClick={resetFilters}
              className="flex items-center gap-3 px-8 py-4 text-gray-600 hover:text-black transition-colors"
            >
              <X className="w-4 h-4" />
              <span className="text-xs text-medium uppercase">CLEAR ALL</span>
            </button>
          )}
        </div>

        {/* Advanced Filters */}
        {showAdvancedFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-12 pt-12 border-t border-gray-200"
          >
            <div className="max-w-3xl mx-auto">
              {/* Price Range */}
              <div className="text-center">
                <label className="block text-sm text-medium text-gray-700 mb-8 uppercase">
                  PRICE RANGE (PER DAY)
                </label>
                <div className="space-y-8">
                  <div className="flex items-center gap-12 justify-center">
                    <div className="text-center">
                      <label className="block text-xs text-gray-500 mb-3 text-light uppercase">MINIMUM</label>
                      <input
                        type="range"
                        min="0"
                        max="500"
                        step="25"
                        value={filters.priceRange[0]}
                        onChange={(e) => handlePriceChange([Number(e.target.value), filters.priceRange[1]])}
                        className="w-40 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="text-sm text-gray-600 mt-3 text-light">
                        {formatPrice(filters.priceRange[0])}
                      </div>
                    </div>
                    <div className="text-center">
                      <label className="block text-xs text-gray-500 mb-3 text-light uppercase">MAXIMUM</label>
                      <input
                        type="range"
                        min="0"
                        max="500"
                        step="25"
                        value={filters.priceRange[1]}
                        onChange={(e) => handlePriceChange([filters.priceRange[0], Number(e.target.value)])}
                        className="w-40 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="text-sm text-gray-600 mt-3 text-light">
                        {formatPrice(filters.priceRange[1])}
                      </div>
                    </div>
                  </div>
                  <div className="text-center text-lg text-gray-600 text-light">
                    From {formatPrice(filters.priceRange[0])} to {formatPrice(filters.priceRange[1])}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <style jsx>{`
          .slider::-webkit-slider-thumb {
            appearance: none;
            height: 18px;
            width: 18px;
            border-radius: 50%;
            background: #000000;
            cursor: pointer;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
          }
          
          .slider::-moz-range-thumb {
            height: 18px;
            width: 18px;
            border-radius: 50%;
            background: #000000;
            cursor: pointer;
            border: none;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
          }
        `}</style>
      </div>
    </div>
  );
} 