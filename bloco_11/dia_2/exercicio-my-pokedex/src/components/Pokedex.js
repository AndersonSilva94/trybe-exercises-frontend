import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render () {
    const { pokemonList } = this.props;
    return(
      <>
        {pokemonList.map((poke) => (
          <Pokemon key={ poke.id } pokes={ poke } />))}
      </>
    )
  }
}

export default Pokedex;