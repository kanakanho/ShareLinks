import { FC, useState } from "react";
import { styled } from "styled-components";
import Layout from "../component/layout/Layout";
import { IoArrowForwardOutline } from "react-icons/io5";
import { useMenuMutators } from "../component/globalstate/menu";
import bgImage from "../assets/back.png";
import Check from "../component/notfound/Check";
import { RiSearch2Line } from "react-icons/ri";

const Main = styled.main`
  padding: 0 5vw;
  display: grid;
  flex-direction: column;
  justify-content: center;
  grid-template-columns: 1fr 2fr;
  grid-gap: 5vw;
  background-image: url(${bgImage});
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
  top: 26vh;

  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  p {
    font-size: 25px;
    font-weight: bold;
    font-family: "Zen Maru Gothic", serif;
  }

  h1 {
    font-size: 50px;
    color: orange;
  }
`;

const Start = styled.div`
  margin: 20px auto;
  padding: 10px 20px;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  background-color: #cef;
  border-radius: 10px;
`;

const Button = styled.div`
  margin: 20px auto;
  padding: 10px 20px 8px 20px;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  background-color: #eee;
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
  const [isCheck, setIsCheck] = useState(false);
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
        <p>デザインいらず！</p>
        <p>ノーコードで作るポートフォリオ</p>
        <h1>ShareLinks</h1>
        <Start onClick={openMenu}>
          試してみる
          <Icon>
            <IoArrowForwardOutline />
          </Icon>
        </Start>
        {isCheck ? (
          <Check />
        ) : (
          <Button onClick={() => setIsCheck(true)}>
            ユーザーを探す
            <RiSearch2Line />
          </Button>
        )}
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
