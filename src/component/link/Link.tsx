import { FC } from "react";
import Icon from "./Icon";
import { styled } from "styled-components";

type Links = {
  alt: string;
  url: string;
};

type Props = { links: Links[] };

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const IconA = styled.a`
  padding: 0.5vw;
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  text-align: center;
  font-size: 1rem;
  color: black;
`;

const Link: FC<Props> = ({ links }) => {
  return (
    <LinkContainer>
      {links.map((item: Links) => {
        return (
          <IconA key={item.alt}  href={item.url} target="_blank" rel="noopener noreferrer">
            <Icon
              key={item.alt}
              iconLink={`https://kanakanho.vercel.app/img/icon/${item.alt}.png`}
            />
            <Text>{item.alt}</Text>
          </IconA>
        );
      })}
    </LinkContainer>
  );
};

export default Link;
