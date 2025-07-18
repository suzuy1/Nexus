
import React from 'react';
import AnimatedElement from './AnimatedElement';
import { LogoCloudflare, LogoFigma, LogoFramer, LogoGitHub, LogoNotion, LogoSlack, LogoStripe, LogoVercel } from '../constants';

const topLogos = [
  <LogoGitHub />, <LogoFigma />, <LogoStripe />, <LogoVercel />,
];
const bottomLogos = [
  <LogoCloudflare />, <LogoNotion />, <LogoSlack />, <LogoFramer />,
];

const Integrations: React.FC = () => {
  return (
    <section className="py-20 sm:py-32 bg-gray-900/70">
      <div className="container mx-auto px-6">
        <AnimatedElement className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Mitra & Integrasi Terpercaya
          </h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Nexus bekerja mulus dengan alat yang sudah Anda kenal dan cintai.
          </p>
        </AnimatedElement>

        <AnimatedElement>
          <div className="relative overflow-hidden group [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
            <div className="marquee space-y-4">
                <div className="marquee-group">
                  {[...topLogos, ...topLogos, ...topLogos].map((logo, index) => (
                      <div key={`top-${index}`} data-cursor-grow className="logo-item">{logo}</div>
                  ))}
                </div>
                <div className="marquee-group-reverse">
                  {[...bottomLogos, ...bottomLogos, ...bottomLogos].map((logo, index) => (
                      <div key={`bottom-${index}`} data-cursor-grow className="logo-item">{logo}</div>
                  ))}
                </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
      <style>{`
        .marquee {
            width: 100%;
        }
        .marquee-group, .marquee-group-reverse {
            display: flex;
            align-items: center;
            justify-content: space-around;
            white-space: nowrap;
            animation: scroll 40s linear infinite;
        }
        .marquee-group-reverse {
            animation: scroll-reverse 40s linear infinite;
            animation-delay: -20s;
        }
        .group:hover .marquee-group, .group:hover .marquee-group-reverse {
            animation-play-state: paused;
        }
        
        .logo-item {
            flex-shrink: 0;
            padding: 0 2rem;
            filter: grayscale(100%) opacity(60%);
            transition: all 0.3s ease;
        }
        .logo-item:hover {
            filter: grayscale(0%) opacity(100%);
            transform: scale(1.1);
        }
        .logo-item svg {
            height: 40px;
            width: auto;
            color: #ccc;
            transition: color 0.3s ease;
        }
         .logo-item:hover svg {
            color: #fff;
         }

        @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-33.333%); }
        }
        
        @keyframes scroll-reverse {
            from { transform: translateX(-33.333%); }
            to { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default Integrations;
