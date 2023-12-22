/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brightBackground: "#FDF8EE",
        brightGreen: "#FF8B00",
        lightText: "#000",
      },
    },
  },
  plugins: [],
};
