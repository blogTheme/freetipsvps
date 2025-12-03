'use client';

import { useEffect, useState } from 'react';
import { fetchAuctions } from '@/lib/api';
import type { Auction } from '@/lib/types';

interface AuctionGridProps {
  isDark: boolean;
}

export default function AuctionGrid({ isDark }: AuctionGridProps) {
  const [auctions, setAuctions] = useState<Auction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadAuctions() {
      try {
        const data = await fetchAuctions();
        setAuctions(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Gagal memuat lelang');
      } finally {
        setLoading(false);
      }
    }
    loadAuctions();
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'sold':
        return 'bg-red-100 text-red-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'closed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  if (loading) {
    return (
      <div className={`py-16 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Memuat lelang...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`py-16 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-red-600">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section
      id="auctions"
      className={`py-16 ${isDark ? 'bg-gray-800' : 'bg-gray-50'} transition-colors duration-200`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            🔨 Lelang Properti Aktif
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Temukan properti impian Anda dengan harga terbaik
          </p>
        </div>

        {/* Auction Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {auctions.map((auction) => (
            <div
              key={auction.id}
              className={`overflow-hidden shadow-lg transition-all hover:shadow-2xl hover:scale-105 cursor-pointer ${
                isDark ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
              }`}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src={auction.image_url}
                  alt={auction.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.src = 'https://via.placeholder.com/500x350/cccccc/666666?text=No+Image';
                  }}
                />
                {/* Status Badge */}
                <div className={`absolute top-3 right-3 px-3 py-1 text-sm font-semibold ${getStatusColor(auction.status)}`}>
                  {auction.status === 'active' ? '🔴 Aktif' : 
                   auction.status === 'sold' ? '✓ Terjual' :
                   auction.status === 'pending' ? '⏳ Proses' : '⊗ Ditutup'}
                </div>
              </div>

              {/* Content */}
              <div className={`p-4 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
                {/* Title */}
                <h3 className={`text-lg font-bold mb-2 line-clamp-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {auction.title}
                </h3>

                {/* Description */}
                <p className={`text-sm mb-3 line-clamp-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {auction.description}
                </p>

                {/* Seller */}
                <p className={`text-xs mb-3 font-medium ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                  👤 {auction.seller}
                </p>

                {/* Prices */}
                <div className="mb-4 space-y-2">
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    <span>Penawaran:</span>
                    <span className={`ml-2 font-bold ${isDark ? 'text-green-400' : 'text-green-600'}`}>
                      {formatPrice(auction.starting_price)}
                    </span>
                  </div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    <span>Harga Saat Ini:</span>
                    <span className={`ml-2 font-bold text-xl ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`}>
                      {formatPrice(auction.current_price)}
                    </span>
                  </div>
                </div>

                {/* Bids & Deadline */}
                <div className="grid grid-cols-2 gap-2 mb-4 text-center text-sm">
                  <div className={`p-2 ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    <div className="font-bold text-green-600">{auction.bids_count}</div>
                    <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Penawaran
                    </div>
                  </div>
                  <div className={`p-2 ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    <div className={`font-bold text-sm ${isDark ? 'text-orange-400' : 'text-orange-600'}`}>
                      {new Date(auction.deadline) > new Date() ? '⏱️ Aktif' : '⊗ Selesai'}
                    </div>
                  </div>
                </div>

                {/* Deadline */}
                <div className={`text-xs p-2 ${isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                  📅 {formatDate(auction.deadline)}
                </div>

                {/* Action Button */}
                <button
                  className="w-full mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-bold transition-colors"
                  onClick={() => alert(`Membuka lelang: ${auction.title}`)}
                >
                  Lihat Detail & Tawar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
