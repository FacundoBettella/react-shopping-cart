import { createContext, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { AUTH } from "../firebase/firebase.config";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is not auth provider");
  return context;
};

export const AuthProvider = ({ children }) => {
  const signUp = (email, password) => {
    createUserWithEmailAndPassword(AUTH, email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential.user);
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
        console.log(userCredential);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
  };

  return (
    <authContext.Provider value={{ signUp, login }}>
      {children}
    </authContext.Provider>
  );
};
