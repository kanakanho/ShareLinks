import { FC } from "react";
import styled from "styled-components";
import Icon from "./Icon";

type Props = {
  description: string;
  name: string;
  icon: string;
};

const HeaderContainer = styled.div`
  padding: 3vw 0 2vw 0;
  height: auto;
  width: auto;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  text-align: center;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
`;

const Text = styled.p`
  margin: 0;
  height: 1.5rem;
`;

const Header: FC<Props> = ({ description, name, icon }) => {
  const descriptionArray = description.split("\n");
  return (
    <HeaderContainer>
      <IconContainer>
        <Icon iconLink={icon} />
      </IconContainer>
      <Title>{name}</Title>
      {descriptionArray.map((item: string, index) => {
        return <Text key={index}>{item}</Text>;
      })}
    </HeaderContainer>
  );
};

export default Header;
