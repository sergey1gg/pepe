/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#f2f52f",
        white: "#fff",
        surface: "#f5f5f5",
        overlay: "rgba(8, 28, 0, 0.15)",
        "accent-orange": "#ff8c39",
        primary: "#87e464",
        black: "#081c00",
      },
      fontFamily: {
        "rubik-bubbles": "'Rubik Bubbles'",
        "h-1": "'Krona One'",
        body: "Poppins",
      },
      borderRadius: {
        "21xl": "40px",
        "31xl": "50px",
        "11xl": "30px",
        xl: "20px",
        "131xl": "150px",
        "121xl": "140px",
        "3xs": "10px",
      },
    },
    fontSize: {
      "21xl": "40px",
      mid: "17px",
      xl: "20px",
      mini: "15px",
      "11xl": "30px",
      "5xl": "24px",
    },
    screens: {
    
      'sm': '360px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1440px',
    },
  },
  corePlugins: {
    preflight: false,
  },
};
