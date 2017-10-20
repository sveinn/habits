import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import Habit from './Habit'
import NewHabitForm from './NewHabitForm'
import '../css/MainArea.css';

class MainArea extends React.Component {
  render() {
    return (
       <div className='MainArea'>
         {Object
           .keys(this.props.habits)
           .map(key => <Habit key={key} index={key} details={this.props.habits[key]}/>)
         }
         <NewHabitForm addHabit={this.props.addHabit}/>
       </div>
    )
  }
};

MainArea.propTypes = {
  addHabit: PropTypes.func.isRequired,
  habits: PropTypes.object.isRequired
};

export default MainArea;
