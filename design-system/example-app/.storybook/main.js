module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  refs: {
    "design-system": {
      title: "My design system",
      url: "https://main--634fb5a44afef8aae1b84965.chromatic.com/",
    },
  },
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
};
