import React from 'react';
// import logo from './logo.svg';
import './App.css';

// Consulta ao código de Maurício Viegas - Turma 10 - Tribo A
class App extends React.Component {
  constructor() {
    super();

    this.fecthApi = this.fecthApi.bind(this);
    this.setName = this.setName.bind(this);
    this.saveDog = this.saveDog.bind(this);
    this.localStorageItens = this.localStorageItens.bind(this);
    // this.buttonRenderDog = this.buttonRenderDog.bind(this);

    this.state = {
      dogImage: '',
      loading: true,
      name: '',
      // isTerrier: false,
    };
  }

  componentDidMount() {
    this.localStorageItens();
  }

  shouldComponentUpdate(_, nextState) {
    // const { dogImage, isTerrier } = this.state;
    if (nextState.dogImage.includes('terrier')) return false;
    return true;
    // this.setState({ isTerrier: true })
  }

  setName(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  async fecthApi(event) {
    event.preventDefault();
    this.setState(
      { loading: true },
      async () => {
        const dogApi = await fetch('https://dog.ceo/api/breeds/image/random');
        const responseApi = await dogApi.json();
        const { message } = responseApi;
        const dogBreed = message.split('/')[4];
        alert(dogBreed);
        this.setState({
          loading: false,
          dogImage: message,
        });
      },
    );
  }

  saveDog(event) {
    event.preventDefault();
    const { dogImage, name } = this.state;
    localStorage.setItem('Cachorro', JSON.stringify([dogImage, name]));
  }

  localStorageItens() {
    const getItem = localStorage.getItem('Cachorro');
    const convertItem = JSON.parse(getItem);
    this.setState({
      dogImage: convertItem[0],
      name: convertItem[1],
      loading: false,
    });
  }

  /* buttonRenderDog() {
    return (
    );
  } */

  /* componentDidUpdate() {
  } */

  render() {
    const { dogImage, loading, name } = this.state;
    const loadingSpan = (<span> Loading... </span>);
    return (
      <div className="App">
        <div>
          { loading ? loadingSpan : <img src={ dogImage } alt="dog" /> }
        </div>
        <button type="button" onClick={ this.fecthApi }>
          Veja outro doguinho :D
        </button>
        <div>
          <input type="text" name="name" value={ name } onChange={ this.setName } />
        </div>
        <button type="button" onClick={ this.saveDog }>
          Salvar
        </button>
      </div>
    );
  }
}

export default App;
