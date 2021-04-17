module.exports = {
  purge: ["./src/**/*.njs"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: theme => ({
        'categories': "url('/bubble-bacground-radial.svg')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
