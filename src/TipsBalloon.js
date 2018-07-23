import React, { Component } from 'react';
import './TipsBalloon.css';

export default class TipsBalloon extends Component {
  state = {};
  render() {
    const show = this.state.show ? " show" : "";
    return (
      <div className={"TipsBalloon" + show} onClick={this.props.onClick}>
        {this.state.tips || "nothing to show"}
      </div>
    );
  }
}
