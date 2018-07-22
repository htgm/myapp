import React, { Component } from 'react';
import './MainMenu.css';
import { ToggleButton } from './controls';

export default class MainMenu extends Component {

  onToggleTips = e => {
    this.tipsBalloon.setState({ show: e.target.checked });
  };

  render() {
    const right = { float: "right" };
    return (
      <div>
        <div className="MainMenu">
          <button className="button"><i className="material-icons">menu</i></button>
          <ToggleButton className="button" style={right} onChange={this.onToggleTips}><i className="material-icons">live_help</i></ToggleButton>
        </div>
        <TipsBallon ref={node => this.tipsBalloon = node}/>
      </div>
    );
  }

}
