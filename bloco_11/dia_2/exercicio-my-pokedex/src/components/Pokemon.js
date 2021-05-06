import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { pokes } = this.props;
    const { name, type, averageWeight, image } = pokes
    return (
    <div className="poke-item">
      <div className="poke-infos">  
        <h3>{name}</h3>
        <p><strong>Tipo:</strong> {type}</p>
        <p><strong>Peso:</strong> {averageWeight.value}{averageWeight.measurementUnit}</p>
      </div>
      <img src={image} alt="Pokemon"/>
    </div>
    )
  }
}

Pokemon.propTypes = { 
  pokes: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired
    }),
    image: PropTypes.string.isRequired
  })
}

export default Pokemon;