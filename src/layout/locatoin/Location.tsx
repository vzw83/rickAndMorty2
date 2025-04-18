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
import {theme} from "../../styles/Theme";

 const Location = () => {

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


  const normalizeArr = Array.isArray(multipleCharacters) ? multipleCharacters : [multipleCharacters]

  return (
    <StyledCharacters>

      <FlexWrapper justify={'center'}>
        <TitlePageLoc titlePage={data?.data?.results[currentPage - 1].name}
                      dimension={data?.data?.results[currentPage - 1].dimension}
                      typeLoc={data?.data?.results[currentPage - 1].type}/>
      </FlexWrapper>

      <Wrapper>
        {/*<FlexWrapper>*/}
          <FlexWrapper direction={'column'} align={'center'}>
            <TitleOptions enterTheme={enterTheme}>Pick Location</TitleOptions>
            <WrapperSelect>
              <Select nameOption={"Location"} handlerSelect={handlerSelect} arrNumberEpisodes={arrNumberLocations}/>
            </WrapperSelect>
          </FlexWrapper>


        <FlexWrapper justify={"space-around"} wrap={"wrap"} gap={"10px"}>
          {normalizeArr.map((character) => {
            return (
              <NavLink key={character?.id} to={`/location/${character?.id}`}>
                <Card
                  key={character?.id}
                  img={character?.image || ""}
                  name={character?.name || ""}
                  location={character?.location?.name || ""}
                  status={character?.status || ""}
                />
              </NavLink>)

          })
          }
        </FlexWrapper>
        {/*</FlexWrapper>*/}
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
    }
`
export default Location