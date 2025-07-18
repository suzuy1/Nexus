
import React from 'react';
import AnimatedElement from './AnimatedElement';
import { ArrowLongRightIcon } from '../constants';

const blogPosts = [
  {
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop',
    category: 'INOVASI',
    categoryColor: 'bg-cyan-500/10 text-cyan-400',
    title: 'Nexus dan Masa Depan Komputasi Ambient',
    excerpt: 'Jelajahi bagaimana arsitektur Nexus membuka jalan bagi era baru di mana teknologi secara mulus terintegrasi ke dalam lingkungan kita.',
  },
  {
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1974&auto=format&fit=crop',
    category: 'KEAMANAN',
    categoryColor: 'bg-purple-500/10 text-purple-400',
    title: 'Mengapa Enkripsi Post-Quantum Penting Hari Ini',
    excerpt: 'Ancaman komputasi kuantum terhadap data kita adalah nyata. Pelajari bagaimana Nexus melindungi Anda.',
  },
  {
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
    category: 'PRODUKTIVITAS',
    categoryColor: 'bg-pink-500/10 text-pink-400',
    title: '5 Alur Kerja Otomatis untuk Menghemat Waktu Anda',
    excerpt: 'Temukan cara menggunakan Nexus untuk mengotomatiskan tugas-tugas harian dan membebaskan waktu untuk hal yang lebih penting.',
  },
];

const BlogCard: React.FC<(typeof blogPosts)[0] & { isFeatured?: boolean }> = ({ image, category, categoryColor, title, excerpt, isFeatured = false }) => (
  <div data-cursor-grow className="group relative bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10">
    <div className="overflow-hidden">
      <img src={image} alt={title} className={`w-full ${isFeatured ? 'h-64' : 'h-48'} object-cover transition-transform duration-300 group-hover:scale-105`} />
    </div>
    <div className="p-6">
      <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full mb-3 ${categoryColor}`}>{category}</span>
      <h3 className={`font-bold text-white ${isFeatured ? 'text-2xl' : 'text-xl'} mb-3`}>
        <a href="#" className="hover:text-cyan-400 transition-colors duration-200">{title}</a>
      </h3>
      <p className="text-gray-400 mb-4">{excerpt}</p>
      <a href="#" className="inline-flex items-center font-semibold text-cyan-400 hover:text-cyan-300 group/link">
        Baca Selengkapnya
        <ArrowLongRightIcon className="w-5 h-5 ml-2 transition-transform duration-200 group-hover/link:translate-x-1" />
      </a>
    </div>
  </div>
);

const BlogSection: React.FC = () => {
  const [featuredPost, ...otherPosts] = blogPosts;

  return (
    <section id="blog" className="py-20 sm:py-32">
      <div className="container mx-auto px-6">
        <AnimatedElement className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Wawasan & Berita Terbaru
          </h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Tetap terdepan dengan pemikiran dan pembaruan terbaru dari tim Nexus.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatedElement>
            <BlogCard {...featuredPost} isFeatured />
          </AnimatedElement>
          <div className="space-y-8">
            {otherPosts.map((post, index) => (
              <AnimatedElement key={post.title} delay={`delay-${(index + 1) * 150}`}>
                <BlogCard {...post} />
              </AnimatedElement>
            ))}
          </div>
        </div>
        
        <AnimatedElement className="text-center mt-16">
            <a href="#" data-cursor-grow className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
                Lihat Semua Artikel
            </a>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default BlogSection;