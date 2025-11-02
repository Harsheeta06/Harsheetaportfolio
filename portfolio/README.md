# Harsheeta V - Portfolio

A modern, responsive React portfolio application inspired by PostHog's design aesthetic. Built with TypeScript, React, and Framer Motion for smooth animations.

## Features

- **Modern Design**: Clean, PostHog-inspired interface with glassmorphism effects
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Folders**: Click on different sections to explore work
- **Smooth Animations**: Powered by Framer Motion for delightful interactions
- **Content Sections**:
  - Experience: Work history and professional roles
  - ML Projects: Machine learning and AI projects
  - Full Stack AI: AI-powered full-stack applications
  - Full Stack: Traditional full-stack development projects
  - Speaking: Conference presentations and speaking engagements
  - Education: Academic background and certifications

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: CSS3 with modern features (backdrop-filter, CSS Grid, Flexbox)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Create React App

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm start
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Top navigation with social links
│   ├── Sidebar.tsx         # Folder navigation sidebar
│   ├── ContentArea.tsx     # Main content display area
│   └── sections/           # Content sections for each folder
│       ├── Experience.tsx
│       ├── MLProjects.tsx
│       ├── FullStackAI.tsx
│       ├── FullStack.tsx
│       ├── Speaking.tsx
│       └── Education.tsx
├── types.ts               # TypeScript type definitions
├── App.tsx               # Main application component
└── App.css               # Global styles and responsive design
```

## Design Features

- **Glassmorphism**: Translucent backgrounds with backdrop blur effects
- **Color-coded Folders**: Each section has its unique color theme
- **Window-like Content**: Content displayed in a window-like container
- **Responsive Grid**: Projects displayed in responsive grid layout
- **Smooth Transitions**: Animated content switching between sections

## Responsive Breakpoints

- **Desktop**: Full sidebar + main content layout
- **Tablet**: Compressed sidebar with full content area
- **Mobile**: Horizontal scrolling folders + stacked content

## Customization

To customize the portfolio:

1. **Update personal information** in `Header.tsx`
2. **Modify content** in the respective section components
3. **Adjust colors** by updating CSS custom properties
4. **Add new sections** by creating new folder types and components

## Deployment

Build the application for production:

```bash
npm run build
```

The built files will be in the `build/` directory, ready for deployment to any static hosting service.

## License

This project is open source and available under the [MIT License](LICENSE).