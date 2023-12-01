import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: "#fff",
        mediumblue: {
          "100": "#081ede",
          "200": "rgba(8, 30, 222, 0.05)",
        },
        ghostwhite: "#f3f4fd",
        dimgray: "#4d506c",
        midnightblue: {
          "100": "#030f72",
          "200": "#020e72",
        },
        darkblue: "rgba(1, 17, 150, 0.32)",
      },
      spacing: {},
      fontFamily: {
        "space-grotesk": "'Space Grotesk'",
      },
      borderRadius: {
        "13xl": "32px",
      },
    },
    fontSize: {
      base: "1rem",
      xl: "1.25rem",
      "13xl": "2rem",
      sm: "0.88rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
export default config
