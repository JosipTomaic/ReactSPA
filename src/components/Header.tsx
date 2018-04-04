import * as React from 'react';
import { globalEnum } from '../enums';

const LOGO = require('../logo.svg');

export const Header = () => {
    return (<header className="App-header">
      <img src={LOGO} className="App-logo" alt="logo" />
      <h1 className="App-title">{globalEnum.title}</h1>
    </header>)
}