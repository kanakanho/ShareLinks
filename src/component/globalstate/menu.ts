import { useCallback } from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";

export const menuState = atom({
  key: "isMenu",
  default: false,
  dangerouslyAllowMutability: true,
});

export const useMenuState = () => {
  return useRecoilValue(menuState);
};

export const useMenuMutators = () => {
  const setMenuState = useSetRecoilState(menuState);

  const setMenuPermissionState = useCallback(
    (isMenu: boolean) => {
      setMenuState(isMenu);
    },
    [setMenuState]
  );

  return {
    setMenuPermissionState,
  };
};
