import React from 'react';
import { CardList } from "../cardlist/cardlist.component";
import { SearchBox } from "../searchbox/searchbox.component";
import './base.css';

class Planets extends React.Component{
    constructor() {
        super();
    
        this.state = {
          planets: [],
          searchField: ""
        };
      }


      componentDidMount() {
        fetch("https://swapi.co/api/planets")
          .then(response => response.json())
          .then(users => this.setState({ planets: users.results }));
      }

      handleChange = event => {
        this.setState({ searchField: event.target.value });
      };

      render() {
        const { planets, searchField } = this.state;
        const filteredPlanets = planets.filter(planet =>
          planet.name.toLowerCase().includes(searchField.toLowerCase())
        );
    
        return (
          <div className="base">
            <h1>Planets</h1>
            <SearchBox 
            placeholder='Search Planets'
            handleChange={this.handleChange} />
            <CardList 
            planets={filteredPlanets} />
          </div>
        );
      }

}

export default Planets;