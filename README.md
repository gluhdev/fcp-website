# 🏢 Full Custom Packaging - Premium Website

Premium website for Full Custom Packaging company built with Next.js, TypeScript, and Framer Motion.

🔗 **Live Demo**: [fullcustompackaging.vercel.app](https://fullcustompackaging.vercel.app)

## ✨ Features

- 🎨 Modern, responsive design with mobile-first approach
- 🔤 Dynamic font switcher with 10 professional font combinations
- 🎬 Hero section with video/image carousel
- 📱 Fully optimized for mobile devices
- 🎯 Active navigation with section highlighting
- ✉️ Contact form
- 🌟 Premium animations with Framer Motion
- 💛 Navy blue and gold color scheme

## 🚀 Quick Deploy to Vercel

### Option 1: One-Click Deploy (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/gluhdev/fcp-website&project-name=fullcustompackaging)

### Option 2: Manual Deploy
1. Fork or clone this repository
2. Go to [vercel.com](https://vercel.com)
3. Import the repository
4. Deploy with default settings

The project will be deployed as `fullcustompackaging.vercel.app`

## 🛠 Tech Stack

- **Framework**: Next.js 16.0.3
- **Language**: TypeScript
- **Styling**: Custom CSS (inline styles)
- **Animations**: Framer Motion
- **Icons**: Lucide Icons
- **Font Options**: 10 premium Google Font combinations

## 💻 Local Development

1. Clone the repository:
```bash
git clone https://github.com/gluhdev/fcp-website.git
cd fcp-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
fcp-website/
├── app/
│   ├── page.tsx          # Main page component
│   ├── layout.tsx        # Root layout
│   ├── globals.css       # Global styles
│   └── mobile.css        # Mobile-specific styles
├── components/
│   └── ui/
│       ├── header-fcp.tsx    # Navigation header
│       ├── button.tsx        # Button component
│       ├── menu-toggle-icon.tsx # Animated menu icon
│       └── use-scroll.tsx    # Scroll hook
├── public/               # Static assets
└── lib/                  # Utilities
```

## 🎨 Customization

### Change Colors
Edit the color values in the components:
- Primary: `#020617` (Navy Blue)
- Accent: `#FFD700` (Gold)

### Font Combinations
The site includes 10 pre-configured professional font combinations that can be switched dynamically by users.

### Content
Update the content in `app/page.tsx`:
- Company information
- Services descriptions
- Contact details

## 📱 Mobile Optimization

The website is fully responsive with:
- Touch-friendly navigation
- Optimized font sizes
- Adaptive layouts
- No horizontal scrolling
- Bottom sheet font selector

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

This project is private property of Full Custom Packaging.

## 🤝 Support

For support, email info@fullcustompackaging.com

---

Built with ❤️ using Next.js and deployed on Vercel