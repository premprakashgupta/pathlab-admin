/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // If using the src directory
  ],
  darkMode: 'class', // Enables class-based dark mode
  theme: {
    extend: {
      colors: {
        light: {
          primary: { 
            50: "#eff6ff", 
            100: "#dbeafe", 
            200: "#bfdbfe", 
            300: "#93c5fd", 
            400: "#60a5fa", 
            500: "#3b82f6", 
            600: "#2563eb", 
            700: "#1d4ed8", 
            800: "#1e40af", 
            900: "#1e3a8a", 
            950: "#172554"
          },
          background: "#ffffff",
          text: "#000000",
        },
        dark: {
          primary: { 
            50: "#1e293b", 
            100: "#334155", 
            200: "#475569", 
            300: "#64748b", 
            400: "#94a3b8", 
            500: "#cbd5e1", 
            600: "#e2e8f0", 
            700: "#f1f5f9", 
            800: "#f8fafc", 
            900: "#ffffff"
          },
          background: "#18181b",
          text: "#e4e4e7",
        },
      },
      fontFamily: {
        body: [
          'Inter', 
          'ui-sans-serif', 
          'system-ui', 
          '-apple-system', 
          'system-ui', 
          'Segoe UI', 
          'Roboto', 
          'Helvetica Neue', 
          'Arial', 
          'Noto Sans', 
          'sans-serif', 
          'Apple Color Emoji', 
          'Segoe UI Emoji', 
          'Segoe UI Symbol', 
          'Noto Color Emoji'
        ],
        sans: [
          'Inter', 
          'ui-sans-serif', 
          'system-ui', 
          '-apple-system', 
          'system-ui', 
          'Segoe UI', 
          'Roboto', 
          'Helvetica Neue', 
          'Arial', 
          'Noto Sans', 
          'sans-serif', 
          'Apple Color Emoji', 
          'Segoe UI Emoji', 
          'Segoe UI Symbol', 
          'Noto Color Emoji'
        ],
      },
    },
  },
  plugins: [],
};
