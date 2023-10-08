import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        slidein: "slidein 2s ease-in-out",
        slideout: "slideout 2s ease-in-out forwards",
        fadein: "fadein 300ms ease-in-out forwards",
        fadeout: "fadeout 300ms ease-in-out forwards",
      },
      keyframes: {
        slidein: {
          "0%": { transform: "translateX(-400px)" },
          "100%": { transform: "translateX(0px)" },
        },
        slideout: {
          "0%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(-400px)" },
        },
        fadein: {
          "0%": { opacity: "0" },
          "100%": { opacity: "100" },
        },
        fadeout: {
          "0%": { opacity: "100" },
          "100%": { opacity: "0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
