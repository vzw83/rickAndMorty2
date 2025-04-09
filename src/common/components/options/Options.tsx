// @flow
import * as React from 'react';
import styled from "styled-components";
import {Button} from "../button/Button";
import {Accordion} from "../accordion/Accardion";
import {FlexWrapper} from "../FlexWrapper";
import {TitleOptions} from "../title/TitleOptions";
import {useState} from "react";
import {useTheme} from "../../../app/ThemeContextProvider";

type Props = {

  handleClick: (status: string, title: string) => void
  clearFilters: () => void;
  filters: {status: string, gender: string, species: string}
};

export const Options = ({handleClick, clearFilters, filters}: Props) => {

  const {enterTheme}= useTheme()

  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const [selected, setSelected] = useState({
    status: "",
    species: "",
    gender: "",
  });

  const handleClickButtonStatus = (category: "status" | "species" | "gender", value: string, word: string) => {
    setSelected((prev) => ({
      ...prev,
      [category]: prev[category] === value ? "" : value, // Если нажали ту же — сбрасываем
    }));

    handleClick(value, category);
    setSelected({...selected, [category]: word});
  };

  const toggleAccordion = (title: string) => {
    setOpenAccordion(openAccordion === title ? null : title)
  }

  const arrayNamesButtonsForStatus = [
    "Alive", "Dead", "Unknown"
  ]

  const arrayNamesButtonsForSpecies = [
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
    "Unknown"
  ]
  const arrayNamesButtonsForGender = [
    "female",
    "male",
    "genderless",
    "unknown"
  ]

  return (
    <StyledOptions>
      <TitleOptions enterTheme={enterTheme}>Filters</TitleOptions>
      <Button onClick={clearFilters} border={"none"} disableHover={true}>Clear Filters</Button>

      <Accordion isOpen={openAccordion === "Status"} setIsOpen={() => toggleAccordion("Status")} title={"Status"}>
        <FlexWrapper justify={"space-between"} wrap={"wrap"} gap={"10px"}>
          {arrayNamesButtonsForStatus.map((item, index) => (
            <Button
              key={item}
              isClicked={filters.status === item.toLowerCase()}
              onClick={() => handleClickButtonStatus("status", item.toLowerCase(), item)}
            >
              {item}
            </Button>
          ))}
        </FlexWrapper>
      </Accordion>

      <Accordion isOpen={openAccordion === "Species"} setIsOpen={() => toggleAccordion("Species")} title={"Species"}>
        <FlexWrapper justify={"space-between"} wrap={"wrap"} gap={"10px"}>
          {arrayNamesButtonsForSpecies.map((item, index) => (
            <Button
              key={item}
              isClicked={filters.species === item.toLowerCase()}
              onClick={() => handleClickButtonStatus("species", item.toLowerCase(), item)}
            >
              {item}
            </Button>
          ))}
        </FlexWrapper>
      </Accordion>

      <Accordion isOpen={openAccordion === "Gender"} setIsOpen={() => toggleAccordion("Gender")} title={"Gender"}>
        <FlexWrapper justify={"space-between"} wrap={"wrap"} gap={"10px"}>
          {arrayNamesButtonsForGender.map((item, index) => (
            <Button
              key={item}
              isClicked={filters.gender === item.toLowerCase()}
              onClick={() => handleClickButtonStatus("gender", item.toLowerCase(), item)}
            >
              {item}
            </Button>
          ))}
        </FlexWrapper>
      </Accordion>

    </StyledOptions>
  );
};

const StyledOptions = styled.div`
    min-width: 300px;
`