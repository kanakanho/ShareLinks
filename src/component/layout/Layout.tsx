import { FC, useEffect, useRef, useState } from "react";
import Header from "../header/Header";
import styled from "styled-components";
import Link from "../link/Link";
import Products from "../product/Products";
import Footer from "../footer/Footer";
import Button from "./user/Button";
import User from "./user/User";
import Menu from "../menu/Menu";
import { RecoilRoot } from "recoil";

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

type IsMenu = {
  isMenu: boolean;
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
    display: block;
    width: 100%;
    padding: 5px;
  }
`;

const MenuContainer = styled.div`
  position: relative;
  border-radius: 10px;
  grid-column: 2;
  z-index: 1;
`;

const MainContainer = styled.div<IsMenu>`
  opacity: ${({ isMenu }) => (isMenu ? 0.5 : 1)};
  grid-column: 2;
`;

const HeaderContainer = styled.div`
  margin: 20px 0;
  text-align: center;
  position: relative;
`;

const UserContainer = styled.div``;

const LinkContainer = styled.div``;

const ProductsContainer = styled.div``;

const FooterContainer = styled.div``;

const jsonUrl = "https://raw.githubusercontent.com/kanakanho/links/master/src/data.json";

const Layout: FC = () => {
  const [isUser, setisUser] = useState<boolean>(false);
  const [isMenu, setisMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutsideMenu = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setisMenu(false);
    }
  };

  useEffect(() => {
    if (isMenu) {
      document.addEventListener("mousedown", handleClickOutsideMenu);
    } else {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, [isMenu]);

  const [data, setData] = useState<Data>(demoData);
  useEffect(() => {
    fetch(jsonUrl)
      .then((res) => res.json())
      .then((data) => {
        setData(data[0]);
      });
  }, []);
  return (
    <RecoilRoot>
      <LayoutContainer>
        {isMenu && (
          <MenuContainer ref={menuRef}>
            <Menu></Menu>
          </MenuContainer>
        )}
        <MainContainer isMenu={isMenu}>
          <HeaderContainer>
            <Header description={data.Description} name={data.Name} icon={data.Icon} />
          </HeaderContainer>
          <UserContainer>
            <Button onClick={setisMenu} isUser={isMenu} />
          </UserContainer>
          <LinkContainer>
            <Link links={data.Links} />
          </LinkContainer>
          <ProductsContainer>
            <Products articles={data.article} />
          </ProductsContainer>
        </MainContainer>
      </LayoutContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </RecoilRoot>
  );
};

export default Layout;
