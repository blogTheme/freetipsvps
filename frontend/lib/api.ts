import { Auction, Post, Testimonial, Partner, SiteConfig } from './types';
import mockData from '../public/mock-data.json';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';
const USE_MOCK_DATA = true; // Toggle ini untuk switch ke API

// ===== MOCK DATA FUNCTIONS =====
export function getMockData() {
  return mockData;
}

export function getMockConfig(): SiteConfig {
  return mockData.site_config as SiteConfig;
}

export function getMockAuctions(): Auction[] {
  return mockData.auctions as Auction[];
}

export function getMockPosts(): Post[] {
  return mockData.posts as Post[];
}

export function getMockTestimonials(): Testimonial[] {
  return mockData.testimonials as Testimonial[];
}

export function getMockPartners(): Partner[] {
  return mockData.partners as Partner[];
}

// ===== AUCTIONS =====
export async function fetchAuctions(): Promise<Auction[]> {
  if (USE_MOCK_DATA) {
    return getMockAuctions();
  }

  try {
    const response = await fetch(`${API_URL}/auctions`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) throw new Error('Failed to fetch auctions');
    return await response.json();
  } catch (error) {
    console.warn('Failed to fetch auctions from API, using mock data:', error);
    return getMockAuctions();
  }
}

export async function getAuction(id: number): Promise<Auction> {
  if (USE_MOCK_DATA) {
    const auction = getMockAuctions().find(a => a.id === id);
    if (!auction) throw new Error('Auction not found');
    return auction;
  }

  try {
    const response = await fetch(`${API_URL}/auctions/${id}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) throw new Error('Failed to fetch auction');
    return await response.json();
  } catch (error) {
    console.warn('Failed to fetch auction from API, using mock data:', error);
    const auction = getMockAuctions().find(a => a.id === id);
    if (!auction) throw new Error('Auction not found');
    return auction;
  }
}

// ===== POSTS =====
export async function fetchPosts(): Promise<Post[]> {
  if (USE_MOCK_DATA) {
    return getMockPosts();
  }

  try {
    const response = await fetch(`${API_URL}/posts`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) throw new Error('Failed to fetch posts');
    return await response.json();
  } catch (error) {
    console.warn('Failed to fetch posts from API, using mock data:', error);
    return getMockPosts();
  }
}

export async function getPost(id: number): Promise<Post> {
  if (USE_MOCK_DATA) {
    const post = getMockPosts().find(p => p.id === id);
    if (!post) throw new Error('Post not found');
    return post;
  }

  try {
    const response = await fetch(`${API_URL}/posts/${id}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) throw new Error('Failed to fetch post');
    return await response.json();
  } catch (error) {
    console.warn('Failed to fetch post from API, using mock data:', error);
    const post = getMockPosts().find(p => p.id === id);
    if (!post) throw new Error('Post not found');
    return post;
  }
}

export async function createPost(data: Omit<Post, 'id' | 'created_at' | 'updated_at'>): Promise<Post> {
  if (USE_MOCK_DATA) {
    throw new Error('Cannot create post in mock mode');
  }

  try {
    const response = await fetch(`${API_URL}/posts`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error('Failed to create post');
    return await response.json();
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
}

export async function updatePost(id: number, data: Partial<Post>): Promise<Post> {
  if (USE_MOCK_DATA) {
    throw new Error('Cannot update post in mock mode');
  }

  try {
    const response = await fetch(`${API_URL}/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error('Failed to update post');
    return await response.json();
  } catch (error) {
    console.error('Error updating post:', error);
    throw error;
  }
}

export async function deletePost(id: number): Promise<void> {
  if (USE_MOCK_DATA) {
    throw new Error('Cannot delete post in mock mode');
  }

  try {
    const response = await fetch(`${API_URL}/posts/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) throw new Error('Failed to delete post');
  } catch (error) {
    console.error('Error deleting post:', error);
    throw error;
  }
}

// ===== TESTIMONIALS =====
export async function fetchTestimonials(): Promise<Testimonial[]> {
  return getMockTestimonials();
}

// ===== PARTNERS =====
export async function fetchPartners(): Promise<Partner[]> {
  return getMockPartners();
}

// ===== SITE CONFIG =====
export async function fetchSiteConfig(): Promise<SiteConfig> {
  return getMockConfig();
}
