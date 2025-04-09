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

    @media ${theme.media.tablet} {
        display: block;
    }
`;
const MobileMenuPopup = styled.div<{ isOpenMenu?: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    background-color: rgba(26, 26, 38, 0.9);
    display: none;

    ${props => props.isOpenMenu && css`
        display: flex;
        justify-content: center;
        align-items: center;
    `}
    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
    }
`;
const BurgerButton = styled.button<{ isOpenMenu: boolean }>`
    position: fixed;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    z-index: 9999;
    background: none;
    border: none;
    cursor: pointer;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.font};
        position: relative;
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
            background-color: ${theme.colors.font};
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