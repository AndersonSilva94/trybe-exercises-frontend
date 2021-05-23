  // App.js
  import React, { Component } from 'react';
  import './App.css';
  import ValidEmail from './ValidateEmail'
  
  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        saveEmail: '',
        msg: false,
      };
    }
  
    changeEmail(value) {
      this.setState({ email: value });
    }
  
    changeSaveEmail(value) {
      this.setState({ saveEmail: value, email: '', msg: true });
    }
  
    render() {
      const { email, saveEmail, msg } = this.state;
      return (
        <div className="App">
          <label htmlFor="id-email">
            Email
          </label>
          <input
            id="id-email"
            value={email}
            type="email"
            onChange={(e) => this.changeEmail(e.target.value)}
          />
          <input
            id="btn-enviar"
            type="button"
            data-testid="id-send"
            value="Enviar"
            onClick={() => this.changeSaveEmail(email)}
          />
          <input id="btn-id" type="button" value="Voltar" />
          {msg && <ValidEmail email={saveEmail} />}
        </div>
      );
    }
  }
  
  export default App;