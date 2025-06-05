'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Car } from '@/types/car';
import { useCarStore } from '@/stores/carStore';
import { X, Calendar, Clock, CreditCard, CheckCircle } from 'lucide-react';

interface ReservationModalProps {
  car: Car;
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservationModal({ car, isOpen, onClose }: ReservationModalProps) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const { addReservation } = useCarStore();

  const calculateDays = () => {
    if (!startDate || !endDate) return 0;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const totalDays = calculateDays();
  const totalPrice = totalDays * car.pricePerDay;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  const handleConfirmReservation = () => {
    if (!startDate || !endDate || totalDays <= 0) return;

    addReservation({
      carId: car.id,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      totalDays,
      totalPrice,
      status: 'confirmed',
    });

    setIsConfirmed(true);
    
    // Fechar modal após 2 segundos
    setTimeout(() => {
      setIsConfirmed(false);
      onClose();
      // Reset form
      setStartDate('');
      setEndDate('');
    }, 2000);
  };

  const isFormValid = startDate && endDate && totalDays > 0;

  const today = new Date().toISOString().split('T')[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            >
              {isConfirmed ? (
                // Confirmação de Sucesso
                <div className="p-8 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Reserva Confirmada!
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Sua reserva do {car.name} foi confirmada para o período de{' '}
                    {formatDate(startDate)} até {formatDate(endDate)}.
                  </p>
                  <p className="text-sm text-gray-500">
                    Você receberá mais detalhes por email em breve.
                  </p>
                </div>
              ) : (
                // Formulário de Reserva
                <>
                  {/* Header */}
                  <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <h2 className="text-xl font-bold text-gray-900">
                      Reservar Veículo
                    </h2>
                    <button
                      onClick={onClose}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Car Info */}
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center gap-4">
                                             <Image
                         src={car.image}
                         alt={car.name}
                         width={64}
                         height={48}
                         className="object-cover rounded-lg"
                       />
                      <div>
                        <h3 className="font-semibold text-gray-900">{car.name}</h3>
                        <p className="text-sm text-gray-600">
                          {formatPrice(car.pricePerDay)} por dia
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Date Selection */}
                  <div className="p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Calendar className="w-4 h-4 inline mr-1" />
                          Data de Retirada
                        </label>
                        <input
                          type="date"
                          value={startDate}
                          min={today}
                          onChange={(e) => setStartDate(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Calendar className="w-4 h-4 inline mr-1" />
                          Data de Devolução
                        </label>
                        <input
                          type="date"
                          value={endDate}
                          min={startDate || today}
                          onChange={(e) => setEndDate(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        />
                      </div>
                    </div>

                    {/* Price Summary */}
                    {totalDays > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-gray-50 rounded-lg p-4 space-y-2"
                      >
                        <div className="flex justify-between text-sm">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            Período: {totalDays} {totalDays === 1 ? 'dia' : 'dias'}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Diária: {formatPrice(car.pricePerDay)}</span>
                        </div>
                        <div className="border-t border-gray-200 pt-2">
                          <div className="flex justify-between font-semibold">
                            <span>Total:</span>
                            <span className="text-blue-600">
                              {formatPrice(totalPrice)}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="p-6 border-t border-gray-200">
                    <div className="flex gap-3">
                      <button
                        onClick={onClose}
                        className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        Cancelar
                      </button>
                      <button
                        onClick={handleConfirmReservation}
                        disabled={!isFormValid}
                        className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${
                          isFormValid
                            ? 'bg-blue-600 hover:bg-blue-700 text-white'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        <CreditCard className="w-4 h-4" />
                        Confirmar Reserva
                      </button>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 