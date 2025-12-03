'use client';

import { useEffect, useState } from 'react';
import { getMockConfig } from '@/lib/api';
import type { SiteConfig } from '@/lib/types';

interface HeroProps {
  isDark: boolean;
}

export default function HeroSection({ isDark }: HeroProps) {
  const [config, setConfig] = useState<SiteConfig | null>(null);

  useEffect(() => {
    setConfig(getMockConfig());
  }, []);

  if (!config) return null;

  return (
    <section className={`relative h-screen md:h-[500px] flex items-center justify-center overflow-hidden ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${config.hero_image}')`,
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Overlay */}
        <div className={`absolute inset-0 ${isDark ? 'bg-black/60' : 'bg-green-900/50'}`} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          {config.site_name}
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 mb-6 drop-shadow-md font-light">
          {config.hero_moto}
        </p>
        <p className="text-lg text-gray-200 mb-8 drop-shadow-md max-w-2xl mx-auto">
          {config.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg"
            onClick={() => document.getElementById('auctions')?.scrollIntoView({ behavior: 'smooth' })}
          >
            🔨 Lelang Sekarang
          </button>
          <button
            className={`px-8 py-4 font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg ${
              isDark
                ? 'bg-gray-700 hover:bg-gray-600 text-white'
                : 'bg-white hover:bg-gray-100 text-green-600'
            }`}
            onClick={() => document.getElementById('posts')?.scrollIntoView({ behavior: 'smooth' })}
          >
            📖 Booking & Info
          </button>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">1000+</div>
            <div className="text-sm md:text-base text-gray-200">Properti Aktif</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">5000+</div>
            <div className="text-sm md:text-base text-gray-200">Pengguna Terdaftar</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">500+</div>
            <div className="text-sm md:text-base text-gray-200">Transaksi Sukses</div>
          </div>
        </div>
      </div>
    </section>
  );
}
