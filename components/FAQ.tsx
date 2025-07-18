
import React, { useState } from 'react';
import AnimatedElement from './AnimatedElement';
import { ChevronDownIcon } from '../constants';

const faqData = [
  {
    question: 'Apa itu Nexus?',
    answer: 'Nexus adalah platform konektivitas terpusat yang dirancang untuk mengintegrasikan semua perangkat, aplikasi, dan layanan digital Anda ke dalam satu ekosistem yang kohesif dan cerdas. Tujuannya adalah untuk menyederhanakan interaksi teknologi Anda dan mengotomatiskan tugas-tugas kompleks.',
  },
  {
    question: 'Perangkat apa saja yang didukung?',
    answer: 'Nexus mendukung ribuan perangkat dari berbagai merek, termasuk perangkat rumah pintar (lampu, termostat, kunci), perangkat wearable, sensor, dan banyak lagi. Kami juga menyediakan API dan SDK bagi pengembang untuk menambahkan dukungan untuk perangkat baru.',
  },
  {
    question: 'Bagaimana Nexus menjaga keamanan data saya?',
    answer: 'Keamanan adalah prioritas utama kami. Kami menggunakan enkripsi end-to-end (AES-256) untuk semua komunikasi data, otentikasi multi-faktor, dan kami secara rutin diaudit oleh pihak ketiga. Anda memiliki kendali penuh atas data Anda dan dengan siapa Anda membagikannya.',
  },
  {
    question: 'Bisakah saya mencoba Nexus sebelum berlangganan?',
    answer: 'Tentu saja! Paket "Starter" kami sepenuhnya gratis dan memberi Anda akses ke fitur-fitur inti untuk menghubungkan hingga 5 perangkat. Ini adalah cara yang bagus untuk merasakan kekuatan Nexus tanpa komitmen apa pun.',
  },
  {
    question: 'Bagaimana cara meningkatkan atau menurunkan paket saya?',
    answer: 'Anda dapat dengan mudah mengubah paket Anda kapan saja langsung dari dasbor akun Anda. Perubahan akan berlaku segera, dan tagihan Anda akan disesuaikan secara prorata.',
  },
];

const FaqItem: React.FC<{ q: string; a: string; isOpen: boolean; onClick: () => void }> = ({ q, a, isOpen, onClick }) => (
  <div className="border-b border-gray-700/50">
    <button
      onClick={onClick}
      data-cursor-grow
      className="w-full flex justify-between items-center text-left py-6"
    >
      <span className="text-lg font-semibold text-white">{q}</span>
      <ChevronDownIcon
        className={`w-6 h-6 text-cyan-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
      />
    </button>
    <div
      className="grid transition-all duration-300 ease-in-out"
      style={{
        gridTemplateRows: isOpen ? '1fr' : '0fr',
      }}
    >
      <div className="overflow-hidden">
        <p className="text-gray-300 pb-6 pr-6">{a}</p>
      </div>
    </div>
  </div>
);

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-32">
      <div className="container mx-auto px-6">
        <AnimatedElement className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Pertanyaan Umum
          </h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Menemukan jawaban yang Anda cari? Jika tidak, tim kami siap membantu.
          </p>
        </AnimatedElement>
        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
             <AnimatedElement key={index} delay={`delay-${index * 100}`}>
                <FaqItem
                    q={item.question}
                    a={item.answer}
                    isOpen={openIndex === index}
                    onClick={() => handleToggle(index)}
                />
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
