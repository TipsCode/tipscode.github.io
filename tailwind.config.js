module.exports = {
  purge: ['./src/**/*.njs'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: () => ({
        categories: "url('/bubble-bacground-radial.svg')",
        'gradient-radial': 'radial-gradient(#6FD1C5, #798FFE)',
      }),
      colors: {
        'tips-dark': '#2B293F',
        'tips-light': '#F5F5FF',
        'tips-blue': '#798FFE',
        'tips-green': '#6FD1C5',
        'tips-gray-dark': '#4E4C6A',
        'isca-green': '#4FD284',
        'isca-red': '#FF7E7E',
      },
      fontFamily: {
        sans: ['Poppins'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            code: { color: '#ddbc72' },
            'blockquote p:first-of-type::before': false,
            'blockquote p:first-of-type::after': false,
            'code::before': false,
            'code::after': false,
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};