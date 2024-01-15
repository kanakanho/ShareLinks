import { FC } from "react";
import { styled } from "styled-components";

type Props = {
  iconLink: string;
};

const IconContainer = styled.div`
  width: 120px;
  height: 120px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
`;

const IconImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

const Icon: FC<Props> = ({ iconLink }) => {
  return (
    <IconContainer>
      <IconImg src={iconLink} alt="icon" />
    </IconContainer>
  );
};

export default Icon;
