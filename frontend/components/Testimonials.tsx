'use client';

import { useEffect, useState } from 'react';
import { fetchTestimonials } from '@/lib/api';
import type { Testimonial } from '@/lib/types';

interface TestimonialsProps {
  isDark: boolean;
}

export default function Testimonials({ isDark }: TestimonialsProps) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTestimonials() {
      try {
        const data = await fetchTestimonials();
        setTestimonials(data);
      } finally {
        setLoading(false);
      }
    }
    loadTestimonials();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <section
      id="testimonials"
      className={`py-16 ${isDark ? 'bg-gray-800' : 'bg-gray-50'} transition-colors duration-200`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            ⭐ Testimoni Pelanggan
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Kepuasan pelanggan adalah prioritas kami
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`p-6 shadow-lg ${
                isDark ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
              }`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Message */}
              <p className={`mb-4 line-clamp-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                "{testimonial.message}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar_url}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full bg-gray-300"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.src = 'https://via.placeholder.com/50/cccccc/666666?text=User';
                  }}
                />
                <div>
                  <h4 className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {testimonial.name}
                  </h4>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
