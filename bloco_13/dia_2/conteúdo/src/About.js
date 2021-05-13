import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <div>
        <span>Se meu navio de React é o de Teseu e eu refatorei todos os seus componentes, ele ainda é meu navio?</span>
        <p>
          <Link to="/"> Voltar à home </Link>
        </p>
      </div>
    );
  }
}

export default About;