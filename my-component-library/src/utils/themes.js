import { greenPrimary, neutral } from "./colors";
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
};
