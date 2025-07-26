/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        dongle: ["Dongle", "sans-serif"],
        segoeSymbol: ['"Segoe UI Symbol"', "sans-serif"],
      },
      fontSize: {
        "18px": "18px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
      screens: {
        xxxs:"280px",
        xxs: '320px',
        xs: '420px',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1460px',
        '3xl': '1600px',
      },
    },
  },
  plugins: [],
};
