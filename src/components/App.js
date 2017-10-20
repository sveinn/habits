import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BottomNavigationBar from './BottomNavigationBar';
import Header from './Header';
import MainArea from './MainArea';
import '../css/App.css';

class App extends Component {
  constructor(){
    super();

    this.addHabit = this.addHabit.bind(this);

    this.state = {
      habits: {}
    };
  }

  addHabit(habit){
    let habits = {...this.state.habits};
    const timestamp = Date.now();
    habits[`habit-${timestamp}`] = habit;
    this.setState({ habits });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className='App'>
          <MainArea addHabit={this.addHabit} habits={this.state.habits}/>
          <BottomNavigationBar/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
