'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { getCarById } from '@/data/cars';
import ReservationModal from '@/components/ReservationModal';
import { 
  ArrowLeft, 
  Star, 
  Users, 
  Fuel, 
  Settings, 
  Calendar,
  Shield,
  CheckCircle,
  MapPin
} from 'lucide-react';

export default function CarDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const car = getCarById(params.id as string);

  if (!car) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Carro não encontrado
          </h1>
          <p className="text-gray-600 mb-6">
            O veículo que você está procurando não existe ou foi removido.
          </p>
          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Voltar para Home
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const getCategoryLabel = (category: string) => {
    const labels = {
      economy: 'Econômico',
      compact: 'Compacto',
      luxury: 'Luxo',
      suv: 'SUV',
      sport: 'Esportivo',
    };
    return labels[category as keyof typeof labels] || category;
  };

  const getFuelLabel = (fuel: string) => {
    const labels = {
      gasoline: 'Gasolina',
      diesel: 'Diesel',
      electric: 'Elétrico',
      hybrid: 'Híbrido',
    };
    return labels[fuel as keyof typeof labels] || fuel;
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Car Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden">
              <Image
                src={car.image}
                alt={car.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                {getCategoryLabel(car.category)}
              </div>
            </div>
          </motion.div>

          {/* Car Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Header */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {car.name}
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{car.rating}</span>
                  <span className="text-gray-500">({car.totalRentals} aluguéis)</span>
                </div>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                {car.description}
              </p>
            </div>

            {/* Specifications */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Users className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="text-sm text-gray-500">Passageiros</p>
                  <p className="font-semibold">{car.seats} pessoas</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Fuel className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="text-sm text-gray-500">Combustível</p>
                  <p className="font-semibold">{getFuelLabel(car.fuelType)}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Settings className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="text-sm text-gray-500">Transmissão</p>
                  <p className="font-semibold">
                    {car.transmission === 'automatic' ? 'Automático' : 'Manual'}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Calendar className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="text-sm text-gray-500">Ano</p>
                  <p className="font-semibold">{car.year}</p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Características
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {car.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Safety & Trust */}
            <div className="bg-blue-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Segurança Garantida
                </h3>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Veículo verificado e inspecionado</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Seguro contra terceiros incluído</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Suporte 24/7 durante o aluguel</span>
                </div>
              </div>
            </div>

            {/* Pricing & CTA */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-3xl font-bold text-gray-900">
                    {formatPrice(car.pricePerDay)}
                  </div>
                  <div className="text-gray-500">por dia</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">A partir de</div>
                  <div className="text-lg font-semibold text-gray-900">
                    {formatPrice(car.pricePerDay * 3)}
                  </div>
                  <div className="text-sm text-gray-500">3 dias</div>
                </div>
              </div>
              
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Reservar Agora
              </button>
              
              <p className="text-xs text-gray-500 text-center mt-3">
                Cancelamento gratuito até 24h antes da retirada
              </p>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-gray-50 rounded-xl p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-6 h-6 text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-900">
              Localização e Retirada
            </h3>
          </div>
          <p className="text-gray-600">
            Este veículo está disponível para retirada em pontos estratégicos da cidade. 
            Após a confirmação da reserva, você receberá as instruções detalhadas sobre 
            local e horário de retirada.
          </p>
        </motion.div>
      </div>

      {/* Reservation Modal */}
      <ReservationModal
        car={car}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
} 