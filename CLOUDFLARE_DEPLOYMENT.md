# Cloudflare Pages Deployment Guide

This Aibomi ApS landing page is ready to be deployed to Cloudflare Pages.

## Prerequisites

- A Cloudflare account (free tier works)
- Node.js 18+ installed locally (for local builds)
- Git repository (for automatic deployments)

## Deployment Steps

### Option A: Direct Deployment via Wrangler CLI (Recommended)

1. **Install Wrangler globally:**
   ```bash
   npm install -g wrangler
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```
   This creates a `dist` folder with production-ready static files.

3. **Deploy to Cloudflare Pages:**
   ```bash
   wrangler pages deploy dist --project-name=aibomi
   ```
   Follow the prompts to authenticate with Cloudflare if needed.

4. **Your site is live!** Cloudflare will provide a URL like `aibomi.pages.dev`

### Option B: Git-based Deployment via Cloudflare Dashboard

1. **Push your code to a Git repository** (GitHub, GitLab, etc.)

2. **Connect to Cloudflare Pages:**
   - Go to [Cloudflare Pages](https://pages.cloudflare.com/)
   - Click "Create a project"
   - Connect your Git repository
   - Select the repository containing this code

3. **Configure build settings:**
   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `/`
   - **Node version:** `18` or higher
   
4. **Click "Save and Deploy"**
   - Cloudflare will automatically build and deploy
   - Future commits will trigger automatic rebuilds

### Custom Domain Setup (Optional)

1. **Add a custom domain:**
   - In Cloudflare Pages dashboard, go to your project
   - Navigate to "Custom domains"
   - Click "Set up a custom domain"
   - Enter your domain (e.g., `aibomi.eu` or `www.aibomi.eu`)

2. **Configure DNS:**
   - If using Cloudflare DNS: automatic configuration
   - If using external DNS: add the CNAME record provided
   
3. **SSL/TLS:**
   - Cloudflare automatically provisions SSL certificates
   - Your site will be served over HTTPS

## Build Configuration

The project uses:
- **Vite 7** for fast builds and optimized production bundles
- **React 19** for the UI
- **Tailwind CSS 4** for styling
- **TypeScript** for type safety

All assets are bundled, tree-shaken, and minified during the build process.

## Technical Details

- ✅ Fully static site with no server-side requirements
- ✅ Form submission uses `mailto:` links (works on all browsers)
- ✅ All animations and interactivity are client-side
- ✅ Code splitting and lazy loading for optimal performance
- ✅ Optimized for Core Web Vitals
- ✅ Mobile-responsive design
- ✅ SEO-friendly markup

## Performance Optimizations

- Tree-shaking removes unused code
- CSS is purged and minified
- Images and assets are optimized
- Modern JavaScript with fallbacks
- Gzip/Brotli compression enabled by default on Cloudflare

## Troubleshooting

**Build fails:**
- Ensure Node.js 18+ is installed: `node --version`
- Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`
- Run build locally first to catch errors: `npm run build`

**Deployment URL not working:**
- Wait 1-2 minutes for DNS propagation
- Check build logs in Cloudflare dashboard
- Verify build output directory is set to `dist`

**Custom domain not working:**
- Verify DNS records are correctly configured
- Wait up to 24 hours for DNS propagation
- Check SSL/TLS settings are on "Full" or "Flexible"

## Local Preview

To preview the production build locally:
```bash
npm run build
npm run preview
```

This serves the `dist` folder at `http://localhost:4173`
