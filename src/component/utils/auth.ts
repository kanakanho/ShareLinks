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
import { useLoginMutators } from "../globalstate/login";

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
  window.location.reload();
};

// github の ログイン情報を取得する
export const useGithubLogin = () => {
  const [githubLogin, setGithubLogin] = useState(false);
  const { setUserState } = useUserMutators();
  const { setDetailPermissionState } = useDetailMutators();
  const { setLoginPermissionState } = useLoginMutators();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserState(user);
        setGithubLogin(true);
        setLoginPermissionState(true);
        const { uid } = user;
        let name = "";
        fetch(`https://api.github.com/user/${uid}`, { headers: { Accept: "application/json" } })
          .then((res) => res.json())
          .then((data) => {
            // console.log("data", data);
            name = data.login;
          });
        setDetailPermissionState(name);
      } else {
        setGithubLogin(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [setUserState, setDetailPermissionState, setLoginPermissionState]);

  return {
    githubLogin,
  };
};
