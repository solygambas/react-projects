import { ThemeProvider } from "styled-components";
import { defaultTheme, darkTheme } from "../src/utils";

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "default",
    toolbar: {
      icon: "circlehollow",
      // Array of plain string values or MenuItem shape (see below)
      items: ["default", "dark"],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
};

const getTheme = (themeName) => {
  return themeName === "default" ? defaultTheme : darkTheme;
};

const withThemeProvider = (Story, context) => {
  const theme = getTheme(context.globals.theme);
  return (
    <ThemeProvider theme={theme}>
      <Story {...context} />
    </ThemeProvider>
  );
};
export const decorators = [withThemeProvider];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "light",
    values: [
      {
        name: "light",
        value: "#fff",
      },
      {
        name: "dark",
        value: "#000",
      },
    ],
  },
};
