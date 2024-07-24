import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        spGreen: "#006b3f",
        spCream: "#ffbd76",
        spGray: "#c5c5c4",
      },
      boxShadow: {
        spBox: "0px 2px 4px rgba(0, 107, 63, 0.2)", // سایه نرم با رنگ spGreen
        "spBox-lg": "0px 8px 16px rgba(0, 107, 63, 0.3)", // سایه بزرگتر با رنگ spGreen
      },
      screens: {
        "3xl": "1600px",
        "xs": "500px",
      },
    },
  },
  plugins: [],
};

export default config;
