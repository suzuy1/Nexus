
import React from 'react';
import AnimatedElement from './AnimatedElement';

const CTA: React.FC = () => {
  return (
    <section id="cta" className="py-20 sm:py-32">
      <div className="container mx-auto px-6">
        <AnimatedElement>
          <div className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 p-1 rounded-2xl animate-gradient-bg">
            <div className="bg-gray-800 rounded-xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Siap Mengubah Dunia Digital Anda?
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
                Bergabunglah dengan ribuan inovator yang sudah menggunakan Nexus. Mulai uji coba gratis Anda hari ini, tanpa perlu kartu kredit.
              </p>
              <a
                href="#"
                data-cursor-grow
                className="shine-button relative inline-block bg-white hover:bg-gray-200 text-gray-900 font-bold py-4 px-10 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30 overflow-hidden"
              >
                Daftar Gratis
              </a>
            </div>
          </div>
        </AnimatedElement>
      </div>
      <style>{`
        .shine-button::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -200%;
          width: 50%;
          height: 200%;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.3) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: skewX(-25deg);
          transition: left 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .shine-button:hover::after {
          left: 200%;
        }
      `}</style>
    </section>
  );
};

export default CTA;
