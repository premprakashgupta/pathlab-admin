import type { Config } from "tailwindcss";

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
        // btnBgPrimary: "var(--btn-bg-primary)",
        // btnBgSecondary: "var(--btn-bg-secondary)",
        // textClrPrimary: "var(--text-clr-primary)",
        // textClrSecondary: "var(--text-clr-secondary)",
      },
    },
  },
  plugins: [],
} satisfies Config;
