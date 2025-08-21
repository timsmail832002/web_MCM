/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: { 
    extend: { 
      colors: {
        primary: { DEFAULT: '#FFD700' },   // Gold
        secondary: { DEFAULT: '#1E3A8A' }, // Royal Blue
        rosegold: { DEFAULT: '#B76E79' },
        brandblack: { DEFAULT: '#000000' }
      }
    } 
  },
  plugins: [],
};
