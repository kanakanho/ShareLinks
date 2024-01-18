import { FC } from "react";
import { styled } from "styled-components";

const FooterContainer = styled.div`
  margin: 0;
  width: 102%;
  background-color: #ccc;
  text-align: center;
`;

const Text = styled.p`
  margin: 0;
  padding: 25px 0 25px 0;
  font-size: 1rem;
  font-weight: bold;
  color: white;
`;

const Footer: FC = () => {
  return (
    <FooterContainer>
      <Text>produce by kanakanho</Text>
    </FooterContainer>
  );
};

export default Footer;
