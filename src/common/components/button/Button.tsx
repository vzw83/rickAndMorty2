import * as React from 'react';
import {ButtonHTMLAttributes, FC, PropsWithChildren} from "react";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> & {
  bgColor?: string;
  border?: string;
  disableHover?: boolean;
  isClicked?:boolean;
};

export const Button: FC<ButtonProps> = ({
                                          children,
                                          isClicked=false,
                                          onClick,
                                          title,
                                          bgColor = "transparent",
                                          border,
                                          color = "#3b82f6",
                                          disableHover = false,
                                          ...props
                                        }) => {


  return (
    <StyledButton
      isClicked={isClicked}
      onClick={onClick}
      border={border}
      disableHover={disableHover}
      bgColor={bgColor}
      color={color}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ border?: string, disableHover: boolean, bgColor: string, color: string, isClicked: boolean }>`
    background-color: ${({isClicked}) => isClicked ? "#3b82f6" : "transparent"};
    color: ${({isClicked}) => isClicked ? "white" : "#3b82f6"};
    border: ${({border}) => (border !== undefined ? border : "2px solid #3b82f6")};
    border-radius: 8px;
    cursor: pointer;
    padding: 10px 20px;
    &:hover {
        ${({disableHover}) =>
                disableHover
                        ? "background-color: transparent; color: ${theme.colors.accent};"
                        : `
            background-color: #3b82f6;
            color: white;
        `
        }
        transition: 0.3s ease-in-out;
    }   
    
`;