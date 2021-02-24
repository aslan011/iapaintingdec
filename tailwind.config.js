module.exports = {
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {},
      backgroundImage: theme => ({
        'paint-pattern': "url('./src/static/img/house-painting-roi-4')",
    }),
  }},
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
