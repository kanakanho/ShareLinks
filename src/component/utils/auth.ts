import {
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { useUserMutators } from "../globalstate/firebaseUserState";
import { useDetailMutators } from "../globalstate/details";

export const googleLogin = async (): Promise<void> => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider).catch((error) => {
    console.error(error);
  });
};

export const githubLogin = async (): Promise<void> => {
  const provider = new GithubAuthProvider();
  signInWithRedirect(auth, provider).catch((error) => {
    console.error(error);
  });
};

export const logout = async (): Promise<void> => {
  signOut(auth).catch((error) => {
    console.error(error);
  });
  // リロードする
  window.location.reload();
};

// github の ログイン情報を取得する
export const useGithubLogin = () => {
  const [githubLogin, setGithubLogin] = useState(false);
  const { setUserState } = useUserMutators();
  const { setDetailPermissionState } = useDetailMutators();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserState(user);
        setGithubLogin(true);
        const githubName = user.reloadUserInfo.screenName;
        setDetailPermissionState(githubName);
      } else {
        setGithubLogin(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [setUserState, setDetailPermissionState]);

  return {
    githubLogin,
  };
};
