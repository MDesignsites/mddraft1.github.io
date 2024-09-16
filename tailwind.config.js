/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'about-section' : 'url(/src/assets/1crocbg.png)',
        'hero-section' : 'url(https://images.pexels.com/photos/2757549/pexels-photo-2757549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
        'hero-gradient' : 'linear-gradient(156deg, rgba(41,185,86,1) 0%, rgba(8,45,128,1) 37%, rgba(8,45,128,1) 55%)',
      },
      colors: {
        'deep-navy-blue' : '#063ba6',
      },
      fontFamily: {
        'Oswald': ['Oswald', 'sans-serif']
      }
    },
    dropShadow: {
      'custom': '0 1px 5px rgba(0, 0, 0, 1)',
      '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
      '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
      ]
    },
  },
  plugins: [],
}

