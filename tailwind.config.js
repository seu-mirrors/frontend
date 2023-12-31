/** @type {import('tailwindcss').Config} */
export default {
  plugins: [],
  theme: {
    extend: {
      maxWidth: {
        caddy: "1200px",
      },
      padding: {
        "caddy": "5%",
      },
    },
  },
  content: ["./index.html", "./src/**/*.{svelte,js,ts}"], //for unused css
  variants: {
    extend: {},
  },
  darkmode: false, // or 'media' or 'class'
};