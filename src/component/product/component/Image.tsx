import { FC } from "react";
import { styled } from "styled-components";

type Props = {
  image: string;
};

const CardImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Image: FC<Props> = ({ image }) => {
  return <CardImage src={image} alt="img" />;
};

export default Image;
