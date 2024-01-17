import { useCallback } from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";

export const detailState = atom({
  key: "githubName",
  default: "",
  dangerouslyAllowMutability: true,
});

export const useDetailState = () => {
  return useRecoilValue(detailState);
};

export const useDetailMutators = () => {
  const setDetailState = useSetRecoilState(detailState);

  const setDetailPermissionState = useCallback(
    (githubName: string) => {
      setDetailState(githubName);
    },
    [setDetailState]
  );

  return {
    setDetailPermissionState,
  };
};
