import daisyui from 'daisyui';
import scrollbar from 'tailwind-scrollbar'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        krona: ['Krona One', 'sans-serif']
      },
      colors: {
        'fiap': '#E4336C',
        'footer': '#100307'
      },
      screens: {
        'md': '795px',
        'large': '1440px',
        'text': '500px',
        'mobile': '640px',
      }
    },
  },
  plugins: [
    daisyui,
    scrollbar
  ],
}