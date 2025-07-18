
import React, { useState, useEffect } from 'react';
import { LogoIcon, Bars3Icon, XMarkIcon } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Fitur', href: '#fitur' },
    { name: 'Teknologi', href: '#teknologi' },
    { name: 'Demo', href: '#demo' },
    { name: 'Harga', href: '#harga' },
    { name: 'Blog', href: '#blog' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMenuOpen ? 'bg-gray-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#" data-cursor-grow className="group flex items-center space-x-2 text-2xl font-bold text-white">
              <LogoIcon className="h-8 w-8 text-cyan-400 transition-all duration-300 group-hover:rotate-[360deg] group-hover:drop-shadow-[0_0_8px_theme(colors.cyan.400)]" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-300">Nexus</span>
            </a>
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  data-cursor-grow
                  className="relative text-gray-300 hover:text-cyan-400 transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <a
              href="#cta"
              data-cursor-grow
              className="hidden lg:inline-block bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold py-2 px-5 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Mulai Sekarang
            </a>
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(true)} data-cursor-grow aria-label="Buka menu">
                <Bars3Icon className="h-8 w-8 text-white" />
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile Sidebar */}
      <div 
        className={`fixed inset-0 z-[100] transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-modal="true"
        role="dialog"
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setIsMenuOpen(false)}
        ></div>
        
        {/* Sidebar Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-4/5 max-w-sm bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center p-6 border-b border-gray-800">
            <span className="text-xl font-bold text-white">Menu</span>
            <button onClick={() => setIsMenuOpen(false)} data-cursor-grow aria-label="Tutup menu">
              <XMarkIcon className="h-8 w-8 text-white" />
            </button>
          </div>
          <nav className="flex flex-col p-6 space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                data-cursor-grow
                className="text-lg text-gray-300 hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
             <a
                href="#peta-jalan"
                onClick={() => setIsMenuOpen(false)}
                data-cursor-grow
                className="text-lg text-gray-300 hover:text-cyan-400 transition-colors"
              >
                Peta Jalan
              </a>
          </nav>
          <div className="p-6 absolute bottom-0 w-full">
            <a
              href="#cta"
              onClick={() => setIsMenuOpen(false)}
              data-cursor-grow
              className="w-full text-center block bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold py-3 px-5 rounded-lg transition-all duration-300"
            >
              Mulai Sekarang
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;