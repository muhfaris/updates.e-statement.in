/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk, md}"],
  mode: "jit",
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: ["bg-[#4A8DF9]", "bg-[#24D69E]", "bg-[#f06292]"],
};
