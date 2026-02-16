/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      colors: {
        slate: {
          850: "#1e293b", // Adjusting color slightly lighter for readabilty or stick
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-in-from-top-4": "slideInFromTop 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInFromTop: {
          "0%": { transform: "translateY(-1rem)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
