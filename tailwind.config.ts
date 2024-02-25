import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },daisyui: {
  themes: [
        {
          mytheme: {
          
 "primary": "#fbbf24",
          
 "secondary": "#f3f4f6",
          
 "accent": "#fde68a",
          
 "neutral": "#e5e7eb",
          
 "base-100": "#d1d5db",
          
 "info": "#fef3c7",
          
 "success": "#00ff00",
          
 "warning": "#cffafe",
          
 "error": "#ff0000",
          },
        },
      ],},
  plugins: [
    require('daisyui')
  ],
} satisfies Config

