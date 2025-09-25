# 🚀 Harshit Behl - Personal Portfolio

[![Portfolio](https://img.shields.io/badge/Portfolio-Live-success?style=for-the-badge&logo=vercel)](http://localhost:3000)
[![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.5.14-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.3.0-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)

> A modern, responsive personal portfolio website inspired by anime.js animations, featuring smooth transitions, interactive elements, and a professional design aesthetic.

![Portfolio Preview](https://via.placeholder.com/1200x600/4F46E5/ffffff?text=Harshit+Behl+Portfolio)

## ✨ Features

### 🎨 Modern Design
- **Clean & Minimal**: Professional layout with elegant typography
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Responsive Design**: Optimized for all devices and screen sizes
- **Professional Branding**: Consistent color scheme and visual identity

### 🎭 Interactive Animations
- **Framer Motion**: Smooth page transitions and micro-interactions
- **Anime.js Inspired**: Fluid animations and engaging user experience
- **Scroll Animations**: Elements animate into view as you scroll
- **Hover Effects**: Interactive buttons and cards with visual feedback

### 📱 User Experience
- **Smooth Scrolling**: Seamless navigation between sections
- **Loading States**: Professional loading screens and transitions
- **Progress Indicators**: Visual scroll progress tracking
- **Accessibility**: ARIA labels and keyboard navigation support

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and concurrent features
- **Vite** - Fast build tool and development server
- **JavaScript (ES6+)** - Modern JavaScript features

### Styling & Animation
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **Lucide React** - Beautiful & consistent icon set
- **CSS Grid & Flexbox** - Modern layout systems

### Development Tools
- **ESLint** - Code linting and quality assurance
- **PostCSS** - CSS processing and optimization
- **npm** - Package management

## 📁 Project Structure

```
portfolio-website/
├── public/
│   ├── profile-photo.jpg      # Your profile picture
│   └── vite.svg              # Vite logo
├── src/
│   ├── assets/               # Static assets
│   ├── components/           # React components
│   │   ├── About.jsx         # About section
│   │   ├── Contact.jsx       # Contact form
│   │   ├── Footer.jsx        # Footer component
│   │   ├── Hero.jsx          # Hero/Landing section
│   │   ├── Navbar.jsx        # Navigation bar
│   │   ├── Projects.jsx      # Projects showcase
│   │   ├── ScrollProgressBar.jsx # Scroll indicator
│   │   ├── Skills.jsx        # Skills section
│   │   └── ...              # Other components
│   ├── contexts/            # React contexts
│   │   └── ThemeContext.jsx # Theme management
│   ├── App.jsx              # Main app component
│   ├── App.css              # Global styles
│   ├── index.css            # Base styles
│   └── main.jsx             # Entry point
├── package.json             # Dependencies & scripts
├── tailwind.config.js       # Tailwind configuration
├── vite.config.js          # Vite configuration
└── README.md               # Project documentation
```

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** (v8 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/harshit-behl/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## 🎯 Sections

### 🏠 Hero Section
- Professional profile photo with animated rings
- Dynamic typing effect with role descriptions
- Call-to-action buttons with hover animations
- Smooth scroll indicator

### 👨‍💻 About Section
- Large profile image with decorative elements
- Personal story and professional journey
- Skills showcase with animated icons
- Professional statistics counter

### 💼 Projects Section
- Interactive project cards with hover effects
- Technology tags and descriptions
- Live demo and GitHub repository links
- Responsive grid layout

### 🛠️ Skills Section
- Categorized skill sets (Frontend, Backend, etc.)
- Visual progress indicators
- Technology icons and proficiency levels
- Animated skill bars

### 📬 Contact Section
- Contact form with validation
- Social media links
- Professional email and location
- Interactive buttons with animations

### 🔗 Footer
- Quick navigation links
- Contact information
- Credits and inspirations
- Back-to-top functionality

## 🎨 Customization

### Personal Information
```jsx
// Update in src/components/Hero.jsx
const personalInfo = {
  name: "Your Name",
  roles: ["Full Stack Developer", "Your Roles"],
  email: "your.email@domain.com"
}
```

### Profile Photo
```bash
# Replace the profile photo
cp your-photo.jpg public/profile-photo.jpg
```

### Theme Colors
```javascript
// Modify tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: { /* Your primary colors */ },
        accent: { /* Your accent colors */ }
      }
    }
  }
}
```

### Projects Data
```jsx
// Update in src/components/Projects.jsx
const projects = [
  {
    title: "Your Project",
    description: "Project description",
    technologies: ["React", "Node.js"],
    github: "https://github.com/username/repo",
    demo: "https://your-demo-link.com"
  }
]
```

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px - 1440px
- **Large Desktop**: 1440px+

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Linting & Formatting
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
```

## 🌟 Performance

- **Lighthouse Score**: 95+ across all categories
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Bundle Size**: Optimized with code splitting

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

**Harshit Behl**
- 📧 Email: harshitsachinbehl@gmail.com
- 🐱 GitHub: [@harshit-behl](https://github.com/harshit-behl)
- 💼 LinkedIn: [Connect with me](https://linkedin.com/in/harshit-behl)
- 🌐 Portfolio: [Visit Website](http://localhost:3000)

## 🙏 Acknowledgments

- **Design Inspiration**: anime.js animation library
- **Icons**: Lucide React icon library
- **Animations**: Framer Motion library
- **Styling**: TailwindCSS framework
- **Build Tool**: Vite for fast development

---

**⭐ Star this repository if you found it helpful!**

*Built with ❤️ by Harshit Behl*