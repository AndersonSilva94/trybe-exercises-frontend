import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Minha homepage</h1>
        <Link to="/about"> About </Link>
      </div>
    );
  }
}

export default Home;