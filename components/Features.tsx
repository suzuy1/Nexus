
import React, { useRef } from 'react';
import AnimatedElement from './AnimatedElement';
import { ShieldCheckIcon, CpuChipIcon, ChartBarIcon, CloudArrowUpIcon } from '../constants';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <CpuChipIcon className="h-10 w-10 text-cyan-400 mb-4 transition-all duration-300 group-hover:[transform:translateZ(40px)] group-hover:drop-shadow-[0_0_8px_theme(colors.cyan.400)]" />,
    title: 'Integrasi Cerdas',
    description: 'Hubungkan semua perangkat dan layanan Anda dengan mudah dalam satu ekosistem yang kohesif dan cerdas.',
  },
  {
    icon: <ShieldCheckIcon className="h-10 w-10 text-cyan-400 mb-4 transition-all duration-300 group-hover:[transform:translateZ(40px)] group-hover:drop-shadow-[0_0_8px_theme(colors.cyan.400)]" />,
    title: 'Keamanan Tingkat Lanjut',
    description: 'Data Anda dilindungi dengan enkripsi end-to-end dan protokol keamanan terdepan di industri.',
  },
  {
    icon: <ChartBarIcon className="h-10 w-10 text-cyan-400 mb-4 transition-all duration-300 group-hover:[transform:translateZ(40px)] group-hover:drop-shadow-[0_0_8px_theme(colors.cyan.400)]" />,
    title: 'Analitik Real-time',
    description: 'Dapatkan wawasan berharga secara instan dari data Anda untuk membuat keputusan yang lebih baik.',
  },
  {
    icon: <CloudArrowUpIcon className="h-10 w-10 text-cyan-400 mb-4 transition-all duration-300 group-hover:[transform:translateZ(40px)] group-hover:drop-shadow-[0_0_8px_theme(colors.cyan.400)]" />,
    title: 'Skalabilitas Cloud',
    description: 'Platform kami tumbuh bersama Anda. Skalakan sumber daya tanpa batas sesuai kebutuhan Anda.',
  },
];

const FeatureCard: React.FC<Feature> = ({ icon, title, description }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;
    const rotateX = -y / (height / 2) * 10;
    const rotateY = x / (width / 2) * 10;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const onMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`;
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      data-cursor-grow 
      className="group bg-gray-800/50 p-8 rounded-xl border border-gray-700/50 transition-all duration-300 [transform-style:preserve-3d] shadow-lg hover:shadow-2xl hover:shadow-cyan-500/10"
    >
      <div className="transition-all duration-300 [transform-style:preserve-3d]">
        {icon}
        <h3 className="text-xl font-bold text-white mb-3 transition-transform duration-300 group-hover:[transform:translateZ(30px)]">{title}</h3>
        <p className="text-gray-400 transition-transform duration-300 group-hover:[transform:translateZ(20px)]">{description}</p>
      </div>
    </div>
  );
};


const Features: React.FC = () => {
  return (
    <section id="fitur" className="py-20 sm:py-32">
      <div className="container mx-auto px-6" style={{ perspective: '2000px' }}>
        <AnimatedElement className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Fitur Unggulan Nexus
          </h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Temukan kekuatan di balik platform kami yang dirancang untuk efisiensi dan inovasi.
          </p>
        </AnimatedElement>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <AnimatedElement key={index} delay={`delay-${index * 150}`}>
              <FeatureCard {...feature} />
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
