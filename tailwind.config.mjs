/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        boxing: ["Boxing", "sans-serif"],
        "boxing-striped": ["Boxing Striped", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
