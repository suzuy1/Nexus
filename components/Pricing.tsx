
import React from 'react';
import AnimatedElement from './AnimatedElement';
import { ArrowRightIcon } from '../constants';

const pricingTiers = [
  {
    name: 'Starter',
    price: 'Gratis',
    period: '',
    description: 'Sempurna untuk individu dan proyek pribadi yang baru memulai.',
    features: ['Hingga 5 Perangkat Terhubung', 'Dasbor Dasar', 'Integrasi Komunitas', 'Dukungan Email'],
    buttonText: 'Mulai Gratis',
    isPopular: false,
  },
  {
    name: 'Pro',
    price: 'Rp 250k',
    period: '/bulan',
    description: 'Untuk para profesional dan tim kecil yang membutuhkan lebih banyak kekuatan.',
    features: [
      'Hingga 50 Perangkat Terhubung',
      'Dasbor Analitik Lanjutan',
      'Integrasi Premium',
      'Dukungan Prioritas',
      'Akses API',
    ],
    buttonText: 'Pilih Pro',
    isPopular: true,
  },
  {
    name: 'Enterprise',
    price: 'Kustom',
    period: '',
    description: 'Solusi yang disesuaikan untuk organisasi besar dengan kebutuhan spesifik.',
    features: [
      'Perangkat Tidak Terbatas',
      'Dasbor & Laporan Kustom',
      'Dukungan SLA & Manajer Akun',
      'Keamanan Tingkat Lanjut',
      'Onboarding Khusus',
    ],
    buttonText: 'Hubungi Kami',
    isPopular: false,
  },
];

const PricingCard: React.FC<(typeof pricingTiers)[0]> = ({ name, price, period, description, features, buttonText, isPopular }) => (
  <div
    data-cursor-grow
    className={`relative bg-gray-800/50 p-8 rounded-xl border-2 h-full flex flex-col transition-all duration-300 ${
      isPopular ? 'border-cyan-400 shadow-cyan-500/20 shadow-2xl' : 'border-gray-700/50 hover:border-cyan-400/50'
    } hover:-translate-y-2`}
  >
    {isPopular && (
      <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
        <span className="bg-cyan-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full uppercase">Paling Populer</span>
      </div>
    )}
    <div className="flex-grow">
      <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      <div className="mb-6">
        <span className="text-4xl font-extrabold text-white">{price}</span>
        {period && <span className="text-gray-400 font-medium">{period}</span>}
      </div>
      <ul className="space-y-3 text-gray-300">
        {features.map((feature) => (
          <li key={feature} className="flex items-start">
            <svg className="w-5 h-5 mr-3 text-cyan-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
    <a
      href="#cta"
      className={`w-full text-center mt-8 block font-bold py-3 px-6 rounded-lg transition-all duration-300 ${
        isPopular
          ? 'bg-cyan-500 hover:bg-cyan-400 text-gray-900 transform hover:scale-105'
          : 'bg-gray-700 hover:bg-gray-600 text-white'
      }`}
    >
      {buttonText}
    </a>
  </div>
);

const Pricing: React.FC = () => {
  return (
    <section id="harga" className="py-20 sm:py-32">
      <div className="container mx-auto px-6">
        <AnimatedElement className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Paket Harga yang Fleksibel
          </h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan skala dan kebutuhan Anda. Mulai gratis, tingkatkan kapan saja.
          </p>
        </AnimatedElement>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <AnimatedElement key={tier.name} delay={`delay-${index * 150}`}>
              <PricingCard {...tier} />
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
