import { FC, useState } from "react";
import { styled } from "styled-components";
import { MdAccountCircle } from "react-icons/md";

type Props = {
  onClick: (isMenu: boolean) => void;
  isUser: boolean;
};

const ButtonContainer = styled.div`
  width: min-content;
  display: flex;
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 40px;
  color: #333;
  background-color: #fff;
  border-radius: 20px;
`;

const Button: FC<Props> = ({ onClick, isUser }) => {
  return (
    <ButtonContainer
      onClick={() => {
        onClick(!isUser);
      }}
    >
      <MdAccountCircle />
    </ButtonContainer>
  );
};

export default Button;
