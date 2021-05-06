import React from 'react';

class EstadoFavorito extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    let error = undefined;
    if(value.length > 120) error = "Texto muito grande!";
    
    return (
      <label>
        Diga qual é seu Estado favorito do Brasil ou do React, você que sabe!
        <textarea name="estadoFavorito" value={ value } onChange={ handleChange } />
        <span>{error ? error : ''}</span>
      </label>
    )
  }
}

export default EstadoFavorito;
