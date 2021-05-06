import React from 'react';
import data from './data'

class Button extends React.Component {
  render() {
    const typePokemon = ['All', ...new Set(data.map((element) => element.type))]
    return(
      <div>
      {typePokemon.map((element) => <button className="button-type" onClick={ this.props.onClick } >{element}</button>)}
      <br/>
      <button onClick={ this.props.pokePrevious }>Previous</button>
      <button onClick={ this.props.pokeNext }>Next</button>
      </div>
    );
  }
}

export default Button;