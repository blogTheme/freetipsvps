'use client';

import { useEffect, useState } from 'react';
import { fetchPartners } from '@/lib/api';
import type { Partner } from '@/lib/types';

interface PartnersProps {
  isDark: boolean;
}

export default function Partners({ isDark }: PartnersProps) {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPartners() {
      try {
        const data = await fetchPartners();
        setPartners(data);
      } finally {
        setLoading(false);
      }
    }
    loadPartners();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <section
      id="partners"
      className={`py-16 ${isDark ? 'bg-gray-900' : 'bg-white'} transition-colors duration-200`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            🤝 Partner Terpercaya
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Kami bekerja sama dengan institusi keuangan terkemuka di Indonesia
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner) => (
            <a
              key={partner.id}
              href={partner.website_url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center p-6 rounded-lg transition-all hover:shadow-lg ${
                isDark ? 'bg-gray-800 border border-gray-700 hover:border-green-600' : 'bg-gray-50 border border-gray-200 hover:border-green-600'
              }`}
            >
              <img
                src={partner.logo_url}
                alt={partner.name}
                className="h-16 object-contain"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.src = `https://via.placeholder.com/150x60/cccccc/666666?text=${partner.name}`;
                }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
