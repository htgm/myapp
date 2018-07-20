import React, { Component } from 'react';
import './MainMenu.css';
import { ToggleButton } from './controls';
import TipsBallon from './TipsBalloon';

export default class MainMenu extends Component {
  render() {
    return (
      <div>
        <div className="MainMenu">
          <button className="button"><i className="material-icons">menu</i></button>
          <ToggleButton className="button" onChange={toggleTips}><i className="material-icons">live_help</i></ToggleButton>
        </div>
        <TipsBallon id="TipsBalloon"/>
      </div>
    );
  }
}

function toggleTips(checked) {
}
