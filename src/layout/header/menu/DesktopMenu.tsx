// @flow
import * as React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {Menu} from "./Menu";
import {FlexWrapper} from "../../../common/components/FlexWrapper";
import {useTheme} from "../../../app/ThemeContextProvider";

type Props = {};
export const DesktopMenu = (props: Props) => {


  return (
    <StyledDesktopMenu>
      <FlexWrapper align="center">
        <Menu/>
      </FlexWrapper>
    </StyledDesktopMenu>
  );
};

const StyledDesktopMenu = styled.div`
    ul {
        display: flex;
        justify-content: space-between;
        gap: 40px;
    }

    display: block;

    @media ${theme.media.tablet} {
        display: none ;
    }
`
