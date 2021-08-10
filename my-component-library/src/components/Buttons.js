import styled from "styled-components";

const primaryGreen = "#03A167";

const Button = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: "Open Sans", sans-serif;
`;

const PrimaryButton = styled(Button)`
  background-color: ${primaryGreen};
  color: white;
  border: none;
`;

export const SecondaryButton = styled(Button)`
  color: ${primaryGreen};
  background-color: white;
  border: 2px solid ${primaryGreen};
`;

export const TertiaryButton = styled(Button)`
  color: ${primaryGreen};
  background-color: white;
  border: none;
`;

export default PrimaryButton;
