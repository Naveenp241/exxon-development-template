import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./templates/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: "#ff9500",
        "dark-orange": "#db8000",
      },
      scale: {
        1.02: "1.02",
      },
    },
  },
  plugins: [],
} satisfies Config;
