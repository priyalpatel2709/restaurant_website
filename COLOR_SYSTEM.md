# Color System Documentation

## Overview

This restaurant website uses a centralized color system that allows you to change the entire website's color scheme from one place. The system is built with TypeScript and provides both programmatic and UI-based color customization.

## File Structure

```
src/
├── lib/
│   └── colors.ts              # Centralized color palette configuration
├── components/
│   ├── ThemeProvider.tsx       # Theme management and context
│   └── ColorPaletteEditor.tsx  # UI for editing colors
└── index.css                  # CSS variables and base styles
```

## How to Change Colors

### Method 1: Edit the Color Palette File (Recommended)

1. Open `src/lib/colors.ts`
2. Modify the `colorPalette` object
3. The changes will automatically apply to the entire website

```typescript
// Example: Change the warm brown color
export const colorPalette = {
  restaurant: {
    warmBrown: 'hsl(30 45% 35%)', // Changed from hsl(25 45% 35%)
    // ... other colors
  },
  // ... rest of palette
};
```

### Method 2: Use the Color Palette Editor

1. Click the "🎨 Edit Colors" button in the bottom-right corner
2. Modify colors using the visual editor
3. Click "Apply Colors" to see changes

### Method 3: Use Color Presets

The system includes predefined color themes:
- **Classic**: Traditional warm browns and golds
- **Modern**: Contemporary cool tones
- **Rustic**: Earthy, natural colors
- **Elegant**: Sophisticated, refined palette

## Color Palette Structure

### Primary Colors
```typescript
primary: {
  brown: {
    50: 'hsl(32 25% 98%)',   // Lightest
    100: 'hsl(32 25% 95%)',
    200: 'hsl(32 20% 90%)',
    300: 'hsl(32 15% 85%)',
    400: 'hsl(25 45% 35%)',
    500: 'hsl(25 65% 25%)',   // Base
    600: 'hsl(25 75% 20%)',
    700: 'hsl(25 85% 15%)',
    800: 'hsl(25 95% 10%)',
    900: 'hsl(25 100% 5%)',   // Darkest
  },
  gold: {
    // Similar structure for gold colors
  }
}
```

### Restaurant-Specific Colors
```typescript
restaurant: {
  warmBrown: 'hsl(25 45% 35%)',    // Main brown
  golden: 'hsl(42 85% 55%)',       // Accent gold
  cream: 'hsl(32 25% 95%)',        // Light background
  deepBrown: 'hsl(25 65% 25%)',    // Dark brown
  lightGold: 'hsl(42 65% 85%)',    // Light gold
}
```

### Semantic Colors
```typescript
semantic: {
  success: 'hsl(142 76% 36%)',     // Green
  warning: 'hsl(38 92% 50%)',      // Orange
  error: 'hsl(0 84% 60%)',         // Red
  info: 'hsl(217 91% 60%)',        // Blue
}
```

## Using Colors in Components

### CSS Classes (Recommended)
```tsx
// Use Tailwind classes that reference CSS variables
<div className="bg-primary text-primary-foreground">
<div className="bg-warm-brown text-golden">
<div className="bg-gradient-accent">
```

### Inline Styles
```tsx
// Use the color palette directly
import { colorPalette } from '@/lib/colors';

<div style={{ backgroundColor: colorPalette.restaurant.warmBrown }}>
```

### Theme Hook
```tsx
// Access current theme colors
import { useTheme } from '@/components/ThemeProvider';

const { colorPalette, theme } = useTheme();
```

## CSS Variables

The system automatically generates CSS variables for all colors:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 25 12% 15%;
  --primary: 25 65% 25%;
  --primary-foreground: 32 25% 95%;
  --warm-brown: 25 45% 35%;
  --golden: 42 85% 55%;
  /* ... more variables */
}
```

## Dark Mode Support

The color system includes automatic dark mode support. Colors are defined for both light and dark themes:

```typescript
themeConfig: {
  light: {
    background: colorPalette.neutral.white,
    foreground: colorPalette.primary.brown[900],
    // ... light theme colors
  },
  dark: {
    background: colorPalette.primary.brown[900],
    foreground: colorPalette.primary.brown[50],
    // ... dark theme colors
  }
}
```

## Gradients

Predefined gradients are available:

```typescript
gradients: {
  hero: 'linear-gradient(135deg, hsl(25 45% 35%), hsl(25 65% 25%))',
  accent: 'linear-gradient(90deg, hsl(42 85% 55%), hsl(42 75% 65%))',
  subtle: 'linear-gradient(180deg, hsl(32 25% 98%), hsl(32 20% 95%))',
}
```

Usage:
```tsx
<div className="bg-gradient-hero">
<div className="bg-gradient-accent">
```

## Shadows

Custom shadows that match the color palette:

```typescript
shadows: {
  warm: '0 10px 30px -10px hsl(25 45% 35% / 0.2)',
  golden: '0 5px 20px -5px hsl(42 85% 55% / 0.3)',
  subtle: '0 2px 10px -2px hsl(25 45% 35% / 0.1)',
}
```

Usage:
```tsx
<div className="shadow-warm">
<div className="shadow-golden">
```

## Best Practices

1. **Use CSS Classes**: Prefer Tailwind classes over inline styles
2. **Reference the Palette**: Always use colors from the centralized palette
3. **Test Both Themes**: Ensure colors work in both light and dark modes
4. **Maintain Contrast**: Ensure sufficient contrast ratios for accessibility
5. **Use Semantic Colors**: Use success/warning/error colors for appropriate contexts

## Adding New Colors

1. Add the color to `colorPalette` in `src/lib/colors.ts`
2. Add corresponding CSS variables in `src/index.css`
3. Update Tailwind config if needed
4. Test in both light and dark modes

## Troubleshooting

### Colors Not Updating
- Check that the ThemeProvider is wrapping your app
- Ensure CSS variables are properly defined
- Clear browser cache if changes don't appear

### Dark Mode Issues
- Verify `.dark` class is applied to document
- Check that dark theme colors are defined
- Ensure proper contrast ratios

### Performance
- Colors are cached in localStorage
- Theme switching is optimized for performance
- CSS variables provide efficient color application

## Examples

### Changing the Main Brand Color
```typescript
// In src/lib/colors.ts
export const colorPalette = {
  restaurant: {
    warmBrown: 'hsl(20 45% 35%)', // Changed from 25 to 20
    // ... rest unchanged
  }
};
```

### Adding a New Color
```typescript
// In src/lib/colors.ts
export const colorPalette = {
  restaurant: {
    // ... existing colors
    newColor: 'hsl(180 50% 50%)',
  }
};

// In src/index.css
:root {
  /* ... existing variables */
  --new-color: 180 50% 50%;
}

.dark {
  /* ... existing variables */
  --new-color: 180 50% 40%; /* Darker version */
}
```

This color system provides a flexible, maintainable way to manage your website's color scheme while ensuring consistency and accessibility across all components. 