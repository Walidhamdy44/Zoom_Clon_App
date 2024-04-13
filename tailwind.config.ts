import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        dark: {
          1: '#15202B', // أزرق غامق جدًا
          2: '#172A3A', // أزرق داكن
          3: '#1C3144', // أزرق داكن آخر
          4: '#22343F', // أزرق غامق
        },
        blue: {
          1: '#1E90FF', // أزرق ساطع أكثر
        },
        sky: {
          1: '#C9DDFF', // يمكنك الاحتفاظ بهذه الدرجة
          2: '#AFCFE8', // أزرق سماوي خفيف
          3: '#E1EFF8', // أزرق سماوي فاتح
        },
        orange: {
          1: '#FF4500', // برتقالي محمر عميق
        },
        purple: {
          1: '#6A0DAD', // أرجواني داكن
        },
        yellow: {
          1: '#FFD700', // أصفر ذهبي
        },
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
      backgroundImage: {
        hero: "url('/images/hero-background.png')",
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
