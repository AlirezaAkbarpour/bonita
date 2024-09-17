import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      flex:{
        '2':'2 2 0%',
        '2/3':'2/3 1 0%'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        manual_gray:"#eef0f2"
      },
      height:{
        '114':'44%'
      }
    },
  },
  plugins: [],
};
export default config;
