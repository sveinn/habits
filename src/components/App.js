import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header.js';
import '../css/App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <p className="App-intro">

        </p>
      </div>
    );
  }
}

export default App;
