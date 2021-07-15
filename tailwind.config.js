module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './src/index.js', './src/App.js', './src/NotFound.js', './src/homepage.js', ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
