import * as React from 'react';
import styled from "styled-components";
import {Container} from "../../common/components/Container";
import {FlexWrapper} from "../../common/components/FlexWrapper";
import {theme} from "../../styles/Theme";
import {DesktopMenu} from "./menu/DesktopMenu";



export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"}>
                    <Link href="">
                        <IconName>Rick & Morty <span>WiKi</span></IconName>
                    </Link>
                    <NavMenu>
                        <DesktopMenu/>
                        {/*<MobileMenu/>*/}
                    </NavMenu>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    )
        ;
};

const StyledHeader = styled.header`
    background-color: #ece3e3;
    padding: 19px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    opacity: 0.9;

`
const IconName = styled.a`
    color: ${theme.colors.font};
    font-weight: 600;
    font-size: 28px;

    span {
        color: ${theme.colors.accent};
    }
`
const NavMenu = styled.nav`

`

const Link = styled.a`
    font-weight: 600;
    font-size: 18px;

    &:hover {
        color: #7562e0;
    }
`