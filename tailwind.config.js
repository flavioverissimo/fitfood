/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundPrimary: "#F0EADA",
        greenPrimary: "#054F48",
        yellowPrimary: "#FFCB45",
        grayPrimary: "#404042",
      },
      lineHeight: {
        largeLine: "1.20",
      },
    },
  },
  plugins: [],
};
