import { FC, useRef, useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { IoArrowForwardOutline } from "react-icons/io5";

const CheckContainer = styled.div``;

const InputContainer = styled.div`
  margin: 30px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  width: -webkit-fill-available;
  padding: 10px 20px 8px 20px;
  font-size: 20px;
  cursor: text;
  background-color: #eee;
  border: none;
  outline: none;
  border-radius: 10px;
`;

const Icon = styled.div`
  margin: 0 10px;
  padding: 10px 20px 8px 20px;
  color: #fff;
  font-size: 20px;
  background-color: #555;
  border-radius: 50px;
`;

const TextContainer = styled.div`
  margin: 10px 0;
  text-align: center;
`;

const Text = styled.div`
  padding: 10px 20px;
  font-size: 20px;
  text-align: center;
`;

const LinkText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

const Check: FC = () => {
  const [isCheck, setIsCheck] = useState(false);
  const [tmpGituhubName, setTmpGithubName] = useState("");
  const githubName = useRef(""); // useRefを使用してgithubNameを保持
  const [text, setText] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTmpGithubName(event.target.value);
  };

  const checkGithub = () => {
    githubName.current = tmpGituhubName;
    fetch(`https://api.github.com/repos/${githubName.current}/ShareLinks`)
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          setIsCheck(true);
        } else {
          setIsCheck(false);
          setText("ユーザーを確認できません");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <CheckContainer>
      <InputContainer>
        <Input
          placeholder="gtihubのユーザー名"
          value={tmpGituhubName}
          onChange={handleInputChange}
        />
        <Icon onClick={checkGithub}>
          <RiSearch2Line />
        </Icon>
      </InputContainer>
      {isCheck ? (
        <TextContainer>
          <Text>ユーザーを確認しました</Text>
          <Link to={`/${githubName.current}`}>
            <LinkText>
              {githubName.current}'s ShareLinks
              <IoArrowForwardOutline />
            </LinkText>
          </Link>
        </TextContainer>
      ) : (
        <TextContainer>
          <Text>{text}</Text>
        </TextContainer>
      )}
    </CheckContainer>
  );
};

export default Check;
