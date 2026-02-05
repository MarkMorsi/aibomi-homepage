# Cloudflare Pages Deployment Guide

This Aibomi ApS landing page is ready to be deployed to Cloudflare Pages.

## Deployment Steps

1. **Build the project:**
   ```bash
   npm run build
   ```
   This creates a `dist` folder with the production-ready static files.

2. **Deploy to Cloudflare Pages:**
   
   ### Option A: Using Cloudflare Dashboard
   - Go to [Cloudflare Pages](https://pages.cloudflare.com/)
   - Click "Create a project"
   - Connect your Git repository (GitHub, GitLab, etc.)
   - Configure build settings:
     - **Build command:** `npm run build`
     - **Build output directory:** `dist`
     - **Root directory:** `/`
   - Click "Save and Deploy"

   ### Option B: Using Wrangler CLI
   ```bash
   npm install -g wrangler
   wrangler pages deploy dist
   ```

3. **Custom Domain (Optional):**
   - In Cloudflare Pages dashboard, go to your project
   - Navigate to "Custom domains"
   - Add your domain (e.g., aibomi.eu or www.aibomi.eu)
   - Cloudflare will automatically configure DNS and SSL

## Build Configuration

The project uses Vite and is pre-configured for static site generation. All assets are bundled and optimized during the build process.

## Notes

- The site is fully static with no server-side requirements
- Form submission uses `mailto:` links which work on all browsers
- All animations and interactivity are client-side
- The site is optimized for performance with code splitting and lazy loading
