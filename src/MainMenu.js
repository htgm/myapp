import React, { Component } from 'react';
import './MainMenu.css';
import { ToggleButton } from './controls';
import TipsBalloon from './TipsBalloon';
import App from './App';

export default class MainMenu extends Component {

  onToggleTips = e => {
    this.tipsBalloon.setState({ show: e.target.checked });
  };

  onClickTips = e => {
    console.log('click tips');
    this.tipsBalloon.setState({ tips: App.tipsQueue.pop() })
  };

  render() {
    const right = { float: "right" };
    return (
      <div>
        <div className="MainMenu">
          <button className="button"><i className="material-icons">menu</i></button>
          <ToggleButton className="button" style={right} onChange={this.onToggleTips}><i className="material-icons">live_help</i></ToggleButton>
        </div>
        <TipsBalloon ref={node => this.tipsBalloon = node} onClick={this.onClickTips}/>
      </div>
    );
  }

}
