import React, { createContext, useContext, useEffect, useState } from 'react';
import { colorPalette, themeConfig, generateThemeCSS } from '@/lib/colors';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  colorPalette: typeof colorPalette;
  themeConfig: typeof themeConfig;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  // Apply theme CSS to document
  useEffect(() => {
    const css = generateThemeCSS(theme);
    
    // Remove existing theme styles
    const existingStyle = document.getElementById('theme-styles');
    if (existingStyle) {
      existingStyle.remove();
    }

    // Add new theme styles
    const style = document.createElement('style');
    style.id = 'theme-styles';
    style.textContent = css;
    document.head.appendChild(style);

    // Update document class for dark mode
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'light' : 'light';
    // const initialTheme = savedTheme || systemTheme;
    const initialTheme = 'light';
    setTheme(initialTheme);
  }, []);

  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const value = {
    theme,
    setTheme: handleSetTheme,
    colorPalette,
    themeConfig,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// Theme toggle component
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'light' : 'light')}
      className="p-2 rounded-md bg-secondary hover:bg-secondary/80 transition-colors"
      aria-label={`Switch to ${theme === 'light' ? 'light' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )}
    </button>
  );
} 