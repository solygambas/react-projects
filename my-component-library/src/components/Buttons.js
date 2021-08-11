import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { typeScale } from "../utils/";

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px;
  `,
  large: () => `
    font-size: ${typeScale.header5};
    padding: 16px 24px;
  `,
  success: ({ props }) => `
    background: ${props.theme.status.successColor};
    color: ${props.theme.textColorInverted};

    &:hover {
      background-color: ${props.theme.status.successColorHover};
    }

    &:focus {
      outline: 3px solid ${props.theme.status.successColorHover};
    }

    &:active {
      background-color: ${props.theme.status.successColorActive};
    }

    &:disabled {
      background-color: ${props.theme.primaryColorOutline};
      color: ${props.theme.textColor};
      cursor: not-allowed;
    }
  `,
  secondaryButtonSuccess: ({ props }) => `
    background: none;
    color: ${props.theme.status.successColor};
    border: 2px solid ${props.theme.status.successColor};
  `,
  ternaryButtonSuccess: ({ props }) => `
    background: none;
    color: ${props.theme.status.successColor};
    border: none;
  `,
  warning: ({ props }) => `
    background-color: ${props.theme.status.warningColor};
    color: ${props.theme.textColorInverted};

    &:hover {
      background-color: ${props.theme.status.warningColorHover};
    }

    &:focus {
      outline: 3px solid ${props.theme.status.warningColorHover};
    }

    &:active {
      background-color: ${props.theme.status.warningColorActive};
    }

    &:disabled {
      background-color: ${props.theme.primaryColorOutline};
      color: ${props.theme.textColor};
      cursor: not-allowed;
    }
  `,
  secondaryButtonWarning: ({ props }) => `
    background: none;
    color: ${props.theme.status.warningColor};
    border: 2px solid ${props.theme.status.warningColor};
  `,
  ternaryButtonWarning: ({ props }) => `
    background: none;
    color: ${props.theme.status.warningColor};
    border: none;
  `,
  error: ({ props }) => `
  background-color: ${props.theme.status.errorColor};
  color: ${props.theme.textColorInverted};

  &:hover {
    background-color: ${props.theme.status.errorColorHover};
  }

  &:focus {
    outline: 3px solid ${props.theme.status.errorColorHover};
  }

  &:active {
    background-color: ${props.theme.status.errorColorActive};
  }

  &:disabled {
    background-color: ${props.theme.primaryColorOutline};
    color: ${props.theme.textColor};
    cursor: not-allowed;
  }
`,
  secondaryButtonError: ({ props }) => `
  background: none;
  color: ${props.theme.status.errorColor};
  border: 2px solid ${props.theme.status.errorColor};
`,
  ternaryButtonError: ({ props }) => `
  background: none;
  color: ${props.theme.status.errorColor};
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
    background-color: ${(props) => props.theme.primaryColorDark};
    color: ${(props) => props.theme.textColorOnPrimary};
  }

  &:focus {
    outline: 3px solid ${(props) => props.theme.primaryColorOutline};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${(props) => props.theme.primaryColorDarker};
    border-color: ${(props) => props.theme.primaryColorDarker};
    color: ${(props) => props.theme.textColorOnPrimary};
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.primaryColor};
  color: white;
  border: none;

  &:disabled {
    background-color: ${(props) => props.theme.primaryColorLighter};
    color: ${(props) => props.theme.textColorOnPrimary};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
  color: ${(props) => props.theme.primaryColor};
  background-color: ${(props) => props.theme.textColorOnPrimary};
  border: 2px solid ${(props) => props.theme.primaryColor};

  &:disabled {
    background: none;
    color: ${(props) => props.theme.primaryColorLighter};
    border-color: ${(props) => props.theme.primaryColorLighter};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
  color: ${(props) => props.theme.primaryColor};
  background-color: ${(props) => props.theme.textColorOnPrimary};
  border: none;

  &:disabled {
    background: none;
    color: ${(props) => props.theme.primaryColorLighter};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
