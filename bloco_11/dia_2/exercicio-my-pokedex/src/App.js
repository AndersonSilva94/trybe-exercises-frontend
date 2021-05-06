// import logo from './logo.svg';
import './App.css';
import pokeData from './data';
import Pokedex from './components/Pokedex';

function App() {
  return (
    <section className="pokedex">
      <Pokedex pokemonList={pokeData}/>
    </section>
  );
}

export default App;
