import React from 'react';

class Nome extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return(
      <label>
        Nome
        <input name="nome" type="text" value={ value } onChange={ handleChange } />
      </label>
    );
  }
}

export default Nome;