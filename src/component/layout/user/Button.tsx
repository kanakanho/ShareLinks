import { FC } from "react";
import { styled } from "styled-components";
import { MdAccountCircle } from "react-icons/md";

type Props = {
  onClick: (isMenu: boolean) => void;
  isMenu: boolean;
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

const Button: FC<Props> = ({ onClick, isMenu }) => {
  return (
    <ButtonContainer
      onClick={() => {
        onClick(!isMenu);
      }}
    >
      <MdAccountCircle />
    </ButtonContainer>
  );
};

export default Button;
