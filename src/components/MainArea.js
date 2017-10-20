import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import NewHabitForm from './NewHabitForm'
import '../css/MainArea.css';

class MainArea extends React.Component {
  render() {
    return (
       <div className='MainArea'>
         <NewHabitForm addHabit={this.props.addHabit}/>
       </div>
    )
  }
};

MainArea.propTypes = {
  addHabit: PropTypes.func.isRequired
}

export default MainArea;
