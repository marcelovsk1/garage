'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useCarStore } from '@/stores/carStore';
import { Car, Calendar, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const { reservations } = useCarStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-4"
            >
              <div className="bg-black p-3">
                <Car className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl heading-light text-gray-900">DRIVESHARE</h1>
                <p className="text-xs text-gray-500 text-light -mt-1">PREMIUM RENTALS</p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <Link
              href="/"
              className="text-gray-700 hover:text-black text-light text-sm uppercase transition-colors duration-200"
            >
              EXPLORE VEHICLES
            </Link>
            <Link
              href="/my-rentals"
              className="flex items-center gap-3 text-gray-700 hover:text-black text-light text-sm uppercase transition-colors duration-200"
            >
              <Calendar className="w-4 h-4" />
              MY RENTALS
              {reservations.length > 0 && (
                <span className="bg-black text-white text-xs px-2 py-1 min-w-[20px] h-5 flex items-center justify-center text-medium">
                  {reservations.length}
                </span>
              )}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 py-8"
          >
            <nav className="flex flex-col gap-8">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-black text-light text-sm uppercase transition-colors duration-200"
              >
                EXPLORE VEHICLES
              </Link>
              <Link
                href="/my-rentals"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 text-gray-700 hover:text-black text-light text-sm uppercase transition-colors duration-200"
              >
                <Calendar className="w-4 h-4" />
                MY RENTALS
                {reservations.length > 0 && (
                  <span className="bg-black text-white text-xs px-2 py-1 min-w-[20px] h-5 flex items-center justify-center text-medium">
                    {reservations.length}
                  </span>
                )}
              </Link>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
} 