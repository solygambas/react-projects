import styled from "styled-components";
import { typeScale } from "../utils";
import { Illustrations, CloseIcon } from "../assets";
import { PrimaryButton } from "./Buttons";

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.formElementBackground};
  color: ${(props) => props.theme.textOnFormElementBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
`;

const SignUpHeader = styled.h3`
  font-size: ${typeScale.header3};
`;

const SignUpText = styled.p`
  font-size: ${typeScale.paragraph};
  max-width: 70%;
  text-align: center;
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  top: 40px;
  right: 40px;
  width: 24px;
  height: 24px;
  padding: 0;
`;

export const SignUpModal = () => {
  return (
    <ModalWrapper>
      <img
        src={Illustrations.SignUp}
        alt="Sign up for an account"
        aria-hidden="true"
      />
      <SignUpHeader>Sign Up</SignUpHeader>
      <SignUpText>Sign up today to get access!</SignUpText>
      <PrimaryButton>Sign up!</PrimaryButton>
      <CloseModalButton aria-label="Close modal">
        <CloseIcon />
      </CloseModalButton>
    </ModalWrapper>
  );
};
