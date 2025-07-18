
import React from 'react';
import AnimatedElement from './AnimatedElement';
import { SparklesIcon, LightBulbIcon, CogIcon } from '../constants';

interface RoadmapItem {
  status: 'Diluncurkan' | 'Sedang Dikerjakan' | 'Direncanakan';
  title: string;
  description: string;
  quarter: string;
}

const roadmapData: RoadmapItem[] = [
  {
    status: 'Diluncurkan',
    title: 'Nexus Core V1',
    description: 'Peluncuran platform inti dengan fitur integrasi dasar dan keamanan.',
    quarter: 'Q2 2024',
  },
  {
    status: 'Sedang Dikerjakan',
    title: 'Integrasi AI Lanjutan',
    description: 'Mengimplementasikan model machine learning untuk otomatisasi dan wawasan prediktif yang lebih canggih.',
    quarter: 'Q3 2024',
  },
  {
    status: 'Direncanakan',
    title: 'Nexus Marketplace',
    description: 'Platform bagi pengembang pihak ketiga untuk membuat dan membagikan integrasi mereka sendiri.',
    quarter: 'Q4 2024',
  },
  {
    status: 'Direncanakan',
    title: 'Dukungan Edge Computing',
    description: 'Memungkinkan pemrosesan data secara lokal pada perangkat untuk latensi lebih rendah dan privasi yang ditingkatkan.',
    quarter: 'Q1 2025',
  },
];

const statusStyles = {
  'Diluncurkan': {
    icon: <SparklesIcon className="h-6 w-6" />,
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-400/50',
  },
  'Sedang Dikerjakan': {
    icon: <CogIcon className="h-6 w-6" />,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-400/50',
  },
  'Direncanakan': {
    icon: <LightBulbIcon className="h-6 w-6" />,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-400/50',
  },
};

const RoadmapCard: React.FC<{ item: RoadmapItem; index: number }> = ({ item, index }) => {
  const { icon, color, bgColor, borderColor } = statusStyles[item.status];

  return (
    <div className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}>
      <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-cyan-400/30 bg-gray-800 text-cyan-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
        <div className={`w-3 h-3 ${color.replace('text', 'bg')} rounded-full`}></div>
      </div>

      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
        <div data-cursor-grow className={`p-6 rounded-xl border ${borderColor} ${bgColor} backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10`}>
          <div className="flex items-center justify-between mb-3">
            <span className={`inline-flex items-center gap-2 text-sm font-semibold ${color}`}>
              {icon}
              {item.status}
            </span>
            <span className="text-sm font-medium text-gray-400">{item.quarter}</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
          <p className="text-gray-400">{item.description}</p>
        </div>
      </div>
    </div>
  );
};


const Roadmap: React.FC = () => {
  return (
    <section id="peta-jalan" className="py-20 sm:py-32">
      <div className="container mx-auto px-6">
        <AnimatedElement className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Peta Jalan Inovasi Kami
          </h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Lihat apa yang sedang kami kerjakan dan apa yang akan datang untuk membentuk masa depan konektivitas.
          </p>
        </AnimatedElement>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-5 top-0 h-full w-0.5 bg-gray-700/50 md:left-1/2 md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {roadmapData.map((item, index) => (
              <AnimatedElement key={index} delay={`delay-${index * 150}`}>
                <RoadmapCard item={item} index={index} />
              </AnimatedElement>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
