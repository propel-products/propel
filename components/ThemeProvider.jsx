'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { createContext, useContext, useState, useEffect } from 'react';
import { brandThemes, defaultBrandTheme, getBrandCSSVariables } from '@/lib/themes';

// Brand theme context (separate from dark/light mode)
const BrandThemeContext = createContext({
  brandTheme: defaultBrandTheme,
  setBrandTheme: () => {},
  themes: brandThemes,
});

export function useBrandTheme() {
  return useContext(BrandThemeContext);
}

function BrandThemeProvider({ children }) {
  const [brandTheme, setBrandTheme] = useState(defaultBrandTheme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load saved brand theme from localStorage
    const saved = localStorage.getItem('propel-brand-theme');
    if (saved && brandThemes[saved]) {
      setBrandTheme(saved);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    // Save to localStorage
    localStorage.setItem('propel-brand-theme', brandTheme);
    
    // Apply CSS variables to document
    const vars = getBrandCSSVariables(brandTheme);
    Object.entries(vars).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  }, [brandTheme, mounted]);

  return (
    <BrandThemeContext.Provider value={{ brandTheme, setBrandTheme, themes: brandThemes }}>
      {children}
    </BrandThemeContext.Provider>
  );
}

export function ThemeProvider({ children }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <BrandThemeProvider>
        {children}
      </BrandThemeProvider>
    </NextThemesProvider>
  );
}
