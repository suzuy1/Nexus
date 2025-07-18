
import React, { useState, useEffect, useCallback } from 'react';
import AnimatedElement from './AnimatedElement';

const commands = [
  {
    id: 'diagnostics',
    name: 'Jalankan Diagnostik',
    output: `> nexus run diagnostics
[1/4] Memeriksa konektivitas jaringan...  [OK]
[2/4] Memverifikasi status AI Core...     [OPTIMAL]
[3/4] Menganalisis latensi gateway...    [RENDAH - 8ms]
[4/4] Memindai protokol keamanan...      [AMAN - QUANTUM-L2]

Semua sistem beroperasi secara normal.
`,
  },
  {
    id: 'network',
    name: 'Visualisasikan Jaringan',
    output: `> nexus visualize network --type=map
Membuat peta topologi jaringan...

(Perangkat Rumah) <--> [Gateway Sentral] <--> (Server Cloud)
      |                       |                       |
(Ponsel Anda) <-------------> | <-------------> (API Mitra)
      |                                               |
(Laptop Kerja) <------------------------------> (Database)

Visualisasi selesai. 24 node aktif terdeteksi.
`,
  },
  {
    id: 'deploy',
    name: 'Terapkan Alur Kerja',
    output: `> nexus deploy workflow --name=morning_routine
[1/3] Mengambil alur kerja 'morning_routine'...
[2/3] Mengompilasi dan men-deploy ke perangkat target...
      - Device 'living_room_lights'
      - Device 'kitchen_coffeemaker'
      - Device 'bedroom_blinds'
[3/3] Verifikasi penerapan... [BERHASIL]

Alur kerja 'morning_routine' berhasil diterapkan dan aktif.
`,
  },
  {
    id: 'analytics',
    name: 'Ambil Analitik',
    output: `> nexus fetch analytics --period=24h
Mengambil data analitik untuk 24 jam terakhir...

- Penggunaan Energi: 12.4 kWh (-8% vs kemarin)
- Perangkat Paling Aktif: 'living_room_hub' (9.2 jam)
- Alur Kerja Paling Sering Digunakan: 'good_night' (3 kali)
- Ancaman Keamanan Terdeteksi: 0

Laporan berhasil dibuat.
`,
  },
];

const InteractiveDemo: React.FC = () => {
  const [currentOutput, setCurrentOutput] = useState('');
  const [textToType, setTextToType] = useState(commands[0].output);
  const [isTyping, setIsTyping] = useState(true);
  const [activeCommand, setActiveCommand] = useState(commands[0].id);

  useEffect(() => {
    setCurrentOutput('');
    setIsTyping(true);

    const typingInterval = setInterval(() => {
      setCurrentOutput(prev => {
        if (prev.length < textToType.length) {
          return textToType.slice(0, prev.length + 1);
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
          return prev;
        }
      });
    }, 15);

    return () => clearInterval(typingInterval);
  }, [textToType]);
  
  const handleCommandClick = (command: typeof commands[0]) => {
    if(isTyping) return;
    setTextToType(command.output);
    setActiveCommand(command.id);
  };

  return (
    <section id="demo" className="py-20 sm:py-32">
      <div className="container mx-auto px-6">
        <AnimatedElement className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Arena Interaktif Nexus
          </h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Jangan hanya membaca. Rasakan kekuatan Nexus secara langsung. Pilih perintah untuk memulai.
          </p>
        </AnimatedElement>

        <AnimatedElement>
          <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl shadow-2xl shadow-black/30 overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Command Buttons */}
              <div className="w-full md:w-1/4 p-6 bg-gray-900/40 border-b md:border-b-0 md:border-r border-gray-700/50">
                <h4 className="font-bold text-white mb-4">Perintah Tersedia</h4>
                <div className="flex flex-col space-y-3">
                  {commands.map(cmd => (
                    <button
                      key={cmd.id}
                      onClick={() => handleCommandClick(cmd)}
                      data-cursor-grow
                      disabled={isTyping}
                      className={`text-left w-full p-3 rounded-lg transition-all duration-200 font-mono text-sm ${
                        activeCommand === cmd.id
                          ? 'bg-cyan-500/20 text-cyan-300'
                          : 'bg-gray-700/50 hover:bg-gray-700/80 text-gray-300'
                      } disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                     $ {cmd.name}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Terminal */}
              <div className="w-full md:w-3/4 p-6 font-mono text-sm">
                 <div className="bg-black/50 rounded-md p-4 min-h-[300px] text-gray-300 whitespace-pre-wrap leading-relaxed relative">
                    <code>{currentOutput}</code>
                    {isTyping && <span className="blinking-cursor"></span>}
                 </div>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
      <style>{`
        .blinking-cursor {
          display: inline-block;
          width: 8px;
          height: 1.2em;
          background-color: #06b6d4; /* cyan-500 */
          animation: blink 1s step-end infinite;
          vertical-align: bottom;
        }
        @keyframes blink {
          50% {
            background-color: transparent;
          }
        }
      `}</style>
    </section>
  );
};

export default InteractiveDemo;