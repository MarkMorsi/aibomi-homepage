# 🚀 Pre-Deployment Checklist

## ✅ Code Quality

- [x] All compone



- [x] All components render correctly
- [x] Forms validate properly
- [x] Responsive design works on mobile, tablet, and desktop
- [x] All links and buttons functional

## ✅ Content Review

- [x] Company name: **Aibomi ApS**
- [x] Page title set in `index.html`: "Aib
- [x] Favicon (add custom icon


- [x] Production bundle size is reasonab



- [x] Email mailto: link opens correctly
- [x] Service cards display with hover
- [x] Footer displays company information
## ✅ Browser Compatibility

- [x] Safari (la


- [x] Output directory is `dist`
- [x] No hardcoded localhost URLs



npm run build

Or follow the complete guide in [CL
## 📋 Post-Deployment
After deployment, verify:
- [ ] Site loads at Cloudflare Pages URL
- [ ] Contact form validation works
- [ ] Mobile responsiveness maintained

---


















```bash
npm run build
npx wrangler pages deploy dist --project-name=aibomi
```

Or follow the complete guide in [CLOUDFLARE_DEPLOYMENT.md](./CLOUDFLARE_DEPLOYMENT.md)

## 📋 Post-Deployment

After deployment, verify:

- [ ] Site loads at Cloudflare Pages URL
- [ ] All sections render correctly
- [ ] Contact form validation works
- [ ] No console errors
- [ ] Mobile responsiveness maintained
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active (HTTPS)

---

**Questions or issues?** Contact hey.you@aibomi.eu
