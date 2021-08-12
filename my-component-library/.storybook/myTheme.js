import { create } from "@storybook/theming/create";
import { greenPrimary, neutral } from "../src/utils/colors";

export default create({
  base: "light",

  colorPrimary: greenPrimary[300],
  colorSecondary: greenPrimary[100],

  // UI
  appBg: "white",
  appContentBg: neutral[200],
  appBorderColor: greenPrimary[500],
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "black",
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  barTextColor: greenPrimary[500],
  barSelectedColor: "black",
  barBg: greenPrimary[300],

  // Form colors
  inputBg: "white",
  inputBorder: greenPrimary[500],
  inputTextColor: "black",
  inputBorderRadius: 4,

  brandTitle: "My Component Library",
  brandUrl: "/",
  brandImage: "https://i.ibb.co/JF3xckk/mycomponentlibrary.png",
});
