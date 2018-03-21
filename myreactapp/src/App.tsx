import * as React from 'react';
import './App.css';
import LoyaltyPoints from './loyalty/loyalty_points/LoyaltyPoints.jsx';
import Discounts from './discounts/Discounts.jsx';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to MusicPassion</h1>
        </header>
        <LoyaltyPoints />
        <h2>Available discounts</h2>
        <Discounts />
      </div>
    );
  }
}

export default App;
