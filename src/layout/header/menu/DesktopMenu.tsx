// @flow
import * as React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {Menu} from "./Menu";
import {FlexWrapper} from "../../../common/components/FlexWrapper";
import {useTheme} from "../../../app/ThemeContextProvider";

type Props = {
};
export const DesktopMenu = (props: Props) => {


    return (
        <StyledDesktopMenu>
          <FlexWrapper align="center">
            <BurgerButton>

            </BurgerButton>
            <Menu/>
          </FlexWrapper>
        </StyledDesktopMenu>
    );
};

const StyledDesktopMenu = styled.div`
    ul{
        display: flex;
        justify-content: space-between;
        gap: 40px;
    }
    display: block ;
    
    @media ${theme.media.tablet} {
        display: none ;
    }
`
const BurgerButton = styled.button`
    position: fixed;
    top: 0;
    right: 0;
    width: 30px;
    height: 30px;
    
    span{
        display: block;
        width: 50px;
        height: 2px;
        background-color:  ${theme.colors.buttonBg};
        position: absolute;
        
        &::before{
            content: "";
            width: 50px;
            height: 2px;
            background-color: ${theme.colors.buttonBg};
            transform: translateY(-10px);
        }
        &::after{
            content: "";
            width: 50px;
            height: 2px;
            background-color: ${theme.colors.buttonBg};
            transform: translateY(10px);
        }
    }
`