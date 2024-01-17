import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7ftWRj3amHDlRFEmZtxffbVu8_IZpLQk",
  authDomain: "sharelinks-3d339.firebaseapp.com",
  projectId: "sharelinks-3d339",
  storageBucket: "sharelinks-3d339.appspot.com",
  messagingSenderId: "411517752927",
  appId: "1:411517752927:web:8cf43c0623cb85e5d92dea",
  measurementId: "G-C5WHKRJPB4",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
