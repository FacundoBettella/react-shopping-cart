import React, { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  let initialTheme;
  (function handleStorageTheme() {
    const localStorageItem = localStorage.getItem("theme");
    if (localStorageItem === null) {
      return (initialTheme = "light");
    } else {
      return (initialTheme = JSON.parse(localStorageItem));
    }
  })();

  const [theme, setTheme] = useState(initialTheme);
  const { saveNewItem } = useLocalStorage();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      saveNewItem("theme", "dark");
    } else {
      setTheme("light");
      saveNewItem("theme", "light");
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
