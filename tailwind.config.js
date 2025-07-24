/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        'card': '240px',       // use class: h-card
        'desktop': '500px',    // use class: h-desktop
      },
      minHeight: {
        'card': '240px',
        'desktop': '500px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
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
