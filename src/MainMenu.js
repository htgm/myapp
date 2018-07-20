import React, { Component } from 'react';
import './MainMenu.css';
import { ToggleButton } from './controls';

export default class MainMenu extends Component {
  render() {
    return (
      <div className="MainMenu">
        <button className="button"><i className="material-icons">menu</i></button>
        <ToggleButton className="button"><i className="material-icons">live_help</i></ToggleButton>
      </div>
    );
  }
}
