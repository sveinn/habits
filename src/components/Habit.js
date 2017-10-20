import React from 'react';
import PropTypes from 'prop-types';
import '../css/Habit.css'

class Habit extends React.Component {
  render () {
    return (
        <div className='Habit'>
          <p className='Habit--name'>{this.props.details.name}</p>
          <p className='Habit--category'>{this.props.details.category}</p>
          <p className='Habit--description'>{this.props.details.description}</p>
        </div>
    )
  }
}

Habit.propTypes = {
  details: PropTypes.object.isRequired
};

export default Habit;
