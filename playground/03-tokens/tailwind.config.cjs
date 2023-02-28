/** @type {import('tailwindcss').Config} */

const formatKebabCase = (string) =>
  string
    .replace(/\([^()]*\)/g, "")
    .trim()
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();

const tokens = require("./tokens/js/_variables");
const colors = Object.fromEntries(
  Object.values(tokens.color["light part"]).map(({ attributes, value }) => [
    formatKebabCase(attributes.item),
    value,
  ])
);

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors,
    extend: {},
  },
  plugins: [],
};

// console.log(colors);
