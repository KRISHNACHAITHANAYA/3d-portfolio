# 3D Developer Portfolio

A stunning, production-ready 3D developer portfolio built with React, Three.js, Framer Motion, and Tailwind CSS. Features a cyberpunk neon design with interactive 3D background, smooth animations, and a complete contact form.

## ✨ Features

- **3D Interactive Background** - Particle galaxy, orbiting spheres, animated grid floor with Three.js
- **Cyberpunk Neon Design** - Purple, blue, and cyan neon accents with glassmorphism effects
- **Smooth Animations** - Framer Motion scroll triggers, parallax effects, and hover interactions
- **Fully Responsive** - Mobile-optimized across all sections
- **Contact Form** - Working form with validation and success notifications
- **Performance Optimized** - Vite bundler, optimized Three.js rendering

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm/yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The site will open at `http://localhost:5173`

## 📁 Project Structure

```
src/
├── three/
│   ├── Scene.tsx          # Main Three.js canvas
│   ├── Particles.tsx      # Particle galaxy
│   └── FloatingIcons.tsx  # Floating tech icons
├── components/
│   ├── Navbar.tsx         # Sticky navigation
│   ├── Hero.tsx           # Hero section with profile
│   ├── About.tsx          # About with stats
│   ├── Skills.tsx         # Tech stack with 3D model
│   ├── Projects.tsx       # Project showcase
│   ├── Education.tsx      # Education timeline
│   ├── Contact.tsx        # Contact form
│   └── Footer.tsx         # Footer with social links
├── App.tsx                # Main app component
├── main.tsx               # Entry point
├── index.css              # Global styles & animations
└── index.html             # HTML template
```

## 🎨 Design System

### Colors
- **Base**: `#050510` (Dark black)
- **Primary**: `#a855f7` (Neon purple)
- **Secondary**: `#3b82f6` (Electric blue)
- **Accent**: `#06b6d4` (Cyan)

### Fonts
- **Display**: Orbitron (headings, logo)
- **Body**: Rajdhani (paragraphs, UI text)

## 🛠️ Tech Stack

- React 18 + TypeScript
- Tailwind CSS
- Three.js + @react-three/fiber
- Framer Motion
- GSAP (ScrollTrigger)
- react-type-animation
- Vite

## 📝 Customization

### Personal Information
Edit the following files to add your own content:
- `src/components/Hero.tsx` - Name, titles, CTA buttons
- `src/components/About.tsx` - About text and stats
- `src/components/Projects.tsx` - Add your projects
- `src/components/Education.tsx` - Education details
- `src/components/Footer.tsx` - Social links

### Resume Link
Update the `resumeUrl` variable in:
- `src/components/Navbar.tsx`
- `src/components/Hero.tsx`
- `src/components/Contact.tsx`

Replace with your own Google Drive link or hosting URL.

### Social Links
Update GitHub and LinkedIn URLs in:
- `src/components/Footer.tsx`
- `src/components/Contact.tsx`

## 🎬 Animation Details

- **Hero Profile Rings**: CSS keyframe animations rotating at different speeds
- **Particle Galaxy**: BufferGeometry with 8000 particles in 3D space
- **Scroll Animations**: Framer Motion useInView hooks trigger on scroll
- **Hover Effects**: 3D tilt with perspective transform
- **Glow Effects**: CSS text-shadow and box-shadow for neon look

## 📱 Responsive Breakpoints

- Mobile: 375px width optimized
- Tablet: 768px+ (md)
- Desktop: 1024px+ (lg)

## ⚡ Performance Tips

1. The 3D scene uses WebGL optimization with proper memory management
2. Lazy-load images where needed
3. Scroll animations are GPU-accelerated
4. ParallelComposition effect for bloom is optimized

## 🔧 Deployment

Build and deploy to any static hosting (Vercel, Netlify, GitHub Pages):

```bash
npm run build
```

The `dist` folder contains optimized production files.

## 📄 License

This project is open source and available under the MIT License.

## ✉️ Support

For issues or customization help, refer to the component files - they are fully documented and easy to modify.

---

**Built with ❤️ using React + Three.js + Web Magic**
