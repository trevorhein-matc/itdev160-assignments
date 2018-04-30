import React, { PropTypes } from 'react';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Quotes Test App</h1>
      <nav>
        <Link to="/">Home</Link>
        {' | '}
        <Link to="/about">About</Link>
      </nav>
    </header>
  )
};

export default Header;
