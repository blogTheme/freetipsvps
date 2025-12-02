// components/PostList.tsx
'use client';

import { useEffect, useState } from 'react';
import { fetchPosts, Post } from '@/lib/api';

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        setLoading(true);
        const data = await fetchPosts();
        setPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load posts');
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading posts...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center py-8">Error: {error}</div>;
  }

  if (posts.length === 0) {
    return <div className="text-center py-8">No posts found</div>;
  }

  return (
    <div className="grid gap-6">
      {posts.map((post) => (
        <article key={post.id} className="bg-white rounded-lg shadow p-6 border border-gray-200 hover:shadow-lg transition">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">{post.title}</h2>
          {post.author && (
            <p className="text-sm text-gray-500 mb-3">By {post.author}</p>
          )}
          <p className="text-gray-700 mb-4 leading-relaxed">{post.content}</p>
          <div className="text-xs text-gray-400">
            {new Date(post.created_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </div>
        </article>
      ))}
    </div>
  );
}
