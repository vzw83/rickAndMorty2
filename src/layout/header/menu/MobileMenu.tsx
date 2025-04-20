// @flow
import {useState} from "react";
import * as React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";
import {Menu} from "./Menu";

type Props = {};

export const MobileMenu = (props: Props) => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const handlerButtonMenu = () => {
        setIsOpenMenu(!isOpenMenu);
    };

    return (
        <StyledMobileMenu>
            <BurgerButton onClick={handlerButtonMenu} isOpenMenu={isOpenMenu}>
              <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpenMenu={isOpenMenu} >
              <Menu/>
            </MobileMenuPopup>

        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.div`
    display: none;
    position: absolute;
    left: 0;
    top: 90px;
    width: 100%;
    @media ${theme.media.tablet} {
        display: block;
    }
`;
const MobileMenuPopup = styled.div<{ isOpenMenu?: boolean }>`
    display: none;
    //width: 100%;
    background-color: ${theme.lightTheme.firstBg};
    padding: 20px 0;

    ${props => props.isOpenMenu && css`
        display: block;
    `}

    ul {
        display: flex;
        justify-content: space-around;
        gap: 20px;
    }
 
`;





const BurgerButton = styled.button<{ isOpenMenu: boolean }>`
    width: 40px;
    height: 40px;
    z-index: 99999;
    background: none;
    border: none;
    cursor: pointer;
    position: absolute;
    right: 25px;
    top: -60px;
    
    
    &:focus,
    &:active {
        outline: none;
        background: none;
    }

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.accent};
        transition: all 0.3s ease-in-out;

        ${props => props.isOpenMenu && css`
            background-color: transparent;
        `}
        &::before,
        &::after {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.accent};
            position: absolute;
            left: 0;
            transition: all 0.3s ease-in-out;
        }

        &::before {
            transform: translateY(-10px);
            ${props => props.isOpenMenu && css`
                transform: rotate(-45deg) translateY(0);
            `}
        }

        &::after {
            transform: translateY(10px);
            ${props => props.isOpenMenu && css`
                transform: rotate(45deg) translateY(0);
            `}
        }
    }
`;
