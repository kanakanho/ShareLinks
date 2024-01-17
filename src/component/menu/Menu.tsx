import { FC, useEffect, useState } from "react";
import { styled } from "styled-components";
import { FaCopy } from "react-icons/fa";
import { useDetailState } from "../globalstate/details";
import { LuLogIn, LuLogOut } from "react-icons/lu";
import { githubLogin, logout, useGithubLogin } from "../utils/auth";
import { reload } from "firebase/auth";

const MenuContainer = styled.div`
  position: absolute;
  top: 10vh;
  left: 0;
  width: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  padding: 10px 20px 20px 20px;
  border-radius: 10px;
  background-color: #fff;
`;

const Title = styled.div`
  width: fit-content;
  margin: 10px 0;
  padding: 0 15px;
  font-size: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  grid-column: 1;
`;

const MiniTitle = styled.div`
  margin: 20px 0 10px 0;
  padding: 5px 15px;
`;

const Text = styled.div`
  padding: 5px 0;
`;

const Login = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  margin: 20px 0 0 0;
  background-color: #eee;
  border-radius: 5px;
`;

const Logout = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  text-align: right;
  padding: 7px 15px 5px 15px;
  background-color: #eee;
  border-radius: 5px;
`;

const Info = styled.div`
  position: relative;
  padding: 20px 0;
`;

const Url = styled.a`
  grid-column: 1;
  padding: 0 15px;
`;

const Menu: FC = () => {
  const useGithub = useGithubLogin();
  const [userUrl, setUserUrl] = useState<string>("");

  const name = useDetailState();
  const mainUrl = "https://share-links-kanakanho.vercel.app/";
  useEffect(() => {
    setUserUrl(mainUrl + name);
  }, [name]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("ShareLinks");
  };

  return (
    <MenuContainer>
      <Info>
        {name ? (
          <Info>
            <Logout onClick={async () => await logout().then(() => reload)}>
              <LuLogOut />
              Logout
            </Logout>
            <Title>あなたのリンク</Title>
            <Url href={userUrl}>{userUrl}</Url>
            <FaCopy />
            <MiniTitle>ShareLinks の使い方</MiniTitle>
            <Text>
              1. <a href="れーどめー">この書き方</a>に沿って自分のポートレートの中身をjsonに書こう!
            </Text>
            <Text>
              2. Githubに<span onClick={() => copyToClipboard()}>ShareLinks</span>
              という名前のレポジトリを作ろう!
            </Text>
            <Text>3. そのレポジトリに先に作っておいたjsonファイルをあげよう!</Text>
            <Text>4. 下のボタンからGithubでこのサービスにログイン</Text>
            <Text>5. 発行されたリンクをコピーしてポートフォリオを共有しよう!</Text>
          </Info>
        ) : (
          <>
            <Title>ShareLinks へようこそ</Title>
            <MiniTitle>ShareLinks の使い方</MiniTitle>
            <Text>
              1. <a href="れーどめー">この書き方</a>に沿って自分のポートレートの中身をjsonに書こう!
            </Text>
            <Text>
              2. Githubに<span onClick={() => copyToClipboard()}>ShareLinks</span>
              という名前のレポジトリを作ろう!
            </Text>
            <Text>3. そのレポジトリに先に作っておいたjsonファイルをあげよう!</Text>
            <Text>4. 下のボタンからGithubでこのサービスにログイン</Text>
            <Login
              onClick={async () => {
                await githubLogin().then(() => useGithub);
              }}
            >
              <LuLogIn />
              Githubでログイン
            </Login>
          </>
        )}
      </Info>
    </MenuContainer>
  );
};

export default Menu;
