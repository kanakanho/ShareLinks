import { FC, useState } from "react";
import { styled } from "styled-components";
import bgImage from "../assets/back.png";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { RiSearch2Line } from "react-icons/ri";
import Check from "../component/notfound/Check";

const Main = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${bgImage});
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
`;

const Message = styled.div`
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
`;

const Title = styled.div`
  padding: 5px 10px;
  align-items: center;
  font-size: 50px;
`;

const Text = styled.div`
  align-items: center;
  font-size: 20px;
`;

const Action = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.div`
  margin: 20px 0 0 0;
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

const NotFound: FC = () => {
  const [isCheck, setIsCheck] = useState(false);
  return (
    <Main>
      <Message>
        <Title>404</Title>
        <Title>Page Not Found</Title>
        <hr />
        <Text>入力された ID のユーザーはいません</Text>
        <Text>ID に誤りはありませんでしたか？</Text>
        <Action>
          <Link to="/">
            <Button>
              <IoArrowBackOutline />
              ホームに戻る
            </Button>
          </Link>
          {isCheck ? (
            <Check />
          ) : (
            <Button onClick={() => setIsCheck(true)}>
              ID を確認
              <RiSearch2Line />
            </Button>
          )}
        </Action>
      </Message>
    </Main>
  );
};

export default NotFound;
