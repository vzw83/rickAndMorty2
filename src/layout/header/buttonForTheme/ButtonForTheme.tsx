import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

type Props = {
  toggleTheme: () => void;
};

export const ButtonForTheme = ({ toggleTheme }: Props) => {
  const [colorNameTheme, setColorNameTheme] = useState<'light' | 'dark'>('light');

  const handleClick = () => {
    toggleTheme();
    setColorNameTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <StyledButtonForTheme onClick={handleClick}>
      {colorNameTheme === "light" ? "Light" : "Dark"}
    </StyledButtonForTheme>
  );
};

const StyledButtonForTheme = styled.button`
    color: ${theme.colors.buttonBg};
    border: none;

`;
