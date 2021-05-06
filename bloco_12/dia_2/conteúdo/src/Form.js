import React from 'react';
import EstadoFavorito from './EstadoFavorito';
import Email from './Email';
import Nome from './Nome';
import Idade from './Idade';
import Comparecer from './Comparecer';
import PalavraChave from './PalavraChave';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();

    this.state = {
      estadoFavorito: '',
      nome: '',
      email: '',
      idade: 0,
      vaiComparecer: false,
      palavraChaveFavorita: ''
    }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({ [name]: value })
    /* console.log(event.target.value) */
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(
      `Selected file - ${this.fileInput.current.files[0].name}`
    );
  }

  render() {
    return (
      <div>
        <h1>Estados e React: ferramenta incrível ou reagindo a regionalismos?</h1>
        <form className="form" onSubmit={ this.handleSubmit }>
          <EstadoFavorito value={ this.state.estadoFavorito } handleChange={ this.handleChange } />
          <Email value={ this.state.email } handleChange={ this.handleChange} />
          <Nome value={ this.state.nome } handleChange={ this.handleChange } />
          <Idade value={ this.state.idade } handleChange={ this.handleChange } />
          <Comparecer value={ this.state.vaiComparecer } handleChange={ this.handleChange } />
          <PalavraChave value={ this.state.palavraChaveFavorita } handleChange={ this.handleChange } />

          <label>
            Envie um ou mais arquivos
            <input type="file" ref={this.fileInput} />
          </label>

          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
};

export default Form;