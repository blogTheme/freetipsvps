// lib/api.ts
// USE_MOCK_DATA: Set to true to use local JSON file, false to use API
const USE_MOCK_DATA = true;
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

export interface Post {
  id: number;
  title: string;
  content: string;
  author?: string;
  created_at: string;
  updated_at: string;
}

export async function fetchPosts(): Promise<Post[]> {
  // Use mock data from local JSON file
  if (USE_MOCK_DATA) {
    try {
      const response = await fetch('/mock-posts.json', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch mock posts');
      }

      return response.json();
    } catch (error) {
      console.error('Mock data error:', error);
      // Fallback to API
      return fetchFromAPI();
    }
  }

  return fetchFromAPI();
}

async function fetchFromAPI(): Promise<Post[]> {
  const response = await fetch(`${API_URL}/posts`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  return response.json();
}

export async function getPost(id: number): Promise<Post> {
  const response = await fetch(`${API_URL}/posts/${id}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch post');
  }

  return response.json();
}

export async function createPost(data: Omit<Post, 'id' | 'created_at' | 'updated_at'>): Promise<Post> {
  const response = await fetch(`${API_URL}/posts`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to create post');
  }

  return response.json();
}

export async function updatePost(id: number, data: Partial<Post>): Promise<Post> {
  const response = await fetch(`${API_URL}/posts/${id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to update post');
  }

  return response.json();
}

export async function deletePost(id: number): Promise<void> {
  const response = await fetch(`${API_URL}/posts/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to delete post');
  }
}
