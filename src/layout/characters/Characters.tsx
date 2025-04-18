import {Pagination} from "@mui/material";
import {ChangeEvent, useState} from "react";
import styled from "styled-components";
import {Card} from "../../common/components/card/Card";
import {FlexWrapper} from "../../common/components/FlexWrapper";
import {useGetCharactersQuery} from "./charactersApi";
import {NavLink} from "react-router-dom";
import {Title} from "../../common/components/title/Title";
import {Skeleton} from "../../common/components/card/Skeleton";
import {Options} from "../../common/components/options/Options";
import {FormForSearchElement} from "./FormForSearchElement/FormForSearchElement";
import {useTheme} from "../../app/ThemeContextProvider";
import {Character} from "../../utils/types/types";
import {theme} from "../../styles/Theme";


const Characters = () => {

  const {enterTheme} = useTheme()

  const [currentPage, setCurrentPage] = useState<number>(1);

  const [filters, setFilters] = useState({
    status: "",
    gender: "",
    species: ""
  });

  const [nameCharacter, setNameCharacter] = useState("");

  const [value, setValue] = useState("");
  const {data, isFetching, isLoading,} = useGetCharactersQuery({page: currentPage, ...filters, nameCharacter});

  const page = data?.info.pages;

  const characters: Character[] = data?.results || [];

  const filteredCharacters: Character[] = characters.filter((character) =>
    character.name.toLowerCase().includes(nameCharacter.toLowerCase())
  );

  const handleFilteredCharacters = (btnName: string, title: string) => {
    setFilters((prevFilters) => {


      let newFilters = {...prevFilters};

      if (title === "status") {
        newFilters.status = btnName;
      }
      if (title === "gender") {
        newFilters.gender = btnName;
      }
      if (title === "species") {
        newFilters.species = btnName;
      }

      setCurrentPage(1);

      return newFilters;
    });
  };

  const handlerSearchCharacters = (name: string) => {
    if (currentPage !== 1) {
      setCurrentPage(1)
    }
    setNameCharacter(name)
  }

  const clearFilters = () => {
    setFilters({status: "", gender: "", species: ""})
    setNameCharacter('')
    setValue("");
  }

  const handlerOnChange = (_: ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  return (
    <StyledCharacters>

      <FlexWrapper justify={"center"}>
        <Title enterTheme={enterTheme}>Characters</Title>
      </FlexWrapper>

      <WrapperForForm>
        <FlexWrapper justify={"center"}>
          <FormForSearchElement onSearchCharacters={handlerSearchCharacters} value={value} setValue={setValue}/>
        </FlexWrapper>
      </WrapperForForm>

      {/*<FlexWrapper>*/}
      <Wrapper>
        <WrapperForOptions>
          <Options handleClick={handleFilteredCharacters} clearFilters={clearFilters} filters={filters}/>
        </WrapperForOptions>

        <FlexWrapper justify={"space-around"} wrap={"wrap"} gap={"10px"} >
          {isLoading ? (
            Array.from({length: 9}).map((_, index) => <Skeleton key={index}/>)

          ) : filteredCharacters.map((character) => (
            <NavLink key={character?.id} to={`/characters/${character?.id}`}>
              <Card
                img={character?.image}
                name={character?.name}
                location={character?.location?.name}
                status={character?.status}
              />
            </NavLink>
          ))
          }
        </FlexWrapper>
        {/*</FlexWrapper>*/}
      </Wrapper>


      <Pagination style={{display: "flex", justifyContent: "center", margin: "20px 0"}}
                  variant="outlined"
                  shape="rounded"
                  onChange={handlerOnChange}
                  count={page ?? 1}
                  page={currentPage}
      />
    </StyledCharacters>

  );
};

const StyledCharacters = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
`
const WrapperForForm = styled.div`
    margin-bottom: 50px;`

const WrapperForOptions = styled.div`
    display: flex;
    justify-content: center;
    margin-right: 50px;

    @media ${theme.media.tablet} {
        margin-right: 0;
        margin-bottom: 20px;
    }
`
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    @media ${theme.media.tablet} {
        flex-direction: column;

        //justify-content: space-evenly;
    }
`
export default Characters;