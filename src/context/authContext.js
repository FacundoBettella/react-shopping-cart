import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { AUTH } from "../firebase/firebase.config";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is not auth provider");
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [messageError, setMessageError] = useState("");

  const { saveNewItem } = useLocalStorage();

  const signUp = (email, password) => {
    createUserWithEmailAndPassword(AUTH, email, password)
      .then((userCredential) => {
        // Signed in
        saveNewItem("auth_token", userCredential._tokenResponse.refreshToken);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        setMessageError(errorMessage);
      });
  };

  const login = (email, password) => {
    signInWithEmailAndPassword(AUTH, email, password)
      .then((userCredential) => {
        // Loged in
        saveNewItem("auth_token", userCredential._tokenResponse.refreshToken);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        setMessageError(errorMessage);
      });
  };

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(AUTH, googleProvider);
  };

  const resetPassword = (email) => sendPasswordResetEmail(AUTH, email);

  const logout = () => signOut(AUTH);

  useEffect(() => {
    onAuthStateChanged(AUTH, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <authContext.Provider
      value={{
        signUp,
        login,
        loginWithGoogle,
        logout,
        user,
        messageError,
        setMessageError,
        resetPassword,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
