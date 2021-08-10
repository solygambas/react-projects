import { greenPrimary, neutral } from "./colors";
import { primaryFont } from "./typography";

export const defaultTheme = {
  primaryColor: greenPrimary[300],
  primaryColorHover: greenPrimary[200],
  primaryColorActive: greenPrimary[100],
  textColorOnPrimary: neutral[100],
  textColor: neutral[600],
  textColorInverted: neutral[100],
  primaryFont,
};
