/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: true,
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "spin-very-slow": "spin 6s linear infinite",
      },
    },
  },
  plugins: [],
};

