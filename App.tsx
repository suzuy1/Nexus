
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import CoreTechnology from './components/CoreTechnology';
import UseCases from './components/UseCases';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Integrations from './components/Integrations';
import Pricing from './components/Pricing';
import Roadmap from './components/Roadmap';
import FAQ from './components/FAQ';
import BlogSection from './components/BlogSection';
import InteractiveDemo from './components/InteractiveDemo';
import CTA from './components/CTA';
import Footer from './components/Footer';
import NexusBackground from './components/NexusBackground';
import CustomCursor from './components/CustomCursor';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-gray-200 overflow-x-hidden">
      <CustomCursor />
      <NexusBackground />
      
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Features />
          <CoreTechnology />
          <UseCases />
          <HowItWorks />
          <Testimonials />
          <Integrations />
          <Pricing />
          <Roadmap />
          <FAQ />
          <BlogSection />
          <InteractiveDemo />
          <CTA />
        </main>
        <Footer />
      </div>
       <style>{`
        @keyframes pulse-glow {
          0%, 100% {
            text-shadow: 0 0 10px rgba(0, 255, 255, 0.4), 0 0 20px rgba(0, 255, 255, 0.2);
          }
          50% {
            text-shadow: 0 0 20px rgba(0, 255, 255, 0.6), 0 0 40px rgba(0, 255, 255, 0.4);
          }
        }
        .animate-pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }

        @keyframes gradient-bg {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-bg {
          background-size: 200% 200%;
          animation: gradient-bg 10s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default App;