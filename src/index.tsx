import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Routing } from 'modules';
import './index.css';

const LOGO = require('./logo.svg');
const TITLE = 'Welcome to MusicPassion';

ReactDOM.render(
  <div className="App">
    <header className="App-header">
      <img src={LOGO} className="App-logo" alt="logo" />
      <h1 className="App-title">{TITLE}</h1>
    </header>
    <Routing />
  </div>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
