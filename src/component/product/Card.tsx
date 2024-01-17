import { FC } from "react";
import { styled } from "styled-components";
import Image from "./component/Image";
import Movie from "./component/Movie";

type Props = {
  image: string;
  movie: string;
  title: string;
  article: string;
  margin: string;
  link: string;
};

type marginType = {
  $margin: string;
};

const CardContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  margin: 20px 0;
  padding: 10px;
`;

const CardLink = styled.a`
  text-decoration: none;
  color: white;
`;

const Title = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 12px 0;
`;

const Article = styled.div`
  margin: 10px 0;
  text-align: center;
  font-size: 1rem;
`;

const MarginContainer = styled.div<marginType>`
  height: ${(props) => props.$margin};
`;

const Card: FC<Props> = ({ image, movie, title, article, margin, link }) => {
  if (margin === "") {
    return (
      <CardContainer>
        <CardLink href={link} target="_blank">
          {image && <Image image={image} />}
          {movie && <Movie movie={movie} />}
          <Title>{title}</Title>
          <Article>{article}</Article>
        </CardLink>
      </CardContainer>
    );
  }
  if (margin === "absent") {
    return <MarginContainer $margin="30px" />;
  }
  if (margin === "low") {
    return <MarginContainer $margin="30px" />;
  }
  if (margin === "high") {
    return <MarginContainer $margin="50px" />;
  }
};

export default Card;
