# QuadTech Consulting Website

A modern, fully responsive website for QuadTech Consulting - a new IT consulting startup. Built with Next.js, React, TailwindCSS, and Framer Motion.

## Features

- **Modern Design**: Clean, professional UI with blue/teal/cyan color scheme
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Animated Navigation**: Dropdown menu with smooth animations
- **Accessibility First**: 
  - Readable font sizes (minimum 14px/text-sm)
  - ARIA labels and roles throughout
  - Semantic HTML structure
  - Keyboard navigation support
- **Fast Animations**: Snappy 150-300ms transitions for immediate feedback
- **Professional Imagery**: Unsplash images integrated throughout
- **SEO Optimized**: Proper metadata and semantic HTML structure
- **Fast Performance**: Built on Next.js 15 with App Router
- **Well Documented**: Comments throughout the codebase

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Linting**: Biome

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine

### Installation

1. Navigate to the project directory:
```bash
cd quadtech-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
quadtech-website/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── Services.tsx        # Services section
│   ├── Onboarding.tsx      # 4-step onboarding process section
│   ├── About.tsx           # About/Why Choose Us section
│   ├── Contact.tsx         # Contact form section
│   └── Footer.tsx          # Footer
└── public/                 # Static assets
```

## Sections

1. **Hero**: Eye-catching introduction with professional imagery and feature cards
2. **Services**: Comprehensive IT solutions with unique color schemes
   - Managed IT Services
   - Website Development & Support
   - Email/Domain Migration
   - Cybersecurity Training
   - State Compliance & Security
   - Penetration Testing
   - Security Assessments
   - Cloud Solutions
   - VoIP & Phone Systems
   - Backup & Disaster Recovery
   - IT Consulting (vCIO)
3. **Onboarding**: Simple 4-step process (Introduction → Assessment → Proposal → Onboarding)
4. **About (Why Choose Us)**: Company values highlighting startup advantages
5. **Contact**: Contact form and information
6. **Footer**: Site navigation and company details

## Navigation

- **Home**: Scrolls to hero section
- **Services**: Animated dropdown with all services
- **Why Choose Us**: Company values and advantages
- **Contact**: Contact form and information
- **Get Started**: CTA button linking to contact

## Customization

### Colors
The primary color scheme uses blue tones. To customize, update the TailwindCSS classes in components:
- Primary: `bg-blue-600`, `text-blue-600`
- Gradients: `from-blue-50 to-indigo-50`

### Content
Edit the component files in the `components/` directory to update:
- Company name and branding
- Service offerings
- Contact information
- Statistics and testimonials

### Metadata
Update SEO information in `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Your Company Name",
  description: "Your description",
};
```

## Build for Production

```bash
npm run build
npm start
```

## Deploy

This website can be deployed to:
- **Vercel** (recommended): `vercel deploy`
- **Netlify**: Connect your Git repository
- **Any Node.js hosting**: Upload the `.next` build folder

## License

This project is created for QuadTech Consulting.

## Support

For questions or support, contact info@quadtechconsulting.com
