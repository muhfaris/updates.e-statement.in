/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./_site/**/*.{html, js}"],
  mode: "jit",
  // These paths are just examples, customize them to match your project structure
  purge: ["./_site/**/*.{html, js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
