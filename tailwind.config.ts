/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        background: "#202833",
        foreground: "#FAFBFB",
        primary: "#4DA9AB",
      },
    },
  },
  plugins: [],
};
