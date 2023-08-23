/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/index.html",
    "./src/**/*.css",
    // Add paths for any other file types where you might be using Tailwind classes:
    "./src/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
