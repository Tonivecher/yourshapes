# Bun Monorepo Template

A modern full-stack monorepo template built with [Bun](https://bun.sh), featuring a React + Vite + TypeScript website with Tailwind CSS, Radix UI components, and a comprehensive theme system.

> **Note**: To contribute or make changes to the code, please fork the repository first and make your changes in your own copy.

## 🏗️ Architecture

This is a monorepo containing:
- **Website** (`apps/website/`): React + Vite + TypeScript application with modern UI components and a sophisticated theme system

## 🎨 Theme System

The website features a comprehensive theme system with:

- **5 Beautiful Color Themes**: Default Orange, Ocean Blue, Forest Green, Sunset Pink, Vintage Amber
- **Dark/Light Mode**: Full support for both modes across all themes
- **Semantic Color Variables**: CSS custom properties for consistent theming
- **Cross-Browser Scrollbars**: Styled scrollbars that match the theme
- **Global Theme Switcher**: Available on all pages
- **Smooth Transitions**: 0.3s ease transitions between themes

### Available Themes

| Theme | Primary Color | Mood | Best For |
|-------|---------------|------|----------|
| 🔥 Default Orange | `25 84% 42%` | Energetic & welcoming | Creative applications |
| 🌊 Ocean Blue | `200 84% 42%` | Calm & professional | Business applications |
| 🌲 Forest Green | `160 84% 42%` | Natural & calming | Environmental apps |
| 🌅 Sunset Pink | `320 84% 42%` | Warm & vibrant | Creative platforms |
| 🎨 Vintage Amber | `45 84% 42%` | Warm & nostalgic | Retro applications |

For detailed theme documentation, see [apps/website/README.md](apps/website/README.md).

## 📋 Prerequisites

Before getting started, ensure you have the following tools installed:

### Required Tools

1. **Node.js** (v18.0 or higher)
   ```bash
   # Check your Node.js version
   node -v
   ```
   - Download from [nodejs.org](https://nodejs.org/)
   - Or use [nvm](https://github.com/nvm-sh/nvm) to manage multiple Node.js versions

2. **Bun** (Latest version recommended)
   ```bash
   # Install Bun
   curl -fsSL https://bun.sh/install | bash
   
   # Or on macOS with Homebrew
   brew install bun
   
   # Verify installation
   bun --version
   ```

3. **Git**
   ```bash
   # Check if Git is installed
   git --version
   ```
   - Download from [git-scm.com](https://git-scm.com/) if not installed

## 🚀 Getting Started

### 1. Clone and Install

```bash
# Clone the repository
git clone <your-repo-url>
cd webapp-bun-monorepo-v2

# Install all dependencies (runs for entire monorepo)
bun install
```

### 2. Development Workflow

#### Start the Website in Development Mode

```bash
# From the root directory
bun run dev:website

# Or navigate to the website directory
cd apps/website
bun run dev
```

This will:
- Start the Vite development server
- Enable hot module replacement (HMR)
- Launch the application at `http://localhost:5173`
- Watch for file changes and auto-reload

#### Development Features

- **Hot Module Replacement**: Changes appear instantly without page refresh
- **TypeScript**: Full type checking and IntelliSense
- **Path Aliases**: Use `@/` to import from `src/` directory
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible component library
- **React Router**: Client-side routing
- **React Query**: Data fetching and caching
- **Theme System**: 5 beautiful themes with dark/light mode support

### 3. Building for Production

#### Build the Website

```bash
# From the root directory
bun run build:website

# Or from the website directory
cd apps/website
bun run build
```

This will:
- Run TypeScript compilation (`tsc -b`)
- Bundle the application using Vite
- Generate optimized static files in `apps/website/dist/`
- Include source maps for debugging

#### Development Build (with debugging)

```bash
# Build in development mode (includes debugging features)
bun run build:website:dev
```

### 4. Preview Production Build

```bash
# Preview the production build locally
bun run preview:website

# Or from the website directory
cd apps/website
bun run preview
```

This serves the built application at `http://localhost:5173` to test the production build locally.

## 📁 Project Structure

```
webapp-bun-monorepo-v2/
├── apps/
│   └── website/                 # React + Vite application
│       ├── src/
│       │   ├── components/      # Reusable React components
│       │   │   └── ui/         # Radix UI components
│       │   ├── pages/          # Page components
│       │   ├── hooks/          # Custom React hooks
│       │   ├── lib/            # Utility functions
│       │   ├── assets/         # Static assets
│       │   ├── App.tsx         # Main App component
│       │   └── main.tsx        # Application entry point
│       ├── public/             # Public static files
│       ├── dist/               # Built files (generated)
│       ├── package.json        # Website dependencies
│       ├── vite.config.ts      # Vite configuration
│       ├── tailwind.config.js  # Tailwind CSS config
│       ├── tsconfig.json       # TypeScript config
│       ├── THEME_DESIGN.md     # Theme design guide
│       └── README.md           # Website documentation
├── package.json                # Root workspace config
├── bun.lock                    # Lock file
└── README.md                   # This file
```

## 🛠️ Available Scripts

### Root Level Scripts (Monorepo)

```bash
# Website development
bun run dev:website              # Start website in development mode
bun run build:website            # Build website for production
bun run build:website:dev        # Build website in development mode
bun run preview:website          # Preview production build

# Install dependencies for all workspaces
bun install
```

### Website-Specific Scripts

```bash
cd apps/website

# Development
bun run dev                      # Start dev server (http://localhost:5173)

# Building
bun run build                    # Production build
bun run build:dev                # Development build

# Quality
bun run lint                     # Run ESLint
bun run preview                  # Preview build locally
```

## 🎨 Tech Stack

### Frontend (Website)
- **Framework**: React 18
- **Build Tool**: Vite 6
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: Radix UI
- **Routing**: React Router DOM 7
- **State Management**: React Query (TanStack Query)
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Theme System**: Custom CSS variables with 5 themes + dark mode

### Development Tools
- **Package Manager**: Bun
- **Linting**: ESLint 9
- **Type Checking**: TypeScript 5.7
- **CSS Processing**: PostCSS + Autoprefixer

## 🔧 Configuration

### Environment Variables

Create `.env` files in the website directory for environment-specific configuration:

```bash
# apps/website/.env.local
VITE_API_URL=http://localhost:3000
VITE_APP_TITLE=My App
```

### Vite Configuration

The website uses custom Vite configuration (`apps/website/vite.config.ts`) with:
- Path aliases (`@/` → `src/`)
- Development server with CORS enabled
- Source maps in production
- Custom allowed hosts for sandbox environments

## 🚀 Deployment

### Build Output

After running `bun run build:website`, the static files will be in `apps/website/dist/`:

```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [other-assets]
└── [public-files]
```

### Deployment Options

1. **Static Hosting** (Vercel, Netlify, GitHub Pages)
   - Deploy the `apps/website/dist/` directory
   - Set build command: `bun run build:website`
   - Set output directory: `apps/website/dist`

2. **Docker**
   ```dockerfile
   FROM nginx:alpine
   COPY apps/website/dist /usr/share/nginx/html
   ```

3. **CDN/S3**
   - Upload contents of `dist/` to your CDN or S3 bucket

4. **Timeweb Cloud**
   - В настройках деплоя укажите команду сборки: `bash scripts/timeweb-build.sh`
   - В разделе «Зависимости» перечислите системные пакеты: `curl ca-certificates unzip`
   - Директория сборки: `webapp-pure-form-7dzsf1/apps/website/dist`
   - Скрипт устанавливает Bun через официальный инсталлер и запускает `bun run build:website`, поэтому дополнительных ручных шагов не требуется

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Kill process on port 5173
   lsof -ti:5173 | xargs kill -9
   ```

2. **Module not found errors**
   ```bash
   # Clear Bun cache and reinstall
   rm -rf node_modules bun.lock
   bun install
   ```

3. **TypeScript errors**
   ```bash
   # Check types manually
   cd apps/website
   npx tsc --noEmit
   ```

4. **Build failures**
   ```bash
   # Clean build directory
   rm -rf apps/website/dist
   bun run build:website
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run linting and type checks
5. Test your changes across all themes and both light/dark modes
6. Commit your changes (`git commit -m 'Add amazing feature'`)
7. Push to the branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Happy coding! 🎉**
