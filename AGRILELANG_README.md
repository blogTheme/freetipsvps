# 🌾 AgriLelang - Platform Lelang Pertanian Indonesia

Platform e-commerce full-stack untuk lelang dan jual-beli aset pertanian dengan teknologi modern.

## 📋 Daftar Isi
1. [Fitur Utama](#fitur-utama)
2. [Stack Teknologi](#stack-teknologi)
3. [Struktur Proyek](#struktur-proyek)
4. [Setup dan Instalasi](#setup-dan-instalasi)
5. [Fitur Frontend](#fitur-frontend)
6. [API Backend](#api-backend)
7. [Data Model](#data-model)
8. [Kontribusi](#kontribusi)

## 🎯 Fitur Utama

### Frontend
- ✅ **Responsive Design** - Kompatibel desktop, tablet, mobile
- ✅ **Dark/Light Mode** - Toggle tema dengan persistent storage
- ✅ **Navigation Bar** - Menu responsif dengan logo dan dark mode toggle
- ✅ **Hero Section** - Kampanye "Investasi Pertanian Cerdas, Hasil Panen Berlipat Ganda" dengan CTA buttons
- ✅ **Auction Grid** - Tampilan lelang properti pertanian dengan 6 data dummy
- ✅ **Blog/Post List** - Artikel informatif tentang pertanian dengan 6 artikel
- ✅ **Testimonials** - Testimoni pelanggan dengan rating bintang
- ✅ **Partners** - Logo partner bank dan institusi keuangan
- ✅ **Newsletter Subscribe** - Form subscribe dengan validasi email
- ✅ **Footer** - 4 grid layout: Logo+Alamat, Menu Utama, Info+Bantuan, Kontak+Sosmed

### Backend
- ✅ **REST API** - CRUD operations untuk Posts dan Auctions
- ✅ **Database SQLite** - Persistent data storage
- ✅ **CORS Enabled** - Support cross-origin requests
- ✅ **Validation** - Input validation pada semua endpoints
- ✅ **Eloquent ORM** - Laravel Eloquent untuk database operations

## 🛠 Stack Teknologi

| Bagian | Technology | Version |
|--------|-----------|---------|
| **Backend** | Laravel | 12.40.2 |
| | PHP | 8.3.14 |
| | SQLite | Built-in |
| **Frontend** | Next.js | 16.0.6 |
| | React | 19.2.0 |
| | TypeScript | 5.x |
| | Tailwind CSS | 4.x |
| **Tools** | Node.js | 18+ |
| | Composer | Latest |

## 📁 Struktur Proyek

```
/workspaces/freetipsvps/
├── backend/                          # Laravel API
│   ├── app/
│   │   ├── Http/
│   │   │   └── Controllers/
│   │   │       └── Api/
│   │   │           └── PostController.php
│   │   └── Models/
│   │       ├── Post.php
│   │       └── User.php
│   ├── database/
│   │   ├── migrations/
│   │   │   ├── create_users_table.php
│   │   │   ├── create_cache_table.php
│   │   │   ├── create_jobs_table.php
│   │   │   └── create_posts_table.php
│   │   └── seeders/
│   │       ├── DatabaseSeeder.php
│   │       └── PostSeeder.php
│   ├── routes/
│   │   ├── api.php
│   │   └── web.php
│   └── composer.json
│
├── frontend/                         # Next.js Frontend
│   ├── app/
│   │   ├── layout.tsx               # Root layout dengan global styles
│   │   └── page.tsx                 # Homepage dengan semua sections
│   ├── components/
│   │   ├── Navigation.tsx           # Header dengan menu responsif
│   │   ├── HeroSection.tsx          # Hero dengan CTA buttons
│   │   ├── AuctionGrid.tsx          # Grid lelang 6 items
│   │   ├── BlogList.tsx             # Grid blog 6 artikel
│   │   ├── Testimonials.tsx         # Testimonial cards
│   │   ├── Partners.tsx             # Partner logos
│   │   ├── Subscribe.tsx            # Newsletter form
│   │   └── Footer.tsx               # 4-grid layout footer
│   ├── lib/
│   │   ├── api.ts                   # API client functions
│   │   └── types.ts                 # TypeScript interfaces
│   ├── public/
│   │   └── mock-data.json           # Mock data untuk development
│   └── package.json
│
├── FULLSTACK_README.md
├── CLOUD_TEST_REPORT.md
└── .git/                            # Git repository
```

## 🚀 Setup dan Instalasi

### Prerequisites
- Node.js 18+
- PHP 8.3+
- Composer
- Git

### Backend Setup

```bash
cd /workspaces/freetipsvps/backend

# Install dependencies
composer install

# Generate APP_KEY
php artisan key:generate

# Run migrations
php artisan migrate

# Seed database
php artisan db:seed

# Start server
php artisan serve --host=0.0.0.0 --port=8000
```

### Frontend Setup

```bash
cd /workspaces/freetipsvps/frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Browser akan terbuka di `http://localhost:3000`

## 💻 Fitur Frontend

### 1. Navigation Bar
- Logo dan site name: 🌾 AgriLelang
- Menu: Lelang, Blog, Tentang Kami
- Dark/Light mode toggle (☀️/🌙)
- Responsive mobile menu
- Sticky positioning

**File**: `components/Navigation.tsx`

### 2. Hero Section
- Background image dengan overlay
- Hero moto: "Investasi Pertanian Cerdas, Hasil Panen Berlipat Ganda"
- 2 CTA buttons: "Lelang Sekarang" (🔨) dan "Booking & Info" (📖)
- Stats section: 1000+ Properti, 5000+ Pengguna, 500+ Transaksi
- Responsive height (full screen mobile, 500px desktop)

**File**: `components/HeroSection.tsx`

### 3. Auction Grid
- 6 produk lelang pertanian
- Card design dengan image, title, description
- Price display (Starting price & Current price)
- Status badge (🔴 Aktif, ✓ Terjual, ⏳ Proses, ⊗ Ditutup)
- Bid count dan deadline
- Seller info
- Detail button dengan alert

**Data Auction**:
1. Lahan Pertanian Premium di Karawang - 2 Hektar
2. Greenhouse Modern dengan Teknologi Hidroponik
3. Peternakan Sapi Potong Siap Operasional
4. Kebun Kakao Organik Certified di Sulawesi
5. Tambak Ikan Bandeng Produktif - Madura
6. Perkebunan Padi Dengan Mesin Pertanian Lengkap

**File**: `components/AuctionGrid.tsx`

### 4. Blog/Post List
- 6 artikel tentang pertanian dan agribisnis
- Featured image, title, excerpt, content
- Author, category, date, views
- Status badge (✓ Dipublikasi, 📝 Draft, 🗂️ Arsip)
- Read more button

**Data Posts**:
1. Teknik Budidaya Padi Modern untuk Hasil Maksimal
2. Peluang Bisnis Pertanian Organik di Era Modern
3. Panduan Lengkap Sistem Irigasi Pertanian Efisien
4. Budidaya Sayuran Hidroponik untuk Pemula
5. Manajemen Hama dan Penyakit Tanaman Secara Organik
6. Peternakan Berkelanjutan: Prospek Masa Depan Agribisnis

**File**: `components/BlogList.tsx`

### 5. Testimonials Section
- 3 testimoni pelanggan dengan rating (⭐)
- Avatar, nama, role, message
- 5-star rating display
- Clean card design

**File**: `components/Testimonials.tsx`

### 6. Partners Section
- Logo partner bank & institusi
- Partner: Bank Indonesia, BRI, Mandiri, OJK
- Clickable links ke website partner

**File**: `components/Partners.tsx`

### 7. Subscribe Newsletter
- Email input field
- Subscribe button
- Success/error message handling
- Privacy notice
- Form validation

**File**: `components/Subscribe.tsx`

### 8. Footer
**4-Grid Layout**:
1. **Grid 1**: Logo (🌾), Site name, Alamat
2. **Grid 2**: Menu Utama (Lelang, Blog, Tentang Kami)
3. **Grid 3**: Informasi & Bantuan (Kontak, FAQ, Syarat & Ketentuan, Kebijakan Privasi)
4. **Grid 4**: Hubungi Kami (Email, WhatsApp) + Social Media Icons (📷 Instagram, f Facebook, 𝕏 Twitter, 📺 YouTube, in LinkedIn)

**Copyright Section**: Center, tahun otomatis

**File**: `components/Footer.tsx`

## 📡 API Backend

### Base URL
- Development: `http://localhost:8000/api`
- Production: `https://fantastic-cod-v75jq59pg5qcw54w-8000.app.github.dev/api`

### Endpoints

#### Posts
```
GET    /api/posts              # Get all posts
POST   /api/posts              # Create new post
GET    /api/posts/{id}         # Get specific post
PUT    /api/posts/{id}         # Update post
DELETE /api/posts/{id}         # Delete post
```

#### Request/Response Example
```json
POST /api/posts
{
  "title": "Teknik Budidaya Padi Modern",
  "content": "Artikel lengkap tentang...",
  "author": "Dr. Bambang"
}

Response 201 Created:
{
  "id": 1,
  "title": "Teknik Budidaya Padi Modern",
  "content": "Artikel lengkap tentang...",
  "author": "Dr. Bambang",
  "created_at": "2025-12-03T10:30:00Z",
  "updated_at": "2025-12-03T10:30:00Z"
}
```

## 📊 Data Model

### Post Model
```typescript
interface Post {
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
```

### Auction Model
```typescript
interface Auction {
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
```

### Site Configuration
```typescript
interface SiteConfig {
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
}
```

## 🎨 Dark Mode Implementation

- **Toggle**: Button di Navigation bar (☀️ untuk light mode, 🌙 untuk dark mode)
- **Persistent**: Disimpan di localStorage
- **System Preference**: Otomatis follow system dark mode jika belum ada preference
- **Sections yang berubah**:
  - Background: white ↔ gray-900
  - Text: gray-900 ↔ white
  - Borders: gray-200 ↔ gray-800
  - Cards: white ↔ gray-800

## 📦 Frontend Dependencies

```json
{
  "next": "16.0.6",
  "react": "19.2.0",
  "tailwindcss": "4.0.0",
  "typescript": "5.x"
}
```

## 🔄 API Client Functions

File: `lib/api.ts`

```typescript
// Auction Functions
fetchAuctions()           // Get all auctions
getAuction(id)           // Get single auction

// Post Functions
fetchPosts()             // Get all posts
getPost(id)              // Get single post
createPost(data)         // Create new post
updatePost(id, data)     // Update post
deletePost(id)           // Delete post

// Other Functions
fetchTestimonials()      // Get testimonials
fetchPartners()          // Get partners
fetchSiteConfig()        // Get site configuration

// Mock Data Functions
getMockData()            // Get all mock data
getMockConfig()          // Get site config
getMockAuctions()        // Get auctions
getMockPosts()           // Get posts
```

## 🔧 Konfigurasi Environment

### Backend (.env)
```
APP_NAME=AgriLelang
APP_ENV=local
APP_DEBUG=true
APP_URL=http://localhost:8000
APP_KEY=[auto-generated]
DB_CONNECTION=sqlite
DB_DATABASE=/workspaces/freetipsvps/backend/database/database.sqlite
CORS_ALLOWED_ORIGINS=*
```

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

## 📋 Mock Data Structure

File: `public/mock-data.json`

Terdiri dari:
- **6 Auctions** - Aset pertanian dengan harga, status, deadline
- **6 Posts** - Artikel tentang pertanian
- **3 Testimonials** - Customer reviews dengan rating
- **4 Partners** - Bank dan institusi keuangan
- **Site Config** - Logo, alamat, kontak, social media

## 🚢 Deployment

### Frontend (Vercel)
```bash
npm run build
vercel deploy
```

### Backend (Laravel Hosting)
```bash
composer install --optimize-autoloader --no-dev
php artisan migrate --force
php artisan config:cache
php artisan route:cache
```

## 📝 Catatan Penting

1. **Mock Data Mode**: Frontend currently menggunakan mock data dari `public/mock-data.json`
   - Set `USE_MOCK_DATA = true` di `lib/api.ts` untuk development
   - Set `USE_MOCK_DATA = false` untuk production dengan API backend

2. **CORS**: Backend sudah dikonfigurasi untuk accept all origins (`*`)
   - Untuk production, ubah ke specific domain di `config/cors.php`

3. **Dark Mode**: Preference disimpan di localStorage dengan key `darkMode`
   - Auto-detect system preference jika belum ada saved preference

4. **Images**: Menggunakan Unsplash CDN untuk mock images
   - Fallback ke placeholder jika image gagal load

## 📚 Dokumentasi Tambahan

Lihat file lain untuk informasi lebih detail:
- `FULLSTACK_README.md` - Dokumentasi full stack development
- `CLOUD_TEST_REPORT.md` - Test report dari cloud environment
- `PORT_INFO.md` - Informasi port dan URLs

## 👥 Tim Pengembang

**FreeTipsVPS Team** - Dibuat dengan 💚

---

**Last Updated**: December 3, 2025
**Version**: 1.0.0-beta
