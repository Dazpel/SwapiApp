import React from "react";
import "./App.css";
import { CardList } from "./components/cardlist/cardlist.component";
import { Card } from "./components/card/card.component";
import { SearchBox } from "./components/searchbox/searchbox.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = (event) => {
    this.setState({searchField: event.target.value})
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Roblox</h1>
        <SearchBox 
        placeholder='Search Monsters'
        handleChange={this.handleChange} />
        <CardList 
        monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
