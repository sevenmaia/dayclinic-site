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
        brand: {
          orange: "#D98900",
          hover: "#C77900",
          soft: "#FFF4E3",
        },
        ink: {
          950: "#111111",
          900: "#171717",
          800: "#242424",
          700: "#3C3C3C",
          600: "#5C5C5C",
          500: "#777777",
        },
        surface: {
          DEFAULT: "#F8F8F6",
          dark: "#171717",
        },
        borderGray: {
          DEFAULT: "#E7E7E7",
          subtle: "#ECECEC",
          strong: "#D7D7D7",
        },
        brown: {
          950: "#2C1804",
          900: "#3A2106",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "Inter", "sans-serif"],
      },
      maxWidth: {
        container: "1240px",
      },
      borderRadius: {
        none: "0px",
        xs: "4px",
        sm: "6px",
        md: "8px",
        DEFAULT: "8px",
        lg: "10px",
        xl: "12px",
        "2xl": "14px",
        "3xl": "16px",
        full: "9999px",
      },
      boxShadow: {
        card: "0 8px 30px rgba(0,0,0,0.06)",
        header: "0 8px 30px rgba(0,0,0,0.08)",
        soft: "0 14px 50px rgba(0,0,0,0.10)",
      },
    },
  },
  plugins: [],
};
export default config;
