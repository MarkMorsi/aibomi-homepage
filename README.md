# Aibomi ApS - Landing Page

A modern, minimalist landing page for Aibomi ApS showcasing AI-powered web and mobile app development services.

## 🚀 Quick Start

### Development
```bash
npm install
npm run dev
```
Visit `http://localhost:5173` to see the app running locally.

### Production Build
```bash
npm run build
npm run preview
```

## 📦 Deployment

This site is ready to deploy to **Cloudflare Pages**. See [CLOUDFLARE_DEPLOYMENT.md](./CLOUDFLARE_DEPLOYMENT.md) for complete deployment instructions.

**Quick deploy:**
```bash
npm run build
npx wrangler pages deploy dist --project-name=aibomi
```

## 🎨 Design

- **Typography:** DM Sans for a clean, professional look
- **Color Palette:** Calm blues and purples with warm coral accents
- **Components:** Built with shadcn/ui and Radix UI
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion for subtle, purposeful transitions

## 🏗️ Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS 4
- **UI Components:** shadcn/ui (Radix UI)
- **Icons:** Phosphor Icons
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod validation

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn components
│   │   └── CopenhagenSkyline.tsx
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   ├── App.tsx              # Main application
│   └── index.css            # Global styles
├── index.html               # HTML entry point
├── PRD.md                   # Product requirements
└── CLOUDFLARE_DEPLOYMENT.md # Deployment guide
```

## ✨ Features

- **Hero Section** with animated Copenhagen skyline
- **Services Overview** showcasing AI coding, web, and mobile app development
- **Contact Form** with validation (opens mailto: link)
- **Responsive Design** optimized for all devices
- **Smooth Animations** using Framer Motion
- **SEO Optimized** with semantic HTML

## 📝 License

The Spark Template files and resources from GitHub are licensed under the terms of the MIT license, Copyright GitHub, Inc.
