# 🚀 Full Stack Application Setup Guide

## GitHub Codespaces URLs untuk Preview (Public)

Gunakan URL ini untuk membuka aplikasi di browser Anda:

### Frontend (Next.js App)
```
https://fantastic-cod-v75jq59pg5qcw54w-3000.app.github.dev
```
**Aplikasi blog dengan Next.js - menampilkan posts dari Laravel API**

### Backend (Laravel API)
```
https://fantastic-cod-v75jq59pg5qcw54w-8000.app.github.dev/api/posts
```
**RESTful API untuk mengambil data posts**

---

## 📋 Struktur Project

```
freetipsvps/
├── backend/                          # Laravel API Server (Port 8000)
│   ├── app/
│   │   ├── Http/
│   │   │   └── Controllers/Api/PostController.php
│   │   └── Models/Post.php
│   ├── database/
│   │   ├── migrations/*_create_posts_table.php
│   │   └── seeders/PostSeeder.php
│   ├── routes/
│   │   └── api.php
│   ├── config/cors.php
│   ├── .env                          # Backend Environment
│   ├── bootstrap/app.php
│   └── artisan
│
├── frontend/                         # Next.js App (Port 3000)
│   ├── app/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   └── PostList.tsx
│   ├── lib/
│   │   └── api.ts
│   ├── .env.local                    # Frontend Environment
│   ├── next.config.ts
│   └── package.json
│
├── PORT_INFO.md                      # URLs & Ports
├── FULLSTACK_README.md               # Full documentation
└── README.md
```

---

## 🔧 Environment Configuration

### Backend (.env)
```dotenv
APP_URL=https://fantastic-cod-v75jq59pg5qcw54w-8000.app.github.dev
APP_DEBUG=true
APP_ENV=local
```

### Frontend (.env.local)
```dotenv
NEXT_PUBLIC_API_URL=https://fantastic-cod-v75jq59pg5qcw54w-8000.app.github.dev/api
```

---

## 📡 API Endpoints

### Get All Posts
```
GET https://fantastic-cod-v75jq59pg5qcw54w-8000.app.github.dev/api/posts
```
**Response:**
```json
[
  {
    "id": 1,
    "title": "Belajar Laravel API",
    "content": "Tutorial lengkap membuat RESTful API dengan Laravel framework terbaru.",
    "author": "Admin",
    "created_at": "2025-12-02T22:34:07.000000Z",
    "updated_at": "2025-12-02T22:34:07.000000Z"
  },
  ...
]
```

### Get Single Post
```
GET https://fantastic-cod-v75jq59pg5qcw54w-8000.app.github.dev/api/posts/{id}
```

### Create Post
```
POST https://fantastic-cod-v75jq59pg5qcw54w-8000.app.github.dev/api/posts
Content-Type: application/json

{
  "title": "Post Title",
  "content": "Post content here",
  "author": "Author Name"
}
```

### Update Post
```
PUT https://fantastic-cod-v75jq59pg5qcw54w-8000.app.github.dev/api/posts/{id}
```

### Delete Post
```
DELETE https://fantastic-cod-v75jq59pg5qcw54w-8000.app.github.dev/api/posts/{id}
```

---

## 🛠️ Development Commands

### Backend Setup
```bash
cd backend

# Run migrations
php artisan migrate

# Seed database
php artisan db:seed --class=PostSeeder

# Start server
php artisan serve --host=0.0.0.0 --port=8000

# Clear cache
php artisan config:clear
php artisan cache:clear
```

### Frontend Setup
```bash
cd frontend

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---

## 📊 Data Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│  Your Browser                                               │
│  https://fantastic-cod-v75jq59pg5qcw54w-3000.app.github.dev│
└──────────────────────┬──────────────────────────────────────┘
                       │
                       │ HTTP Request
                       ↓
┌─────────────────────────────────────────────────────────────┐
│  Next.js Frontend (Port 3000)                               │
│  - PostList Component                                       │
│  - Fetch Posts via API client                               │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       │ HTTP GET /api/posts
                       ↓
┌─────────────────────────────────────────────────────────────┐
│  Laravel Backend (Port 8000)                                │
│  https://fantastic-cod-v75jq59pg5qcw54w-8000.app.github.dev│
│  - PostController@index                                     │
│  - CORS Enabled                                             │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       │ Query Database
                       ↓
┌─────────────────────────────────────────────────────────────┐
│  SQLite Database                                            │
│  Posts Table (3 sample records)                             │
└─────────────────────────────────────────────────────────────┘
```

---

## ✨ Features

### Backend
- ✅ RESTful API with CRUD operations
- ✅ Laravel 12.40.2 framework
- ✅ SQLite database with seeded data
- ✅ CORS configuration for frontend access
- ✅ JSON response format
- ✅ Validation & error handling

### Frontend
- ✅ Next.js 16 with App Router
- ✅ TypeScript support
- ✅ Tailwind CSS styling
- ✅ Responsive design
- ✅ Loading states
- ✅ Error handling
- ✅ API client library

---

## 🧪 Testing

### Test API with cURL
```bash
# Get all posts
curl https://fantastic-cod-v75jq59pg5qcw54w-8000.app.github.dev/api/posts

# Get single post
curl https://fantastic-cod-v75jq59pg5qcw54w-8000.app.github.dev/api/posts/1

# Create post
curl -X POST https://fantastic-cod-v75jq59pg5qcw54w-8000.app.github.dev/api/posts \
  -H "Content-Type: application/json" \
  -d '{"title":"Test","content":"Test content","author":"User"}'
```

### Test Frontend
- Open: https://fantastic-cod-v75jq59pg5qcw54w-3000.app.github.dev
- Should display: Blog posts from API
- Loading state: Initially shows "Loading posts..."
- Error state: Shows error message if API fails

---

## 🚀 Deployment Ready

Aplikasi ini sudah siap untuk production deployment:
- Backend di-configure untuk HTTPS (GitHub Codespaces)
- Frontend environment variables ter-setup dengan benar
- CORS sudah di-enable untuk cross-origin requests
- Database sudah ter-migrate dengan seed data

---

## 📅 Project Info

- **Created**: December 2, 2025
- **Laravel Version**: 12.40.2
- **Next.js Version**: 16.0.6
- **Node.js Version**: v22.21.1
- **PHP Version**: 8.3.14
- **Database**: SQLite
- **Framework**: Full Stack (Backend API + Frontend SPA)

---

## 🔗 Quick Links

| Link | Purpose |
|------|---------|
| [Frontend App](https://fantastic-cod-v75jq59pg5qcw54w-3000.app.github.dev) | View Blog Posts |
| [Backend API](https://fantastic-cod-v75jq59pg5qcw54w-8000.app.github.dev/api/posts) | Get Posts Data |
| [API Status](https://fantastic-cod-v75jq59pg5qcw54w-8000.app.github.dev/up) | Health Check |

---

**Ready to use! Open the links in your browser to start using the application.** 🎉
