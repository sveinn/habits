import React from 'react'
import PropTypes from 'prop-types';
import '../css/NewHabitForm.css'

class NewHabitForm extends React.Component {
  constructor(){
    super();
    this.createHabit = this.createHabit.bind(this);
  }

  createHabit(e){
    e.preventDefault();

    const habit = {
      name: this.habitName.value,
      category: this.habitCategory.value,
      description: this.habitDescription.value
    };
    console.log("habit:"+habit);
    this.props.addHabit(habit);
  }

  render () {
    return(
      <form className='NewHabitForm' onSubmit={(e) => this.createHabit(e)}>
        <input
          className='NewHabitForm-field'
          type='text'
          placeholder='Name'
          ref={(input)=> this.habitName = input}
        />

        <input
          className='NewHabitForm-field'
          type='text'
          placeholder='Category'
          ref={(input)=> this.habitCategory = input}
        />

        <input
          className='NewHabitForm-field NewHabitForm-field__description'
          type='textarea'
          placeholder='Description'
          rows={5}
          ref={(input)=> this.habitDescription = input}
        />

        <input
          className='NewHabitForm-field__description NewHabitForm-field__button'
          type='submit'
        />
      </form>
    )
  }
}

NewHabitForm.propTypes = {
  addHabit: PropTypes.func.isRequired
};

export default NewHabitForm;
