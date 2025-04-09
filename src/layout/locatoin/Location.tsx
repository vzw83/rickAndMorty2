import styled from "styled-components";
import {Card} from "../../common/components/card/Card";
import {FlexWrapper} from "../../common/components/FlexWrapper";
import {useGetLocationsQuery, useGetMultipleLocationsQuery} from "./locationsApi";
import {useGetMultipleCharactersQuery} from "../characters/charactersApi";
import {NavLink} from "react-router-dom";
import {Select} from "../../common/components/Select/Select";
import {getArrNumbersForLokAndEpis} from "../../utils/getArrNumbersForLokAndEpis/getArrNumbersForLokAndEpis";
import {useState} from "react";
import {TitlePageLoc} from "./TitltPageLoc/TitlePageLoc";
import {TitleOptions} from "../../common/components/title/TitleOptions";
import {useTheme} from "../../app/ThemeContextProvider";

export const Location = () => {

const {enterTheme} = useTheme()

  const data = useGetLocationsQuery()
  const [currentPage, setCurrentPage] = useState<number>(1);


  const {data: multepleLoc} = useGetMultipleLocationsQuery(currentPage)




  const quantityLocations = data?.data?.info.count
  const arrNumberLocations = getArrNumbersForLokAndEpis(quantityLocations) || []

  const idCharactersForLocations = multepleLoc?.residents.map(url => Number(url.split("/").pop())) ?? []

  const {data: multipleCharacters} = useGetMultipleCharactersQuery(idCharactersForLocations ?? [])

  const handlerSelect = (num: number) => {
    setCurrentPage(num);
  }



  // const normalizeArr = Array.isArray(multipleCharacters) ? multipleCharacters : [multipleCharacters]

  return (
    <StyledCharacters>

      <FlexWrapper justify={'center'}>
        <TitlePageLoc titlePage={data?.data?.results[currentPage - 1].name} dimension={data?.data?.results[currentPage - 1].dimension} typeLoc={data?.data?.results[currentPage - 1].type}/>
      </FlexWrapper>


      <FlexWrapper>
        <WrapperForOptoons>
          <FlexWrapper direction={'column'} align={'center'}>
            <TitleOptions enterTheme={enterTheme}>Pick Location</TitleOptions>
            <Select nameOption={"Location"} handlerSelect={handlerSelect} arrNumberEpisodes={arrNumberLocations}/>
          </FlexWrapper>
        </WrapperForOptoons>


        <FlexWrapper justify={"start"} wrap={"wrap"} gap={"10px"}>
          {Array.isArray(multipleCharacters) &&
            multipleCharacters?.map((character) => {
              return(
                <NavLink key={character?.id} to={`/location/${character?.id}`}>
                  <Card
                    key={character?.id}
                    img={character?.image }
                    name={character?.name }
                    location={character?.location?.name }
                    status={character?.status }
                  />
                </NavLink>  )

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
const WrapperForOptoons = styled.div`
    min-width: 300px;
    text-align: center;
    margin-right: 50px;
`