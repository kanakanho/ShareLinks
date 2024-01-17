import { FC } from "react";
import { styled } from "styled-components";
import Layout from "../component/layout/Layout";
import { IoArrowForwardOutline } from "react-icons/io5";
import { useMenuMutators } from "../component/globalstate/menu";

const Main = styled.main`
  padding: 0 5vw;
  display: grid;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 2fr;
  grid-gap: 5vw;
  background-image: url("src/assets/back.png");
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
`;

const AppName = styled.div`
  grid-column: 1;
  text-align: center;
  margin: 20px 0;
  padding: 20px;

  position: fixed;
  top: 34vh;

  background-color: #fff;
  border-radius: 20px;
  opacity: 0.8;
  p {
    font-size: 20px;
  }

  h1 {
    font-size: 50px;
    color: orange;
  }
`;

const Start = styled.div`
  margin: 20px auto;
  padding: 10px 20px 8px 20px;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  background-color: #ddd;
  border-radius: 10px;
`;

const Icon = styled.span`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

const AppTest = styled.div`
  height: 100%;
  grid-column: 2;
  border-radius: 10px;
`;

const LayoutContainer = styled.div`
  margin: 40px 0;
`;

const Home: FC = () => {
  const { setMenuPermissionState } = useMenuMutators();

  const openMenu = () => {
    setMenuPermissionState(true);
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <Main>
      <AppName>
        <p>簡単に作る自分だけのポートフォリオ</p>
        <h1>ShareLinks</h1>
        <Start onClick={openMenu}>
          試してみる
          <Icon>
            <IoArrowForwardOutline />
          </Icon>
        </Start>
      </AppName>
      <AppTest>
        <LayoutContainer>
          <Layout params="text" />
        </LayoutContainer>
      </AppTest>
    </Main>
  );
};

export default Home;
