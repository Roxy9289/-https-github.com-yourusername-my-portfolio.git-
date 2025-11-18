# My Portfolio

A modern, responsive personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and professional design
- 📱 Fully responsive layout
- ⚡ Built with Next.js 14 App Router
- 🎯 Smooth scrolling navigation
- 🌙 Dark mode support
- 🚀 Optimized for performance

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

### Update Personal Information

1. **Hero Section** (`components/Hero.tsx`): Update the name and title
2. **About Section** (`components/About.tsx`): Update the bio and skills
3. **Projects Section** (`components/Projects.tsx`): Update the projects array with your own projects
4. **Contact Section** (`components/Contact.tsx`): Update contact information and form handling

### Styling

The project uses Tailwind CSS for styling. You can customize colors, fonts, and other design elements in:
- `tailwind.config.ts` - Tailwind configuration
- `app/globals.css` - Global styles and CSS variables

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── Navigation.tsx   # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Projects.tsx     # Projects grid
│   └── Contact.tsx      # Contact form
└── public/              # Static assets
```

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- PostCSS
- Autoprefixer

