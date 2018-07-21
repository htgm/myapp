import React, { Component } from 'react';
import './TipsBalloon.css';

export default class TipsBallon extends Component {
  render() {
    const show = this.state && this.state.show ? " show" : "";
    return (
      <div className={"TipsBalloon" + show}>
        <h2>head</h2>
        QWERTY
      </div>
    );
  }
}
