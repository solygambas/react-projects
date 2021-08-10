import { greenPrimary, neutral, green, yellow, red } from "./colors";
import { primaryFont } from "./typography";

export const defaultTheme = {
  primaryColor: greenPrimary[300],
  primaryColorDark: greenPrimary[400],
  primaryColorDarker: greenPrimary[500],
  primaryColorOutline: neutral[300],
  primaryColorLighter: greenPrimary[100],
  textColorOnPrimary: neutral[100],
  textColor: neutral[600],
  textColorInverted: neutral[100],
  primaryFont,
  status: {
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
  },
};

export const darkTheme = {
  primaryColor: neutral[600],
  primaryColorDark: neutral[100],
  primaryColorDarker: neutral[100],
  primaryColorOutline: greenPrimary[300],
  primaryColorLighter: neutral[100],
  textColorOnPrimary: greenPrimary[300],
  textColor: neutral[600],
  textColorInverted: neutral[100],
  primaryFont,
  status: {
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
  },
};
