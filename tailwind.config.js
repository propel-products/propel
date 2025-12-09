/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Brand accent (dynamic)
        primary: 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        accent: 'var(--color-accent)',
        
        // Semantic colors (light/dark aware)
        background: 'var(--color-bg)',
        'background-secondary': 'var(--color-bg-secondary)',
        'background-tertiary': 'var(--color-bg-tertiary)',
        surface: 'var(--color-surface)',
        'surface-elevated': 'var(--color-surface-elevated)',
        foreground: 'var(--color-text)',
        'foreground-secondary': 'var(--color-text-secondary)',
        'foreground-muted': 'var(--color-text-muted)',
        border: 'var(--color-border)',
        'border-subtle': 'var(--color-border-subtle)',
        
        // Navigation
        'nav-bg': 'var(--color-nav-bg)',
        'nav-text': 'var(--color-nav-text)',
        
        // Logo
        logo: 'var(--color-logo)',
        
        // Legacy support
        'propel-orange': '#FF5007',
        'propel-orange-hover': '#ff6a2e',
        'propel-cyan': '#00D4FF',
        'propel-violet': '#8B5CF6',
      },
    },
  },
  plugins: [],
}
