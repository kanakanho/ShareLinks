import { FC, useCallback, useEffect, useRef, useState } from "react";
import Header from "../header/Header";
import styled from "styled-components";
import Link from "../link/Link";
import Products from "../product/Products";
import Footer from "../footer/Footer";
import Button from "./user/Button";
import Menu from "../menu/Menu";
import { useMenuMutators, useMenuState } from "../globalstate/menu";
import { Data, demoData } from "../utils/data";

type Props = {
  params: string;
};

type IsMenu = {
  isMenu: boolean;
};

type IsDemo = {
  isDemo: boolean;
};

const LayoutContainer = styled.div<IsDemo>`
  height: fit-content;
  background-image: url("https://kanakanho.vercel.app/img/blue.jpeg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  border-radius: ${({ isDemo }) => (isDemo ? "15px" : "0")};

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

const Layout: FC<Props> = ({ params }) => {
  const isMenu = useMenuState();
  const { setMenuPermissionState } = useMenuMutators();
  const [isDemo, setisDemo] = useState<boolean>(false);
  useEffect(() => {
    if (params === "text") {
      setisDemo(true);
    }
  }, [params]);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const jsonUrl = `https://raw.githubusercontent.com/${params}/ShareLinks/main/data.json`;

  const handleClickOutsideMenu = useCallback(
    (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuPermissionState(false);
      }
    },
    [setMenuPermissionState, menuRef]
  );

  useEffect(() => {
    if (isMenu) {
      document.addEventListener("mousedown", handleClickOutsideMenu);
    } else {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, [isMenu, handleClickOutsideMenu]);

  const [data, setData] = useState<Data>(demoData);
  useEffect(() => {
    fetch(jsonUrl)
      .then((res) => res.json())
      .then((data) => {
        setData(data[0]);
      });
  }, [jsonUrl]);
  return (
    <>
      <LayoutContainer isDemo={isDemo}>
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
            <Button onClick={setMenuPermissionState} isUser={isMenu} />
          </UserContainer>
          <LinkContainer>
            <Link links={data.Links} />
          </LinkContainer>
          <ProductsContainer>
            <Products articles={data.article} />
          </ProductsContainer>
        </MainContainer>
      </LayoutContainer>
      {isDemo ? (
        <></>
      ) : (
        <FooterContainer>
          <Footer />
        </FooterContainer>
      )}
    </>
  );
};

export default Layout;
