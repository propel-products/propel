// Brand color themes for Propel
// Each theme has primary, hover, and accent colors

export const brandThemes = {
  cyan: {
    name: 'Electric Cyan',
    primary: '#00D4FF',
    primaryHover: '#00B8E6',
    accent: '#0EA5E9',
    rgb: '0, 212, 255',
  },
  violet: {
    name: 'Violet',
    primary: '#8B5CF6',
    primaryHover: '#7C3AED',
    accent: '#A78BFA',
    rgb: '139, 92, 246',
  },
  orange: {
    name: 'Propel Orange',
    primary: '#FF5007',
    primaryHover: '#FF6A2E',
    accent: '#FB923C',
    rgb: '255, 80, 7',
  },
};

export const defaultBrandTheme = 'cyan';

// Get CSS variables for a brand theme
export function getBrandCSSVariables(themeName) {
  const theme = brandThemes[themeName] || brandThemes[defaultBrandTheme];
  return {
    '--color-primary': theme.primary,
    '--color-primary-hover': theme.primaryHover,
    '--color-accent': theme.accent,
    '--color-primary-rgb': theme.rgb,
  };
}
