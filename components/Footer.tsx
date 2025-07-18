
import React from 'react';
import { LogoIcon, TwitterIcon, LinkedInIcon, GithubIcon } from '../constants';

const Footer: React.FC = () => {
  const navLinks = [
    { name: 'Fitur', href: '#fitur' },
    { name: 'Teknologi', href: '#teknologi' },
    { name: 'Demo', href: '#demo' },
    { name: 'Harga', href: '#harga' },
    { name: 'Peta Jalan', href: '#peta-jalan' },
    { name: 'Blog', href: '#blog' },
  ];

  const socialLinks = [
    { icon: <TwitterIcon className="h-6 w-6" />, href: '#' },
    { icon: <LinkedInIcon className="h-6 w-6" />, href: '#' },
    { icon: <GithubIcon className="h-6 w-6" />, href: '#' },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <a href="#" data-cursor-grow className="flex items-center space-x-2 text-2xl font-bold text-white mb-4">
              <LogoIcon className="h-8 w-8 text-cyan-400" />
              <span>Nexus</span>
            </a>
            <p className="text-gray-400 max-w-xs">
              Menciptakan masa depan konektivitas yang intuitif dan mulus untuk semua.
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-white mb-4">Produk</h4>
              <ul className="space-y-2">
                {navLinks.map(link => (
                   <li key={link.name}><a href={link.href} data-cursor-grow className="text-gray-400 hover:text-cyan-400 transition-colors">{link.name}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Perusahaan</h4>
              <ul className="space-y-2">
                <li><a href="#" data-cursor-grow className="text-gray-400 hover:text-cyan-400 transition-colors">Tentang Kami</a></li>
                <li><a href="#" data-cursor-grow className="text-gray-400 hover:text-cyan-400 transition-colors">Karir</a></li>
                <li><a href="#" data-cursor-grow className="text-gray-400 hover:text-cyan-400 transition-colors">Pers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" data-cursor-grow className="text-gray-400 hover:text-cyan-400 transition-colors">Privasi</a></li>
                <li><a href="#" data-cursor-grow className="text-gray-400 hover:text-cyan-400 transition-colors">Ketentuan</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} Nexus. Dibuat dengan ❤️ oleh oriza.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} data-cursor-grow className="text-gray-500 hover:text-cyan-400 transition-all duration-300 hover:scale-110">
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;