# EcoProject - React Web Application

## Project Overview
A modern React web application built with TypeScript, Vite, and Tailwind CSS. Features a responsive landing page with environmental sustainability theme, complete development toolchain, and production-ready configuration.

## Tech Stack
- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7.1.7 (fast development server & bundler)
- **Styling**: Tailwind CSS 3.4 (utility-first CSS framework)
- **Routing**: React Router DOM 7
- **Code Quality**: ESLint + Prettier with React-specific rules
- **Testing**: Vitest + Testing Library (Vite-native test runner)
- **Package Manager**: npm

## Project Structure
```
eco_project/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Header.tsx     # Navigation header with mobile menu
│   │   └── Footer.tsx     # Site footer with social links
│   ├── pages/             # Page components
│   │   ├── Home.tsx       # Landing page with hero, features, stats
│   │   └── About.tsx      # About page with mission & values
│   ├── assets/            # Static assets (images, fonts)
│   ├── styles/            # Global styles
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Utility functions
│   └── test/              # Test files and setup
├── public/                # Static public assets
├── dist/                  # Production build output
└── node_modules/          # Dependencies
```

## Key Features
- 📱 **Responsive Design**: Mobile-first approach with Tailwind CSS
- 🎨 **Modern UI**: Clean, professional design with environmental theme
- 🧭 **Single Page App**: React Router for client-side navigation
- ⚡ **Fast Development**: Vite HMR for instant updates
- 🔍 **Code Quality**: ESLint + Prettier for consistent code style
- 🧪 **Testing Ready**: Vitest configured with Testing Library
- 🏗️ **Production Ready**: Optimized build process

## Development Scripts
```bash
npm run dev          # Start development server (usually localhost:5173)
npm run build        # Create production build
npm run preview      # Preview production build locally
npm run lint         # Run ESLint code analysis
npm run lint:fix     # Auto-fix ESLint issues
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
npm run test         # Run tests with Vitest
npm run test:ui      # Run tests with UI interface
```

## Development Workflow
1. **Start Development**: `npm run dev`
2. **Code Changes**: Edit files in `src/` directory
3. **Add Components**: Create new components in `src/components/`
4. **Add Pages**: Create new pages in `src/pages/` and add routes to `App.tsx`
5. **Styling**: Use Tailwind CSS utility classes
6. **Testing**: Write tests in `src/test/` directory
7. **Quality Check**: Run `npm run lint` and `npm run format`
8. **Build**: Run `npm run build` for production

## Component Architecture
- **App.tsx**: Main app component with router setup
- **Header.tsx**: Navigation with responsive mobile menu
- **Footer.tsx**: Footer with links and social media
- **Home.tsx**: Landing page with hero, features, stats, CTA sections
- **About.tsx**: About page with mission, values, and company info

## Styling Guidelines
- Uses Tailwind CSS utility classes
- Mobile-first responsive design
- Consistent color scheme: Green (primary), Blue (secondary), Gray (neutral)
- Component-based styling approach
- No custom CSS files (all Tailwind utilities)

## Configuration Files
- **vite.config.ts**: Vite configuration with Vitest setup
- **tailwind.config.js**: Tailwind CSS configuration
- **postcss.config.js**: PostCSS configuration for Tailwind
- **eslint.config.js**: ESLint configuration with React rules
- **tsconfig.json**: TypeScript configuration
- **.prettierrc**: Prettier code formatting rules

## Dependencies Overview
### Production Dependencies
- `react` & `react-dom`: React framework
- `react-router-dom`: Client-side routing
- `@types/node`: Node.js type definitions

### Development Dependencies
- `vite` & `@vitejs/plugin-react`: Build tool and React plugin
- `typescript`: TypeScript compiler
- `tailwindcss` & related: CSS framework
- `eslint` & plugins: Code linting
- `prettier`: Code formatting
- `vitest` & `@testing-library/*`: Testing framework

## Common Tasks

### Adding a New Page
1. Create component in `src/pages/NewPage.tsx`
2. Add route to `src/App.tsx` Routes component
3. Add navigation link to `src/components/Header.tsx`

### Adding a New Component
1. Create component file in `src/components/ComponentName.tsx`
2. Export component as default export
3. Import and use in parent components

### Styling Components
- Use Tailwind utility classes: `className="bg-blue-500 text-white p-4"`
- Responsive design: `className="text-sm md:text-base lg:text-lg"`
- Hover states: `className="hover:bg-blue-600 transition-colors"`

### Testing Components
1. Create test file: `src/test/ComponentName.test.tsx`
2. Use Testing Library for rendering and queries
3. Use MemoryRouter for components with routing
4. Run tests with `npm test`

## Git Configuration
This project uses local Git configuration (not global):
```bash
git config user.name "YourGitHubUsername"
git config user.email "your-email@example.com"
```

## Troubleshooting

### Tailwind CSS Not Working
- Ensure PostCSS config uses `tailwindcss: {}` (not `@tailwindcss/postcss`)
- Verify Tailwind CSS v3.x is installed (not v4)
- Check `src/index.css` contains Tailwind directives

### Build Errors
- Run `npm run lint` to check for code issues
- Ensure all imports are correct
- Check TypeScript errors with `npm run build`

### Development Server Issues
- Kill existing processes: `pkill -f vite`
- Clear node_modules: `rm -rf node_modules && npm install`
- Check port availability (Vite auto-increments from 5173)

## Future Enhancements
- [ ] Add more pages (Services, Contact, Blog)
- [ ] Implement contact form with validation
- [ ] Add animations and micro-interactions
- [ ] Integrate CMS for content management
- [ ] Add authentication system
- [ ] Implement dark mode toggle
- [ ] Add more comprehensive testing
- [ ] Set up CI/CD pipeline
- [ ] Add SEO optimization
- [ ] Implement PWA features

## Deployment Options
- **Vercel**: `npm i -g vercel && vercel`
- **Netlify**: Drag & drop `dist/` folder or connect Git
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3/CloudFront**: Upload `dist/` contents

---

*Generated with [Claude Code](https://claude.ai/code)*