// import logo from './logo.svg';
import React, { Component } from 'react';
import DadJoke from './DadJoke';

class App extends Component {
 /*  constructor() {
    super();

    this.state = {
      characters: [], // conteúdo course
    }
  }
 */
 /*  fecthCharacters = async () => { //conteúdo course
    const url = await fetch('https://rickandmortyapi.com/api/character');
    const response = await url.json();
    const characteresArray = await response.results
    this.setState({
      characters: characteresArray,
    })
  } */

  /* componentDidMount() {
    this.fecthCharacters(); //conteúdo course
  } */

  render() {
    // const { characters } = this.state; conteúdo course
    return (
      <div className="App">
        <DadJoke />
        {/* <h1>Ricky and Morty Characters:</h1>
        <div className="body">
          {characters.map(({ name, image }) => {
            return (
              <div className="container" key={ name }>
                <h3>{name}</h3>
                <img src={image} alt={name} />
              </div>
            )
          })}
        </div> */} {/* conteúdo course */}
      </div>
    );
  }
}

export default App;
