import React from "react";
import "./card.styles.css";

export const Card = props => {
  console.log(props);
  console.log(props.swapi);

  if (props.swapi === 'planet') {
    return (
      <div className="card-container">
        <img
          alt="monster"
          src={`https://robohash.org/${props.planet.orbital_period}?set=set2&size=180x180`}
        />
        <h2> {props.planet.name} </h2>
        <p>Terrain: {props.planet.terrain}</p>
        <p>Population: {props.planet.population}</p>
      </div>
    );
  } else {
    return (
        <div className="card-container">
          <img
            alt="monster"
            src={`https://robohash.org/${props.persona.height}?set=set2&size=180x180`}
          />
          <h2> {props.persona.name} </h2>
          <p>Skin Color: {props.persona.skin_color}</p>
          <p>Birthday: {props.persona.birth_year}</p>
        </div>
      );
  }
};
