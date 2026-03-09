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
        vscode: {
          bg: "#1e1e1e",
          sidebar: "#252526",
          activity: "#333333",
          accent: "#007acc",
          text: "#d4d4d4",
          comment: "#6a9955",
          keyword: "#569cd6",
          string: "#ce9178",
          function: "#dcdcaa",
          number: "#b5cea8",
          class: "#4ec9b0",
        },
        slate: {
          850: "#1e293b",
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
