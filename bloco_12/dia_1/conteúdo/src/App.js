// import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.handleClick1 = this.handleClick1.bind(this);
    //this.changeColor = this.changeColor.bind(this);

    this.state = {
      contagemDeCliques: 0,
      cor: ''
    }
  }

  handleClick1() {
    this.setState((oldState) => ({
      contagemDeCliques: oldState.contagemDeCliques + 1,
      cor: (oldState.contagemDeCliques + 1) % 2 === 0 ? 'green' : ''
    }))
    console.log(this.state)
  
  }
/*   {console.log(this.handleClick1)} */

  render() {
    return (
      <div className="App">
        <div style={{ background: this.state.cor }} className="div-count">{ this.state.contagemDeCliques }</div>
        <button onClick={ this.handleClick1 }>Click 1</button>
        <button onClick={ this.handleClick1 }>Click 2</button>
        <button onClick={ this.handleClick1 }>Click 3</button>
      </div>
    );
  }
}

export default App;
