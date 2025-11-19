# FCP Website Version History

## Version 2.0.0 - Enhanced Font System
**Date**: November 18, 2024
**Commit Hash**: `80a63122d80b479dd3698263714bcffa8923d022`
**Git Tag**: `v2.0.0`
**Status**: ✅ Production Ready

### New Features
- 🔤 **20 Professional Font Combinations** (doubled from v1.0.0)
- 🎨 **Advanced Font Panel Component**:
  - Close button (X) for easy dismissal
  - Current selection display
  - Scrollable list for all 20 fonts
  - Mobile-optimized bottom sheet design
  - Expand/collapse functionality on mobile
  - Visual selection indicators with golden highlights
  - Apply & Close button for better UX
- 🌐 **English-only font names** for international clients
- 📦 **Updated carousel images** for Custom Packaging Solutions

### Font Combinations
1. Bebas Neue + Montserrat
2. Playfair Display + Poppins
3. Space Grotesk + Inter
4. Oswald + Roboto
5. Bodoni Moda + Raleway
6. Outfit + DM Sans
7. Sora + Nunito Sans
8. Anton + Work Sans
9. Raleway + Lato
10. Orbitron + Exo 2
11. **NEW** Merriweather + Open Sans
12. **NEW** Abril Fatface + Source Sans Pro
13. **NEW** Cormorant Garamond + Fira Sans
14. **NEW** Teko + Rubik
15. **NEW** Righteous + Oxygen
16. **NEW** Archivo Black + Assistant
17. **NEW** Cinzel + Quattrocento Sans
18. **NEW** Russo One + Karla
19. **NEW** Josefin Sans + Mulish
20. **NEW** IBM Plex Serif + IBM Plex Sans

### Technical Improvements
- Complete rewrite of font panel as separate component
- Better mobile UX with expandable panel
- Improved font preview with heading and body samples
- Added all Google Font imports for new combinations
- Cleaner code structure with modular components
- Fixed TypeScript and CSS import issues

---

## Version 1.0.0 - Production Release
**Date**: November 18, 2024
**Commit Hash**: `36fbb79f57a505804af439b21d3d4faef9a18ab4`
**Git Tag**: `v1.0.0`
**Status**: ✅ Production Ready

### Features
- 🎨 Premium responsive design with mobile-first approach
- 🔤 10 professional font combinations with dynamic switcher
- 🎬 Video/photo carousel hero section
- 📦 Service cards with images:
  - Custom Packaging Solutions
  - Premium Apparel
  - Industrial Machinery
- 📍 Active navigation highlighting with yellow underline
- ✨ Glassmorphism effects and smooth animations
- 💛 Navy blue (#020617) and gold (#FFD700) color scheme
- 📱 Full mobile optimization with custom menu
- 📧 Contact form with validation

### Technical Stack
- **Framework**: Next.js 16.0.3 (Turbopack)
- **Language**: TypeScript
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Styling**: Inline styles (Tailwind v4 compatibility solution)
- **Fonts**: Google Fonts (10 combinations)
- **Deployment**: Vercel-ready configuration

### Fixed Issues
- ✅ TypeScript error in tailwind.config.ts (darkMode configuration)
- ✅ Duplicate accent property in Tailwind config
- ✅ CSS @import order for proper font loading
- ✅ Mobile overflow and scrolling issues
- ✅ Footer accessibility on mobile devices

### Repository
- **GitHub**: https://github.com/gluhdev/fcp-website
- **Live URL**: fullcustompackaging.vercel.app (pending deployment)

### Build Commands
```bash
npm install        # Install dependencies
npm run dev       # Development server
npm run build     # Production build
npm run start     # Production server
```

### Deployment
Ready for deployment on Vercel with custom domain configuration.

---

## Previous Versions
No previous versions - this is the initial production release.