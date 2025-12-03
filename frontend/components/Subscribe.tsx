'use client';

import { useState } from 'react';

interface SubscribeProps {
  isDark: boolean;
}

export default function Subscribe({ isDark }: SubscribeProps) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulasi API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMessage({ type: 'success', text: 'Terima kasih! Email Anda telah terdaftar.' });
      setEmail('');
    } catch (error) {
      setMessage({ type: 'error', text: 'Gagal mendaftar. Silakan coba lagi.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="subscribe"
      className={`py-16 ${isDark ? 'bg-gray-800' : 'bg-gray-50'} transition-colors duration-200`}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`p-12 text-center ${
            isDark
              ? 'bg-gradient-to-r from-green-900 to-green-800'
              : 'bg-gradient-to-r from-green-50 to-green-100'
          }`}
        >
          {/* Header */}
          <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-green-900'}`}>
            📧 Berlangganan Newsletter
          </h2>
          <p className={`text-lg mb-8 ${isDark ? 'text-green-100' : 'text-green-700'}`}>
            Dapatkan tips, berita, dan penawaran eksklusif langsung ke inbox Anda
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Masukkan email Anda"
              required
              className={`flex-1 px-4 py-3 border-0 focus:outline-none focus:ring-2 focus:ring-green-600 ${
                isDark ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
              }`}
            />
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-bold transition-colors"
            >
              {loading ? '...' : 'Daftar'}
            </button>
          </form>

          {/* Message */}
          {message && (
            <div className={`mt-4 p-3 ${
              message.type === 'success'
                ? isDark
                  ? 'bg-green-800 text-green-100'
                  : 'bg-green-200 text-green-800'
                : isDark
                  ? 'bg-red-900 text-red-100'
                  : 'bg-red-200 text-red-800'
            }`}>
              {message.text}
            </div>
          )}

          {/* Privacy Note */}
          <p className={`text-sm mt-6 ${isDark ? 'text-green-200' : 'text-green-600'}`}>
            💚 Kami tidak akan membagikan email Anda. Lihat{' '}
            <a href="#privacy" className="underline hover:no-underline font-semibold">
              kebijakan privasi
            </a>
            {' '}kami.
          </p>
        </div>
      </div>
    </section>
  );
}
