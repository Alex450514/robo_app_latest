import { useState, useEffect, ChangeEvent } from 'react';
import './App.css';
import CardList from './components/monster-cards/card-list.component';
import SearchBar from './components/search-bar/search-bar.component';
import { getData } from './utils/data.utils';

export type Monster = {
  id: string;
  name: string;
  email: string;
}
//Functional component
const App = () => {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFiltereMonsters] = useState(monsters);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users')
      setMonsters(users)
    }
    fetchUsers();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    });

    setFiltereMonsters(newFilteredMonsters)
  }, [monsters, searchField])

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
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

export default App;
