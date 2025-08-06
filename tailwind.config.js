/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        background: 'var(--background)', 
        foreground: 'var(--foreground)',
        primary: {
              DEFAULT: 'var(--primary)',
              foreground: 'var(--primary-foreground)',
  50: 'rgba(109, 109, 109, 0.05)',   // gray #6D6D6D with 5% opacity
  100: 'rgba(109, 109, 109, 0.1)',   // 10%
  200: 'rgba(109, 109, 109, 0.2)',   // 20%
  300: 'rgba(109, 109, 109, 0.3)',   // 30%
  400: 'rgba(109, 109, 109, 0.4)',   // 40%
  500: 'rgba(109, 109, 109, 0.6)',   // 60%
  600: 'rgba(109, 109, 109, 0.8)',   // 80%
  700: 'rgba(109, 109, 109, 0.9)',   // 90%
  800: 'rgba(109, 109, 109, 0.95)',  // 95%
  900: 'rgba(109, 109, 109, 0.98)',  // 98%
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        heading: ['var(--font-heading)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
