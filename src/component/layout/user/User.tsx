import { FC } from "react";
import styled from "styled-components";
import { googleLogin } from "../../utils/auth";

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

const User: FC<Props> = ({ onClick ,isMenu}) => {
  return (
    <MenuContainer>
      <Text
        onClick={async () => {
          await googleLogin();
        }}
      >
        Login
      </Text>
      <Line />
      <Text onClick={() => onClick(!isMenu)}>Menu</Text>
    </MenuContainer>
  );
};
export default User;