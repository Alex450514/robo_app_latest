// import { Component } from 'react';
import { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import CardList from './components/monster-cards/card-list.component';
import SearchBar from './components/search-bar/search-bar.component';

//Functional component
const App = () => {

  const [searchField, setSearchField] = useState("", );
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFiltereMonsters] = useState([monsters]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users))
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    });

    setFiltereMonsters(newFilteredMonsters)
  }, [monsters, searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString)  
  }

  return (
    <div className="App">
    <h1 className='app-title'>Monsters Rolodex</h1>
    <SearchBar onChangeHandler={onSearchChange} currentPlaceholder={"Search monsters"} currentClassName={"monsters-search-box"} />
    <CardList monsters={filteredMonsters} />
    </div>
  )
}

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     }
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) => this.setState(() => {
//       return { monsters: users }
//     },
//     ))
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();

//     this.setState(() => {
//         return {searchField}
//     })
//   }

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField)
//     });

//     return (
//       <div className="App">
//       <h1 className='app-title'>Monsters Rolodex</h1>
//       <SearchBar onChangeHandler={onSearchChange} currentPlaceholder={"Search monsters"} currentClassName={"monsters-search-box"} />
//       <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
