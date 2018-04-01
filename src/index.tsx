import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Routing } from 'modules';
import './index.css';

const logo = require('./logo.svg');
const title = 'Welcome to MusicPassion';

ReactDOM.render(
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">{title}</h1>
    </header>
    <Routing />
  </div>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
