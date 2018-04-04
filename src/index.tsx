import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Routing } from 'modules';
import './index.css';
import { Header } from './components';

ReactDOM.render(
  <div className="App">
    <Header />
    <Routing />
  </div>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
