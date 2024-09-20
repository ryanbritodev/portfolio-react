import daisyui from 'daisyui';

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
        'footer': '#0a0416'
      },
    },
  },
  plugins: [
    daisyui
  ],
}

