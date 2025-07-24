/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        240: "240px",
        500: "500px",
      },
      minHeight: {
        240: "240px",
        500: "500px",
      },
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif'],
      },
      backdropBlur: {
        sm: '4px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
