import type { Config } from "tailwindcss";

const config: Config = {
content: [
"./app/**/*.{ts,tsx}",
"./components/**/*.{ts,tsx}",
],
theme: {
extend: {
colors: {
ink: "#14120F",
  cream: "#F6F1E9",
  sand: "#E8DFCF",
  gold: "#B08D57",
  clay: "#8A6E52",
  },
  fontFamily: {
display: ["var(--font-display)", "serif"],
  body: ["var(--font-body)", "sans-serif"],
  },
  },
  },
  plugins: [],
    };

export default config;
