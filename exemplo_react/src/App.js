import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let user = {
  name: 'Luiz'
}
function hello(user) {
  return "Olá " + user.name;
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{hello(user)}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
