
import React, { useState, useEffect } from 'react';
import AnimatedElement from './AnimatedElement';
import { ArrowRightIcon } from '../constants';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const parallax = (factor: number) => {
    if (typeof window !== 'undefined') {
      const x = (mousePosition.x - window.innerWidth / 2) / factor;
      const y = (mousePosition.y - window.innerHeight / 2) / factor;
      return { transform: `translate3d(${x}px, ${y}px, 0)` };
    }
    return {};
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center pt-24 pb-12 overflow-hidden">
      {/* Decorative parallax shapes */}
      <div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl"
        style={parallax(20)}
      ></div>
      <div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"
        style={parallax(30)}
      ></div>

      <div className="container mx-auto px-6 z-10">
        <AnimatedElement>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4 [text-shadow:0_3px_6px_rgba(0,0,0,0.5)]">
            <span className="block" style={parallax(50)}>Membentuk Masa Depan</span>
            <span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
              style={parallax(40)}
            >
              Konektivitas
            </span>
          </h1>
        </AnimatedElement>
        <AnimatedElement delay="delay-200">
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8" style={parallax(60)}>
            Nexus adalah platform terintegrasi yang merevolusi cara Anda berinteraksi dengan teknologi, menciptakan solusi yang mulus dan intuitif untuk esok yang lebih cerdas.
          </p>
        </AnimatedElement>
        <AnimatedElement delay="delay-400">
          <div className="flex justify-center items-center space-x-4" style={parallax(80)}>
            <a
              href="#fitur"
              data-cursor-grow
              className="bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/20 flex items-center space-x-2"
            >
              <span>Jelajahi Fitur</span>
              <ArrowRightIcon className="h-5 w-5" />
            </a>
            <a
              href="#cara-kerja"
              data-cursor-grow
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
            >
              Lihat Cara Kerja
            </a>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Hero;
