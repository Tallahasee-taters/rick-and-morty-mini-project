import logo from './logo.svg';
import './App.css';
import characters from './data/characters';


function App() {
  // console.log(characters)
  return (
    <div className="App">
      <SearchForm /> 
      <CharactersList />
    </div>
  );
}

export default App;
