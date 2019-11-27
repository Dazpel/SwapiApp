import React from 'react';
import { CardList } from "../cardlist/cardlist.component";
import { SearchBox } from "../searchbox/searchbox.component";
import './base.css';

class Personas extends React.Component{

    constructor() {
        super();
    
        this.state = {
          personas: [],
          searchField: ""
        };
      }


      componentDidMount() {
        fetch("https://swapi.co/api/people")
          .then(response => response.json())
          .then(users => this.setState({ personas: users.results }));
      }

      handleChange = event => {
        this.setState({ searchField: event.target.value });
      };

    
      render() {
        const { personas, searchField } = this.state;
        const filteredPersonas = personas.filter(persona =>
          persona.name.toLowerCase().includes(searchField.toLowerCase())
        );
    
        return (
          <div className="base">
            <h1>People</h1>
            <SearchBox 
            placeholder='Search Personas'
            handleChange={this.handleChange} />
            <CardList 
            personas={filteredPersonas} />
          </div>
        );
      }
}


export default Personas;