'use client';

import { useEffect, useState } from 'react';
import { fetchPosts } from '@/lib/api';
import type { Post } from '@/lib/types';

interface PostListProps {
  isDark: boolean;
}

export default function PostList({ isDark }: PostListProps) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadPosts() {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Gagal memuat blog');
      } finally {
        setLoading(false);
      }
    }
    loadPosts();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };

  if (loading) {
    return (
      <div className={`py-16 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Memuat blog...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`py-16 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
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
      id="posts"
      className={`py-16 ${isDark ? 'bg-gray-900' : 'bg-white'} transition-colors duration-200`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            📖 Blog & Informasi
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Tips dan panduan lengkap seputar properti dan lelang
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {posts.map((post) => (
            <div
              key={post.id}
              className={`overflow-hidden shadow-lg transition-all hover:shadow-2xl hover:scale-105 cursor-pointer ${
                isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
              }`}
            >
              {/* Image */}
              {post.featured_image && (
                <div className="relative h-48 overflow-hidden bg-gray-300">
                  <img
                    src={post.featured_image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      img.src = 'https://via.placeholder.com/500x350/d4d4d8/808080?text=No+Image';
                    }}
                  />
                  {/* Category Badge */}
                  {post.category && (
                    <div className="absolute top-3 left-3 px-3 py-1 bg-green-600 text-white text-sm font-semibold">
                      {post.category}
                    </div>
                  )}
                </div>
              )}

              {/* Content */}
              <div className={`p-6 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                {/* Title */}
                <h3 className={`text-xl font-bold mb-3 line-clamp-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className={`text-sm mb-4 line-clamp-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {post.excerpt || post.content}
                </p>

                {/* Meta Info */}
                <div className={`flex items-center justify-between mb-4 text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                  <span className="flex items-center gap-1">
                    👤 {post.author}
                  </span>
                  {post.views && (
                    <span className="flex items-center gap-1">
                      👁️ {post.views}
                    </span>
                  )}
                </div>

                {/* Date */}
                <div className={`flex items-center justify-between mb-4 pb-4 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                  <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                    📅 {formatDate(post.created_at)}
                  </span>
                  {post.status && (
                    <span className={`text-xs px-2 py-1 ${
                      post.status === 'published' ? 'bg-green-100 text-green-800' :
                      post.status === 'draft' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {post.status === 'published' ? '✓ Dipublikasi' :
                       post.status === 'draft' ? '📝 Draft' : '🗂️ Arsip'}
                    </span>
                  )}
                </div>

                {/* Action Button */}
                <button
                  className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-bold transition-colors"
                  onClick={() => alert(`Membuka: ${post.title}`)}
                >
                  Baca Selengkapnya
                </button>
              </div>
            </div>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
              Belum ada artikel blog
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
