import React from 'react';
import Pokemon from './Pokemon';
import Button from './Button'

class Pokedex extends React.Component {
    constructor(props) {
        super(props);
    
        this.filterPoke = this.filterPoke.bind(this);
        // this.pokeNext = this.pokeNext.bind(this);
        //this.pokePrevious = this.pokePrevious.bind(this);
    
        this.state = {
            index: 0,
            arrayPoke: this.props.pokemons
        }
      }

      /* componentDidMount() {
          this.setState({
              arrayPoke: this.props.pokemons
          })
      } */
    
      filterPoke(event) {
        const { pokemons } = this.props; 
        this.setState({
            arrayPoke: pokemons.filter((element) => {
                return event.target.innerText === 'All' ? true : element.type === event.target.innerText}),
            index: 0
        })
        /* this.setState({
            index: 0
        }) */
      }

      pokePrevious = () => {
        this.setState((oldState) => {
            return { index: oldState.index === 0 ? this.state.arrayPoke.length - 1 : oldState.index - 1 }
        })
      }

      pokeNext = () => {
        this.setState((oldState) => {
            return { index: oldState.index === this.state.arrayPoke.length - 1 ? 0 : oldState.index + 1 }
        })
      }

    render() {
        const { arrayPoke, index } = this.state;
        return (
            <div className="pokedex">
                {/* {this.state.arrayPoke.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)} */}
                <p>{ index + 1 } / { this.state.arrayPoke.length }</p>
                <Pokemon key={arrayPoke[index].id} pokemon={arrayPoke[index]} />
                <Button onClick={this.filterPoke} pokeNext={ this.pokeNext } pokePrevious={ this.pokePrevious } />
            </div>
        );
    }
}

export default Pokedex;