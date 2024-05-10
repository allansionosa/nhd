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
      padding: '18px',
      screens: {
        lg: '1366px',
      },
    },

    extend: {
      fontFamily: {
        gotham: ['var(--font-gotham)'],
        mairy: ['var(--font-mairy)'],
        questrial: ['var(--font-questrial)'],
      },
      colors: {
        primary: '#BA0C2F',
        secondary: '#58595b',
      },
      screens: {
        md: '978px',
      },
    },
  },
  plugins: [],
};
export default config;
