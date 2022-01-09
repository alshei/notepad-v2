module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif",
        ptserif: "'PT Serif', serif",
      },
      colors: {
        apricot: "#f5a1a1",
        bubblegum: "#e76d8a",
        mauve: "#6f4367",
        lavender: "#a69aca",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
