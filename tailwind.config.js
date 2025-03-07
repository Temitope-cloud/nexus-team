/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{html,js,php}",
    "./dist/**/*.{html,js,php}",
    "node_modules/preline/dist/*.js",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        projectgreen: "#52fe18",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
