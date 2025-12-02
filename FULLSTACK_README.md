# Full Stack Application: Laravel + Next.js

## 🚀 Quick Start

### Backend (Laravel API) - Port 8000
```bash
cd backend
php artisan serve --host=0.0.0.0 --port=8000
```

### Frontend (Next.js) - Port 3000
```bash
cd frontend
npm run dev
```

**URLs:**
- Backend API: http://localhost:8000/api/posts
- Frontend: http://localhost:3000

```
freetipsvps/
├── backend/                 # Laravel API
│   ├── app/
│   │   ├── Http/
│   │   │   └── Controllers/
│   │   │       └── Api/
│   │   │           └── PostController.php
│   │   └── Models/
│   │       └── Post.php
│   ├── config/
│   │   └── cors.php
│   ├── database/
│   │   ├── migrations/
│   │   │   └── *_create_posts_table.php
│   │   └── seeders/
│   │       └── PostSeeder.php
│   ├── routes/
│   │   └── api.php
│   ├── .env
│   ├── composer.json
│   └── artisan
│
├── frontend/                # Next.js Frontend
│   ├── app/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   └── PostList.tsx
│   ├── lib/
│   │   └── api.ts
│   ├── .env.local
│   ├── package.json
│   ├── next.config.ts
│   └── tsconfig.json
│
├── README.md
└── PORT_INFO.md
```

## 🚀 Backend - Laravel API

### Setup
```bash
cd backend
php artisan migrate
php artisan db:seed --class=PostSeeder
php artisan serve --host=0.0.0.0 --port=8000
```

### API Endpoints
- `GET /api/posts` - Tampilkan semua posts
- `POST /api/posts` - Buat post baru
- `GET /api/posts/{id}` - Tampilkan detail post
- `PUT /api/posts/{id}` - Update post
- `DELETE /api/posts/{id}` - Hapus post

### Database Schema (posts table)
```
- id (Primary Key)
- title (string)
- content (text)
- author (string, nullable)
- created_at (timestamp)
- updated_at (timestamp)
```

## 🎨 Frontend - Next.js

### Setup
```bash
cd frontend
npm install
npm run dev
```

### Features
- ✅ Fetch posts dari Laravel API
- ✅ Display posts dalam card format
- ✅ Loading state
- ✅ Error handling
- ✅ Responsive design with Tailwind CSS
- ✅ TypeScript support

### Environment Variables
```
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

## 📊 Data Flow

```
Frontend (Next.js)
    ↓
PostList Component
    ↓
lib/api.ts (fetchPosts)
    ↓
HTTP GET Request
    ↓
Backend (Laravel)
    ↓
PostController@index
    ↓
Post Model
    ↓
Database (SQLite)
```

## 🔧 Tech Stack

### Backend
- **Framework**: Laravel 12.40.2
- **Language**: PHP 8.3.14
- **Database**: SQLite
- **API**: RESTful API

### Frontend
- **Framework**: Next.js 16.0.6
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **React**: 19.2.0

## 🌐 URLs

### Development
- **Laravel Backend**: http://localhost:8000
- **Next.js Frontend**: http://localhost:3000
- **API Endpoint**: http://localhost:8000/api/posts

### GitHub Codespaces (Port Forward)
- **Backend**: https://fantastic-cod-v75jq59pg5qcw54w-8000.app.github.dev
- **Frontend**: https://fantastic-cod-v75jq59pg5qcw54w-3000.app.github.dev

## 📝 Sample Data

Database sudah di-seed dengan 3 posts:
1. "Belajar Laravel API" - by Admin
2. "Next.js Development" - by Developer
3. "Full Stack Development" - by Expert

## 🛠️ Common Commands

### Backend
```bash
cd backend

# Development
php artisan serve --host=0.0.0.0 --port=8000

# Database
php artisan migrate
php artisan migrate:fresh
php artisan db:seed --class=PostSeeder

# Debugging
php artisan tinker
php artisan route:list
```

### Frontend
```bash
cd frontend

# Development
npm run dev

# Build
npm run build
npm start

# Linting
npm run lint
```

## 🐛 Troubleshooting

### Laravel API returns 500 error
```bash
cd backend
php artisan key:generate
php artisan config:clear
php artisan cache:clear
```

### Frontend can't connect to API
- Check if backend is running: `curl http://localhost:8000/api/posts`
- Verify CORS configuration in `backend/config/cors.php`
- Check `.env.local` in frontend folder

### Port already in use
```bash
# Kill process on port 8000
lsof -i :8000
kill -9 <PID>

# Kill process on port 3000
lsof -i :3000
kill -9 <PID>
```

## 📅 Created
- **Date**: December 2, 2025
- **Laravel Version**: 12.40.2
- **Next.js Version**: 16.0.6
- **Node Version**: v22.21.1
- **PHP Version**: 8.3.14
