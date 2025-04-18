import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {useTheme} from "../../../app/ThemeContextProvider";

type Props = {
  titlePage?: string
  dimension?: string
  typeLoc?: string
};

export const TitlePageLoc = ({titlePage, typeLoc, dimension}: Props) => {
  const {enterTheme} = useTheme()
  return (
    <StyledCharacters>
      <Title enterTheme={enterTheme}>Episode name : <span>{titlePage}</span></Title>
      <Span enterTheme={enterTheme}>Dimension: {dimension}</Span>
      <Span enterTheme={enterTheme}>Type: {typeLoc}</Span>
    </StyledCharacters>
  );
};
const StyledCharacters = styled.div`
    margin: 30px 0 30px 0;
`
const Title = styled.h3<{enterTheme: string}>`
    font-weight: 500;
    font-size: 40px;
    color: ${props => props.enterTheme === "light" ? theme.lightTheme.text : theme.darkTheme.text};
    margin: 0 0 20px;
    
    span{
        color: ${theme.colors.accent};        
    }

    @media ${theme.media.tablet} {
        font-size: 30px;
        margin: 0 0 10px;
    }
`
const Span = styled.span<{enterTheme: string}>`
    font-weight: 500;
    font-size: 20px;
    color: ${props => props.enterTheme === "light" ? theme.lightTheme.text : theme.darkTheme.text};
    margin: 0 0 20px;
    display: block;
    text-align: center;

    @media ${theme.media.tablet} {
        margin: 0 0 5px;
    }
`