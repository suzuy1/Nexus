
import React from 'react';
import AnimatedElement from './AnimatedElement';
import { BrainIcon, QuantumLockIcon, HyperScaleIcon } from '../constants';

const techPillars = [
  {
    icon: <BrainIcon className="h-10 w-10 mb-4 text-cyan-400 group-hover:text-cyan-300 transition-colors group-hover:drop-shadow-[0_0_8px_theme(colors.cyan.400)]" />,
    title: 'AI Prediktif',
    description: 'Mesin AI kami belajar dari pola data untuk mengotomatiskan tugas dan memberikan wawasan proaktif.',
  },
  {
    icon: <QuantumLockIcon className="h-10 w-10 mb-4 text-purple-400 group-hover:text-purple-300 transition-colors group-hover:drop-shadow-[0_0_8px_theme(colors.purple.400)]" />,
    title: 'Keamanan Kuantum',
    description: 'Dilindungi oleh enkripsi post-quantum, menjaga data Anda aman dari ancaman masa depan.',
  },
  {
    icon: <HyperScaleIcon className="h-10 w-10 mb-4 text-pink-400 group-hover:text-pink-300 transition-colors group-hover:drop-shadow-[0_0_8px_theme(colors.pink.400)]" />,
    title: 'Arsitektur Hyper-Scale',
    description: 'Infrastruktur terdistribusi global yang menjamin latensi rendah dan ketersediaan 99,99%.',
  },
];

const CoreTechnology: React.FC = () => {
  return (
    <section id="teknologi" className="py-20 sm:py-32">
      <div className="container mx-auto px-6">
        <AnimatedElement className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Teknologi Inti Penggerak Nexus
          </h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Di balik antarmuka yang sederhana, terdapat fondasi teknologi canggih yang kami bangun untuk masa depan.
          </p>
        </AnimatedElement>

        <div className="max-w-5xl mx-auto">
            <AnimatedElement className="mb-20 text-center">
                 <div className="relative inline-block group">
                    <div className="absolute -inset-2.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <div data-cursor-grow className="relative p-8 bg-gray-800 rounded-full shadow-lg flex flex-col items-center w-64 h-64 justify-center">
                        <div className="text-center">
                             <h3 className="text-3xl font-bold text-white">Nexus Core</h3>
                             <p className="text-gray-400">Pusat Orkestrasi Data</p>
                        </div>
                    </div>
                </div>
            </AnimatedElement>
            
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-8">
                <div className="hidden md:block absolute h-px w-2/3 top-[-5rem] left-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
                <div className="hidden md:block absolute h-1/2 w-px top-[-5rem] left-1/2 -translate-x-1/2 bg-gradient-to-b from-gray-700 to-transparent"></div>

                {techPillars.map((pillar, index) => (
                    <AnimatedElement key={index} delay={`delay-${index*150}`}>
                        <div data-cursor-grow className="group relative bg-gray-900/50 p-8 rounded-xl border border-gray-800 h-full backdrop-blur-sm hover:bg-gray-800/50 transition-colors">
                             <div className="absolute -top-px -left-px -right-px -bottom-px rounded-xl bg-gradient-to-br from-cyan-500/0 via-purple-500/20 to-pink-500/0 group-hover:from-cyan-500/30 group-hover:via-purple-500/30 group-hover:to-pink-500/30 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                            <div className="relative flex flex-col items-center">
                                {pillar.icon}
                                <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
                                <p className="text-gray-400">{pillar.description}</p>
                            </div>
                        </div>
                    </AnimatedElement>
                ))}
            </div>
        </div>
      </div>
       <style>{`
        @keyframes tilt {
          0%, 50%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(0.5deg);
          }
          75% {
            transform: rotate(-0.5deg);
          }
        }
        .animate-tilt {
          animation: tilt 10s infinite linear;
        }
      `}</style>
    </section>
  );
};

export default CoreTechnology;
