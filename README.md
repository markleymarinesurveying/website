# Markley Marine Surveying Website

A professional website for Markley Marine Surveying, built with React, TypeScript, and Tailwind CSS.

## 🚀 Quick Start for Netlify Deployment

### Prerequisites
- Node.js 18 or higher
- npm

### Local Development
```bash
# Install dependencies
npm install

# Run in static mode (for frontend-only development)
npm run dev:static

# Build for production
npm run build:static
```

### Manual Deployment to Netlify

1. **Build the static site:**
   ```bash
   npm install
   npm run build:static
   ```

2. **Upload to Netlify:**
   - Log into your Netlify dashboard
   - Drag and drop the `dist/public` folder to deploy
   - Or use Netlify CLI: `netlify deploy --prod --dir=dist/public`

### Automated Netlify Deployment

1. **Connect your repository to Netlify:**
   - Link your Git repository to Netlify
   - Set build command: `npm run build:static`
   - Set publish directory: `dist/public`

2. **Environment Variables (if needed):**
   - `NODE_VERSION=18`

### Contact Form Setup

The contact form is currently configured with mock functionality. For a production deployment, you have several options:

#### Option 1: Netlify Forms (Recommended)
1. Add `netlify` attribute to the form in `ContactForm.tsx`
2. Add hidden input: `<input type="hidden" name="form-name" value="contact" />`
3. Update form action to handle Netlify form submission

#### Option 2: External Form Service
- Integrate with services like Formspree, Getform, or EmailJS
- Update the form submission handler in `ContactForm.tsx`

#### Option 3: Serverless Functions
- Use Netlify Functions for custom form processing
- Set up email integration (SendGrid, etc.)

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom hooks
│   │   └── lib/           # Utilities
├── attached_assets/       # Images and assets
├── dist/public/          # Build output (created after build)
├── netlify.toml          # Netlify configuration
└── vite.config.ts        # Vite configuration
```

## 🛠️ Available Scripts

- `npm run dev:static` - Start development server (frontend only)
- `npm run build:static` - Build for production (frontend only)
- `npm run preview` - Preview production build locally
- `npm run check` - Run TypeScript type checking

## 🌐 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern React**: Built with React 18 and TypeScript
- **Fast Performance**: Optimized with Vite build tool
- **SEO Ready**: Proper meta tags and semantic HTML
- **Accessibility**: WCAG compliant components
- **Professional UI**: Custom components built with Radix UI

## 📱 Pages

- **Home**: Hero section, services overview, testimonials
- **About**: Detailed information about Steven Markley and credentials
- **Services**: Comprehensive service descriptions and pricing
- **Gallery**: Portfolio of recent survey projects
- **Contact**: Quote request form and contact information

## 🎨 Customization

### Brand Colors
The website uses a marine-themed color palette defined in `tailwind.config.ts`. Key colors include:
- Primary: Marine blue
- Success: Green for CTAs
- Muted: Gray tones for text

### Images
- Logo: `attached_assets/MarineSurvey_logo.webp`
- Gallery images: `attached_assets/generated_images/`

## 📞 Contact Information

- Phone: (561) 504-9576
- Email: info@markleymarinesurveying.com
- Service Area: Florida East & West Coasts

## 📄 License

MIT License - see package.json for details