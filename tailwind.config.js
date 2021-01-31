module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      textDecoration: ["focus-visible"],
      colors: {
        "pri-blue": "#2e465c",
        "pri-white": "#f5f5e8",
        "light-blue": "#87c3fa",
      },
      typography: (theme) => ({
        dark: {
          css: {
            color: "white",
          },
        },
      }),
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/typography")],
};
