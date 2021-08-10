import styled from "styled-components";
import { defaultTheme, typeScale } from "../utils/";

const Button = styled.button`
  padding: 12px 24px;
  font-size: ${typeScale.paragraph};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: "Open Sans", sans-serif;
  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${defaultTheme.primaryColorDark};
    color: ${defaultTheme.textColorOnPrimary};
  }

  &:focus {
    outline: 3px solid ${defaultTheme.primaryColorOutline};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${defaultTheme.primaryColorDarker};
    border-color: ${defaultTheme.primaryColorDarker};
    color: ${defaultTheme.textColorOnPrimary};
  }
`;

const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  color: white;
  border: none;

  &:disabled {
    background-color: ${defaultTheme.primaryColorLighter};
    color: ${defaultTheme.textColorOnPrimary};
    cursor: not-allowed;
  }
`;

export const SecondaryButton = styled(Button)`
  color: ${defaultTheme.primaryColor};
  background-color: white;
  border: 2px solid ${defaultTheme.primaryColor};

  &:disabled {
    background: none;
    color: ${defaultTheme.primaryColorLighter};
    border-color: ${defaultTheme.primaryColorLighter};
    cursor: not-allowed;
  }
`;

export const TertiaryButton = styled(Button)`
  color: ${defaultTheme.primaryColor};
  background-color: white;
  border: none;

  &:disabled {
    background: none;
    color: ${defaultTheme.primaryColorLighter};
    cursor: not-allowed;
  }
`;

export default PrimaryButton;
