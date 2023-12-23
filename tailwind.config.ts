import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: {max: "727px"},
        tablet: {min: "728px", max: "1280px"},
        desktop: {min: "1281px"},
      },
      fontFamily: {
        suit: ["suit"],
        suitBold: ["suitBold"],
        suitSemiBold: ["suitSemiBold"],
        intel: ["intel"],
      },
      colors: {
        highlight: "#faac40",
        buttonHighlight: "#ebeced",
      },
    },
  },
  plugins: [],
};
export default config;
