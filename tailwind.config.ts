import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },daisyui: {
  themes: [
    {
      classiadsLight: {
        "primary": "#FB923C",
        "secondary": "#2D3748",
        "accent": "#D97706",
        "neutral": "#6B7280",
        "base-100": "#FEFEFE",
        "info": "#00ADFF",
        "success": "#6AD800",
        "warning": "#ED6600",
        "error": "#FF9895",
      },
    },  
    {
      dark: {
        "primary": "#FB923C",
        "secondary": "#2D3748",
        "accent": "#D97706",
        "neutral": "#E2E8F0",
        "base-100": "#1A202C",
        "info": "#00ADFF",
        "success": "#6AD800",
        "warning": "#ED6600",
        "error": "#FF9895",
      }
    }   
  ],
},
  plugins: [
    require('daisyui')
  ],
} satisfies Config

