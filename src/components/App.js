import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BottomNavigationBar from './BottomNavigationBar';
import Header from './Header';
import MainArea from './MainArea';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className='App'>
          <MainArea/>
          <BottomNavigationBar/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
