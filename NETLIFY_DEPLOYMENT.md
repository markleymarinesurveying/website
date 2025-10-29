# Netlify Deployment Guide for Markley Marine Surveying

## 📋 Pre-Deployment Checklist

✅ **Files Created/Modified:**
- `netlify.toml` - Netlify configuration
- `package.json` - Added static build scripts
- `vite.config.ts` - Optimized for static deployment
- `README.md` - Complete documentation

## 🚀 Deployment Steps

### Option 1: Manual Deployment (Recommended for first deployment)

1. **Build the site locally:**
   ```bash
   npm install
   npm run build:static
   ```

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com) and log in
   - Click "Add new site" → "Deploy manually"
   - Drag and drop the `dist/public` folder
   - Your site will be live immediately!

### Option 2: Git Integration (Recommended for ongoing updates)

1. **Push code to Git repository** (GitHub, GitLab, etc.)

2. **Connect to Netlify:**
   - In Netlify dashboard: "Add new site" → "Import from Git"
   - Connect your repository
   - Configure build settings:
     - **Build command:** `npm run build:static`
     - **Publish directory:** `dist/public`
     - **Node version:** `18`

3. **Deploy automatically** on every Git push

## ⚙️ Build Configuration

The following files configure the build process:

- **`netlify.toml`**: Tells Netlify how to build and serve the site
- **`package.json`**: Contains the `build:static` script
- **`vite.config.ts`**: Optimized Vite configuration for static builds

## 📧 Contact Form Configuration

The contact form currently uses mock submission. To make it functional:

### Option A: Netlify Forms (Easiest)
1. Add `data-netlify="true"` to the form element
2. Add hidden input: `<input type="hidden" name="form-name" value="contact" />`
3. Forms will appear in Netlify dashboard automatically

### Option B: External Service
- Use Formspree, Getform, or EmailJS
- Update form submission in `ContactForm.tsx`

## 🌐 Custom Domain

After deployment:
1. Go to Site settings → Domain management
2. Add your custom domain
3. Netlify provides free HTTPS certificates

## 📱 Site Features Ready for Deployment

✅ Responsive design works on all devices
✅ All navigation and routing configured
✅ Images and assets properly referenced
✅ SEO-friendly structure
✅ Fast loading with optimized builds
✅ Professional branding with logo integration

## 🔧 Environment Variables (if needed)

In Netlify dashboard → Site settings → Environment variables:
- Add any required environment variables
- Current setup doesn't require any special variables

## 📊 Performance Optimizations

The build includes:
- Code splitting for faster loading
- Image optimization
- CSS minification
- Tree shaking for smaller bundles

## 🆘 Troubleshooting

**Build fails?**
- Check Node.js version (should be 18+)
- Verify all dependencies are in package.json
- Check build logs in Netlify dashboard

**Assets not loading?**
- Verify paths in vite.config.ts
- Check that attached_assets folder is included

**Routing issues?**
- Netlify redirects are configured in netlify.toml
- SPA routing should work correctly

## 📞 Support

For deployment issues:
- Check Netlify documentation
- Review build logs in Netlify dashboard
- Verify all files are committed to Git (for Git deployments)