import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation'

class BottomNavigationBar extends Component {
  state = {
    selectedIndex: 0
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    const doneIcon = <FontIcon className="material-icons">done all</FontIcon>;
    const remainingIcon = <FontIcon className="material-icons">view list</FontIcon>;

    return (
      <BottomNavigation selectedIndex={this.state.selectedIndex}>
        <BottomNavigationItem
          label='Done'
          icon={doneIcon}
          onClick={() => this.select(0)}
        />
        <BottomNavigationItem
          label='Remaining'
          icon={remainingIcon}
          onClick={() => this.select(1)}
        />
      </BottomNavigation>
    )
  }
}

export default BottomNavigationBar;
