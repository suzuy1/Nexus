
import React, { useRef, useEffect, useState } from 'react';
import AnimatedElement from './AnimatedElement';

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Hubungkan',
    description: 'Mulai dengan menghubungkan akun dan perangkat Anda. Proses onboarding kami yang intuitif membuat penyiapan menjadi cepat dan mudah.',
  },
  {
    number: '02',
    title: 'Konfigurasi',
    description: 'Sesuaikan dasbor, alur kerja, dan notifikasi Anda. Atur Nexus agar bekerja sesuai dengan cara kerja Anda.',
  },
  {
    number: '03',
    title: 'Optimalisasi',
    description: 'Biarkan AI kami menganalisis dan mengoptimalkan ekosistem digital Anda, memberikan rekomendasi untuk efisiensi maksimal.',
  },
];

const HowItWorks: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const line = lineRef.current;
      if (!section || !line) return;

      const { top, height } = section.getBoundingClientRect();
      const scrollY = window.scrollY;
      const sectionTop = top + scrollY - window.innerHeight;
      const sectionHeight = height;

      let progress = (scrollY - sectionTop - window.innerHeight * 0.3) / (sectionHeight * 0.7);
      progress = Math.max(0, Math.min(1, progress));

      line.style.height = `${progress * 100}%`;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="cara-kerja" className="py-20 sm:py-32 bg-gray-900/70" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <AnimatedElement className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Bagaimana Nexus Bekerja?
          </h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Kami menyederhanakan kompleksitas. Hanya dalam tiga langkah mudah, Anda siap untuk berinovasi.
          </p>
        </AnimatedElement>
        
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-4 top-0 w-1 h-full bg-gray-700/50 rounded-full md:left-1/2 md:-translate-x-1/2">
            <div ref={lineRef} className="w-full bg-cyan-400 rounded-full" style={{ height: '0%' }}></div>
          </div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <AnimatedElement key={index} delay={`delay-${index * 150}`}>
                <div className="relative flex items-start md:items-center">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gray-800 border-2 border-cyan-400 flex items-center justify-center z-10 md:absolute md:left-1/2 md:-translate-x-1/2 ${index % 2 === 0 ? 'md:translate-y-0' : 'md:translate-y-0'}`}>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  </div>

                  <div className={`w-full pl-10 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                      <div data-cursor-grow className="bg-gray-800/30 p-6 rounded-xl backdrop-blur-sm transition-all duration-300 hover:bg-gray-800/50 border border-transparent hover:border-cyan-400/30">
                        <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-2 animate-pulse-glow">{step.number}</p>
                        <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                        <p className="text-gray-400">{step.description}</p>
                      </div>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
