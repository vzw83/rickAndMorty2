import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {AiOutlineSun} from "react-icons/ai";
import {FaRegMoon} from "react-icons/fa";
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import Brightness5Icon from '@mui/icons-material/Brightness5';

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
      {/*{colorNameTheme === "light" ? <AiOutlineSun /> : <FaRegMoon/>}*/}
      {colorNameTheme === "light" ? <Brightness5Icon/> : <NightlightRoundIcon />}
    </StyledButtonForTheme>
  );
};

const StyledButtonForTheme = styled.button`
    color: ${theme.colors.buttonBg};
    border: none;

`;
