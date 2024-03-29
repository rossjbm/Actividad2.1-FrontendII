/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': {
        300: '#000000',
        200: '#212226',
        100: '#000000b3',
      },
      'grey': {
        300: '#A68B80',
        100: '#C0B7B0',
      },
      'orange':{
        500: '#8b3806',
        300: '#F38749',
        200: '#FBBA94',
        100: '#fddfcd',
      },
      'botones': {
        100: '#FFD10A',
        200: '#FF0A0A',
      }
    },
    extend: {
      backgroundImage: {
        'fondoLocal': "url('/src/assets/local.jpeg')",
      },
      scale:{
        '102':'1.02'
      }
    },
  },
  plugins: [],
}

