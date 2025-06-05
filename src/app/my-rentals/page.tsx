'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useCarStore } from '@/stores/carStore';
import { getCarById } from '@/data/cars';
import { Calendar, Clock, CreditCard, MapPin, ArrowLeft, Car } from 'lucide-react';

export default function MyRentalsPage() {
  const { reservations, removeReservation } = useCarStore();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'Confirmado';
      case 'pending':
        return 'Pendente';
      case 'cancelled':
        return 'Cancelado';
      default:
        return status;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar para Home
        </Link>
        
        <div className="flex items-center gap-3 mb-2">
          <Calendar className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">Meus Aluguéis</h1>
        </div>
        <p className="text-gray-600">
          Gerencie suas reservas e acompanhe o histórico de aluguéis
        </p>
      </motion.div>

      {/* Reservations List */}
      {reservations.length > 0 ? (
        <div className="space-y-6">
          {reservations.map((reservation, index) => {
            const car = getCarById(reservation.carId);
            
            if (!car) return null;

            return (
              <motion.div
                key={reservation.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Car Image */}
                                         <div className="lg:w-48 h-32 lg:h-36 relative rounded-lg overflow-hidden flex-shrink-0">
                       <Image
                         src={car.image}
                         alt={car.name}
                         fill
                         className="object-cover"
                         sizes="(max-width: 1024px) 100vw, 192px"
                       />
                     </div>

                    {/* Reservation Details */}
                    <div className="flex-1 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">
                            {car.name}
                          </h3>
                          <p className="text-gray-600">{car.brand} {car.model} {car.year}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(reservation.status)}`}>
                            {getStatusLabel(reservation.status)}
                          </span>
                        </div>
                      </div>

                      {/* Rental Info */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gray-500" />
                          <div>
                            <p className="text-xs text-gray-500">Retirada</p>
                            <p className="font-medium">{formatDate(reservation.startDate)}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gray-500" />
                          <div>
                            <p className="text-xs text-gray-500">Devolução</p>
                            <p className="font-medium">{formatDate(reservation.endDate)}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <div>
                            <p className="text-xs text-gray-500">Duração</p>
                            <p className="font-medium">
                              {reservation.totalDays} {reservation.totalDays === 1 ? 'dia' : 'dias'}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <CreditCard className="w-4 h-4 text-gray-500" />
                          <div>
                            <p className="text-xs text-gray-500">Total</p>
                            <p className="font-bold text-blue-600">
                              {formatPrice(reservation.totalPrice)}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100">
                        <Link
                          href={`/car/${car.id}`}
                          className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <Car className="w-4 h-4" />
                          Ver Detalhes do Carro
                        </Link>
                        
                        {reservation.status === 'confirmed' && (
                          <div className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-lg">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">
                              Instruções de retirada enviadas por email
                            </span>
                          </div>
                        )}
                        
                        {reservation.status === 'pending' && (
                          <button
                            onClick={() => removeReservation(reservation.id)}
                            className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            Cancelar Reserva
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      ) : (
        // Empty State
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center py-16"
        >
          <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
            <Calendar className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Nenhum aluguel encontrado
          </h3>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Você ainda não fez nenhuma reserva. Explore nossa frota e encontre o carro perfeito para sua próxima viagem.
          </p>
          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
          >
            <Car className="w-5 h-5" />
            Explorar Carros
          </Link>
        </motion.div>
      )}

      {/* Summary */}
      {reservations.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 bg-blue-50 rounded-xl p-6"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Resumo</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {reservations.length}
              </div>
              <div className="text-sm text-gray-600">
                {reservations.length === 1 ? 'Reserva Total' : 'Reservas Totais'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {reservations.filter(r => r.status === 'confirmed').length}
              </div>
              <div className="text-sm text-gray-600">Confirmadas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {formatPrice(reservations.reduce((total, r) => total + r.totalPrice, 0))}
              </div>
              <div className="text-sm text-gray-600">Valor Total</div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
} 