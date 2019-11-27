import React from "react";
import {Card} from '../card/card.component';
import "./cardlist.styles.css";

export const CardList = props => {
  return (
    <div className="cardlist">

      {
        props.planets
        ? props.planets.map(planet => (<Card key={planet.orbital_period} planet={planet} swapi={'planet'}/>))
        : props.personas.map(persona => (<Card key={persona.height} persona={persona} swapi={'persona'}/>))
      }
    </div>
  );
};
