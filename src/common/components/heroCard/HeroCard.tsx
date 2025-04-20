// @flow
import * as React from "react";
import { useParams } from "react-router-dom";
import { useGetSingleCharactersQuery } from "../../../layout/characters/charactersApi";
import {Status} from "../status/Status";

type Props = {};

 const HeroCard = (props: Props) => {
  const params = useParams();
  const characterId = Number(params.id);


  const { data: singleCharacter} = useGetSingleCharactersQuery(characterId);
  if (!singleCharacter) {
    return <div>Loading...</div>;
  }


  if (!singleCharacter) {
    return <div>Character not found</div>;
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" , alignItems: "center", height: "100vh" }}>
      <div>
        <h3>{singleCharacter.name}</h3>
        <img src={singleCharacter.image} alt={singleCharacter.name} />
        <Status status={singleCharacter.status}/>
        <p>Gender: {singleCharacter.gender}</p>
        <p>Location: {singleCharacter.location.name}</p>
        <p>Origin: {singleCharacter.origin.name}</p>
        <p>Species: {singleCharacter.species}</p>
      </div>
    </div>
  );
};


 export default HeroCard;