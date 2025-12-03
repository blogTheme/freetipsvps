'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getMockConfig } from '@/lib/api';
import type { SiteConfig } from '@/lib/types';

interface FooterProps {
  isDark: boolean;
}

export default function Footer({ isDark }: FooterProps) {
  const [config, setConfig] = useState<SiteConfig | null>(null);

  useEffect(() => {
    setConfig(getMockConfig());
  }, []);

  if (!config) return null;

  return (
    <footer className={`${isDark ? 'bg-gray-900 border-t border-gray-800' : 'bg-gray-900 border-t border-gray-800'} transition-colors duration-200`}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Grid 1: Logo & Address */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-3xl">🌾</div>
              <div>
                <h3 className="text-lg font-bold text-white">{config.site_name}</h3>
              </div>
            </div>
            
            {/* Address */}
            <div className="mb-4">
              <p className="text-gray-300 font-semibold text-xs mb-2">📍 ALAMAT KAMI</p>
              <p className="text-gray-400 text-sm leading-relaxed">{config.address}</p>
            </div>
          </div>

          {/* Grid 2: Main Menu Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm">MENU UTAMA</h4>
            <ul className="space-y-2">
              {config.footer_links.main.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Grid 3: Support Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm">INFORMASI & BANTUAN</h4>
            <ul className="space-y-2">
              {config.footer_links.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Grid 4: Contact & Social Media */}
          <div>
            {/* Contact Info */}
            <h4 className="text-white font-bold mb-4 text-sm">HUBUNGI KAMI</h4>
            <div className="space-y-3 mb-6">
              <div>
                <p className="text-gray-400 text-sm">📧 Email:</p>
                <a
                  href={`mailto:${config.email}`}
                  className="text-green-400 hover:text-green-300 transition-colors text-sm break-all"
                >
                  {config.email}
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-sm">📞 WhatsApp:</p>
                <a
                  href={`https://wa.me/${config.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors text-sm"
                >
                  {config.whatsapp}
                </a>
              </div>
            </div>

            {/* Social Media */}
            <h4 className="text-white font-bold mb-3 text-sm">IKUTI KAMI</h4>
            <div className="flex gap-3 flex-wrap">
              {config.social_media.instagram && (
                <a
                  href={config.social_media.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-800 hover:bg-pink-600 flex items-center justify-center text-white transition-colors text-lg"
                  title="Instagram"
                >
                  📷
                </a>
              )}
              {config.social_media.facebook && (
                <a
                  href={config.social_media.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center text-white transition-colors text-sm font-bold"
                  title="Facebook"
                >
                  f
                </a>
              )}
              {config.social_media.twitter && (
                <a
                  href={config.social_media.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-800 hover:bg-sky-500 flex items-center justify-center text-white transition-colors text-xs font-bold"
                  title="Twitter"
                >
                  𝕏
                </a>
              )}
              {config.social_media.youtube && (
                <a
                  href={config.social_media.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-800 hover:bg-red-600 flex items-center justify-center text-white transition-colors text-lg"
                  title="YouTube"
                >
                  📺
                </a>
              )}
              {config.social_media.linkedin && (
                <a
                  href={config.social_media.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-800 hover:bg-blue-700 flex items-center justify-center text-white transition-colors text-xs font-bold"
                  title="LinkedIn"
                >
                  in
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright - Center di paling bawah */}
      <div className={`border-t ${isDark ? 'border-gray-800 bg-gray-950' : 'border-gray-800 bg-gray-950'} py-6`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} {config.site_name}. Semua hak dilindungi.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
