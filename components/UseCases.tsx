
import React, { useState } from 'react';
import AnimatedElement from './AnimatedElement';
import { CodeBracketIcon, BuildingOffice2Icon, HomeModernIcon, ArrowRightIcon } from '../constants';

const useCasesData = [
  {
    id: 'developers',
    name: 'Untuk Pengembang',
    icon: <CodeBracketIcon className="h-8 w-8 mr-3 text-cyan-400" />,
    title: 'Bangun Lebih Cepat, Terapkan Lebih Mudah',
    description: 'Akses API dan SDK kami yang kuat untuk mengintegrasikan fungsionalitas Nexus ke dalam aplikasi Anda. Otomatiskan alur kerja dan fokus pada apa yang benar-benar penting: membuat produk yang luar biasa.',
    features: ['API RESTful yang Komprehensif', 'SDK untuk Berbagai Bahasa', 'Lingkungan Sandbox', 'Dokumentasi Interaktif'],
  },
  {
    id: 'businesses',
    name: 'Untuk Bisnis',
    icon: <BuildingOffice2Icon className="h-8 w-8 mr-3 text-purple-400" />,
    title: 'Skalakan Operasi, Tingkatkan Efisiensi',
    description: 'Sentralisasikan data Anda, otomatiskan proses bisnis, dan dapatkan wawasan analitik yang mendalam. Nexus memberikan alat yang Anda butuhkan untuk tetap kompetitif di pasar yang berubah cepat.',
    features: ['Dasbor Analitik Terpusat', 'Otomatisasi Alur Kerja', 'Manajemen Tim & Izin', 'Laporan Kustom'],
  },
  {
    id: 'smarthome',
    name: 'Untuk Rumah Pintar',
    icon: <HomeModernIcon className="h-8 w-8 mr-3 text-pink-400" />,
    title: 'Rumah Anda, Aturan Anda',
    description: 'Hubungkan semua perangkat pintar Anda, dari lampu hingga termostat, dalam satu aplikasi yang intuitif. Buat skenario kustom yang membuat hidup Anda lebih mudah, aman, dan efisien.',
    features: ['Kontrol Perangkat Terpadu', 'Otomatisasi Berbasis Jadwal & Sensor', 'Mode Keamanan & Pemantauan', 'Integrasi Asisten Suara'],
  },
];

const UseCases: React.FC = () => {
  const [activeTab, setActiveTab] = useState(useCasesData[0].id);

  const activeUseCase = useCasesData.find((uc) => uc.id === activeTab);

  return (
    <section id="kasus-penggunaan" className="py-20 sm:py-32 bg-gray-900/70">
      <div className="container mx-auto px-6">
        <AnimatedElement className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Dirancang untuk Setiap Kebutuhan
          </h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Baik Anda seorang developer, pemilik bisnis, atau penggemar teknologi, Nexus beradaptasi dengan dunia Anda.
          </p>
        </AnimatedElement>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          {/* Tabs */}
          <AnimatedElement className="w-full md:w-1/3" delay="delay-150">
            <div className="flex md:flex-col gap-2">
              {useCasesData.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  data-cursor-grow
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center ${
                    activeTab === tab.id
                      ? 'bg-gray-700/80 text-white shadow-lg'
                      : 'bg-gray-800/50 hover:bg-gray-800/90 text-gray-400'
                  }`}
                >
                  {tab.icon}
                  <span className="font-semibold">{tab.name}</span>
                </button>
              ))}
            </div>
          </AnimatedElement>

          {/* Content */}
          <AnimatedElement className="w-full md:w-2/3" delay="delay-300">
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50 min-h-[350px]">
              {activeUseCase && (
                 <div key={activeUseCase.id} className="animate-fade-in">
                    <h3 className="text-2xl font-bold text-white mb-3">{activeUseCase.title}</h3>
                    <p className="text-gray-300 mb-6">{activeUseCase.description}</p>
                    <ul className="space-y-3">
                        {activeUseCase.features.map(feature => (
                           <li key={feature} className="flex items-center text-gray-300">
                                <ArrowRightIcon className="h-5 w-5 mr-3 text-cyan-400 flex-shrink-0" />
                                <span>{feature}</span>
                           </li>
                        ))}
                    </ul>
                 </div>
              )}
            </div>
          </AnimatedElement>
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
            animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default UseCases;
