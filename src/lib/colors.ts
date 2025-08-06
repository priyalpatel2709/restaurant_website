// Centralized Color Palette Configuration
// Change colors here to update the entire website theme

export const colorPalette = {
  // Primary Brand Colors
  primary: {
    brown: {
      50: 'hsl(32 25% 98%)',
      100: 'hsl(32 25% 95%)',
      200: 'hsl(32 20% 90%)',
      300: 'hsl(32 15% 85%)',
      400: 'hsl(25 45% 35%)',
      500: 'hsl(25 65% 25%)',
      600: 'hsl(25 75% 20%)',
      700: 'hsl(25 85% 15%)',
      800: 'hsl(25 95% 10%)',
      900: 'hsl(25 100% 5%)',
    },
    gold: {
      50: 'hsl(42 85% 95%)',
      100: 'hsl(42 85% 90%)',
      200: 'hsl(42 85% 85%)',
      300: 'hsl(42 85% 75%)',
      400: 'hsl(42 85% 65%)',
      500: 'hsl(42 85% 55%)',
      600: 'hsl(42 85% 45%)',
      700: 'hsl(42 85% 35%)',
      800: 'hsl(42 85% 25%)',
      900: 'hsl(42 85% 15%)',
    },
  },

  // Semantic Colors
  semantic: {
    success: 'hsl(142 76% 36%)',
    warning: 'hsl(38 92% 50%)',
    error: 'hsl(0 84% 60%)',
    info: 'hsl(217 91% 60%)',
  },

  // Neutral Colors
  neutral: {
    white: 'hsl(0 0% 100%)',
    black: 'hsl(0 0% 0%)',
    gray: {
      50: 'hsl(0 0% 98%)',
      100: 'hsl(0 0% 96%)',
      200: 'hsl(0 0% 90%)',
      300: 'hsl(0 0% 83%)',
      400: 'hsl(0 0% 64%)',
      500: 'hsl(0 0% 45%)',
      600: 'hsl(0 0% 32%)',
      700: 'hsl(0 0% 25%)',
      800: 'hsl(0 0% 15%)',
      900: 'hsl(0 0% 9%)',
    },
  },

  // Restaurant-Specific Colors
  restaurant: {
    warmBrown: 'hsl(25 45% 35%)',
    golden: 'hsl(42 85% 55%)',
    cream: 'hsl(32 25% 95%)',
    deepBrown: 'hsl(25 65% 25%)',
    lightGold: 'hsl(42 65% 85%)',
    accentGold: 'hsl(42 75% 65%)',
    warmCream: 'hsl(32 20% 95%)',
    richBrown: 'hsl(25 55% 25%)',
  },

  // Gradients
  gradients: {
    hero: 'linear-gradient(135deg, hsl(25 45% 35%), hsl(25 65% 25%))',
    accent: 'linear-gradient(90deg, hsl(42 85% 55%), hsl(42 75% 65%))',
    subtle: 'linear-gradient(180deg, hsl(32 25% 98%), hsl(32 20% 95%))',
    warm: 'linear-gradient(135deg, hsl(25 45% 35%), hsl(42 85% 55%))',
    golden: 'linear-gradient(90deg, hsl(42 85% 55%), hsl(42 65% 85%))',
  },

  // Shadows
  shadows: {
    warm: '0 10px 30px -10px hsl(25 45% 35% / 0.2)',
    golden: '0 5px 20px -5px hsl(42 85% 55% / 0.3)',
    subtle: '0 2px 10px -2px hsl(25 45% 35% / 0.1)',
    strong: '0 20px 40px -10px hsl(25 45% 35% / 0.3)',
  },
} as const;

// Theme configurations for light and dark modes
export const themeConfig = {
  light: {
    background: colorPalette.neutral.white,
    foreground: colorPalette.primary.brown[900],
    card: colorPalette.neutral.white,
    cardForeground: colorPalette.primary.brown[900],
    popover: colorPalette.neutral.white,
    popoverForeground: colorPalette.primary.brown[900],
    primary: colorPalette.primary.brown[500],
    primaryForeground: colorPalette.primary.brown[50],
    secondary: colorPalette.primary.brown[200],
    secondaryForeground: colorPalette.primary.brown[900],
    muted: colorPalette.primary.brown[100],
    mutedForeground: colorPalette.primary.brown[400],
    accent: colorPalette.primary.gold[500],
    accentForeground: colorPalette.primary.brown[900],
    destructive: colorPalette.semantic.error,
    destructiveForeground: colorPalette.neutral.white,
    border: colorPalette.primary.brown[300],
    input: colorPalette.primary.brown[300],
    ring: colorPalette.primary.brown[500],
    // Restaurant-specific
    warmBrown: colorPalette.restaurant.warmBrown,
    golden: colorPalette.restaurant.golden,
    cream: colorPalette.restaurant.cream,
    deepBrown: colorPalette.restaurant.deepBrown,
    lightGold: colorPalette.restaurant.lightGold,
  },
  dark: {
    background: colorPalette.primary.brown[900],
    foreground: colorPalette.primary.brown[50],
    card: colorPalette.primary.brown[800],
    cardForeground: colorPalette.primary.brown[50],
    popover: colorPalette.primary.brown[800],
    popoverForeground: colorPalette.primary.brown[50],
    primary: colorPalette.primary.gold[400],
    primaryForeground: colorPalette.primary.brown[900],
    secondary: colorPalette.primary.brown[700],
    secondaryForeground: colorPalette.primary.brown[50],
    muted: colorPalette.primary.brown[700],
    mutedForeground: colorPalette.primary.brown[300],
    accent: colorPalette.primary.gold[500],
    accentForeground: colorPalette.primary.brown[900],
    destructive: colorPalette.semantic.error,
    destructiveForeground: colorPalette.primary.brown[50],
    border: colorPalette.primary.brown[700],
    input: colorPalette.primary.brown[700],
    ring: colorPalette.primary.gold[400],
    // Restaurant-specific
    warmBrown: colorPalette.primary.brown[400],
    golden: colorPalette.restaurant.golden,
    cream: colorPalette.primary.brown[900],
    deepBrown: colorPalette.primary.brown[600],
    lightGold: colorPalette.primary.brown[700],
  },
} as const;

// Helper function to convert HSL values to CSS custom properties
export function hslToCSS(hsl: string): string {
  return hsl.replace('hsl(', '').replace(')', '');
}

// Generate CSS custom properties for the theme
export function generateThemeCSS(theme: 'light' | 'dark'): string {
  const config = themeConfig[theme];
  const prefix = theme === 'dark' ? '.dark' : ':root';
  
  return `${prefix} {
${Object.entries(config)
  .map(([key, value]) => `  --${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${hslToCSS(value)};`)
  .join('\n')}
}`;
}

// Export all theme CSS
export const themeCSS = `
${generateThemeCSS('light')}

${generateThemeCSS('dark')}
`;

// Type definitions for better IntelliSense
export type ColorPalette = typeof colorPalette;
export type ThemeConfig = typeof themeConfig; 