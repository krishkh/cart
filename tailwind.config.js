/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkslategray: "#3c3c3c",
        
        gray: {
          100: "#828282",
          200: "#1b1b1b",
        },
        black: "#000",
        gainsboro: "#d9d9d9",
        "icon-color": "#fff",
        dimgray: "#676767",
      },
      spacing: {},
      fontFamily: {
        "overpass-mono": "'Overpass Mono'",
        oswald: "Oswald",
        pangolin: "Pangolin",
        "overlock-sc": "'Overlock SC'",
      }
    },
  },
  plugins: [],
};
