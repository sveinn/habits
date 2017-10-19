import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../css/Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">.habits.</h1>
        <p className='App-subtitle'>consistency is the key to excellence</p>
      </header>
    )
  }
}

export default Header;
