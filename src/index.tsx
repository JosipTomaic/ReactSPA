import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Routing } from 'modules';
import './index.css';
import { globalEnum } from './globalEnum';

const LOGO = require('./logo.svg');

ReactDOM.render(
  <div className="App">
    <header className="App-header">
      <img src={LOGO} className="App-logo" alt="logo" />
      <h1 className="App-title">{globalEnum.title}</h1>
    </header>
    <Routing />
  </div>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
