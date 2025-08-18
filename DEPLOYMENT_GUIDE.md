# 🌿 GreenNursery - Complete Deployment Guide

## 📋 Project Overview
A professional plant nursery app built with React, TypeScript, Tailwind CSS, Three.js, and Framer Motion. Features 3D animations, dark theme, responsive design, and modern UI components.

## 🛠 Technology Stack
- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Custom Design System
- **3D Graphics**: React Three Fiber, Three.js, Drei
- **Animations**: Framer Motion
- **UI Components**: Shadcn/ui, Radix UI
- **Icons**: Lucide React

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (install via [nvm](https://github.com/nvm-sh/nvm))
- npm or yarn package manager
- Git

### Local Development

1. **Clone the repository**
```bash
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open in browser**
Navigate to `http://localhost:8080`

## 📦 Build for Production

```bash
npm run build
# or
yarn build
```

This creates an optimized build in the `dist/` folder.

## 🌐 Deploy to Vercel (Recommended)

### Method 1: Vercel CLI (Quick)
1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Deploy**
```bash
vercel --prod
```

### Method 2: GitHub Integration
1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Configure build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### Method 3: Manual Upload
1. Run `npm run build`
2. Upload `dist/` folder to Vercel dashboard

## 🎨 Project Structure

```
src/
├── assets/              # Generated images and media
│   ├── hero-nursery.jpg
│   ├── indoor-plants.jpg
│   └── ...
├── components/          # React components
│   ├── ui/             # Shadcn UI components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section with 3D elements
│   ├── Categories.tsx  # Plant categories grid
│   ├── FeaturedPlants.tsx
│   ├── Plant3D.tsx     # 3D plant model
│   ├── PlantCareGuide.tsx
│   └── Footer.tsx
├── pages/              # Page components
│   ├── Index.tsx       # Main page
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── index.css           # Global styles & design system
└── main.tsx           # App entry point
```

## 🎨 Design System

### Color Palette (HSL)
- **Primary**: `142 76% 36%` (Green)
- **Accent**: `161 94% 30%` (Dark Green)
- **Background**: `0 0% 7%` (Dark)
- **Foreground**: `120 15% 95%` (Light)

### Key Features
- Dark forest theme with plant-inspired colors
- Custom gradients and shadow effects
- Smooth animations and hover effects
- Responsive design for all devices

## 🔧 Customization

### Adding New Plants
1. Generate plant images using the imagegen tool
2. Add plant data to components
3. Update categories as needed

### Modifying Colors
Edit `src/index.css` design system variables:
```css
:root {
  --primary: 142 76% 36%;
  --accent: 161 94% 30%;
  /* ... other variables */
}
```

### Adding 3D Models
Modify `src/components/Plant3D.tsx` to add new 3D elements or animations.

## 📱 Features

### Current Features
- ✅ Responsive header with mobile menu
- ✅ Hero section with 3D floating plant
- ✅ Plant categories with hover effects
- ✅ Featured plants with ratings
- ✅ Plant care guide with tips
- ✅ Newsletter subscription
- ✅ Social media links
- ✅ SEO optimization

### Future Enhancements
- Shopping cart functionality
- User authentication
- Plant search and filtering
- Virtual plant consultant
- Plant care reminders
- Community features

## 🔍 SEO Features
- Semantic HTML structure
- Meta tags and Open Graph
- Descriptive alt text for images
- Clean, crawlable URLs
- Mobile-first responsive design

## 📊 Performance
- Vite for fast development and builds
- Image optimization
- Code splitting
- Lazy loading for images
- Efficient animations with Framer Motion

## 🛠 Development Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint

# Type checking
npx tsc --noEmit     # Check TypeScript errors
```

## 🚨 Troubleshooting

### Common Issues

1. **Build fails with Three.js errors**
   - Ensure correct versions: `@react-three/fiber@^8.18`, `@react-three/drei@^9.122.0`

2. **Animations not working**
   - Check Framer Motion installation: `framer-motion@^11.15.0`

3. **Images not loading**
   - Verify image imports use ES6 syntax: `import image from '@/assets/image.jpg'`

### Support
- Check browser console for errors
- Verify all dependencies are installed
- Ensure Node.js version is 18+

## 📄 License
This project is open source and available under the MIT License.

---

**Made with 🌱 for plant lovers everywhere!**