// @flow
import * as React from 'react';
import styled from "styled-components";
import {Status} from "../status/Status";
import {useTheme} from "../../../app/ThemeContextProvider";
import {getTextColor} from "../../../styles/ThemeUtils";
import {theme} from "../../../styles/Theme";

type Props = {
  img: string
  name: string
  location: string
  status: string
};
export const lightThemeText = theme.lightTheme.text
export const darkThemeText = theme.darkTheme.text
export const lightThemeBackgroundColor =  theme.lightTheme.firstBg
export const darkThemeBackgroundColor =theme.darkTheme.firstBg

export const Card = (props: Props) => {
  const {enterTheme} = useTheme()
  return (
    <StyledProjectsCard status={props.status} enterTheme={enterTheme}>
      <WrapperImg>
        <Image src={props.img} alt={props.name}/>
        <StatusWrapper>
          <Status status={props.status}/>
        </StatusWrapper>
      </WrapperImg>
      <WrapperInfo>
        <CharacterName enterTheme={enterTheme}>{props.name}</CharacterName>
        <CartText enterTheme={enterTheme}>Last Location</CartText>
        <CartText enterTheme={enterTheme}>{props.location}</CartText>
      </WrapperInfo>
    </StyledProjectsCard>
  );
};


const StyledProjectsCard = styled.div<{ status: string, enterTheme: string }>`
    border-radius: 8px;
    background-color: ${({enterTheme}) => getTextColor(enterTheme, lightThemeBackgroundColor, darkThemeBackgroundColor)};
    border: 2px solid blue;
    width: 220px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

    @media ${theme.media.tablet} {
        width: 300px;
    }
    @media ${theme.media.mobile} {
        width: 300px;
    }
`
const CharacterName = styled.p<{ enterTheme: string }>`
    font-weight: 600;
    font-size: 24px;
    color: ${({enterTheme}) => getTextColor(enterTheme, lightThemeText, darkThemeText)};
`
const CartText = styled.p<{ enterTheme: string }>`
    font-weight: 400;
    font-size: 18px;
    color: ${({enterTheme}) => getTextColor(enterTheme, lightThemeText, darkThemeText)};
`

const WrapperImg = styled.div`
    position: relative;
    margin-bottom: 16px;
`;

const StatusWrapper = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
`;

const Image = styled.img`
    width: 100%;
    border-radius: 6px 6px 0 0;
    object-fit: cover;
`;

const WrapperInfo = styled.div`
    padding: 10px;
`



