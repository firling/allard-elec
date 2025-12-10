import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e40af',
          dark: '#1e3a8a',
          light: '#3b82f6',
        },
        secondary: {
          DEFAULT: '#f59e0b',
          dark: '#d97706',
          light: '#fbbf24',
        },
      },
    },
  },
  safelist: [
    'text-blue-600',
    'text-purple-600',
    'text-green-600',
    'text-orange-600',
    'text-yellow-600',
    'text-red-600',
    'bg-blue-100',
    'bg-purple-100',
    'bg-green-100',
    'bg-orange-100',
    'bg-yellow-100',
    'bg-red-100',
  ],
  plugins: [],
};

export default config;
