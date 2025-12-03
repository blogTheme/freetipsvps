/**
 * Type definitions for Auction and Post
 */

export interface Auction {
  id: number;
  title: string;
  description: string;
  image_url: string;
  starting_price: number;
  current_price: number;
  final_price?: number;
  seller: string;
  deadline: string;
  status: 'active' | 'sold' | 'pending' | 'closed';
  bids_count: number;
  created_at: string;
  updated_at: string;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  excerpt?: string;
  featured_image?: string;
  author: string;
  category?: string;
  status: 'published' | 'draft' | 'archived';
  views?: number;
  created_at: string;
  updated_at: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  message: string;
  avatar_url: string;
  rating: number;
  created_at: string;
}

export interface Partner {
  id: number;
  name: string;
  logo_url: string;
  website_url: string;
  created_at: string;
}

export interface SiteConfig {
  logo: string;
  site_name: string;
  tagline: string;
  description: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  social_media: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    youtube?: string;
    linkedin?: string;
  };
  hero_image: string;
  hero_moto: string;
  footer_links: {
    main: Array<{ label: string; href: string }>;
    support: Array<{ label: string; href: string }>;
  };
}
