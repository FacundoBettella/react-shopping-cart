import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { AUTH } from "../firebase/firebase.config";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is not auth provider");
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signUp = (email, password) => {
    createUserWithEmailAndPassword(AUTH, email, password)
      .then((userCredential) => {
        // Signed in
        localStorage.setItem(
          "auth_token",
          userCredential._tokenResponse.refreshToken
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
  };

  const login = (email, password) => {
    signInWithEmailAndPassword(AUTH, email, password)
      .then((userCredential) => {
        // Loged in
        localStorage.setItem(
          "auth_token",
          userCredential._tokenResponse.refreshToken
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
  };

  const logout = () => signOut(AUTH);

  useEffect(() => {
    onAuthStateChanged(AUTH, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <authContext.Provider value={{ signUp, login, logout, user }}>
      {children}
    </authContext.Provider>
  );
};
