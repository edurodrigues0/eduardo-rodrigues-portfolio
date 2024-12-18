/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        "skills-image": "url('../public/coding.jpg')",
      },
      colors: {
        background: "#202833",
        foreground: "#FAFBFB",
        primary: "#4DA9AB",
        primaryForeground: "#36797A",
      },
    },
  },
  plugins: ["@tailwindcss/line-clamp"],
};
