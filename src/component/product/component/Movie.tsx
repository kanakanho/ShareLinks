import { FC } from "react";
import { styled } from "styled-components";

type Props = {
  movie: string;
};

const MovieContainer = styled.div`
  max-width: 100%;
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
`;

const MovieIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

const Movie: FC<Props> = ({ movie }) => {
  return (
    <MovieContainer>
      <MovieIframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${movie}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></MovieIframe>
    </MovieContainer>
  );
};

export default Movie;
