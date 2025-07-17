import type { Config } from "tailwindcss";
import daisyui from "daisyui";
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          focus: "var(--primary-focus)",
          content: "var(--primary-content)",
        },
      },
      fontFamily: {
        Domine: ["Domine", "serif"],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark", "winter", "cmyk"],
  },
} satisfies Config;
