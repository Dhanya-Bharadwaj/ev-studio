import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // A premium, modern color palette
        'background': '#0D0D0D', // Near-black for the background
        'foreground': '#F5F5F7', // Off-white for primary text
        'muted': '#8D8D8D',      // Gray for secondary text
        'primary': '#00BFFF',    // Your electric blue accent
        'border': '#262626',      // Subtle border color
      },
      fontFamily: {
        // Using a clean, modern sans-serif font
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;