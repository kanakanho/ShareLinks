import { FC } from "react";
import styled from "styled-components";
import { githubLogin, logout, useGithubLogin } from "../../utils/auth";
import { useUserState } from "../../globalstate/firebaseUserState";

type Props = {
  onClick: (isMenu: boolean) => void;
  isMenu: boolean;
};

const MenuContainer = styled.div`
  position: absolute;
  top: 4rem;
  right: 0.5rem;
  background-color: #fefefe;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.2);
`;

const Text = styled.div`
  margin-top: -1px;
  font-size: 1.2rem;
  padding: 0.5rem 1rem 0.3rem 1rem;
`;

const User: FC<Props> = ({ onClick, isMenu }) => {
  const user = useUserState();
  const useGithub = useGithubLogin();
  return (
    <MenuContainer>
      {user ? (
        <Text onClick={async () => await logout()}>Logout</Text>
      ) : (
        <Text
          onClick={async () => {
            await githubLogin().then(() => useGithub);
          }}
        >
          Login
        </Text>
      )}
      <Line />
      <Text onClick={() => onClick(!isMenu)}>Menu</Text>
    </MenuContainer>
  );
};
export default User;
