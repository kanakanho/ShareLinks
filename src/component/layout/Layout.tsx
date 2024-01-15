import { FC, useEffect, useState } from "react";
import Header from "../header/Header";
import styled from "styled-components";
import Link from "../link/Link";
import Products from "../product/Products";

type Data = {
  Name: string;
  Description: string;
  Icon: string;
  Links: {
    alt: string;
    url: string;
  }[];
  article: {
    image: string;
    movie: string;
    title: string;
    article: string;
    margin: string;
    link: string;
  }[];
};

const demoData: Data = {
  Name: "Kanako's Portfolio",
  Description: "Kanako's Portfolio",
  Icon: "https://pbs.twimg.com/profile_images/1673567713954873344/SQymHa9-_400x400.jpg",
  Links: [
    {
      alt: "github",
      url: "",
    },
  ],
  article: [
    {
      image: "",
      movie: "",
      title: "2024",
      article: "",
      margin: "",
      link: "",
    },
  ],
};

const LayoutContainer = styled.div`
  height: fit-content;
  background-image: url("https://kanakanho.vercel.app/img/blue.jpeg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 5px;
  }
`;

const HeaderContainer = styled.div`
  margin: 1vw 0;
  text-align: center;
  grid-column: 2;
`;

const LinkContainer = styled.div`
  grid-column: 2;
`;

const ProductsContainer = styled.div`
  grid-column: 2;
`;

const jsonUrl = "https://raw.githubusercontent.com/kanakanho/links/master/src/data.json";
const Layout: FC = () => {
  const [data, setData] = useState<Data>(demoData);
  useEffect(() => {
    fetch(jsonUrl)
      .then((res) => res.json())
      .then((data) => {
        setData(data[0]);
      });
  }, []);
  return (
    <LayoutContainer>
      <HeaderContainer>
        <Header description={data.Description} name={data.Name} icon={data.Icon} />
      </HeaderContainer>
      <LinkContainer>
        <Link links={data.Links} />
      </LinkContainer>
      <ProductsContainer>
        <Products articles={data.article} />
      </ProductsContainer>
    </LayoutContainer>
  );
};

export default Layout;
