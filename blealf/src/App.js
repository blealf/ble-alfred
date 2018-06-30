import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/style.css'
import './assets/main.js'
import Main from './assets/mainfile.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
