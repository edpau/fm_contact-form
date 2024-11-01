/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        form: "hsl(0, 0%, 100%)",
        selected: "hsl(148, 38%, 91%)",
        checkbox: "hsl(186, 15%, 59%)",
        submit: "hsl(169, 82%, 27%)",
        popup: "hsl(187, 24%, 22%)",
        hover: "hsl(169, 82%, 15%)",
        active: "hsl(169, 82%, 40%)",
      },
      borderColor: {
        neutral: "hsl(187, 24%, 22%)",
        focus: "hsl(169, 82%, 27%)",
        hover: "hsl(169, 82%, 27%)",
        error: " hsl(0, 66%, 54%)",
      },
      textColor: {
        error: " hsl(0, 66%, 54%)",
        submit: "hsl(0, 0%, 100%)",
        popup: "hsl(0, 0%, 100%)",
      },
      fill: {
        asterisk: "hsl(169, 82%, 27%)",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translate(-50%, -200px)", opacity: "0" },
          "20%": { transform: "translate(-50%, 0px)", opacity: "1" },
          "70%": { transform: "translate(-50%, 0px)", opacity: "1" },
          "100%": { transform: "translate(-50%, 0px)", opacity: "1" },
        },
      },
      animation: {
        slideIn: "slideIn 4s linear forwards",
      },
      screens: {
        md: "736px",
      },
    },
  },
  plugins: [],
};
