import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mark8: {
          orange: "#EA580C",
          navy: "#1E293B",
          "orange-light": "#FFF7ED",
        },
      },
    },
  },
  plugins: [],
};

export default config;
