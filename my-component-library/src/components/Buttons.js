import styled from "styled-components";
import { defaultTheme, typeScale } from "../utils/";

const Button = styled.button`
  padding: 12px 24px;
  font-size: ${typeScale.paragraph};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: "Open Sans", sans-serif;
`;

const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  color: white;
  border: none;
`;

export const SecondaryButton = styled(Button)`
  color: ${defaultTheme.primaryColor};
  background-color: white;
  border: 2px solid ${defaultTheme.primaryColor};
`;

export const TertiaryButton = styled(Button)`
  color: ${defaultTheme.primaryGreen};
  background-color: white;
  border: none;
`;

export default PrimaryButton;
