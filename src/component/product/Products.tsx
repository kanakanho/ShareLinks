import { FC } from "react";
import { styled } from "styled-components";
import Card from "./Card";

type Article = {
  image: string;
  movie: string;
  title: string;
  article: string;
  margin: string;
  link: string;
};

type Props = {
  articles: Article[];
};

const ProductsContainer = styled.div``;

const Text = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin: 10px 0;
  color: #333;
`;

const Products: FC<Props> = ({ articles }) => {
  return (
    <ProductsContainer>
      <Text>Products</Text>
      {articles.map((item: Article, index: number) => {
        return <Card key={index} {...item} />;
      })}
    </ProductsContainer>
  );
};

export default Products;
