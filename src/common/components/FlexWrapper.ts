import styled from "styled-components";
import {theme} from "../../styles/Theme";

type Props = {
    direction?: string;
    justify?: string;
    align?: string;
    wrap?: string;
    gap?: string;
    grow?: string;
    justifyTablet?: string;
};

export const FlexWrapper = styled.div<Props>`
    display: flex;
    flex-direction: ${({direction}) => direction || "row"};
    flex-grow: ${({grow}) => grow || "1"};
    justify-content: ${({justify}) => justify || "flex-start"};
    align-items: ${({align}) => align || "stretch"};
    flex-wrap: ${({wrap}) => wrap || "nowrap"};
    height: 100%;
    gap: ${({gap}) => gap || "0"};

  
`;

// @media ${theme.media.tablet} {
//     justify-content: ${({justifyTablet, justify}) =>
//       justifyTablet || justify || "center"};
//     flex-direction: column;
//     align-items: center;
// }