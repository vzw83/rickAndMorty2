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

export const Episode = () => {

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


      <FlexWrapper>

        <FlexWrapper direction={'column'} align={'center'} >
          <TitleOptions enterTheme={enterTheme}>Pick Episode</TitleOptions>
          <Select nameOption={"Episode"} handlerSelect={handlerSelect} arrNumberEpisodes={arrNumberEpisodes}/>
        </FlexWrapper>

        <FlexWrapper justify={"start"} wrap={"wrap"} gap={"10px"}>
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
      </FlexWrapper>

    </StyledCharacters>

  );
};

const StyledCharacters = styled.div`
    margin-top: 80px;
`
const Wrapper = styled.div`
    text-align: center;
`