import React, { Component } from 'react';
import './MainMenu.css';
import { ToggleButton } from './controls';
import TipsBallon from './TipsBalloon';

export default class MainMenu extends Component {
  constructor(props) {
    super(props);

    this.onToggleTips = this.onToggleTips.bind(this);
  }

  onToggleTips(e) {
    this.tipsBalloon.setState({ show: e.target.checked });
  }

  render() {
    return (
      <div>
        <div className="MainMenu">
          <button className="button"><i className="material-icons">menu</i></button>
          <ToggleButton className="button" onChange={this.onToggleTips}><i className="material-icons">live_help</i></ToggleButton>
        </div>
        <TipsBallon ref={node => this.tipsBalloon = node}/>
      </div>
    );
  }
}
