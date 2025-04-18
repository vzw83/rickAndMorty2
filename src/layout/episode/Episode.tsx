import {useState} from "react";
import styled from "styled-components";
import {FlexWrapper} from "../../common/components/FlexWrapper";
import {useGetMultipleCharactersQuery} from "../characters/charactersApi";
import {useGetEpisodesQuery, useGetMultipleEpisodesQuery} from "./episodesApi";
import {Card} from "../../common/components/card/Card";
import {NavLink} from "react-router-dom";
import {Select} from "../../common/components/Select/Select";
import {getArrNumbersForLokAndEpis} from "../../utils/getArrNumbersForLokAndEpis/getArrNumbersForLokAndEpis";
import {TitlePage} from "./TitltPage/TitlePage";
import {TitleOptions} from "../../common/components/title/TitleOptions";
import {useTheme} from "../../app/ThemeContextProvider";
import {theme} from "../../styles/Theme";

const Episode = () => {

  const {enterTheme} = useTheme()

  const [currentPage, setCurrentPage] = useState<number>(1);

  const {data, isLoading} = useGetEpisodesQuery()

  const {data: multipleEpisodes} = useGetMultipleEpisodesQuery(currentPage)


  const idCharactersForLocations = multipleEpisodes?.characters.map(url => Number(url.split("/").pop())) ?? []

  const {data: multipleCharacters} = useGetMultipleCharactersQuery(idCharactersForLocations ?? [])

  const handlerSelect = (num: number) => {
    setCurrentPage(num);
  }


  const quantityEpisodes = data?.info.count

  const arrNumberEpisodes = getArrNumbersForLokAndEpis(quantityEpisodes) || []

  const normalizeArr = Array.isArray(multipleCharacters) ? multipleCharacters : [multipleCharacters]


  return (
    <StyledCharacters>
      <FlexWrapper justify={'center'}>
        <TitlePage titlePage={data?.results[currentPage - 1].name} date={data?.results[currentPage - 1].air_date}/>
      </FlexWrapper>

      <Wrapper>
        <WrapperSelect>
          <TitleOptions enterTheme={enterTheme}>Pick Episode</TitleOptions>
          <Select nameOption={"Episode"} handlerSelect={handlerSelect} arrNumberEpisodes={arrNumberEpisodes}/>
        </WrapperSelect>

        <FlexWrapper justify={"center"} wrap={"wrap"} gap={"10px"}>
          {Array.isArray(normalizeArr) &&
            normalizeArr?.map((character) => {
              return (
                <NavLink key={character?.id} to={`/episode/${character?.id}`}>
                  <Card
                    key={character?.id}
                    img={character?.image ?? ""}
                    name={character?.name ?? "Unknown"}
                    location={character?.location?.name ?? "Unknown"}
                    status={character?.status ?? "Unknown"}
                  />
                </NavLink>)
            })
          }
        </FlexWrapper>
      </Wrapper>

    </StyledCharacters>

  );
};

const StyledCharacters = styled.div`
    margin-top: 50px;
    @media ${theme.media.tablet} {
        margin-top: 20px;
    }
`

const WrapperSelect = styled.div`
    margin-right: 50px;

    @media ${theme.media.tablet} {
        margin: 0 0 50px 0;
    }
`
const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    @media ${theme.media.tablet} {
        flex-direction: column;
        text-align: center;
    }
`
export default Episode