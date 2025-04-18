import React, { Suspense, lazy } from 'react';
import { Route, Routes } from "react-router-dom";
import { LinearProgress } from "@mui/material";
import styled from "styled-components";
import { Container } from "../common/components/Container";
import { Header } from "../layout/header/Header";
import { useTheme } from "./ThemeContextProvider";
import { GlobalStyle } from "../styles/Global.styles";

// Ленивые импорты
const Characters = lazy(() => import("../layout/characters/Characters"));
const Episode = lazy(() => import("../layout/episode/Episode"));
const Location = lazy(() => import("../layout/locatoin/Location"));
const HeroCard = lazy(() => import("../common/components/heroCard/HeroCard"));

function App() {
  const { enterTheme } = useTheme();

  return (
    <AppWrapper>
      <GlobalStyle enterTheme={enterTheme} />
      <Header enterTheme={enterTheme} />

      <Container>
        <Suspense fallback={<LinearProgress />}>
          <Routes>
            <Route path="/" element={<Characters />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/location" element={<Location />} />
            <Route path="/episode" element={<Episode />} />
            <Route path="/characters/:id" element={<HeroCard />} />
            <Route path="/episode/:id" element={<HeroCard />} />
            <Route path="/location/:id" element={<HeroCard />} />
          </Routes>
        </Suspense>
      </Container>
    </AppWrapper>
  );
}

const AppWrapper = styled.div<{ theme?: string }>`
`;

export default App;
