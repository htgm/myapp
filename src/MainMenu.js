import React, { Component } from 'react';
import './MainMenu.css';
import { ToggleButton } from './controls';

export default class MainMenu extends Component {
<<<<<<< HEAD
=======

  onToggleTips = e => {
    this.tipsBalloon.setState({ show: e.target.checked });
  };

>>>>>>> 1d1e9d6... dev
  render() {
    const right = { float: "right" };
    return (
<<<<<<< HEAD
      <div className="MainMenu">
        <button className="button"><i className="material-icons">menu</i></button>
        <ToggleButton className="button"><i className="material-icons">live_help</i></ToggleButton>
=======
      <div>
        <div className="MainMenu">
          <button className="button"><i className="material-icons">menu</i></button>
          <ToggleButton className="button" style={right} onChange={this.onToggleTips}><i className="material-icons">live_help</i></ToggleButton>
        </div>
        <TipsBallon ref={node => this.tipsBalloon = node}/>
>>>>>>> 1d1e9d6... dev
      </div>
    );
  }

}
