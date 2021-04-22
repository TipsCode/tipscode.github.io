module.exports = {
  purge: ["./src/**/*.njs"],
  darkMode: "class",
  theme: {

    extend: {
      backgroundImage: theme => ({
        'categories': "url('/bubble-bacground-radial.svg')",
        'gradient-radial': 'radial-gradient(#6FD1C5, #798FFE)'
      }), 
      colors: {
        'tips-dark': '#2B293F',
        'tips-light': '#F5F5FF',
        'tips-blue': '#798FFE',
        'tips-green': '#6FD1C5',
        'tips-gray-dark': '#4E4C6A' 
      },
      fontFamily: {
        'sans': ['Poppins'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
