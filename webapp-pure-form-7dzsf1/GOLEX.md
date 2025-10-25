# GOLEX Knowledge Log

## Project Summary
"Инженерия формы" is a single-page website for a Russian architectural design and production studio specializing in precision engineering and minimalist aesthetics. The site showcases their work with metal, wood, and composites through a dark, elegant interface with subtle animations and interactive elements, aimed at attracting potential clients from architecture, design, and development fields.

## Evolution Timeline
- 2025-10-21: Initial project creation - landing page with dark minimalist design theme
- 2025-10-21: Created custom "engineering-graphite" theme with architectural styling
- 2025-10-21: Implemented fully responsive single-page site with 7 sections
- 2025-10-21: Added interactive project gallery with hover effects
- 2025-10-21: Implemented contact form with validation and success dialog

## Clarifications Needed
- Actual video files for hero section background (currently using placeholder)
- High-resolution project images for the portfolio section
- Actual social media links for footer section
- Specific content for RU/EN language toggle functionality

## Repo Map
- `/apps/website/src/components/Header.tsx`: Navigation header with language toggle
- `/apps/website/src/components/HeroSection.tsx`: Main hero section with video background
- `/apps/website/src/components/AboutSection.tsx`: Philosophy section with animated text
- `/apps/website/src/components/MaterialsSection.tsx`: Section showcasing materials with cards
- `/apps/website/src/components/ProjectsSection.tsx`: Portfolio gallery with hover effects
- `/apps/website/src/components/ProcessSection.tsx`: Process steps with animated timeline
- `/apps/website/src/components/ContactSection.tsx`: Contact form with validation and success dialog
- `/apps/website/src/components/Footer.tsx`: Footer with logo, tagline, and social links
- `/apps/website/src/pages/Home.tsx`: Main page combining all sections
- `/apps/website/src/pages/ErrorPage.tsx`: 404 page with architectural styling
- `/apps/website/src/components/ui/theme-switcher.tsx`: Modified to use engineering-graphite theme
- `/apps/website/src/index.css`: Contains custom engineering-graphite theme definition