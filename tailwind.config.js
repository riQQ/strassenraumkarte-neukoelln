module.exports = {
  content: [
    "./_includes/**/*.*",
    "./_layouts/**/*.*",
    "./_posts/**/*.*",
    "./javascript/**/*.js",
    "./parkraumkarte/**/*.js",
    "./posts/**/*.js",
    "./parkraumkarte/report.md",
    "./parkraumkarte/data.html",
    "./*.md",
    "./*.html",
  ],
  theme: {
    extend: {
      zIndex: {
        1000: "1000",
      },
      // colors: {
      //   map: {
      //     purple: '#7D5197',
      //   }
      // },
      // typography: {
      //   DEFAULT: {
      //     css: {
      //       h1: {
      //         color: '#7D5197',
      //       }
      //     },
      //   },
      // },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
