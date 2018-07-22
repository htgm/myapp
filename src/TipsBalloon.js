import React, { Component } from 'react';
import './TipsBalloon.css';

export default class TipsBalloon extends Component {
  render() {
    const show = this.state && this.state.show ? " show" : "";
    return (
      <div className={"TipsBalloon" + show} onClick={this.props.onClick}>
        <h2>head</h2>
        {(this.state && this.state.tips) || "nothing to show"}
      </div>
    );
  }
}
