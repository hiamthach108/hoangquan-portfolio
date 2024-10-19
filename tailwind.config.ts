import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        'background': '#4f95f7',
        'primary': '#2b6b75',
        'secondary': '#90c3be',
        'light-brown': '#faded3',
        'brown': '#d8987d',
        'bg': '#fffbeb',
        'bg-sky': '#eef6f9',
      },
      fontFamily: {
        sans: ['Source Serif 4', 'serif'],
        heading: ['Bree Serif', 'serif'],
        hand: ['Allison', 'cursive'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
  corePlugins: {
    preflight: false,
  },
};
export default config;
