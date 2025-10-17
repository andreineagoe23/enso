# Enso Digital - Portfolio Website

A modern, responsive portfolio website for Enso Digital, a web development and design company. Built with React, Tailwind CSS, and Framer Motion.

## Features

- ✨ **Modern Design**: Clean, minimalist Japanese-inspired aesthetic
- 🌙 **Dark/Light Mode**: Toggle between light and dark themes
- 📱 **Responsive**: Mobile-friendly design that works on all devices
- 🎭 **Animations**: Smooth transitions and animations with Framer Motion
- 🚀 **Performance**: Optimized for speed and SEO
- 📧 **Contact Form**: Functional contact form with validation
- 🎨 **Gradient Backgrounds**: Beautiful animated gradient backgrounds
- 📊 **Smooth Scrolling**: Smooth navigation between sections

## Tech Stack

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons
- **GitHub Pages** - Static site hosting

## Sections

1. **Hero** - Full-screen introduction with animated background
2. **About** - Company information and features
3. **Projects** - Portfolio showcase with project cards
4. **Services** - Service offerings with icons and descriptions
5. **Contact** - Contact form and company information
6. **Footer** - Links and additional information

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/enso-digital.git
cd enso-digital
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

### GitHub Pages

1. Update the `homepage` field in `package.json` with your GitHub username:

```json
"homepage": "https://yourusername.github.io/enso-digital"
```

2. Deploy to GitHub Pages:

```bash
npm run deploy
```

This will build the project and deploy it to the `gh-pages` branch.

### Other Hosting Platforms

The project can be deployed to any static hosting platform:

- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist` folder
- **AWS S3**: Upload the `dist` folder contents

## Customization

### Colors and Branding

Update the gradient colors in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    // Customize your gradients here
  }
}
```

### Content

- **Hero Section**: Update the tagline in `src/components/Hero.jsx`
- **About Section**: Modify company description in `src/components/About.jsx`
- **Projects**: Add your projects in `src/components/Projects.jsx`
- **Services**: Update services in `src/components/Services.jsx`
- **Contact**: Change contact information in `src/components/Contact.jsx`

### Images

Replace placeholder images in the `public` folder or update image URLs in the components.

## Performance

The website is optimized for performance with:

- Lazy loading images
- Optimized animations
- Minimal bundle size
- SEO-friendly structure

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or support, please contact:

- Email: hello@ensodigital.com
- Website: [ensodigital.com](https://ensodigital.com)

---

Built with ❤️ by Enso Digital
