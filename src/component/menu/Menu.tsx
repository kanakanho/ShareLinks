import { FC, useEffect, useState } from "react";
import { styled } from "styled-components";
import { FaCopy } from "react-icons/fa";
import { useDetailState } from "../globalstate/details";
import { LuLogOut } from "react-icons/lu";
import { logout } from "../utils/auth";
import Login from "./Login";
import { useLoginMutators, useLoginState } from "../globalstate/login";

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
  const [userUrl, setUserUrl] = useState<string>("");
  const { setLoginPermissionState } = useLoginMutators();
  const isLogin = useLoginState();

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
        {isLogin ? (
          <Info>
            <Logout onClick={async () => await logout().then(() => setLoginPermissionState(false))}>
              <LuLogOut />
              Logout
            </Logout>
            <Title>あなたのリンク</Title>
            <Url href={userUrl}>{userUrl}</Url>
            <FaCopy />
            <MiniTitle>ShareLinks の使い方</MiniTitle>
            <Text>
              1. <a href="https://github.com/kanakanho/ShareLinks">この書き方</a>に沿ってポートレートの内容をdata.jsonに書こう!
            </Text>
            <Text>
              2. Githubに<span onClick={() => copyToClipboard()}>ShareLinks</span>
              という名前のレポジトリを作ろう!
            </Text>
            <Text>3. そのレポジトリに作っておいたdata.jsonをあげよう!</Text>
            <Text style={{ opacity: 0.5 }}>4. 下のボタンからGithubでこのサービスにログイン</Text>
            <Text>5. 発行されたリンクをコピーしてポートフォリオを共有しよう!</Text>
          </Info>
        ) : (
          <Login />
        )}
      </Info>
    </MenuContainer>
  );
};

export default Menu;
