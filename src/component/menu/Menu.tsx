import { FC, useEffect, useState } from "react";
import { styled } from "styled-components";
import { FaCopy } from "react-icons/fa";
import { useDetailState } from "../globalstate/details";
import { LuLogOut } from "react-icons/lu";
import { logout } from "../utils/auth";
import Login from "./Login";
import { useLoginMutators, useLoginState } from "../globalstate/login";
import { IoQrCodeSharp } from "react-icons/io5";
import { QRCodeCanvas } from "qrcode.react";

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
  cursor: pointer;
`;

const Copy = styled.span`
  color: #444;
  cursor: pointer;

  :hover {
    color: #ddd;
  }
`;

const Info = styled.div`
  position: relative;
  padding: 20px 0;
`;

const Url = styled.a`
  grid-column: 1;
  padding: 0 15px;
`;

const QRCodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  padding: 0 15px;

  cursor: pointer;
`;

const WeightText = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

const QRCodeBox = styled.div`
  margin: 20px 0;
  text-align: center;
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

  const [isQRCode, setIsQRCode] = useState<boolean>(false);
  const [isSaveQRCode, setIsSaveQRCode] = useState<boolean>(false);

  const saveQRCode = () => {
    const canvas = document.querySelector("canvas");
    const dataURL = canvas?.toDataURL("image/png");
    if (!dataURL) return;
    const a = document.createElement("a");
    a.href = dataURL;
    a.download = "QRCode.png";
    a.click();
    setIsSaveQRCode(true);
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
            <Copy onClick={copyToClipboard}>
              <FaCopy />
            </Copy>
            <QRCodeContainer>
              <WeightText onClick={() => setIsQRCode(true)}>
                このリンクをQRコードで表示する&nbsp;
                <IoQrCodeSharp />
              </WeightText>
              {isQRCode && (
                <QRCodeBox onClick={saveQRCode}>
                  <QRCodeCanvas value={userUrl} size={160} />
                  <Text>{isSaveQRCode ? "QRコードを保存しました!" : "クリックして保存"}</Text>
                </QRCodeBox>
              )}
            </QRCodeContainer>
            <Title>ShareLinks の使い方</Title>
            <Text>
              1. <a href="https://github.com/kanakanho/ShareLinks">この書き方</a>
              に沿ってポートレートの内容をdata.jsonに書こう!
            </Text>
            <Text>
              2. Githubに<Copy onClick={() => copyToClipboard()}>ShareLinks</Copy>
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
