'use client';

import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AuctionGrid from '@/components/AuctionGrid';
import BlogList from '@/components/BlogList';
import Testimonials from '@/components/Testimonials';
import Partners from '@/components/Partners';
import Subscribe from '@/components/Subscribe';
import Footer from '@/components/Footer';

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  // Load dark mode preference from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved) {
      setIsDark(JSON.parse(saved));
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDark);
    }
  }, []);

  // Save dark mode preference
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDark));
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className={`min-h-screen ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-200`}>
        {/* Navigation */}
        <Navigation isDark={isDark} toggleDarkMode={toggleDarkMode} />

        {/* Hero Section */}
        <HeroSection isDark={isDark} />

        {/* Auction Section */}
        <AuctionGrid isDark={isDark} />

        {/* Blog Section */}
        <BlogList isDark={isDark} />

        {/* Testimonials Section */}
        <Testimonials isDark={isDark} />

        {/* Partners Section */}
        <Partners isDark={isDark} />

        {/* Subscribe Section */}
        <Subscribe isDark={isDark} />

        {/* Footer */}
        <Footer isDark={isDark} />
      </div>
    </div>
  );
}
