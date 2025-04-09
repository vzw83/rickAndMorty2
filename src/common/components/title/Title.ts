import styled from "styled-components";
import {theme} from "../../../styles/Theme";


export const Title = styled.h2<{enterTheme: string}>`
    font-weight: 500;
    font-size: calc(2rem + 1.5vw);
    color: ${props => props.enterTheme === "light" ? theme.lightTheme.text : theme.darkTheme.text};
    margin: 0 0 20px;
`