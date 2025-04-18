import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {getTextColor} from "../../../styles/ThemeUtils";

export const lightThemeText = theme.lightTheme.text
export const darkThemeText = theme.darkTheme.text

export const TitleOptions = styled.h3<{ enterTheme: string }>`
    font-weight: 500;
    font-size: 30px;
    color: ${({enterTheme}) => getTextColor(enterTheme, lightThemeText, darkThemeText)};
    margin: 0 0 10px 0;
    text-align: center;
}
`