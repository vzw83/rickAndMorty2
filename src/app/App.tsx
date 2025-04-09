import React from 'react';
import {Characters} from "../layout/characters/Characters";
import {Episode} from "../layout/episode/Episode";
import {Header} from "../layout/header/Header";
import {Location} from "../layout/locatoin/Location";
import './App.css';
import {Container} from "../common/components/Container";
import {Route, Routes} from "react-router-dom";
import {HeroCard} from "../common/components/heroCard/HeroCard";
import {LinearProgress} from "@mui/material";
import styled from "styled-components";
import {useGetCharactersQuery} from "../layout/characters/charactersApi";
import {useTheme} from "./ThemeContextProvider";
import {GlobalStyle} from "../styles/Global.styles";

function App() {

  const { isFetching } = useGetCharactersQuery({ page: 1,status: '', species: '', gender: '', nameCharacter: "" });

  const {enterTheme} = useTheme()


  return (
    <AppWrapper >
      <GlobalStyle enterTheme={enterTheme}/>
      <Header />
        {isFetching && (
          <WrapperForLinearProgress>
            <LinearProgress />
          </WrapperForLinearProgress>
        )}

      <Container>
        <Routes>
          <Route path={'/'} element={<Characters/>}/>
          <Route  path="/characters" element={<Characters/>}/>
          <Route  path="/location" element={<Location/>}/>
          <Route  path="/episode" element={<Episode/>}/>

          <Route path={`/characters/:id`} element={<HeroCard/>}/>
          <Route path={`/episode/:id`} element={<HeroCard/>}/>
          <Route path={`/location/:id`} element={<HeroCard/>}/>
        </Routes>
      </Container>
    </AppWrapper>
  );
}

const AppWrapper= styled.div<{theme: string}>`
  
    
`
const WrapperForLinearProgress= styled.div`
  margin-top: 70px;
`
export default App;
