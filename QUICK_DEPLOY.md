# 🎯 Cloudflare Pages - Quick Deploy Guide

**Project:** Aibomi ApS Landing Page  
**Status:** ✅ Ready for Production Deployment

---

## Fastest Path to Deployment (2 minutes)

```bash
# 1. Build the project
npm run build

# 2. Deploy to Cloudflare Pages
npx wrangler pages deploy dist --project-name=aibomi
```

That's it! Follow the authentication prompts and your site will be live.

---

## What's Been Optimized

### ✅ Performance
- Code splitting and tree-shaking enabled
- CSS purged and minified
- Modern ES2020 build target
- Asset caching headers configured
- Gzip/Brotli compression ready

### ✅ Security
- Security headers configured in `public/_headers`
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Strict referrer policy
- Permissions policy set

### ✅ SEO
- Semantic HTML structure
- Proper meta tags in `index.html`
- Clean, descriptive URLs
- Mobile-responsive design

### ✅ Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful fallbacks for older browsers

---

## Project Configuration

| Setting | Value |
|---------|-------|
| **Framework** | React 19 + TypeScript |
| **Build Tool** | Vite 7 |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |
| **Node Version** | 18+ (see `.nvmrc`) |
| **Package Manager** | npm |

---

## Deployment Options

### Option 1: Wrangler CLI (Fastest)
```bash
npm run build
npx wrangler pages deploy dist --project-name=aibomi
```

### Option 2: Cloudflare Dashboard + Git
1. Push code to GitHub/GitLab
2. Connect repository in Cloudflare Pages
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Deploy automatically on every push

---

## Custom Domain Setup

After deploying:

1. Go to Cloudflare Pages dashboard
2. Select your project
3. Navigate to **Custom domains**
4. Click **Set up a custom domain**
5. Enter: `aibomi.eu` or `www.aibomi.eu`
6. Follow DNS configuration steps
7. SSL certificate auto-provisions

**DNS will propagate in 1-24 hours**

---

## Build Verification

Before deploying, optionally run:

```bash
# Run verification script
bash verify-build.sh

# Or manually test
npm run build
npm run preview
```

Visit `http://localhost:4173` to test the production build locally.

---

## Files & Structure

```
├── dist/                    # Production build output (gitignored)
├── public/
│   ├── _headers            # Cloudflare security headers
│   └── _redirects          # SPA routing configuration
├── src/
│   ├── App.tsx             # Main application
│   ├── components/         # React components
│   ├── index.css           # Global styles + theme
│   └── ...
├── index.html              # Entry point
├── vite.config.ts          # Build configuration
├── package.json            # Dependencies + scripts
├── .nvmrc                  # Node version specification
└── CLOUDFLARE_DEPLOYMENT.md # Detailed deployment guide
```

---

## Environment Variables

**None required!** This is a static site with no backend or API keys.

The contact form uses `mailto:` links, so no email service integration needed.

---

## Post-Deployment Checklist

After deploying, verify:

- [ ] Site loads at `*.pages.dev` URL
- [ ] All sections render correctly
- [ ] Contact form opens mailto: link
- [ ] Copenhagen skyline SVG displays
- [ ] Service cards animate on hover
- [ ] Footer shows correct company info
- [ ] Mobile responsive (test on phone)
- [ ] No console errors
- [ ] HTTPS enabled (automatic)

---

## Troubleshooting

**Build fails locally:**
```bash
rm -rf node_modules package-lock.json dist
npm install
npm run build
```

**Deployment fails:**
- Check Node version: `node -v` (should be 18+)
- Verify build works locally first
- Check Cloudflare Pages build logs
- Ensure output directory is set to `dist`

**Site not loading:**
- Wait 2-3 minutes after deployment
- Clear browser cache
- Check Cloudflare Pages dashboard for errors
- Verify DNS if using custom domain

---

## Support & Resources

- **Cloudflare Pages Docs:** https://developers.cloudflare.com/pages/
- **Wrangler CLI Docs:** https://developers.cloudflare.com/workers/wrangler/
- **Deployment Guide:** See `CLOUDFLARE_DEPLOYMENT.md`
- **Checklist:** See `DEPLOYMENT_CHECKLIST.md`

---

## Success! 🎉

Your Aibomi ApS landing page is production-ready and optimized for Cloudflare Pages deployment.

**Questions?** Contact hey.you@aibomi.eu
