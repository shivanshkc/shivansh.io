# Design System Documentation

## Overview

This document outlines the design philosophy, principles, and implementation details for shivansh.io. It serves as a guide for contributors to maintain consistency and understand the intentional design decisions behind this portfolio website.

## Design Philosophy

### Sophisticated Minimalism

The design embraces **sophisticated minimalism** - a philosophy that prioritizes clarity, elegance, and professional credibility while maintaining visual interest through subtle animations and thoughtful details. Every element serves a purpose, and complexity is reduced to its essential components.

## Core Design Principles

### 1. Clean & Purposeful Layout

- **Single-page architecture** with clear sectional hierarchy: Hero → Experience → Projects
- **Generous whitespace** usage for improved readability and visual breathing room  
- **Content constraint** to `max-w-screen-md` (768px) ensures optimal reading experience
- **Consistent spacing** pattern of `py-20 px-6` across all major sections

### 2. Restrained Color Palette

The color system uses **OKLCH color space** for perceptual uniformity and supports both light and dark themes:

#### Light Theme
- **Background**: Pure white (`oklch(1 0 0)`)
- **Foreground**: Dark gray (`oklch(0.145 0 0)`)
- **Accents**: Subtle gray tones (`oklch(0.97 0 0)`)

#### Dark Theme  
- **Background**: Deep dark (`oklch(0.145 0 0)`)
- **Foreground**: Off-white (`oklch(0.985 0 0)`)
- **Accents**: Muted dark tones (`oklch(0.269 0 0)`)

#### Color Usage Guidelines
- **Primary colors** for main CTAs and navigation
- **Secondary colors** for subtle backgrounds and badges
- **Muted colors** for supporting text and descriptions
- **Semantic colors** only for specific states (destructive actions, charts)

### 3. Typography System

**Primary Font**: Geist with antialiasing for modern, clean appearance

#### Hierarchy
- **Headlines**: `text-4xl` → `text-5xl` → `text-6xl` with responsive scaling
- **Body Text**: `text-base` with responsive adjustments (`text-lg` for emphasis)
- **Supporting Text**: `text-sm` for metadata and secondary information

#### Weight System
- **Bold (700)** for primary headlines
- **Semibold (600)** for section labels and important text
- **Medium (500)** for secondary headings
- **Regular (400)** for body content

#### Spacing
- **Tight tracking** (`tracking-tight`) for headlines to improve visual density
- **Leading control** with `!leading-[1.2]` for headline readability

## Visual Design Language

### Geometric Consistency

#### Border Radius System
```css
--radius: 0.625rem; /* Base: 10px */
--radius-sm: calc(var(--radius) - 4px); /* 6px */
--radius-md: calc(var(--radius) - 2px); /* 8px */
--radius-lg: var(--radius); /* 10px */
--radius-xl: calc(var(--radius) + 4px); /* 14px */
```

#### Usage Patterns
- **Full rounding** (`rounded-full`) for interactive elements: buttons, badges, profile image
- **Standard rounding** (`rounded-xl`) for content containers and cards
- **Minimal rounding** for input fields and subtle containers

### Elevation & Layering

#### Shadow System
- **Subtle depth**: `shadow-xs` and `shadow-sm` for minimal elevation
- **Interactive feedback**: `hover:shadow-lg` for engaging hover states
- **No heavy shadows**: Maintains clean, flat design aesthetic

#### Z-Index Management
- **Fixed navbar**: `z-5` for persistent navigation
- **Hero content**: `z-[1]` above background animations
- **Background elements**: Default stacking context

### Interactive Elements

#### Button Design
- **Primary actions**: Pill-shaped with full rounding
- **Secondary actions**: Outline variants instead of filled backgrounds
- **Icon integration**: Consistent 20px (`h-5 w-5`) with proper spacing
- **Hover states**: Subtle opacity and transform changes

#### Animation Principles
- **Subtle motion**: Scale transforms and opacity transitions
- **Performance-first**: CSS transforms over layout-affecting animations
- **Appropriate duration**: 300ms for standard interactions

## Technical Implementation

### Modern Stack
- **Next.js 15** with React 19 for latest features and performance
- **Tailwind CSS v4** with CSS custom properties for design tokens
- **Shadcn/ui** components built on Radix UI primitives
- **Motion library** for smooth, performant animations

### Component Architecture

#### Design Principles
- **Composition over configuration**: Small, focused components
- **Accessibility-first**: Proper ARIA labels and semantic HTML
- **Extensible styling**: Class Variance Authority (CVA) for maintainable variants

#### File Organization
```
src/components/
├── ui/          # Base UI components (Button, Card, Badge)
├── hero/        # Landing section component
├── experience/  # Professional timeline
├── projects/    # Project showcase
├── navbar/      # Navigation component
└── magicui/     # Animated background components
```

## User Experience Guidelines

### Content Strategy

#### Progressive Disclosure
1. **Hero section**: Immediate personal introduction with clear value proposition
2. **Experience timeline**: Professional credibility through visual storytelling  
3. **Project showcase**: Technical demonstration with accessible code links

#### Scannable Design
- **Visual hierarchy** guides attention through content
- **Badge labels** for quick categorization
- **Clear CTAs** for primary user actions

### Responsive Design

#### Breakpoint Strategy
- **Mobile-first** approach with progressive enhancement
- **Key breakpoints**: `sm:` (640px), `md:` (768px), `lg:` (1024px)
- **Typography scaling**: Responsive font sizes across breakpoints
- **Navigation adaptation**: Hidden menu links on mobile

#### Performance Considerations
- **Image optimization** with Next.js Image component
- **Animation efficiency** using CSS transforms
- **Bundle optimization** through careful dependency management

## Contributing Guidelines

### Code Style
- **Consistent spacing**: Follow existing `py-20 px-6` patterns
- **Color usage**: Use design tokens instead of arbitrary values
- **Component structure**: Maintain composition patterns established in existing components

### Accessibility Requirements
- **Semantic HTML**: Use appropriate elements for content structure
- **ARIA labels**: Provide descriptive labels for interactive elements
- **Keyboard navigation**: Ensure all interactive elements are accessible
- **Color contrast**: Maintain WCAG AA compliance

### Testing Considerations
- **Visual consistency**: Test across different screen sizes
- **Theme switching**: Verify both light and dark mode functionality
- **Animation performance**: Ensure smooth interactions on various devices

## Resources

### Design Tokens
All design tokens are defined in `src/app/globals.css` using CSS custom properties.

### Component Library
Base components follow Shadcn/ui patterns and can be found in `src/components/ui/`.

### Content Management
Site content is managed through `public/content.json` for easy updates without code changes.

---

*This design system is living documentation. As the project evolves, this document should be updated to reflect new patterns and decisions.*