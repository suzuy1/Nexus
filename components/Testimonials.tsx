
import React from 'react';
import AnimatedElement from './AnimatedElement';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatarUrl: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Nexus telah mengubah cara kami mengelola data. Integrasinya yang mulus dan analitik real-time telah meningkatkan produktivitas kami sebesar 40%.",
    name: "Anya Lestari",
    title: "CEO, Inovasi Digital",
    avatarUrl: "https://picsum.photos/id/1027/100/100",
  },
  {
    quote: "Sebagai startup, skalabilitas adalah kunci. Nexus memungkinkan kami untuk tumbuh tanpa khawatir tentang infrastruktur. Platform yang luar biasa!",
    name: "Budi Santoso",
    title: "CTO, Solusi Cepat",
    avatarUrl: "https://picsum.photos/id/1005/100/100",
  },
  {
    quote: "Keamanan adalah prioritas utama kami. Dengan Nexus, kami yakin data kami aman. Tim dukungan mereka juga sangat responsif dan membantu.",
    name: "Citra Dewi",
    title: "Manajer TI, Data Aman Corp",
    avatarUrl: "https://picsum.photos/id/1011/100/100",
  },
];

const TestimonialCard: React.FC<Testimonial> = ({ quote, name, title, avatarUrl }) => (
  <div data-cursor-grow className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50 flex flex-col h-full transition-all duration-300 hover:border-purple-400/50 hover:bg-gray-800/80 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10">
    <p className="text-gray-300 italic flex-grow">"{quote}"</p>
    <div className="flex items-center mt-6">
      <img src={avatarUrl} alt={name} className="w-12 h-12 rounded-full mr-4 border-2 border-cyan-400" />
      <div>
        <p className="font-bold text-white">{name}</p>
        <p className="text-sm text-gray-400">{title}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimoni" className="py-20 sm:py-32">
      <div className="container mx-auto px-6">
        <AnimatedElement className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Apa Kata Mereka Tentang Kami
          </h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Kami bangga telah membantu para pemimpin industri mencapai tujuan mereka.
          </p>
        </AnimatedElement>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedElement key={index} delay={`delay-${index * 150}`}>
              <TestimonialCard {...testimonial} />
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
