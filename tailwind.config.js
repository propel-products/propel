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
        primary: 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        accent: 'var(--color-accent)',
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
