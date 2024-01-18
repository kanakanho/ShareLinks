import { FC } from "react";
import { LuLogIn } from "react-icons/lu";
import { styled } from "styled-components";
import { githubLogin, useGithubLogin } from "../utils/auth";

const Title = styled.div`
  width: fit-content;
  margin: 10px 0;
  padding: 0 15px;
  font-size: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  grid-column: 1;
`;

const MiniTitle = styled.div`
  margin: 30px 0 15px 0;
  padding: 0 15px;
  font-size: 20px;
  font-weight: 600;
`;

const Text = styled.div`
  padding: 5px 0;
`;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  margin: 20px 0 0 0;
  background-color: #eee;
  border-radius: 5px;
`;

const Login: FC = () => {
  const useGithub = useGithubLogin();
  const copyToClipboard = () => {
    navigator.clipboard.writeText("ShareLinks");
  };
  return (
    <>
      <Title>ShareLinks へようこそ</Title>
      <MiniTitle>ShareLinks の使い方</MiniTitle>
      <Text>
        1. <a href="https://github.com/kanakanho/ShareLinks">この書き方</a>
        に沿ってポートレートの内容をdata.jsonに書こう!
      </Text>
      <Text>
        2. Githubに<span onClick={() => copyToClipboard()}>ShareLinks</span>
        という名前のレポジトリを作ろう!
      </Text>
      <Text>3. そのレポジトリに先に作っておいたjsonファイルをあげよう!</Text>
      <Text>4. 下のボタンからGithubでこのサービスにログイン</Text>
      <LoginContainer
        onClick={async () => {
          await githubLogin().then(() => useGithub);
        }}
      >
        <LuLogIn />
        Githubでログイン
      </LoginContainer>
    </>
  );
};

export default Login;
