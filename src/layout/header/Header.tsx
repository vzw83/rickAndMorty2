import * as React from 'react';
import styled from "styled-components";
import {Container} from "../../common/components/Container";
import {FlexWrapper} from "../../common/components/FlexWrapper";
import {theme} from "../../styles/Theme";
import {DesktopMenu} from "./menu/DesktopMenu";
import {LinearProgress} from "@mui/material";
import {useGetCharactersQuery} from "../characters/charactersApi";
import {useTheme} from "../../app/ThemeContextProvider";
import {ButtonForTheme} from "./buttonForTheme/ButtonForTheme";
import {MobileMenu} from "./menu/MobileMenu";


type Props = {
  enterTheme: string;
}

export const Header = ({enterTheme}: Props) => {
  const {isFetching, isLoading} = useGetCharactersQuery({
    page: 1,
    status: '',
    species: '',
    gender: '',
    nameCharacter: ""
  });

  const {toggleTheme} = useTheme()


  return (
    <div>
      <StyledHeader enterTheme={enterTheme}>
        <Container>
          <ButtonForTheme toggleTheme={toggleTheme}/>
          <FlexWrapper justify={"space-between"}>
            <Link href="">
              <IconName>Rick & Morty <span>WiKi</span></IconName>
            </Link>
            <NavMenu>
              <DesktopMenu />
              <MobileMenu />
            </NavMenu>
          </FlexWrapper>
        </Container>
      </StyledHeader>
      {isFetching && (
        <div style={{position: 'fixed', top: 0, left: 0, right: 0, zIndex: '999999'}}>
          <LinearProgress/>
        </div>
      )}
    </div>

  )
    ;
};

const StyledHeader = styled.header<{ enterTheme: string }>`
    background-color: ${props => props.enterTheme === "light" ? theme.lightTheme.firstBg : theme.darkTheme.firstBg};
    padding: 19px 0;
    top: 0;
    left: 0;
    right: 0;
    opacity: 0.9;
    z-index: 9999;

    @media ${theme.media.tablet} {

    }
`
const IconName = styled.a`
    color: ${theme.lightTheme.text};
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
