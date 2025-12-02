# Laravel Server Port Information & GitHub Codespaces URLs

## 🌐 Access URLs

### Browser Cloud (GitHub Codespaces - PUBLIC)
- **Backend API**: https://fantastic-cod-v75jq59pg5qcw54w-8000.app.github.dev/api/posts
- **Frontend App**: https://fantastic-cod-v75jq59pg5qcw54w-3000.app.github.dev
- **Backend Home**: https://fantastic-cod-v75jq59pg5qcw54w-8000.app.github.dev

### Local Browser (Inside VS Code Terminal - PRIVATE)
- **Backend API**: http://localhost:8000/api/posts
- **Frontend App**: http://localhost:3000
- **Backend Home**: http://localhost:8000

## 📊 Backend Configuration

### Port Configuration
- **Port Number**: `8000`
- **Host**: `0.0.0.0`

### API Endpoints
- `GET /api/posts` - Fetch all posts
- `POST /api/posts` - Create new post
- `GET /api/posts/{id}` - Get post detail
- `PUT /api/posts/{id}` - Update post
- `DELETE /api/posts/{id}` - Delete post

## 📊 Frontend Configuration

### Port Configuration  
- **Port Number**: `3000`
- **Environment Variable**: `NEXT_PUBLIC_API_URL=https://fantastic-cod-v75jq59pg5qcw54w-8000.app.github.dev/api`

### Routes Available

- `GET /` - Blog posts listing page
- `/posts` - All posts from Laravel API

## 🗄️ Database

- **Connection**: SQLite
- **Location**: `/workspaces/freetipsvps/backend/database/database.sqlite`
- **Status**: ✅ Ready with sample data

## 📝 Sample Data

3 posts pre-seeded in database:
1. "Belajar Laravel API" by Admin
2. "Next.js Development" by Developer
3. "Full Stack Development" by Expert

## 🔄 Data Flow

```
User Browser
    ↓
Frontend (https://fantastic-cod-v75jq59pg5qcw54w-3000.app.github.dev)
    ↓
Next.js App (port 3000)
    ↓
API Client (lib/api.ts)
    ↓
HTTP GET Request to https://fantastic-cod-v75jq59pg5qcw54w-8000.app.github.dev/api
    ↓
Backend (https://fantastic-cod-v75jq59pg5qcw54w-8000.app.github.dev)
    ↓
Laravel API (port 8000)
    ↓
PostController
    ↓
SQLite Database
```

---

**Created**: December 2, 2025
**Framework**: Laravel 12.40.2 + Next.js 16.0.6
**PHP Version**: 8.3.14
**Node Version**: v22.21.1

