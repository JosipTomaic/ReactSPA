import * as React from 'react';
import { Routing } from 'modules';
import './App.css';

const logo = require('./logo.svg');
const title = 'Welcome to MusicPassion';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{title}</h1>
        </header>
        <Routing />
      </div>
    );
  }
}

export default App;
