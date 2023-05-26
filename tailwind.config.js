/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DDDDDD",
        secondary: "#222831",
        tertiary: "#30475E",
        quaternary: "#F05454",
      },
    },
  },
  plugins: [],
};
