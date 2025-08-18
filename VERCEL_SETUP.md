# 🚀 Vercel Deployment Guide for GreenNursery

## Quick Deploy (Fastest Method)

### Option 1: One-Click Deploy
1. Push your code to GitHub/GitLab/Bitbucket
2. Visit [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Click "Deploy" (Vercel auto-detects Vite settings)

### Option 2: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy (run from project root)
vercel

# Follow prompts:
# - Link to existing project? No
# - Project name: green-nursery (or your choice)
# - Directory: ./
# - Override settings? No

# Deploy to production
vercel --prod
```

## Project Settings

If you need to configure manually:

### Build Settings
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Environment Variables
No environment variables needed for basic deployment.

## Custom Domain Setup

1. **Buy a domain** (e.g., from Namecheap, GoDaddy)
2. **In Vercel Dashboard**:
   - Go to Project Settings → Domains
   - Add your domain (e.g., `greennursery.com`)
   - Follow DNS configuration instructions

3. **DNS Settings** (at your domain registrar):
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.19.61
```

## Performance Optimization

Vercel automatically provides:
- ✅ Global CDN
- ✅ Image optimization
- ✅ Compression (gzip/brotli)
- ✅ HTTP/2 & HTTP/3
- ✅ Edge functions
- ✅ Analytics

## Deployment URLs

After deployment, you'll get:
- **Production**: `https://your-project-name.vercel.app`
- **Preview**: Auto-generated for each pull request
- **Custom Domain**: Your chosen domain (if configured)

## Monitoring

### Vercel Analytics (Free)
1. Go to Project → Analytics
2. View page views, performance metrics
3. Track Core Web Vitals

### Custom Analytics
Add Google Analytics to `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

## Troubleshooting

### Common Deployment Issues

1. **Build fails**
   ```bash
   # Check locally first
   npm run build
   npm run preview
   ```

2. **Images not loading**
   - Ensure images are in `src/assets/`
   - Use proper ES6 imports: `import img from '@/assets/image.jpg'`

3. **3D elements not rendering**
   - Three.js should work fine on Vercel
   - Check browser console for WebGL errors

4. **Fonts not loading**
   - Use Google Fonts via `index.html` links
   - Avoid local font files for better performance

### Performance Tips

1. **Image Optimization**
   ```jsx
   // Use Vercel's automatic optimization
   <img src="/assets/image.jpg" alt="Description" loading="lazy" />
   ```

2. **Code Splitting**
   ```jsx
   // Lazy load heavy components
   const Plant3D = lazy(() => import('@/components/Plant3D'));
   ```

## Continuous Deployment

### Git Workflow
1. **Development**: Push to `dev` branch → Vercel creates preview
2. **Production**: Merge to `main` branch → Auto-deploy to production
3. **Rollback**: Use Vercel dashboard to revert deployments

### Branch Protection
Enable in GitHub:
- Require pull request reviews
- Require status checks (Vercel build)
- Auto-delete head branches

## Advanced Features

### Edge Functions (if needed)
```typescript
// api/plants.ts
export default function handler(req: Request) {
  return new Response(JSON.stringify({ plants: [] }), {
    headers: { 'content-type': 'application/json' }
  });
}
```

### Redirects & Rewrites
Create `vercel.json`:
```json
{
  "redirects": [
    { "source": "/shop", "destination": "/#plants", "permanent": false }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" }
      ]
    }
  ]
}
```

## Cost Estimation

### Vercel Pricing
- **Hobby (Free)**: 
  - 100GB bandwidth/month
  - Unlimited personal projects
  - 1 concurrent build

- **Pro ($20/month)**:
  - 1TB bandwidth/month
  - Team collaboration
  - Advanced analytics

For a plant nursery business, Pro plan recommended for:
- Custom domain SSL
- Team access
- Priority support
- Enhanced analytics

## Success Checklist

- [ ] Code pushed to Git repository
- [ ] Vercel project created and deployed
- [ ] All pages load correctly
- [ ] 3D animations working
- [ ] Mobile responsiveness verified
- [ ] Custom domain configured (if desired)
- [ ] Analytics set up
- [ ] Performance metrics green

## Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber)

---

🎉 **Your plant nursery is ready to grow online!**