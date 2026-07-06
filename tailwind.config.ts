import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './modules/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ['var(--font-dm-sans)', 'sans-serif'],
        'funnel': ['var(--font-funnel)', 'sans-serif'],
      },
      boxShadow: {
        'con-custom-shadow': '0px 64px 64px -48px #0F0F0F1A',
        'con-custom-shadow-image': '15px 15px 20px 0px #0000000D',
        'con-custom-shadow-security': '0px 0px 0px 0px #00000000 inset',
        'con-custom-shadow-menu': '0px 1px 3px 0px #0000004D',
        'con-custom-shadow-menu-hover': '0px 4px 8px 3px #00000026',
      },
      colors: {
        'con-custom-green': '#038F8D',
        'con-custom-green-bold': '#024645',
        'con-custom-green-light': '#1C404E',
        'con-custom-gray': '#EFEFEF',
        'con-custom-text-black': '#444444',
        'con-custom-text-gray': '#9F9FA9',
        'con-custom-purple': '#8638E5',
        'con-custom-teal': '#49D7D1',
        'con-custom-gray-input': '#F5F5F5',
        'con-custom-gray-border': '#9F9FA9',
        'con-custom-gray-background-chat': '#EBEDF0',
      },
      backgroundImage: {
        'con-background-skeleton':
          'linear-gradient(360deg, rgba(3, 143, 141, 0.2) 0%, #D3D3D3 100%)',
        'con-background-skeleton-content':
          'linear-gradient(90deg, rgba(3, 143, 141, 0.5) 0%, rgba(255, 255, 255, 0) 89.42%)',
        'con-banner-overlay':
          'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 26, 25, 0.42) 40.87%)',
      },
      screens: {
        xs: '320px', // custom breakpoint
      },
      // Typography system for consistent body copy
      fontSize: {
        // Body text sizes with consistent line-heights
        'body-xs': ['0.75rem', { lineHeight: '1.25rem', fontWeight: '300' }], // 12px / 20px
        'body-sm': ['0.875rem', { lineHeight: '1.375rem', fontWeight: '300' }], // 14px / 22px
        'body-base': [
          '0.9375rem',
          { lineHeight: '1.5625rem', fontWeight: '300' },
        ], // 15px / 25px
        'body-md': ['1rem', { lineHeight: '1.625rem', fontWeight: '300' }], // 16px / 26px
        'body-lg': ['1.125rem', { lineHeight: '1.75rem', fontWeight: '300' }], // 18px / 28px

        // Captions and small text
        caption: ['0.6875rem', { lineHeight: '1rem', fontWeight: '400' }], // 11px / 16px

        // Headings (keeping existing if needed)
        'display-xs': ['1.5rem', { lineHeight: '1.875rem', fontWeight: '400' }], // 24px / 30px
        'display-sm': [
          '1.875rem',
          { lineHeight: '2.25rem', fontWeight: '400' },
        ], // 30px / 36px
        'display-md': ['2.5rem', { lineHeight: '3.25rem', fontWeight: '400' }], // 40px / 52px
        'display-lg': ['3rem', { lineHeight: '3.25rem', fontWeight: '400' }], // 48px / 52px
      },
      // Letter spacing for better readability
      letterSpacing: {
        body: '0em',
        tight: '-0.01em',
        wide: '0.01em',
      },
      keyframes: {
        'partners-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'partners-scroll': 'partners-scroll 40s linear infinite',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light'],
  },
};

export default config;
