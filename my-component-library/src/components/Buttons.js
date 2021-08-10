import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { defaultTheme, typeScale } from "../utils/";

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px;
  `,
  large: () => `
    font-size: ${typeScale.header5};
    padding: 16px 24px;
  `,
  success: () => `
    background: ${defaultTheme.status.successColor};
    color: ${defaultTheme.textColorInverted};

    &:hover {
      background-color: ${defaultTheme.status.successColorHover};
    }

    &:focus {
      outline: 3px solid ${defaultTheme.status.successColorHover};
    }

    &:active {
      background-color: ${defaultTheme.status.successColorActive};
    }
  `,
  secondaryButtonSuccess: () => `
    background: none;
    color: ${defaultTheme.status.successColor};
    border: 2px solid ${defaultTheme.status.successColor};
  `,
  ternaryButtonSuccess: () => `
    background: none;
    color: ${defaultTheme.status.successColor};
    border: none;
  `,
  warning: () => `
    background-color: ${defaultTheme.status.warningColor};
    color: ${defaultTheme.textColorInverted};

    &:hover {
      background-color: ${defaultTheme.status.warningColorHover};
    }

    &:focus {
      outline: 3px solid ${defaultTheme.status.warningColorHover};
    }

    &:active {
      background-color: ${defaultTheme.status.warningColorActive};
    }
  `,
  secondaryButtonWarning: () => `
    background: none;
    color: ${defaultTheme.status.warningColor};
    border: 2px solid ${defaultTheme.status.warningColor};
  `,
  ternaryButtonWarning: () => `
    background: none;
    color: ${defaultTheme.status.warningColor};
    border: none;
  `,
  error: () => `
  background-color: ${defaultTheme.status.errorColor};
  color: ${defaultTheme.textColorInverted};

  &:hover {
    background-color: ${defaultTheme.status.errorColorHover};
  }

  &:focus {
    outline: 3px solid ${defaultTheme.status.errorColorHover};
  }

  &:active {
    background-color: ${defaultTheme.status.errorColorActive};
  }
`,
  secondaryButtonError: () => `
  background: none;
  color: ${defaultTheme.status.errorColor};
  border: 2px solid ${defaultTheme.status.errorColor};
`,
  ternaryButtonError: () => `
  background: none;
  color: ${defaultTheme.status.errorColor};
  border: none;
`,
};

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

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
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

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
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

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export default PrimaryButton;
