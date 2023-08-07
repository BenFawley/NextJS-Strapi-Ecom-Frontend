/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  variants: {
    borderColor: ["active", "checked"],
  },
  theme: {
    extend: {
      height: {
        "accordion-height": "var(--accordion-height)",
      },
      width: {
        47: "47%",
      },
      colors: {
        royal: "#0057fc",
      },
    },
  },

  plugins: [],
};
