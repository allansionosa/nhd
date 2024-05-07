import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
      screens: {
        lg: '1366px',
      },
    },

    extend: {
      fontFamily: {
        gotham: ['var(--font-gotham)'],
      },
      colors: {
        primary: '#BA0C2F',
        secondary: '#231F20',
      },
      screens: {
        md: '978px',
      },
    },
  },
  plugins: [],
};
export default config;
