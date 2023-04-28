/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        paletteBlue: "#0019F6",
        paletteDarkGray: "#252422",
        paletteGray: "#403D39",
        paletteCreame: "#CCC5B9",
        paletteWhite: "#CCC5B9",
        novanetaColor: "#96581F",
        monimoniColor: "#510191",
        grecoColor: "#0119F6",
      },
    },
  },
  plugins: [],
};
