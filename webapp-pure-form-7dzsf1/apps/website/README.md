# Golex Website - Theme System Documentation

A modern React + TypeScript + Vite application with a comprehensive theme system supporting multiple color schemes and dark/light modes.

## 🎨 Theme System Overview

This application features a sophisticated theme system with:
- **5 Beautiful Color Themes**: Default Orange, Ocean Blue, Forest Green, Sunset Pink, Vintage Amber
- **Dark/Light Mode**: Full support for both modes across all themes
- **Semantic Color Variables**: CSS custom properties for consistent theming
- **Cross-Browser Scrollbars**: Styled scrollbars that match the theme
- **Global Theme Switcher**: Available on all pages
- **Smooth Transitions**: 0.3s ease transitions between themes

## 🚀 Quick Start

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build
```

## 🎯 Staying Within Theme Guidelines

### ✅ DO: Use Semantic Color Classes

**Always use theme variables instead of hardcoded colors:**

```tsx
// ✅ Good - Uses theme variables
<div className="bg-background text-foreground">
  <div className="bg-card border-border">
    <button className="bg-primary text-primary-foreground hover:bg-primary/90">
      Click me
    </button>
  </div>
</div>

// ❌ Bad - Hardcoded colors
<div className="bg-white text-black">
  <div className="bg-gray-100 border-gray-200">
    <button className="bg-orange-500 text-white hover:bg-orange-600">
      Click me
    </button>
  </div>
</div>
```

### 🎨 Available Theme Colors

| Variable | Usage | Example |
|----------|-------|---------|
| `background` | Main page background | `bg-background` |
| `foreground` | Main text color | `text-foreground` |
| `card` | Card backgrounds | `bg-card` |
| `card-foreground` | Card text | `text-card-foreground` |
| `primary` | Brand/accent color | `bg-primary text-primary` |
| `primary-foreground` | Text on primary | `text-primary-foreground` |
| `secondary` | Secondary backgrounds | `bg-secondary` |
| `muted` | Subtle backgrounds | `bg-muted` |
| `muted-foreground` | Subtle text | `text-muted-foreground` |
| `accent` | Accent highlights | `bg-accent` |
| `border` | Border colors | `border-border` |
| `input` | Input field borders | `border-input` |
| `ring` | Focus rings | `ring-ring` |

### 🎪 Using Opacity Modifiers

```tsx
// Semi-transparent backgrounds
<div className="bg-primary/10">Light primary background</div>
<div className="bg-card/80">Semi-transparent card</div>

// Text opacity
<p className="text-foreground/60">Subtle text</p>
<p className="text-muted-foreground/50">Very subtle text</p>
```

### 🌙 Dark Mode Considerations

All theme variables automatically adjust for dark mode. No special classes needed:

```tsx
// This automatically works in both light and dark mode
<div className="bg-card text-card-foreground border-border">
  Content that looks good in both modes
</div>
```

## 🎨 Current Themes

### 🔥 Default Orange Theme
- **Primary Color**: `25 84% 42%` (Warm orange)
- **Mood**: Energetic and welcoming
- **Best for**: Creative applications, warm user experiences

### 🌊 Ocean Blue Theme
- **Primary Color**: `200 84% 42%` (Ocean blue)
- **Mood**: Calm and professional
- **Best for**: Business applications, trustworthy interfaces

### 🌲 Forest Green Theme
- **Primary Color**: `160 84% 42%` (Forest green)
- **Mood**: Natural and calming
- **Best for**: Environmental apps, growth-focused interfaces

### 🌅 Sunset Pink Theme
- **Primary Color**: `320 84% 42%` (Sunset pink)
- **Mood**: Warm and vibrant
- **Best for**: Creative platforms, romantic applications

### 🎨 Vintage Amber Theme
- **Primary Color**: `45 84% 42%` (Vintage amber)
- **Mood**: Warm and nostalgic
- **Best for**: Retro applications, vintage aesthetics

## 🛠️ Creating New Themes

### 1. Add Theme to CSS Variables

Edit `src/index.css` and add your theme:

```css
/* Theme: Your Theme Name */
[data-theme="your-theme"] {
  --background: 0 0% 98%;
  --foreground: 0 0% 12%;
  --card: 0 0% 100%;
  --card-foreground: 0 0% 12%;
  --primary: [hue] 84% 42%;
  --primary-foreground: 0 0% 98%;
  --secondary: [hue] 84% 42%;
  --secondary-foreground: 0 0% 98%;
  --muted: 0 0% 94%;
  --muted-foreground: 0 0% 40%;
  --accent: [hue] 84% 42%;
  --accent-foreground: 0 0% 98%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;
  --border: 0 0% 88%;
  --input: 0 0% 88%;
  --ring: [hue] 84% 42%;
  --chart-1: [hue] 84% 42%;
  --chart-2: [hue-20] 84% 45%;
  --chart-3: [hue+20] 84% 39%;
  --chart-4: [hue-10] 84% 41%;
  --chart-5: [hue+10] 84% 44%;
  --radius: 0.75rem;
}

/* Dark mode variant */
[data-theme="your-theme"].dark {
  --background: 0 0% 9%;
  --foreground: 0 0% 95%;
  --card: 0 0% 14%;
  --card-foreground: 0 0% 95%;
  --primary: [hue] 84% 42%;
  --primary-foreground: 0 0% 98%;
  --secondary: [hue] 84% 42%;
  --secondary-foreground: 0 0% 98%;
  --muted: 0 0% 18%;
  --muted-foreground: 0 0% 60%;
  --accent: [hue] 84% 42%;
  --accent-foreground: 0 0% 98%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;
  --border: 0 0% 22%;
  --input: 0 0% 22%;
  --ring: [hue] 84% 42%;
  --chart-1: [hue] 84% 42%;
  --chart-2: [hue-20] 84% 45%;
  --chart-3: [hue+20] 84% 39%;
  --chart-4: [hue-10] 84% 41%;
  --chart-5: [hue+10] 84% 44%;
}
```

### 2. Add Theme to Switcher

Update `src/components/ui/theme-switcher.tsx`:

```tsx
const themes: Theme[] = [
  // ... existing themes
  {
    id: 'your-theme',
    name: 'Your Theme Name',
    description: 'Theme description',
    preview: ['hsl([hue], 84%, 42%)', 'hsl([hue-20], 84%, 45%)', 'hsl([hue+20], 84%, 39%)']
  }
];
```

### 3. Test Your Theme

1. Restart the development server
2. Use the theme switcher to select your new theme
3. Check all components in both light and dark modes
4. Verify scrollbars and hover states work correctly

## 🎨 Color Palette Guidelines

### Choosing Colors

When creating a new theme, follow these guidelines:

1. **Accessibility**: Ensure sufficient contrast ratios (4.5:1 minimum)
2. **Harmony**: Use colors that work well together
3. **Purpose**: Each color should serve a specific semantic purpose
4. **Scalability**: Colors should work across different UI elements

### HSL Format

All colors use HSL format for better theme consistency:

```css
/* Format: hue saturation lightness */
--primary: 221 83% 53%;  /* Blue */
--primary: 142 76% 36%;  /* Green */
--primary: 346 77% 49%;  /* Red */
```

### Color Categories

Choose from these design categories:
- **Warm**: Orange, red, yellow tones (15-60°)
- **Cool**: Blue, green, purple tones (180-300°)
- **Bright**: High saturation, vibrant colors (80-100%)
- **Pastel**: Low saturation, soft colors (20-40%)
- **Monochromatic**: Single hue variations
- **Gradient**: Complementary color pairs

## 🔧 Advanced Theming

### Custom Scrollbars

Scrollbars automatically match your theme. For custom styling:

```tsx
// Use the theme-dropdown class for custom scrollbar styling
<div className="overflow-y-auto theme-dropdown">
  Scrollable content
</div>

// Or hide scrollbars completely
<div className="overflow-y-auto scrollbar-hide">
  Content with hidden scrollbar
</div>
```

### Dynamic Theme Changes

```tsx
import { useEffect } from 'react';

function MyComponent() {
  // Themes are applied at the document root level
  useEffect(() => {
    // Theme changes are handled by the ThemeSwitcher component
    // All CSS variables update automatically
  }, []);
}
```

### Theme-Aware Components

```tsx
// Components automatically inherit theme colors
function ThemedComponent() {
  return (
    <div className="bg-card border-border rounded-lg p-4">
      <h2 className="text-card-foreground font-semibold mb-2">
        Theme-Aware Header
      </h2>
      <p className="text-muted-foreground">
        This text adjusts to all themes automatically
      </p>
      <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded">
        Themed Button
      </button>
    </div>
  );
}
```

### Gradient Text Utilities

Use the built-in gradient text utilities:

```tsx
// Theme-aware gradient text
<h1 className="text-gradient">Gradient Title</h1>

// Additional gradient options
<h2 className="text-gradient-vibrant">Vibrant Gradient</h2>
<h3 className="text-gradient-cool">Cool Gradient</h3>
<h4 className="text-gradient-warm">Warm Gradient</h4>
```

## 🎭 Theme System Architecture

```
src/
├── index.css                 # Theme variables and global styles
├── components/
│   └── ui/
│       └── theme-switcher.tsx # Theme management component
├── App.tsx                   # Global theme switcher placement
└── pages/                    # All pages use theme variables
```

## 📱 Mobile & Responsive Theming

The theme system is fully responsive:

```tsx
// Responsive theme-aware component
<div className="bg-card md:bg-secondary lg:bg-accent">
  {/* Background changes on different screen sizes */}
  {/* But always respects the current theme */}
</div>
```

## 🐛 Troubleshooting

### Theme Not Applying
1. Check that you're using semantic classes (`bg-primary` not `bg-orange-500`)
2. Verify the theme exists in `index.css`
3. Ensure the theme switcher is properly imported in `App.tsx`

### Colors Look Wrong
1. Check HSL values are correct in CSS variables
2. Verify both light and dark mode variants exist
3. Test with high contrast accessibility tools

### Scrollbars Not Themed
1. Ensure the element has the `theme-dropdown` class
2. Check that the scrollbar styles are in `index.css`
3. Test in different browsers (some have limited scrollbar styling)

## 🚀 Production Deployment

All themes are included in the production build. No additional configuration needed.

```bash
# Build with all themes
bun run build

# Preview production build
bun run preview
```

## 🤝 Contributing

When adding new components:
1. Always use semantic color variables
2. Test in all 5 themes and both light/dark modes
3. Follow the existing naming conventions
4. Update this README if adding new theme features

---

For more information about the underlying technologies:
- [Vite](https://vitejs.dev/) - Build tool
- [React](https://reactjs.org/) - UI framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Tailwind CSS Variables](https://tailwindcss.com/docs/customizing-colors#using-css-variables) - Theme system
