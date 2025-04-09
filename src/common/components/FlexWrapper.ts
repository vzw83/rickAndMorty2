import styled from "styled-components";

type Props = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    gap?:string
    grow?:string
};
export const FlexWrapper = styled.div<Props>`
    display: flex;
    flex-direction: ${props => props.direction};
    flex-grow: ${props => props.grow };
    justify-content: ${props => props.justify };
    align-items: ${props => props.align  };
    flex-wrap: ${props => props.wrap  };
    height: 100%;
    gap:${props => props.gap } ;
`