'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getMockConfig } from '@/lib/api';
import type { SiteConfig } from '@/lib/types';

interface NavigationProps {
  isDark: boolean;
  toggleDarkMode: () => void;
}

export default function Navigation({ isDark, toggleDarkMode }: NavigationProps) {
  const [config, setConfig] = useState<SiteConfig | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setConfig(getMockConfig());
  }, []);

  if (!config) return null;

  return (
    <nav className={`sticky top-0 z-50 ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border-b transition-colors duration-200`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold text-green-600">🏠</div>
            <span className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
              FreeTipsVPS
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {config.footer_links.main.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`font-medium transition-colors ${
                  isDark
                    ? 'text-gray-300 hover:text-green-400'
                    : 'text-gray-700 hover:text-green-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Section: Dark Mode Toggle + Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors ${
                isDark
                  ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
              aria-label="Toggle dark mode"
            >
              {isDark ? '☀️' : '🌙'}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              <svg
                className={`w-6 h-6 ${isDark ? 'text-white' : 'text-gray-900'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden pb-4 space-y-2 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
            {config.footer_links.main.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`block px-4 py-2 rounded-lg transition-colors ${
                  isDark
                    ? 'text-gray-300 hover:bg-gray-700 hover:text-green-400'
                    : 'text-gray-700 hover:bg-white hover:text-green-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
