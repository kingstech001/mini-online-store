/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'jost': ['Jost', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 8px 16px rgba(0, 0, 0, 0.2)',
      },
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(200px, 1fr))',
      },
      
    },
  },
  plugins: [],
}

