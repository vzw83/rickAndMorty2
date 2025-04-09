import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";


export const GlobalStyle = createGlobalStyle<{enterTheme: string}>`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        line-height: 1.2;
        background-color: ${props => props.enterTheme === "light" ? theme.lightTheme.body : theme.darkTheme.body};
    }

    a {
        text-decoration: none;
    }

    li {
        list-style: none;
    }
    
    p{
        color: ${theme.colors.font};
        font-weight: 500;
        font-size: 18px;
        line-height: 178%;
    }

    section{
        background-color: ${theme.colors.secondaryBg};
    }
 
    button {
        background-color: unset;
        border: none;
        cursor: pointer;
        color: ${theme.colors.font};
        font-weight: 600;
        font-size: 16px;
        
        &:hover{
            background-color: ${theme.colors.accent};
        }
    }
`