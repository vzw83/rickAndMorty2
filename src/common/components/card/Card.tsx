// @flow
import * as React from 'react';
import styled from "styled-components";
import {Status} from "../status/Status";
import {useTheme} from "../../../app/ThemeContextProvider";
import {getTextColor} from "../../../styles/ThemeUtils";

type Props = {
  img: string
  name: string
  location: string
  status: string
};
export const Card = (props: Props) => {
  const {enterTheme} = useTheme()
  return (
    <StyledProjectsCard status={props.status}>
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
type StyledProjectsCardProps = {
  status: string; // Добавляем status в тип пропсов
};

const StyledProjectsCard = styled.div<StyledProjectsCardProps>`
    border-radius: 8px;
    border: 2px solid blue;
    width: 220px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`
const CharacterName = styled.p<{enterTheme: string}>`
    font-weight: 600;
    font-size: 24px;
    color: ${({ enterTheme }) => getTextColor(enterTheme)};
`
const CartText = styled.p<{enterTheme: string}>`
    font-weight: 400;
    font-size: 18px;
    color: ${({ enterTheme }) => getTextColor(enterTheme)};
`

const WrapperImg = styled.div`
    position: relative; /* Родительский контейнер для абсолютного позиционирования */
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



