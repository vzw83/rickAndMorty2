import * as React from 'react';
import {createContext, ReactNode, useContext, useState} from "react";

type ThemeContextType = {
  enterTheme: string
  toggleTheme: () => void;
};

type ProviderProps = {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export type ThemeType = "light" | "dark";

export const ThemeContextProvider = ({children}: ProviderProps) => {

  const [enterTheme, setTheme] = useState<ThemeType>("light");

  const toggleTheme = () => {
    setTheme(enterTheme === "light" ? "dark" : "light");
  }

  const value = {
    enterTheme,
    toggleTheme,
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}