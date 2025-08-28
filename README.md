# Talent Income - Freelance Platform

A modern freelance platform built with Nuxt 4, TypeScript, Tailwind CSS, and ShadCN Vue components. This project connects skilled professionals with clients who value quality work.

## 🚀 Features

- **Modern Tech Stack**: Built with Nuxt 4, TypeScript, and Tailwind CSS 4
- **Component Library**: Integrated ShadCN Vue components for consistent UI
- **Icon System**: Heroicons for beautiful, consistent iconography
- **Responsive Design**: Mobile-first responsive design
- **Type Safety**: Full TypeScript support throughout the application
- **SEO Optimized**: Built-in SEO optimization with Nuxt

## 🛠️ Tech Stack

- **Framework**: [Nuxt 4](https://nuxt.com/) with TypeScript
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) with PostCSS
- **Components**: [ShadCN Vue](https://www.shadcn-vue.com/) components
- **Icons**: [Heroicons](https://heroicons.com/) for Vue
- **Build Tool**: Vite
- **Package Manager**: npm

## 📦 Installation

Make sure to install dependencies:

```bash
npm install
```

## 🏃‍♂️ Development

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## 🏗️ Build

Build the application for production:

```bash
npm run build
```

## 📁 Project Structure

```
├── app/
│   ├── app.vue              # Main app component
│   └── assets/
│       └── css/
│           └── main.css     # Global styles with Tailwind
├── components/
│   ├── ui/                  # ShadCN Vue components
│   ├── AppNavigation.vue    # Main navigation
│   ├── AppFooter.vue        # Footer component
│   ├── HeroSection.vue      # Homepage hero
│   ├── WhyChooseUsSection.vue
│   ├── HowItWorksSection.vue
│   ├── FeaturedOpportunitiesSection.vue
│   ├── TestimonialsSection.vue
│   ├── CallToActionSection.vue
│   └── JobCard.vue          # Job listing card
├── pages/
│   ├── index.vue            # Homepage
│   ├── find-work.vue        # Job listings
│   ├── post-job.vue         # Post new job
│   ├── how-it-works.vue     # How it works page
│   ├── signin.vue           # Sign in page
│   └── signup.vue           # Sign up page
├── lib/
│   └── utils.ts             # Utility functions
└── nuxt.config.ts           # Nuxt configuration
```

## 🎨 Design System

The project uses a consistent design system with:

- **Colors**: Yellow primary (#EAB308), Gray neutrals
- **Typography**: System font stack with proper hierarchy
- **Spacing**: Tailwind's spacing scale
- **Components**: ShadCN Vue components for consistency
- **Icons**: Heroicons for visual elements

## 📱 Pages

1. **Homepage** (`/`) - Landing page with hero, features, and testimonials
2. **Find Work** (`/find-work`) - Browse job opportunities
3. **Post Job** (`/post-job`) - Create new job postings
4. **How It Works** (`/how-it-works`) - Platform explanation
5. **Sign In** (`/signin`) - User authentication
6. **Sign Up** (`/signup`) - User registration

## 🧩 Components

### UI Components (ShadCN Vue)
- Button with variants and sizes
- Form inputs and controls
- Cards and layouts

### Custom Components
- Navigation with responsive menu
- Job cards with apply functionality
- Section components for homepage
- Footer with organized links

## 🎯 Key Features Implemented

1. **Responsive Navigation**: Mobile-friendly navigation with proper routing
2. **Hero Section**: Compelling landing page with clear call-to-action
3. **Feature Sections**: Why choose us, how it works, testimonials
4. **Job Listings**: Browse and search functionality
5. **Job Posting**: Complete form for creating job posts
6. **Authentication Pages**: Sign in and sign up forms
7. **Icon Integration**: Heroicons throughout the interface
8. **Type Safety**: Full TypeScript implementation

## 🔧 Configuration

### Tailwind CSS
- Configured with PostCSS
- Custom color scheme
- ShadCN Vue integration
- Animation utilities

### Nuxt Configuration
- TypeScript enabled
- Auto-imports configured
- ShadCN module integrated
- Proper alias setup

## 🚀 Deployment

The application can be deployed to any platform that supports Node.js:

```bash
npm run build
npm run preview
```

For static generation:

```bash
npm run generate
```

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

This is a private project. Please follow the established patterns and conventions when making changes.

## 📞 Support

For questions or support, please contact the development team.
