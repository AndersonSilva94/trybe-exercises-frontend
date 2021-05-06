import React from 'react';

class Comparecer extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return(
      <label>
        Vai comparecer à conferência?
        <input name="vaiComparecer" 
        type="checkbox" 
        value={ value } 
        onChange={ handleChange }/>
      </label>
    );
  }
}

export default Comparecer;