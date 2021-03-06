import * as React from 'react';
import { GlobalEnum } from '../enums';
import '../index.css';

const LOGO = require('../logo.svg');

export const Header = () => {
  return (
    <header className="App-header">
      <img src={LOGO} className="App-logo" alt="logo" />
      <h1 className="App-title">{GlobalEnum.Title}</h1>
    </header>
  )
}