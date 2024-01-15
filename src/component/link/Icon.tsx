import { FC } from "react";
import { styled } from "styled-components";

type Props = {
  iconLink: string;
};

const IconContainer = styled.div`
  width: 72px;
  height: 72px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconImg = styled.img`
  width: 64px;
  height: 64px;
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
